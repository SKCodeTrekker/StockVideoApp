import React, { useState } from 'react';

const VideoCard = ({ title, thumbnail }) => (
  <div className="border rounded-lg overflow-hidden shadow-lg">
    <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-lg font-bold">{title}</h2>
    </div>
  </div>
);

const VideosPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const videos = [
    { title: 'Video 1', thumbnail: 'https://via.placeholder.com/150' },
    { title: 'Video 2', thumbnail: 'https://via.placeholder.com/150' },
    { title: 'Video 3', thumbnail: 'https://via.placeholder.com/150' },
    { title: 'Video 4', thumbnail: 'https://via.placeholder.com/150' },
    { title: 'Video 5', thumbnail: 'https://via.placeholder.com/150' },
    { title: 'Video 6', thumbnail: 'https://via.placeholder.com/150' },
    // Add more video objects here
  ];

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search videos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredVideos.map((video, index) => (
          <VideoCard key={index} title={video.title} thumbnail={video.thumbnail} />
        ))}
      </div>
    </div>
  );
};

export default VideosPage;