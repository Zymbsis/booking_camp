import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',

  initialState: { page: 1, location: '' },
});
