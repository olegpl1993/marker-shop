"use client";
import "./PriceFilter.scss";
import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  TextField,
  Typography,
} from "@mui/material";

function valuetext(value: number) {
  return `${value}°C`;
}

function PriceFilter() {
  const [value, setValue] = useState<number[]>([20, 37]);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  const handleSetLowPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue([Number(event.target.value), value[1]]);
  };
  const handleSetHighPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue([value[0], Number(event.target.value)]);
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

      <AccordionDetails className="priceFilter__col">
        <div className="priceFilter__row">
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            value={value[0]}
            onChange={handleSetLowPrice}
            className="priceFilter__input"
          />
          -
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            value={value[1]}
            onChange={handleSetHighPrice}
            className="priceFilter__input"
          />
          <Button
            variant="outlined"
            className="priceFilter__button"
            size="medium"
          >
            OK
          </Button>
        </div>

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
