import React from 'react';
import { Link } from 'react-router-dom'; // Додаємо імпорт
import "./sidebar.css"; 
import './index.css';

const pagesData = [
  {
    id: 1,
    image: 'https://ik.imagekit.io/ufzr7vwbk/f084af6c2e4c7b6a0698b90d72c8d3a70986d54d.png?updatedAt=1750238289404',
    name: '@rockstar_games',
    followers: '98k',
    official: true,
    avatar:'https://ik.imagekit.io/ufzr7vwbk/channels4_profile.jpg?updatedAt=1750251355442',
    logo: 'https://ik.imagekit.io/ufzr7vwbk/For%20social%20net/Rectangle%20248.png?updatedAt=1751625614644'
  },
  {
    id: 2,
    image: 'https://ik.imagekit.io/ufzr7vwbk/cacd8bb6fb62fa4cc17046cbc689b4ee58b99c85.png?updatedAt=1750238287689',
    name: '@sitielent_eye',
    followers: '52',
    official: false,
    avatar: 'https://ik.imagekit.io/ufzr7vwbk/photo_2025-06-18_15-55-39.jpg?updatedAt=1750251355347',
    logo: 'https://ik.imagekit.io/ufzr7vwbk/For%20social%20net/Rectangle%20248%20(1).png?updatedAt=1751625615276'
  },
  {
    id: 3,
    image: 'https://mmos.com/wp-content/uploads/2015/11/minecraft-banner.jpg',
    name: '@mojang',
    followers: '1.2m',
    official: true,
    avatar: 'data:image/png;base64,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'
  },
];

const PageCard = ({ name, image, followers, official, avatar, logo }) => {
  const slug = name.replace('@', '');
  return (
    <Link to={`/page/${slug}`} style={{ textDecoration: 'none' }}>
      <div className="flex flex-col items-center gap-4 cursor-pointer hover:opacity-90 transition">
        <div
          className="relative rounded-xl shadow-md mb-5 overflow-hidden"
          style={{
            width: 1140,
            height: 350,
            boxSizing: 'border-box',
          }}
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover block"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          {/* Логотип гри */}
          {logo && (
            <img
              src={logo}
              alt="logo"
              style={{
                position: 'absolute',
                left: 40, // відступ зліва
                top: '50%',
                transform: 'translateY(-50%)',
                height: 90,
                width: 'auto',
                zIndex: 2,
                background: 'rgba(255,255,255,0.0)'
              }}
            />
          )}
          <div
            className="absolute bottom-0 left-0 w-full flex items-end justify-between px-8 py-6"
            style={{
              background: 'linear-gradient(0deg, rgba(0,0,0,0.65) 60%, rgba(0,0,0,0.0) 100%)',
            }}
          >
            <span className="text-white text-base raleway-font ">
              {official && '✅ Офіційна сторінка'}
            </span>
            <span className="text-white text-base font-semibold raleway-font ">
              Слідкують: {followers}
            </span>
            <span className="flex items-center gap-3 text-white text-lg font-bold raleway-font ">
              <img
                src={avatar}
                alt="avatar"
                className="w-10 h-10 rounded-full object-cover border-2 border-white"
                style={{ background: '#e0e0e0' }}
              />
              {name}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default function Pages() {
  return (
    <div style={{
      display: 'flex',
      minHeight: 'calc(100vh - 64px)',
      background: '#23272f'
    }}>
      <div className="max-w-3xl mx-auto p-4">
        {pagesData.map((page) => (
          <PageCard
            key={page.id}
            image={page.image}
            name={page.name}
            followers={page.followers}
            official={page.official}
            avatar={page.avatar}
            logo={page.logo}
          />
        ))}
      </div>
    </div>
  );
}