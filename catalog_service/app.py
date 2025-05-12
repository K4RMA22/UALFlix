from flask import Flask, request, jsonify
from db import get_db_connection
import os
import time

app = Flask(__name__)

VIDEO_FOLDER = '/videos'
os.makedirs(VIDEO_FOLDER, exist_ok=True)

@app.route('/upload', methods=['POST'])
def upload_video():
    title = request.form.get('title','')
    description = request.form.get('description','')
    file = request.files['file']

    if file and file.filename:
        timestamp = str(int(time.time()))
        safe_filename = timestamp + "_" + file.filename
        filepath = os.path.join(VIDEO_FOLDER, safe_filename)
        file.save(filepath)

        # Gerar a URL (caminho para acessar o vídeo depois)
        url = f"/videos/{safe_filename}"

        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute(
            "INSERT INTO videos (title, description, filename, url) VALUES (%s, %s, %s, %s)",
            (title, description, safe_filename, url)
        )
        conn.commit()
        cur.close()
        conn.close()

        return jsonify({"message": "Video uploaded successfully!",
                        "filename": safe_filename,
                        "url": url}), 200
    else:
        return jsonify({"error": "No file uploaded"}), 400

@app.route('/videos', methods=['GET'])
def list_videos():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("SELECT id, title, description, filename, url FROM videos")
    videos = cur.fetchall()
    cur.close()
    conn.close()

    videos_list = []
    for video in videos:
        video_data = {
            'id': video[0],
            'title': video[1],
            'description': video[2],
            'filename': video[3],
            'url': video[4]
        }
        videos_list.append(video_data)

    return jsonify(videos_list)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)
