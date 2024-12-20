import React from "react";
import { memo } from "react";
import MovieItems from "./MovieItems";

const Movies = ({ data }) => {
  console.log(data);

  return (
    <div>
      <div>Movies</div>
      <div className="wrapper flex gap-2 flex-wrap container">
        {data?.results?.map((movie) => (
          <MovieItems key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default memo(Movies);
