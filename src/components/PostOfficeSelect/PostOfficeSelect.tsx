"use client";
import { Autocomplete, Chip, TextField } from "@mui/material";
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
        Limit: "5",
      },
    }),
  });
  const data = await response.json();
  const citiesArray = data.data.map((city: any) =>
    city.DescriptionRu ? city.DescriptionRu : city.Description
  );
  return citiesArray;
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
  console.log(city);

  useEffect(() => {
    const getData = async () => {
      const cities = await getCities(inputCity);
      setCities(cities);
    };
    getData();
  }, [inputCity]);

  const handleCityChange = (_event: any, newValue: SetStateAction<null>) => {
    setCity(newValue);
  };

  const handleCityInput = (event: any) => {
    setInputCity(event.target.value);
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
    </div>
  );
}

export default PostOfficeSelect;
