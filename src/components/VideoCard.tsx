// VideoCard.tsx
import React from 'react';
import { Button } from "../components/ui/button";

interface VideoCardProps {
  title: string;
  thumbnail: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, thumbnail }) => (
  <div className="border rounded-lg overflow-hidden shadow-lg">
    {/* <div className="relative overflow-hidden rounded-l"> */}
    <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4 bg-slate-50 flex items-center justify-between">
      <h2 className="text-xs">{title}</h2>
      <Button size="sm" variant="secondary" className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Download
      </Button>
    </div>
    {/* </div> */}
  </div>
);

export default VideoCard;