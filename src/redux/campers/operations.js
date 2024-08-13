import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://661e6c4998427bbbef048439.mockapi.io',
});

export const getCampersList = createAsyncThunk(
  'campers/getCampersList',
  async (params, thunkAPI) => {
    try {
      const { data } = await instance.get('/adverts', {
        params,
      });
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  },
);

export const getCamperByIds = createAsyncThunk(
  'campers/getCamperByIds',
  async (ids, thunkAPI) => {
    try {
      const promises = ids.map((id) => instance.get(`/adverts/${id}`));
      const result = await Promise.all(promises);
      return result.map((item) => item.data);
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  },
);
