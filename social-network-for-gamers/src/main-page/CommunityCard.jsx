import React, { useState } from 'react';
import './index.css';
import { useCommunity } from './contexts/CommunityContext';

const CommunityCard = ({ banner, avatar, title, description, membersCount }) => {
  const { joinedCommunities, joinCommunity, leaveCommunity } = useCommunity();

  const isJoined = joinedCommunities.some(c => c.title === title);
  const [members, setMembers] = useState(membersCount);

  const handleToggle = () => {
    if (isJoined) {
      leaveCommunity(title);
      setMembers(m => m - 1);
    } else {
      joinCommunity({ title, avatar });
      setMembers(m => m + 1);
    }
  };

  return (
    <div className="community-card-container raleway-font">
      <div className="community-card raleway-font">
        {banner && (
          <img
            src={banner}
            alt="Community Banner"
            className="community-banner"
          />
        )}
        <div className="community-content">
          <img
            src={avatar}
            alt="Group Avatar"
            className="community-avatar"
          />
          <div className="community-text raleway-font">
            <h3 className="community-title raleway-font">{title}</h3>
            <p className="community-description raleway-font">{description}</p>
            <p className="community-members raleway-font">Учасників: {members}</p>
          </div>
          <button
            onClick={handleToggle}
            className={`community-button raleway-font ${isJoined ? 'leave' : 'join'}`}
          >
            {isJoined ? 'Покинути' : 'Приєднатися'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;