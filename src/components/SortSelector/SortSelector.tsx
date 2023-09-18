"use client";
import "./SortSelector.scss";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { changeSort } from "@/redux/slices/sortSlice";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

function SortSelector() {
  const dispatch = useAppDispatch();
  const sort = useAppSelector((state) => state.sortReducer.sort);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);
    const sortParam = searchParams.get("sort");
    const sortParams = ["title", "cheap", "expensive"];
    const currentSort = sortParams.find((param) => param === sortParam);
    if (currentSort) {
      dispatch(changeSort(currentSort));
    }
  }, []);

  const createQueryString = (name: string, value: string) => {
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);
    const params = new URLSearchParams(searchParams.toString());
    if (value === "") {
      params.delete(name);
    } else {
      params.set(name, value);
    }
    return params.toString();
  };

  const handleChangeSort = (event: SelectChangeEvent) => {
    dispatch(changeSort(event.target.value));
    router.push(pathname + "?" + createQueryString("sort", event.target.value));
  };

  return (
    <Select
      className="sortSelector"
      value={sort}
      onChange={handleChangeSort}
      displayEmpty
    >
      <MenuItem value={"title"}>По названию</MenuItem>
      <MenuItem value={"cheap"}>От дешовых к дорогим</MenuItem>
      <MenuItem value={"expensive"}>От дорогих к дешовым</MenuItem>
    </Select>
  );
}

export default SortSelector;
