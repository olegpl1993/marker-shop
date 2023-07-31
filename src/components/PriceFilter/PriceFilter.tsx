"use client";
import "./PriceFilter.scss";
import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";

function valuetext(value: number) {
  return `${value}°C`;
}

function PriceFilter() {
  const [value, setValue] = useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Accordion elevation={3} className="priceFilter">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className="priceFilter__title">Цена</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box className="priceFilter__box">
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

export default PriceFilter;
