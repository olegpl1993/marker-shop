"use client";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { changeSort } from "@/redux/slices/sortSlice";

function SortSelector() {
  const dispatch = useAppDispatch();
  const sort = useAppSelector((state) => state.sortReducer.sort);
  const handleChangeSort = (event: SelectChangeEvent) => {
    dispatch(changeSort(event.target.value));
    console.log(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
      <Select value={sort} onChange={handleChangeSort} displayEmpty>
        <MenuItem value={"title"}>По названию</MenuItem>
        <MenuItem value={"cheap"}>От дешовых к дорогим</MenuItem>
        <MenuItem value={"expensive"}>От дорогих к дешовым</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SortSelector;
