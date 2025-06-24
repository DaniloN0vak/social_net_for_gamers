import api from '../api/api.js';

export const createPost = async (postData) => {
  const res = await api.post('/posts', postData);
  return res.data;
};