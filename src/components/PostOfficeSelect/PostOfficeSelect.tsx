"use client";
import { Autocomplete, TextField } from "@mui/material";
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
  const citiesArray = data.data.map((city: any) => city.DescriptionRu);
  return citiesArray;
};

interface Props {
  city: string;
  setCity: Dispatch<SetStateAction<string>>;
  postOffice: string;
  setPostOffice: Dispatch<SetStateAction<string>>;
}

function PostOfficeSelect(props: Props) {
  const { city, setCity, postOffice, setPostOffice } = props;

  const [cities, setCities] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const cities = await getCities(city);
      setCities(cities);
    };
    getData();
  }, [city]);

  return (
    <div className="postOfficeSelect">
      <Autocomplete
        className="postOfficeSelect__autocomplete"
        disablePortal
        options={cities}
        renderInput={(params) => (
          <TextField
            value={city}
            onChange={(e) => setCity(e.target.value)}
            {...params}
            label="Город"
          />
        )}
      />
    </div>
  );
}

export default PostOfficeSelect;
