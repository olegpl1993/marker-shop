"use client";
import {
  Autocomplete,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import "./PostOfficeSelect.scss";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const getCities = async (input: string) => {
  try {
    const response = await fetch("/api/cities", {
      method: "POST",
      body: JSON.stringify(input),
    });
    const { citiesArray } = await response.json();
    return citiesArray;
  } catch {
    return [];
  }
};

const getPostOffices = async (input: string) => {
  try {
    const response = await fetch("/api/postOffices", {
      method: "POST",
      body: JSON.stringify(input),
    });
    const { postOfficesArray } = await response.json();
    return postOfficesArray;
  } catch {
    return [];
  }
};

interface Props {
  city: null;
  setCity: Dispatch<SetStateAction<null>>;
  postOffice: string;
  setPostOffice: Dispatch<SetStateAction<string>>;
}

function PostOfficeSelect(props: Props) {
  const { city, setCity, postOffice, setPostOffice } = props;

  const [inputCity, setInputCity] = useState("");
  const [cities, setCities] = useState([]);
  const [postOffices, setPostOffices] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const cities = await getCities(inputCity);
      setCities(cities);
    };
    getData();
  }, [inputCity]);

  useEffect(() => {
    const getData = async () => {
      const postOffices = await getPostOffices(String(city));
      setPostOffices(postOffices);
    };
    if (city) getData();
  }, [city]);

  const handleCityChange = (_event: any, newValue: SetStateAction<null>) => {
    setCity(newValue);
  };

  const handleCityInput = (event: any) => {
    setInputCity(event.target.value);
  };

  const handlePostOfficeChange = (event: SelectChangeEvent) => {
    setPostOffice(event.target.value as string);
  };

  return (
    <div className="postOfficeSelect">
      <Autocomplete
        className="postOfficeSelect__autocomplete"
        disablePortal
        options={cities}
        value={city}
        onChange={handleCityChange}
        renderOption={(props, option) => {
          return (
            <li {...props} key={option}>
              {option}
            </li>
          );
        }}
        renderTags={(tagValue, getTagProps) => {
          return tagValue.map((option, index) => (
            <Chip {...getTagProps({ index })} key={option} label={option} />
          ));
        }}
        renderInput={(params) => (
          <TextField
            value={inputCity}
            onChange={handleCityInput}
            {...params}
            label="Город"
          />
        )}
      />

      {city && (
        <FormControl fullWidth>
          <InputLabel>Почтовое отделение</InputLabel>
          <Select
            value={postOffice}
            label="Почтовое отделение"
            onChange={handlePostOfficeChange}
          >
            {postOffices.map((postOffice) => (
              <MenuItem key={postOffice} value={postOffice}>
                {postOffice}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </div>
  );
}

export default PostOfficeSelect;
