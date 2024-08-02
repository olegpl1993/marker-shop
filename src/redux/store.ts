import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./services/productsApi";
import cartReducer from "./slices/cartSlice";
import priceFilterReducer from "./slices/priceFilterSlice";
import productsReducer from "./slices/productsSlice";
import searchReducer from "./slices/searchSlice";
import selectedCategoriesReducer from "./slices/selectedCategoriesSlice";
import sortReducer from "./slices/sortSlice";
import storePaginationReducer from "./slices/storePaginationSlice";

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    storePaginationReducer,
    sortReducer,
    searchReducer,
    productsReducer,
    selectedCategoriesReducer,
    priceFilterReducer,
    cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([productsApi.middleware]),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
