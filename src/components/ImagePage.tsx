import SearchBarAll from "./ui/SearchBar";
import { Button } from "../components/ui/button";
import { useState } from 'react';

export default function ImagePage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-r from-blue-500 to-green-400">
      {/* Add margin below the search bar */}
      <SearchBarAll searchTerm={searchTerm} setSearchTerm={setSearchTerm} className='mb-8' /> 

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="relative overflow-hidden rounded-lg">
            <img
              alt={`Stock image ${i}`}
              className="h-[300px] w-full object-cover"
              src={`https://loremflickr.com/400/400?random=${i}`}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <div className="flex items-center justify-between">
                <div className="text-xs text-white ">Photographer Name</div>
                <Button size="sm" variant="secondary" className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                  Download
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
