import { configureStore } from "@reduxjs/toolkit";
import storePaginationReducer from "./slices/storePaginationSlice";
import { productsApi } from "./services/productsApi";

const store = configureStore({
  reducer: {
    storePaginationState: storePaginationReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([productsApi.middleware]),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
