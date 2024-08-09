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
      const { data: checkNextPage } = await instance.get('/adverts', {
        params: { page: page + 1, limit },
      });
      const hasNextPage = Boolean(checkNextPage.length);
      return { data, hasNextPage };
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  },
);

export const getCamperById = createAsyncThunk(
  'campers/getCamperById',
  async (id, thunkAPI) => {
    try {
      const { data } = await instance.get(`/adverts/${id}`);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  },
);
