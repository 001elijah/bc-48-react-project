import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import authReducer from './slices/authSlice';

const authPersistConfigs = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(authPersistConfigs, authReducer)

export const store = configureStore({
  reducer: {
        authorized: persistedAuthReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    // preloadedState,
    // devTools: process.env.NODE_ENV === "production"// true/false - show/hide redux devtools state
});

export const persistor = persistStore(store);