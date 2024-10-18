import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import counterReducer from '@/slices/counterSlice';
import sudokuReducer from '@/slices/sudokuSlice';
import userStateReducer from '@/slices/userStateSlice';
import selectedNumberReducer from '@/slices/selectedNumberSlice';

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, userStateReducer);

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    sudoku: sudokuReducer,
    userState: persistedReducer,
    selectedNumber: selectedNumberReducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
})

export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch