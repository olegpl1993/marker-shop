"use client";
import "./Settings.scss";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { Box, TextField } from "@mui/material";
import StorePagination from "../StorePagination/StorePagination";

function Settings() {
  const [sort, setSort] = useState("cheap");
  const handleChangeSorting = (event: SelectChangeEvent) => {
    setSort(event.target.value);
  };

  return (
    <div className="settings">
      <Box
        component="form"
        sx={{ m: 1, minWidth: 200 }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          placeholder="Поиск"
        />
      </Box>

      <StorePagination />

      <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
        <Select value={sort} onChange={handleChangeSorting} displayEmpty>
          <MenuItem value={"cheap"}>От дешовых к дорогим</MenuItem>
          <MenuItem value={"expensive"}>От дорогих к дешовым</MenuItem>
          <MenuItem value={"title"}>По названию</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Settings;
