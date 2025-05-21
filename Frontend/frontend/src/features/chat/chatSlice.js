import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../api/chatApi';

export const fetchChats = createAsyncThunk('chat/fetchChats', async () => {
  const response = await api.getChats();
  return response.data;
});

export const fetchMessages = createAsyncThunk('chat/fetchMessages', async (chatId) => {
  const response = await api.getMessages(chatId);
  return { chatId, messages: response.data };
});

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    chats: [],
    messages: {},
    activeChatId: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    setActiveChat: (state, action) => {
      state.activeChatId = action.payload;
    },
    addMessage: (state, action) => {
      const { chatId, message } = action.payload;
      if (!state.messages[chatId]) {
        state.messages[chatId] = [];
      }
      state.messages[chatId].push(message);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChats.fulfilled, (state, action) => {
        state.chats = action.payload;
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.messages[action.payload.chatId] = action.payload.messages;
      });
  },
});

export const { setActiveChat, addMessage } = chatSlice.actions;
export default chatSlice.reducer;
