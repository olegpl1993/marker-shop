"use client";
import "./PriceFilter.scss";
import { useEffect, useState } from "react";
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
import { useGetProductsQuery } from "@/redux/services/productsApi";

function PriceFilter() {
  const { data } = useGetProductsQuery(null);
  const [value, setValue] = useState<number[]>([0, 0]);
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(0);

  useEffect(() => {
    if (data) {
      const priceArray = data.map((product) => product.price).flat();
      const minPrice = Math.min(...priceArray);
      const maxPrice = Math.max(...priceArray);
      setValue([minPrice, maxPrice]);
      setMinValue(minPrice);
      setMaxValue(maxPrice);
    }
  }, [data]);

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
            getAriaLabel={() => "Price range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="off"
            getAriaValueText={(value: number) => `${value}`}
            min={minValue}
            max={maxValue}
          />
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

export default PriceFilter;
