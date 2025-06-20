import React from 'react';
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
  },
  {
    id: 2,
    image: 'https://ik.imagekit.io/ufzr7vwbk/cacd8bb6fb62fa4cc17046cbc689b4ee58b99c85.png?updatedAt=1750238287689',
    name: '@sitielent_eye',
    followers: '52',
    official: false,
    avatar: 'https://ik.imagekit.io/ufzr7vwbk/photo_2025-06-18_15-55-39.jpg?updatedAt=1750251355347'
  },
  
];

const PageCard = ({ name, image, followers, official, avatar }) => (

  <div className="flex flex-col items-center gap-4">
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
);

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
        />
      ))}
    </div>
  </div>  
  );
}