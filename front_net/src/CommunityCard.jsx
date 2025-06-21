import React from 'react';
import './index.css';

const CommunityCard = ({ banner, avatar, title, description, membersCount, onJoin }) => {
  return (
<div className="raleway-font flex flex-col items-center">
    <div
      className="relative rounded-xl p-4 shadow-sm mb-18 overflow-hidden hover:shadow-lg transition flex items-center"
      style={{
        width: 1140,
        height: 250,
        position: 'centre',
        minWidth: 1140,
        minHeight: 250,
        maxWidth: 1140,
        maxHeight: 250,
        boxSizing: 'border-box'
      }}
    >
      {/* Banner як фоновий елемент */}
      {banner && (
        <img
          src={banner}
          alt="Community Banner"
          className="absolute inset-0 w-full h-full object-cover rounded-xl pointer-events-none"
        />
      )}

      {/* Контент */}
      <div className="relative ml-10 z-10 flex items-center gap-4 w-full">
        <img
          src={avatar}
          alt="Group Avatar"
          className="w-40 h-40 rounded-lg object-cover"
        />

        <div className="raleway-font flex-1 space-y-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-base">{description}</p>
          <p className="text-sm mt-1">Учасників: {membersCount}</p>
        </div>

        <button
          onClick={onJoin}
          className="raleway-font bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-md transition text-base"
        >
          Приєднатися
        </button>
      </div>
    </div>
</div>
  );
};

export default CommunityCard;