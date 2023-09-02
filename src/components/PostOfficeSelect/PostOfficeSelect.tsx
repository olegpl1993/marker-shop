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
  const response = await fetch("https://api.novaposhta.ua/v2.0/json/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      apiKey: "3be575a17e86b2cc3677024d2e1a4a49",
      modelName: "Address",
      calledMethod: "getCities",
      methodProperties: {
        FindByString: input,
        Limit: "4",
      },
    }),
  });
  const data = await response.json();
  const citiesArray = data.data.map((city: any) =>
    city.DescriptionRu ? city.DescriptionRu : city.Description
  );
  return citiesArray;
};

const getPostOffices = async (input: string) => {
  const response = await fetch("https://api.novaposhta.ua/v2.0/json/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      apiKey: "3be575a17e86b2cc3677024d2e1a4a49",
      modelName: "Address",
      calledMethod: "getWarehouses",
      methodProperties: {
        CityName: input,
        Language: "RU",
      },
    }),
  });
  const data = await response.json();
  const postOfficesArray = data.data.map((postOffice: any) =>
    postOffice.DescriptionRu ? postOffice.DescriptionRu : postOffice.Description
  );
  return postOfficesArray;
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
