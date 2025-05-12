import React, { useState } from 'react';

function UploadVideo( {handleVideoUpload}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file) {
      alert('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const responseData = await response.json
        alert('Video uploaded successfully!');
        setTitle('');
        setDescription('');
        setFile(null);

        if (file.name && handleVideoUpload) {
          handleVideoUpload(file.name)
        }

      } else {
        alert('Failed to upload video.');
      }
    } catch (error) {
      console.error('Error uploading video:', error);
      alert('Error uploading video.');
    }
  };

  return (
    <div>
      <h2>Upload Video</h2>
      <form onSubmit={handleUpload}>
        <input
          type="text"
          placeholder="Video Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        <textarea
          placeholder="Video Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <br />
        <input
          type="file"
          accept="video/*"
          onChange={(e) => setFile(e.target.files[0])}
          required
        />
        <br />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default UploadVideo;
