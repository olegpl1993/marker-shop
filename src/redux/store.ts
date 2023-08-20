import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./services/productsApi";
import storePaginationReducer from "./slices/storePaginationSlice";
import sortReducer from "./slices/sortSlice";
import searchReducer from "./slices/searchSlice";
import productsReducer from "./slices/productsSlice";
import selectedCategoriesReducer from "./slices/selectedCategoriesSlice";
import priceFilterReducer from "./slices/priceFilterSlice";
import cartReducer from "./slices/cartSlice";

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
