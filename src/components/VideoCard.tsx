// VideoCard.tsx
import React from 'react';

interface VideoCardProps {
  title: string;
  thumbnail: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, thumbnail }) => (
  <div className="border rounded-lg overflow-hidden shadow-lg">
    <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-lg font-bold">{title}</h2>
    </div>
  </div>
);

export default VideoCard;