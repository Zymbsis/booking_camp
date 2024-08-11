import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://661e6c4998427bbbef048439.mockapi.io',
});

export const getInitialCamperList = createAsyncThunk(
  'campers/getInitialCamperList',
  async (params, thunkAPI) => {
    try {
      const { data } = await instance.get('/adverts', {
        params,
      });
      const { data: checkNextPage } = await instance.get('/adverts', {
        params: { ...params, page: params.page + 1 },
      });
      const hasNextPage = Boolean(checkNextPage.length);
      return { data, hasNextPage };
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  },
);

export const getCamperList = createAsyncThunk(
  'campers/getCamperList',
  async (params, thunkAPI) => {
    try {
      const { data } = await instance.get('/adverts', {
        params,
      });
      const { data: checkNextPage } = await instance.get('/adverts', {
        params: { ...params, page: params.page + 1 },
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
