"use client";
import "./Settings.scss";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

function Settings() {
  const [sort, setSort] = useState("cheap");

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value);
  };

  return (
    <div className="settings">
        <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
          <Select value={sort} onChange={handleChange} displayEmpty>
            <MenuItem value={"cheap"}>От дешовых к дорогим</MenuItem>
            <MenuItem value={"expensive"}>От дорогих к дешовым</MenuItem>
            <MenuItem value={"title"}>По названию</MenuItem>
          </Select>
        </FormControl>
    </div>
  );
}

export default Settings;
