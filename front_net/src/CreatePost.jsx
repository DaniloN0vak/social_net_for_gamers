import React, { useState } from 'react';
import { createPost } from '/src/services/PostService.js';
import './index.css';

const CreatePost = ({ onClose }) => {
  const [content, setContent] = useState('');
  const [nickname, setNickname] = useState('');
  const [mediaUrl, setMediaUrl] = useState('');
  const [mediaList, setMediaList] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = 1; // тимчасово, поки нема авторизації
    const postData = {
      content,
      userId,
      media: mediaList.map(m => ({
        url: m.url,
        type: m.type,
        size: 0
      }))
    };

    try {
      await createPost(postData);
      alert(`Пост від "${nickname}" створено!`);
      setContent('');
      setMediaList([]);
      setNickname('');
      onClose?.(); 
    } catch (err) {
      console.error(err);
      alert('Помилка при створенні поста');
    }
  };

  const addMedia = () => {
    if (!mediaUrl) return;
    const type = mediaUrl.includes('.mp4') ? 'video' : 'image';
    setMediaList([...mediaList, { url: mediaUrl, type }]);
    setMediaUrl('');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50"
    style={{ background: "rgba(0,0,0,0.4)" }}
    >
      <div className="bg-gray-900 p-6 rounded-lg w-full max-w-md text-white">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg raleway-font">Створити пост</h2>
          <button onClick={onClose} className="text-gray-400 raleway-font hover:text-white">&times;</button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="Введіть ваш нікнейм"
            className="p-2 rounded bg-gray-800 border border-gray-700"
            required
          />

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Введіть текст..."
            className="p-2 rounded bg-gray-800 border border-gray-700"
            required
          />

          <div className="flex gap-2">
            <input
              type="text"
              value={mediaUrl}
              onChange={(e) => setMediaUrl(e.target.value)}
              placeholder="URL зображення або відео"
              className="flex-grow p-2 rounded bg-gray-800 border border-gray-700"
            />
            <button type="button" onClick={addMedia} className="bg-blue-600 raleway-font px-3 py-1 rounded">
              Додати
            </button>
          </div>

          {mediaList.length > 0 && (
            <ul className="text-sm text-gray-300">
              {mediaList.map((m, i) => (
                <li key={i}>{m.type.toUpperCase()}: {m.url}</li>
              ))}
            </ul>
          )}

          <button type="submit" className="bg-blue-600 px-4 py-2 rounded raleway-font hover:bg-blue-700">
            Опублікувати
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;