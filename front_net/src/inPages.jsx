import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const inPage = () => {
  const { slug } = useParams();
  const [community, setCommunity] = useState(null);

  useEffect(() => {
    axios.get(`/api/community/${slug}`)
      .then(res => setCommunity(res.data))
      .catch(err => console.error(err));
  }, [slug]);

  if (!community) 
    return <p>Завантаження...</p>;

  return (
    <div className="text-white">
      <div className="relative h-64">
        <img src={community.bunnerUrl} alt={community.name} className="object-cover w-full h-full" />
        <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 p-4 rounded">
          <h1 className="text-2xl font-bold">{community.name}</h1>
          <p>{community.description}</p>
        </div>
      </div>

      
      <div className="flex gap-6 px-4 mt-4 border-b border-gray-700">
        <button>Головна</button>
        <button>Сюжет</button>
        <button>Залізо</button>
        <button>Інформація</button>
        <button>Спільнота</button>
      </div>

      {/* можливі динамічні вкладки, вдень дороблю*/}
      <div className="p-4">
        <h2 className="text-xl mb-2">Пости:</h2>
        {community.posts.map(post => (
          <div key={post.id} className="mb-4 bg-gray-800 p-3 rounded">
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default inPage;