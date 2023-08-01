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
import { useAppDispatch } from "@/redux/hooks";
import { changePriceFilter } from "@/redux/slices/priceFilterSlice";
import { changeCurrentPage } from "@/redux/slices/storePaginationSlice";

function PriceFilter() {
  const dispatch = useAppDispatch();
  const { data } = useGetProductsQuery(null);

  const [minMaxValues, setMinMaxValues] = useState<number[]>([0, 0]);
  const [selectedValue, setSelectedValue] = useState<number[]>([0, 0]);

  useEffect(() => {
    if (data) {
      const pricesArray = data.map((product) => product.price).flat();
      const minPrice = Math.min(...pricesArray);
      const maxPrice = Math.max(...pricesArray);
      dispatch(changePriceFilter([minPrice, maxPrice]));
      setMinMaxValues([minPrice, maxPrice]);
      setSelectedValue([minPrice, maxPrice]);
    }
  }, [data]);

  const handleSetPriceFilterValues = (
    event: Event,
    newValue: number | number[]
  ) => {
    setSelectedValue(newValue as number[]);
  };

  const handleSetLowPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue([Number(event.target.value), selectedValue[1]]);
  };

  const handleSetHighPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue([selectedValue[0], Number(event.target.value)]);
  };

  const handleConfirmSelectedValue = () => {
    dispatch(changePriceFilter(selectedValue));
    dispatch(changeCurrentPage(1));
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
            value={selectedValue[0]}
            onChange={handleSetLowPrice}
            className="priceFilter__input"
          />
          -
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            value={selectedValue[1]}
            onChange={handleSetHighPrice}
            className="priceFilter__input"
          />
          <Button
            variant="outlined"
            className="priceFilter__button"
            size="medium"
            onClick={handleConfirmSelectedValue}
          >
            OK
          </Button>
        </div>

        <Box className="priceFilter__box">
          <Slider
            getAriaLabel={() => "Price range"}
            value={selectedValue}
            onChange={handleSetPriceFilterValues}
            valueLabelDisplay="off"
            getAriaValueText={(value: number) => `${value}`}
            min={minMaxValues[0]}
            max={minMaxValues[1]}
          />
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

export default PriceFilter;
