import React, { useEffect, useState } from 'react';

interface User {
  name: string;
  email: string;
}

interface Upload {
  id: string;
  title: string;
  url: string;
}

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [uploads, setUploads] = useState<Upload[]>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      // Call backend API to get user data
      // const response = await fetch('/api/profile');
      // const data = await response.json();
      // setUser(data.user);
      // setUploads(data.uploads);
    };

    fetchUserData();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{user.name}'s Profile</h1>
      <p>Email: {user.email}</p>
      <h2>Your Uploads</h2>
      <div>
        {uploads.map((upload) => (
          <div key={upload.id}>
            <h3>{upload.title}</h3>
            <img src={upload.url} alt={upload.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;