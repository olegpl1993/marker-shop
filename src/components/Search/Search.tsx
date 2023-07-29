"use client";
import "./Search.scss";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { changeSearch } from "@/redux/slices/searchSlice";
import { Box, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

function Search() {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.searchReducer.search);

  const [searchInput, setSearchInput] = useState(search);
  const handleChangeSearchInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchInput(event.target.value);
  };

  const handleOnSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      dispatch(changeSearch(searchInput));
    }
  };

  const handleOnClickSearchBtn = () => {
    dispatch(changeSearch(searchInput));
  };

  return (
    <Box
      component="form"
      sx={{ m: 1, minWidth: 200 }}
      noValidate
      autoComplete="off"
      className="search"
    >
      <TextField
        id="outlined-basic"
        variant="outlined"
        size="small"
        placeholder="Поиск"
        value={searchInput}
        onChange={handleChangeSearchInput}
        onKeyDown={handleOnSubmit}
        InputProps={{ sx: { paddingRight: "23px" } }}
        className="search__input"
      />

      <IconButton
        className="search__iconButton"
        onClick={handleOnClickSearchBtn}
      >
        <SearchIcon />
      </IconButton>
    </Box>
  );
}

export default Search;
