import React, { useEffect, useState } from 'react';
import { useParams, NavLink, Outlet } from 'react-router-dom';
import './index.css'; 

const GamePage = () => {
  const { slug } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const res = await fetch(`/api/games/${slug}`);
        const data = await res.json();
        setGame(data);
      } catch (err) {
        console.error('Помилка при завантаженні гри:', err);
      }
    };
    fetchGame();
  }, [slug]);

  if (!game) return 
  <div>Завантаження...</div>;

  return (
    <div className="raleway-font">
      <div
        className="relative w-full h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${game.bannerUrl})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center px-16">
          <img src={game.icon} alt="icon" className="w-28 h-28 rounded-lg mr-6" />
          <div className="text-white">
            <h1 className="text-4xl font-bold">{game.title}</h1>
            <p className="text-sm mt-2">{game.description}</p>
            <p className="text-xs mt-1 opacity-70">
              {game.developer} • {game.publisher} • {game.releaseDate?.split('T')[0]}
            </p>
          </div>
        </div>
      </div>

      <nav className="bg-gray-900 text-white px-16 py-3 flex gap-6 text-lg raleway-font font-medium">
        <NavLink to={`/page/${slug}/main`} className={({ isActive }) => isActive ? 'underline' : ''}>Головна</NavLink>
        <NavLink to={`/page/${slug}/plot`} className={({ isActive }) => isActive ? 'underline' : ''}>Сюжет</NavLink>
        <NavLink to={`/page/${slug}/info`} className={({ isActive }) => isActive ? 'underline' : ''}>Інфо</NavLink>
        <NavLink to={`/page/${slug}/hardware`} className={({ isActive }) => isActive ? 'underline' : ''}>Залізо</NavLink>
        <NavLink to={`/page/${slug}/community`} className={({ isActive }) => isActive ? 'underline' : ''}>Спільнота</NavLink>
      </nav>

      <div className="p-16 text-white bg-[#1c1e22] min-h-[40vh]">
        <Outlet context={game} />
      </div>
    </div>
  );
};

export default GamePage;