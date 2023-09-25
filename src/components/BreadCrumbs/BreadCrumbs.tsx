"use client";
import "./BreadCrumbs.scss";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import { Product } from "@/types";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { changeSelectedCategories } from "@/redux/slices/selectedCategoriesSlice";

interface Props {
  productData: Product;
}

function BreadCrumbs(props: Props) {
  const { productData } = props;
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleRedirectToStore = () => {
    dispatch(changeSelectedCategories([]));
    router.push(`/store?currentPage=1`);
  };

  return (
    <ul className="breadCrumbs">
      <li className="breadCrumbs__item">
        <Link href={"/"} className="breadCrumbs__link">
          <HomeIcon fontSize="small" />
        </Link>
        <span className="breadCrumbs__separator">/</span>
      </li>

      <li className="breadCrumbs__item">
        <div onClick={handleRedirectToStore} className="breadCrumbs__link">
          Магазин
        </div>
        <span className="breadCrumbs__separator">/</span>
      </li>

      <li className="breadCrumbs__item">
        <Link
          href={`/store?categories=%5B"${productData.category}"%5D&currentPage=1`}
          className="breadCrumbs__link"
        >
          {productData.category}
        </Link>
      </li>
    </ul>
  );
}

export default BreadCrumbs;
