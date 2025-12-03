import React, { useState, type FC } from "react";

interface IImage
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  placeholderText?: string;
}

const Image: FC<IImage> = ({
  src,
  alt,
  placeholderText = "Image unavailable",
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <span>{placeholderText}</span>;
  }

  return <img src={src} alt={alt} onError={() => setHasError(true)} />;
};

export default Image;
