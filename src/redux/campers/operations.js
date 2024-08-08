import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://661e6c4998427bbbef048439.mockapi.io',
});

export const getCamperList = createAsyncThunk(
  'campers/getCamperList',
  async ({ page = 1, limit = 4 }, thunkAPI) => {
    try {
      const { data } = await instance.get('/adverts', {
        params: { page, limit },
      });

      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  },
);
