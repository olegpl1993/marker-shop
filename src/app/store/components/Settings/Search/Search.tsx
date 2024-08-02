"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { changeSearch } from "@/redux/slices/searchSlice";
import { changeCurrentPage } from "@/redux/slices/storePaginationSlice";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, TextField } from "@mui/material";
import { useState } from "react";
import "./Search.scss";

function Search() {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.searchReducer.search);

  const [searchInput, setSearchInput] = useState(search);
  const handleChangeSearchInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchInput(event.target.value);
  };

  const handleOnClickSearchBtn = () => {
    dispatch(changeCurrentPage(1));
    dispatch(changeSearch(searchInput));
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
