import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-700 to-blue-700 text-white p-8">
      <h1 className="text-3xl font-bold mb-4">Free stock video footage</h1>
      <p className="text-center text-gray-200 mb-6">
      Discover the world's largest collection of stock footage. Find the perfect clips for your next project and start creating today.
      </p>

      <div className="flex items-center w-full max-w-md mb-4">
        {/* <select className="h-10 px-4 text-black bg-white rounded-l-md focus:outline-none">
          <option>All videos</option>
          <option>Popular videos</option>
          <option>Newest videos</option>
        </select> */}
        <input
          type="text"
          placeholder="Search Videos and Images"
          className="w-full h-10 px-4 text-black focus:outline-none rounded-l-md"
        />
        <button className="h-10 px-4 bg-white text-gray-700 rounded-r-md hover:bg-gray-300">
          🔍
        </button>
      </div>

      <div className="flex space-x-4">
        <a href="#" className="text-gray-200 hover:underline">Trending Videos</a>
        <a href="#" className="text-gray-200 hover:underline">Trending Images</a>
        {/* <a href="#" className="text-gray-200 hover:underline"></a> */}
      </div>
    </div>
  );
};

export default HeroSection;
