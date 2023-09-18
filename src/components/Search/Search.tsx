"use client";
import "./Search.scss";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { changeSearch } from "@/redux/slices/searchSlice";
import { IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { changeCurrentPage } from "@/redux/slices/storePaginationSlice";
import { usePathname, useRouter } from "next/navigation";

function Search() {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.searchReducer.search);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);
    const searchParam = searchParams.get("search");
    if (searchParam) {
      dispatch(changeSearch(searchParam));
    }
  }, []);

  const createQueryString = (name: string, value: string) => {
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);
    const params = new URLSearchParams(searchParams.toString());
    if (value === "") {
      params.delete(name);
    } else {
      params.set(name, value);
    }
    return params.toString();
  };

  const [searchInput, setSearchInput] = useState(search);
  const handleChangeSearchInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchInput(event.target.value);
  };

  const handleOnClickSearchBtn = () => {
    dispatch(changeCurrentPage(1));
    dispatch(changeSearch(searchInput));
    router.push(pathname + "?" + createQueryString("search", searchInput));
  };

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleOnClickSearchBtn();
    }
  };

  return (
    <div className="search">
      <TextField
        id="outlined-basic"
        variant="outlined"
        size="small"
        placeholder="Поиск"
        value={searchInput}
        onChange={handleChangeSearchInput}
        onKeyDown={handleOnKeyDown}
        InputProps={{ sx: { paddingRight: "55px" } }}
      />

      <IconButton
        className="search__iconButton"
        onClick={handleOnClickSearchBtn}
      >
        <SearchIcon />
      </IconButton>
    </div>
  );
}

export default Search;
