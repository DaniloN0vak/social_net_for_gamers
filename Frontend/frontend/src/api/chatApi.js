import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://localhost:7102/api/chat',
  withCredentials: true
});

export const getChats = (userId) => apiClient.get(`/chats/user/${userId}`);
export const getChat = (chatId) => apiClient.get(`/chats/${chatId}`);
export const sendMessage = (chatId, formData) =>
  apiClient.post(`/chats/${chatId}/messages`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
