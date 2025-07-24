import React, { useEffect, useState } from 'react';
import { useParams, NavLink, Outlet} from 'react-router-dom';
import PostCard from "./PostCard";
import './index.css';

const navLinks = [
  { label: 'Головна', key: '' },
  { label: 'Сюжет', key: 'plot' },
  { label: 'Інфо', key: 'info' },
  { label: 'Залізо', key: 'hardware' },
  { label: 'Спільнота', key: 'community' },
];

const GamePage = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { slug } = useParams();
  const [game, setGame] = useState(null);
  const [search, setSearch] = useState('');
   const handleClick = () => {
    setIsFollowing(!isFollowing);
    setShowModal(true);

    setTimeout(() => {
      setShowModal(false);
    }, 1500);
  };
  useEffect(() => {
    const fetchGame = async () => {
      try {
        const res = await fetch(`http://localhost:5065/api/games/${slug}`);
        const data = await res.json();
        setGame(data);
      } catch (err) {
        console.error('Помилка при завантаженні гри:', err);
      }
    };
    fetchGame();
  }, [slug]);

  if (!game) return <div>Завантаження...</div>;

  return (
     <div className="gamepage-wrapper">
          <div
            className="gamepage-banner"
            style={{ backgroundImage: `url(${game.bannerUrl})` }}
          >
            <div className="gamepage-content">
              <img src={game.logoUrl} alt="logo" className="gamepage-logo" />
              <div className="gamepage-meta">
                <div className="gamepage-follow">
                  <span>Слідкують: {game.followers}</span>
                  {game.isOfficial && <span className="official-badge">☑ Офіційна</span>}
                </div>
                <span><b>Release:</b> {game.releaseDate?.split('T')[0]}</span>
                <span><b>Updated:</b> {game.updatedAt?.split('T')[0]}</span>
                <span><b>Developer:</b> {game.developer}</span>
                <span><b>Publisher:</b> {game.publisher}</span>
                <span><b>Genre:</b> {Array.isArray(game.genre) ? game.genre.join(', ') : game.genre}</span>
                <span><b>Category:</b> {Array.isArray(game.category) ? game.category.join(', ') : game.category}</span>
                <span><b>Age:</b> {game.ageRating}</span>
                <span><b>Metacritic:</b> {game.metacritic}</span>
                <span><b>Steam:</b> {game.steamReview}</span>
                <span><b>IGN:</b> {game.ignRating}</span>
                <button onClick={handleClick} className={isFollowing ? 'btn-unfollow' : 'btn-follow'}>
                  {isFollowing ? 'Відписатись' : 'Слідкувати'}
                </button>
                {showModal && (
                  <div className="follow-modal">
                    Ви {isFollowing ? 'успішно підписались!' : 'відписались.'}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="gamepage-nav">
            <nav>
              {navLinks.map(link => (
                <NavLink
                  key={link.key}
                  to={`/page/${slug}/${link.key}`}
                  end={link.key === ''}
                  className={({ isActive }) => isActive ? 'nav-active' : ''}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
            <div className="search-container">
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Пошук"
              />
            </div>
          </div>
          <div className="gamepage-body">
            <Outlet context={game} />
          </div>
        </div>
  );
};

export default GamePage;
