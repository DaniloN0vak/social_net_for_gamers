import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // зміниться на прод
  withCredentials: true, // якщо буде авторизація через cookie
});

export default api;