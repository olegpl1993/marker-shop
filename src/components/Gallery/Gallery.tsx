"use cliet";
import "./Gallery.scss";
import { Product } from "@/types";
import { useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { IconButton } from "@mui/material";

interface Props {
  productData: Product;
}

function Gallery(props: Props) {
  const { productData } = props;
  const { gallery } = productData;
  const [mainImg, setMainImg] = useState(productData.gallery[0]);

  const handleBeforeImg = () => {
    const currentImgNumber = gallery.indexOf(mainImg);
    if (currentImgNumber === 0) {
      setMainImg(gallery[gallery.length - 1]);
    } else {
      setMainImg(gallery[currentImgNumber - 1]);
    }
  };

  const handleNextImg = () => {
    const currentImgNumber = gallery.indexOf(mainImg);
    if (currentImgNumber === gallery.length - 1) {
      setMainImg(gallery[0]);
    } else {
      setMainImg(gallery[currentImgNumber + 1]);
    }
  };

  return (
    <div className="gallery">
      <div className="gallery__mainImgBox">
        <IconButton
          className="gallery__iconButtonBefore"
          onClick={handleBeforeImg}
        >
          <NavigateBeforeIcon
            sx={{ fontSize: 35, color: "rgb(0, 144, 184)" }}
          />
        </IconButton>

        <img
          className="gallery__mainImg"
          src={mainImg}
          alt={productData.name}
          loading="lazy"
        />

        <IconButton className="gallery__iconButtonNext" onClick={handleNextImg}>
          <NavigateNextIcon sx={{ fontSize: 35, color: "rgb(0, 144, 184)" }} />
        </IconButton>
      </div>

      <div className="gallery__imgBox">
        {productData.gallery.map((img) => (
          <img
            key={img}
            className={`gallery__smallImg ${
              mainImg === img ? "gallery__smallImg_active" : ""
            }`}
            src={img}
            alt={productData.name}
            loading="lazy"
            onClick={() => setMainImg(img)}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
