import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userSlice from "./userSlice";
import { combineReducers } from "redux";

// Define the root state type
export const RootState = combineReducers({
  user: userSlice,
});

// Define the persist config
const persistConfig = {
  key: "ism",
  storage,
};

// Define the persisted reducer
const persistedReducer = persistReducer(persistConfig, RootState);

// Define the store
export const store = configureStore({
  reducer: persistedReducer,
  // This middleware accepts serializableCheck
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Define the persistor
export const persistor = persistStore(store);

// Define the app dispatch type
export const AppDispatch = store.dispatch;
