import { configureStore } from '@reduxjs/toolkit';
// import { persistedAuthReducer } from './auth/slice';
// import { waterReducer } from './water/slice';
// import { userReducer } from './user/slice';
import {
  persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { campersReducer } from './campers/slice';
import persistReducer from 'redux-persist/es/persistReducer';

const campersPersistConfig = {
  key: 'campers',
  storage,
  whitelist: ['favorites'],
};
export const store = configureStore({
  reducer: {
    campers: persistReducer(campersPersistConfig, campersReducer),
    // water: waterReducer,
    // user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
