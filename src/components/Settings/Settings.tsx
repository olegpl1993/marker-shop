"use client";
import "./Settings.scss";
import { Box, TextField } from "@mui/material";
import StorePagination from "../StorePagination/StorePagination";
import SortSelector from "../SortSelector/SortSelector";

function Settings() {
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
      <SortSelector />
    </div>
  );
}

export default Settings;
