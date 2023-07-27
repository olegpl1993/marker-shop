import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useGetProductsQuery } from "@/redux/services/productsApi";
import {
  changeCurrentPage,
  changePageQty,
} from "@/redux/slices/storePaginationSlice";
import { Pagination, Stack } from "@mui/material";
import { useEffect } from "react";

function StorePagination() {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(
    (state) => state.storePaginationReducer.currentPage
  );
  const pageQty = useAppSelector((state) => state.storePaginationReducer.pageQty);
  const productsOnPage = useAppSelector(
    (state) => state.storePaginationReducer.productsOnPage
  );

  const setCurrentPage = (value: number) => {
    dispatch(changeCurrentPage(value));
  };

  const setPageQty = (value: number) => {
    dispatch(changePageQty(value));
  };

  const { data } = useGetProductsQuery(null);

  useEffect(() => {
    if (data) {
      const newPageQty = Math.ceil(data.length / productsOnPage); // определяем количество страниц
      setPageQty(newPageQty);
    }
  }, [data, productsOnPage]);

    return (
      <Stack spacing={2}>
        <Pagination
          count={pageQty}
          page={currentPage}
          onChange={(_, value) => setCurrentPage(value)}
          variant="outlined"
          shape="rounded"
        />
      </Stack>
    );
}

export default StorePagination;
