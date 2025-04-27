import React, { useState, useEffect } from "react";
import UploadVideo from "./UploadVideo";
import VideoList from "./VideoList";
import api from "./api";

function App() {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    try {
      const response = await api.get("/videos");
      setVideos(response.data);
    } catch (err) {
      console.error("Erro ao buscar vídeos:", err);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const checkVideoAvailability = (videoName) => {
    fetch(`/stream/${videoName}`)
      .then((res) => {
        if (res.ok) {
          console.log(`Vídeo ${videoName} encontrado.`);
          fetchVideos();
        } else {
          throw new Error("Not available yet");
        }
      })
      .catch(() => {
        console.log(`Vídeo ${videoName} ainda não disponível. Tentando novamente...`);
        setTimeout(() => checkVideoAvailability(videoName), 2000);
      });
  };

  return (
    <div className="App">
      <h1>UALFlix 🎬</h1>
      <UploadVideo handleVideoUpload={checkVideoAvailability} />
      <hr />
      <VideoList />
    </div>
  );
}

export default App;
