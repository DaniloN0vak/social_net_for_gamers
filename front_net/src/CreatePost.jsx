import React, { useState } from 'react';
import { createPost } from '/src/services/PostService.js';

const CreatePost = () => {
  const [text, setText] = useState('');
  const [images, setImages] = useState([]);
  const [tags, setTags] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      text,
      images: images.map(img => img.url), 
      tags: tags.split(',').map(t => t.trim())
    };

    try {
      await createPost(formData);
      alert('Пост створено!');
      setText('');
      setImages([]);
      setTags('');
    } catch (err) {
      console.error(err);
      alert('Помилка при створенні поста');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Текст поста..."
        className="border rounded p-2"
      />

      <input
        type="text"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        placeholder="#теги через кому"
        className="border rounded p-2"
      />

      {/* На майбутнє input для зображень або відео */}

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Створити пост
      </button>
    </form>
  );
};

export default CreatePost;