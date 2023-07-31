"use client"
import "./PriceFilter.scss";
import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Paper } from "@mui/material";

function valuetext(value: number) {
  return `${value}°C`;
}

function PriceFilter() {
  const [value, setValue] = useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Paper elevation={3} className="priceFilter">
      <Box className="priceFilter__box">
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
      </Box>
    </Paper>
  );
}

export default PriceFilter;
