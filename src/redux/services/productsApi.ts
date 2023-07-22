import { Product } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://marker-shop-api.vercel.app/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], null>({
      query: () => "products",
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;