import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./services/productsApi";
import storePaginationReducer from "./slices/storePaginationSlice";
import sortReducer from "./slices/sortSlice";
import searchReducer from "./slices/searchSlice";
import productsReducer from "./slices/productsSlice";
import selectedCategoriesReducer from "./slices/selectedCategoriesSlice";

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    storePaginationReducer,
    sortReducer,
    searchReducer,
    productsReducer,
    selectedCategoriesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([productsApi.middleware]),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
