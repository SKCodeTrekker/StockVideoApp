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
    <div className="p-4 bg-gradient-to-r from-purple-700 to-blue-700">
      <div className="flex items-center w-auto mb-4 ">
        <input
          type="text"
          placeholder="Search Videos"
          className="w-full h-10 px-4 text-black focus:outline-none rounded-l-md"
        />
        <button className="h-10 px-4 bg-white rounded-r-md hover:bg-sky-500">🔍
        </button>
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


<div className="flex items-center w-full max-w-md mb-4">
<input
  type="text"
  placeholder="Search Videos and Images"
  className="w-full h-10 px-4 text-black focus:outline-none rounded-l-md"
/>
<button className="h-10 px-4 bg-white text-gray-700 rounded-r-md hover:bg-gray-300">
  🔍
</button>
</div>