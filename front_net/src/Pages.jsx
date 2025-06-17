import React from 'react';
import "./sidebar.css"; // Імпортуємо CSS файл
import './index.css'; // Імпортуємо CSS файл для стилів


const pagesData = [
  {
    id: 1,
    name: '@Імʼя користувача',
    followers: '98k',
    official: true,
  },
  {
    id: 2,
    name: '@Інша сторінка',
    followers: '12k',
    official: true,
  },
  // ...додати ще обʼєктів
];

const PageCard = ({ name, followers, official }) => (
  
        <div className="bg-gray-200 rounded-xl p-4 mb-6">
          <div className="h-40 bg-gray-300 rounded-md mb-4" /> {/* Обкладинка */}
          <div className="flex justify-between text-sm text-gray-600 px-1">
            <span>{official && '⚪ Офіційна сторінка'}</span>
            <span>Слідкують: {followers}</span>
            <span>{name}</span>
          </div>
        </div>
  
);

export default function Pages() {
  return (
    
    <div className="max-w-3xl mx-auto p-4">
      {pagesData.map((page) => (
        <PageCard
          key={page.id}
          name={page.name}
          followers={page.followers}
          official={page.official}
        />
      ))}
    </div>
  );
}