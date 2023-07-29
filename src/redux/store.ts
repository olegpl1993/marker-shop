import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./services/productsApi";
import storePaginationReducer from "./slices/storePaginationSlice";
import sortReducer from "./slices/sortSlice";
import searchReducer from "./slices/searchSlice";

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    storePaginationReducer,
    sortReducer,
    searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([productsApi.middleware]),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
