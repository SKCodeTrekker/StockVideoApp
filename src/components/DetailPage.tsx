import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface DetailItem {
  id: string;
  title: string;
  url: string;
  description: string;
}

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<DetailItem | null>(null);

  useEffect(() => {
    const fetchItem = async () => {
      // Call backend API to get item details
      // const response = await fetch(`/api/detail/${id}`);
      // const data = await response.json();
      // setItem(data);
    };

    fetchItem();
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.url} alt={item.title} />
      <p>{item.description}</p>
    </div>
  );
};

export default DetailPage;