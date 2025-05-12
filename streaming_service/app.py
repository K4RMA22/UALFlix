from flask import Flask, send_from_directory
import os

app = Flask(__name__)

VIDEO_FOLDER = '/videos'
os.makedirs(VIDEO_FOLDER, exist_ok=True)

@app.route('/stream/<filename>')
def stream_video(filename):
    return send_from_directory(VIDEO_FOLDER, filename)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8001, debug=True)
