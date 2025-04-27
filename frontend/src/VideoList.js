import React, { useEffect, useState } from 'react';

function VideoList() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('/api/videos')
      .then(response => response.json())
      .then(data => setVideos(data))
      .catch(error => console.error('Error fetching videos:', error));
  }, []);

  return (
    <div>
      <h2>Uploaded Videos</h2>
      {videos.length === 0 ? (
        <p>No videos uploaded yet.</p>
      ) : (
        <ul>
          {videos.map(video => (
            <li key={video.id}>
              <h3>{video.title}</h3>
              <p>{video.description}</p>
              {/* Agora usando o campo URL para o vídeo */}
              <video width="320" height="240" controls>
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default VideoList;
