import Image from "next/image";
import React from "react";
import { images } from "../public";

const ImageAsset = (props) => {
  const { src, className, onClick, style } = props;
  return (
    <Image
      alt="icon"
      src={images[src]}
      className={`${className}`}
      onClick={onClick}
      style={style}
    />
    // <img
    //   alt="icon"
    //   src={images[src]}
    //   className={`${className}`}
    //   onClick={onClick}
    //   style={style}
    // />
  );
};

export default ImageAsset;
