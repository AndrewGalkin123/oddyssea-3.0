import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from "@reduxjs/toolkit";
import cultureContentReducer from "./features/culture-content-key-slice";

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, cultureContentReducer);

export const store = configureStore({
  reducer: {
    content: persistedReducer,
  },
});

export const persistor = persistStore(store);
