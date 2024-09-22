import React, { useState } from 'react';

const UploadPage: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (file) {
      formData.append('file', file);
    }

    // Call backend API to upload file
    // const response = await fetch('/api/upload', {
    //   method: 'POST',
    //   body: formData,
    // });
    // const data = await response.json();
    // console.log(data);
  };

  return (
    <div>
      <h1>Upload Image/Video</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="file"
        onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadPage;