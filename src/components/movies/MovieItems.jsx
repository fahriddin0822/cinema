import React from "react";
import { memo } from "react";

const MovieItems = ({ title, poster_path }) => {
  return (
    <div className="w-56 border">
      <img src={`${import.meta.env.VITE_IMAGE_URL}${poster_path}`} alt="" />
      {title}
    </div>
  );
};

export default memo(MovieItems);
