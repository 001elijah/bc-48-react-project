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
import personalPlanReducer from './slices/personalPlanSlice';
import cashflowReducer from './slices/cashflowSlice';
import categoriesReducer from './slices/categoriesSlice';
import dynamicsDataReducer from './slices/dynamicsDataSlice';
import transactionsReducer from './slices/transactionsSlice';
import loaderSliceReducer from './slices/loaderSlice';

const authPersistConfigs = {
  key: 'token',
  storage,
  whitelist: ['token', 'user'],
};

const persistedAuthReducer = persistReducer(authPersistConfigs, authReducer)

export const store = configureStore({
  reducer: {
    authorized: persistedAuthReducer,
    personalPlan: personalPlanReducer,
    cashflow: cashflowReducer,
    categories: categoriesReducer,
    dynamicsData: dynamicsDataReducer,
    transactions: transactionsReducer,
    loader: loaderSliceReducer,
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