// import React, { useEffect, useState } from 'react';

// interface User {
//   name: string;
//   email: string;
// }

// interface Upload {
//   id: string;
//   title: string;
//   url: string;
// }

// const ProfilePage: React.FC = () => {
//   const [user, setUser] = useState<User | null>(null);
//   const [uploads, setUploads] = useState<Upload[]>([]);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       // Call backend API to get user data
//       // const response = await fetch('/api/profile');
//       // const data = await response.json();
//       // setUser(data.user);
//       // setUploads(data.uploads);
//     };

//     fetchUserData();
//   }, []);

//   if (!user) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>{user.name}'s Profile</h1>
//       <p>Email: {user.email}</p>
//       <h2>Your Uploads</h2>
//       <div>
//         {uploads.map((upload) => (
//           <div key={upload.id}>
//             <h3>{upload.title}</h3>
//             <img src={upload.url} alt={upload.title} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;



import { useState } from 'react'
import { Pencil, Upload, Home, Smartphone, Users, X, ChevronDown } from 'lucide-react'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-white">
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="absolute right-0 top-0 h-full w-80 bg-white p-6">
            <button onClick={toggleMenu} className="absolute right-4 top-4">
              <X className="h-6 w-6 text-gray-700" />
            </button>
            <div className="mt-8 grid grid-cols-3 gap-8">
              <div>
                <h3 className="mb-4 flex items-center text-sm font-semibold">
                  <Home className="mr-2 h-5 w-5" /> Company
                </h3>
                <ul className="space-y-2 text-sm">
                  {['About', 'History', 'Join the team', 'Blog', 'Press', 'Contact us', 'Help Center'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-600 hover:text-gray-900">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <X className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="mb-4 flex items-center text-sm font-semibold">
                  <Smartphone className="mr-2 h-5 w-5" /> Product
                </h3>
                <ul className="space-y-2 text-sm">
                  {['Developers/API', 'Unsplash Dataset', 'Unsplash for iOS', 'Apps & Plugins', 'Unsplash Studio'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-600 hover:text-gray-900">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-4 flex items-center text-sm font-semibold">
                  <Users className="mr-2 h-5 w-5" /> Community
                </h3>
                <ul className="space-y-2 text-sm">
                  {['Become a Contributor', 'Topics', 'Collections', 'Trends', 'Unsplash Awards', 'Stats'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-600 hover:text-gray-900">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between border-t border-gray-200 pt-6 text-sm">
              <div className="space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  License
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Terms
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Security
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-gray-600">English</span>
                <ChevronDown className="h-4 w-4 text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      )}

      <main className="mx-auto max-w-5xl px-4 py-8">
        <div className="mb-8 text-center">
          <img
            src="https://loremflickr.com/400/400?random=5"
            alt="Profile Picture"
            className="mx-auto mb-4 h-32 w-32 rounded-full"
          />
          <div className="mb-2 flex items-center justify-center">
            <h1 className="mr-2 text-3xl font-bold">S Kumar</h1>
            <button className="flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-200">
              <Pencil className="mr-1 h-4 w-4" />
              Edit profile
            </button>
          </div>
          <p className="mb-2 text-gray-600">
            Download free, beautiful high-quality photos curated by S.
          </p>
          <div className="flex items-center justify-center">
            <span className="flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
              <Upload className="mr-1 h-4 w-4" />
              Not available for hire
            </span>
          </div>
        </div>

        {/* Navigation tabs for profile-specific content (Photos, Likes, Collections, Stats) */}
        <nav className="profile-tabs mb-8">
          <div className="flex border-b border-gray-200">
            <a href="#" className="tab-link active border-b-2 border-gray-900 px-4 py-2 text-sm font-medium text-gray-900">Photos 0</a>
            <a href="#" className="tab-link px-4 py-2 text-sm font-medium text-gray-500 hover:border-b-2 hover:border-gray-300 hover:text-gray-700">Likes 0</a>
            <a href="#" className="tab-link px-4 py-2 text-sm font-medium text-gray-500 hover:border-b-2 hover:border-gray-300 hover:text-gray-700">Collections 0</a>
            <a href="#" className="tab-link px-4 py-2 text-sm font-medium text-gray-500 hover:border-b-2 hover:border-gray-300 hover:text-gray-700">Stats</a>
          </div>
        </nav>

        <div className="rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
          <div className="mx-auto mb-4 h-12 w-12 text-gray-400">
            <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="mb-1 text-sm font-medium text-gray-900">No photos yet</h3>
          <p className="text-sm text-gray-500">Get started by uploading your first photo.</p>
        </div>
      </main>
    </div>
  )
}