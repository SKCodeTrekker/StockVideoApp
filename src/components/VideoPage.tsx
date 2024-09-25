
import { useState } from 'react';
import SearchBar from '../components/ui/SearchBar';
import VideoCard from './VideoCard';

const VideosPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const videos = [
    { title: 'Video 1', thumbnail: 'https://loremflickr.com/400/400?random=${i}`' },
    { title: 'Video 2', thumbnail: 'https://loremflickr.com/400/400?random=${i}`' },
    { title: 'Video 3', thumbnail: 'https://loremflickr.com/400/400?random=${i}`' },
    { title: 'Video 4', thumbnail: 'https://loremflickr.com/400/400?random=${i}`' },
    { title: 'Video 5', thumbnail: 'https://loremflickr.com/400/400?random=${i}`' },
    { title: 'Video 6', thumbnail: 'https://loremflickr.com/400/400?random=${i}`' },
    // Add more video objects here
  ];

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 bg-gradient-to-r from-purple-700 to-blue-700">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} className='mb-8' />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredVideos.map((video, index) => (
          <VideoCard key={index} title={video.title} thumbnail={video.thumbnail} />
        ))}
      </div>
    </div>
  );
};

export default VideosPage;