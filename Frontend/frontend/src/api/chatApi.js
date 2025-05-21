import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://yourbackend/api', // заменить на реальный URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getChats = () => apiClient.get('/chats');
export const getMessages = (chatId) => apiClient.get(`/chats/${chatId}/messages`);
export const sendMessage = (chatId, content) => apiClient.post(`/chats/${chatId}/messages`, { content });
