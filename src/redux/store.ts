import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./services/productsApi";
import storePaginationReducer from "./slices/storePaginationSlice";
import sortReducer from "./slices/sortSlice";
import searchReducer from "./slices/searchSlice";
import productsReducer from "./slices/productsSlice";
import selectedCategoriesReducer from "./slices/selectedCategoriesSlice";
import priceFilterReducer from "./slices/priceFilterSlice";

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    storePaginationReducer,
    sortReducer,
    searchReducer,
    productsReducer,
    selectedCategoriesReducer,
    priceFilterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([productsApi.middleware]),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
