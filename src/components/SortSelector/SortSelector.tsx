"use client";
import "./SortSelector.scss";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { changeSort } from "@/redux/slices/sortSlice";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";

function SortSelector() {
  const dispatch = useAppDispatch();
  const sort = useAppSelector((state) => state.sortReducer.sort);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const sortParam = searchParams.get("sort");
    const sortParams = ["title", "cheap", "expensive"];
    const currentSort = sortParams.find((param) => param === sortParam);
    if (currentSort) {
      dispatch(changeSort(currentSort));
    }
  }, []);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleChangeSort = (event: SelectChangeEvent) => {
    router.push(pathname + "?" + createQueryString("sort", event.target.value));
    dispatch(changeSort(event.target.value));
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
