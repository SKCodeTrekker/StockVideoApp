import { Search } from "lucide-react"

import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="relative flex items-center">
          <Input 
            placeholder="Search photos and illustrations" 
            className="pr-20"
          />
          <Button 
            className="absolute right-0 rounded-l-none" 
            type="submit"
          >
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="relative overflow-hidden rounded-lg">
            <img
              alt={`Stock image ${i}`}
              className="h-[300px] w-full object-cover"
              src={`https://source.unsplash.com/random/400x300?sig=${i}`}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <div className="flex items-center justify-between">
                <div className="text-xs text-white">Photographer Name</div>
                <Button size="sm" variant="secondary">
                  Download
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}