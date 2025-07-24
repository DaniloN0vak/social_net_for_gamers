import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import "./Sidebar.css"; 
import './index.css';

const PageCard = ({ name, image, followers, official, avatar, logo }) => {
  const slug = name.toLowerCase().replace('@', '').replaceAll(' ', '-');
  return (
   <Link to={`/page/${slug}`} className="page-card-link">
         <div className="page-card">
           <div className="page-card-banner">
             <img src={image} alt={name} className="page-card-image" />
             {logo && <img src={logo} alt="logo" className="page-card-logo" />}
             <div className="page-card-info">
               <span className="page-card-official">{official && '✅ Офіційна сторінка'}</span>
               <span className="page-card-followers">Слідкують: {followers}</span>
               <span className="page-card-name">
                 <img src={avatar} alt="avatar" className="page-card-avatar" />
                 {name}
               </span>
             </div>
           </div>
         </div>
    </Link>
  );
};

export default function Pages() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5065/api/games") 
      .then(res => res.json())
      .then(data => setGames(data))
      .catch(err => console.error("Failed to fetch games:", err));
  }, []);

  return (
    <div className="pages-wrapper">
      <div className="pages-container">
        {games.map((game) => (
          <PageCard
            key={game.id}
            image={game.bannerUrl}
            name={`@${game.slug}`}
            followers={game.followers}
            official={game.isOfficial}
            avatar={game.icon}
            logo={game.logoUrl}
          />
        ))}
      </div>
    </div>
  );
}