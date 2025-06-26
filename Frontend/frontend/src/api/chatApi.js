import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;
const apiClient = axios.create({
  baseURL: apiUrl+"/api/chat",
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
