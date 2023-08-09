import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  changeCurrentPage,
  changePageQty,
} from "@/redux/slices/storePaginationSlice";
import { Pagination, Stack } from "@mui/material";
import { ChangeEvent, useEffect } from "react";

function StorePagination() {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(
    (state) => state.storePaginationReducer.currentPage
  );
  const pageQty = useAppSelector(
    (state) => state.storePaginationReducer.pageQty
  );
  const productsOnPage = useAppSelector(
    (state) => state.storePaginationReducer.productsOnPage
  );
  const products = useAppSelector((state) => state.productsReducer.products);

  useEffect(() => {
    if (products) {
      const newPageQty = Math.ceil(products.length / productsOnPage);
      dispatch(changePageQty(newPageQty));
    }
  }, [products, productsOnPage]);

  const handlePageChange = (_: ChangeEvent<unknown>, newPage: number) => {
    dispatch(changeCurrentPage(newPage));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={pageQty}
        page={currentPage}
        onChange={handlePageChange}
        variant="outlined"
        color="primary"
        siblingCount={0}
      />
    </Stack>
  );
}

export default StorePagination;
