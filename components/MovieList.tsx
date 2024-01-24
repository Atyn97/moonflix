import React from "react";

import { isEmpty } from "lodash";
import MovieCard from "./MovieCard";

interface MovieListProps {
  data: Record<string, any>[];
  title: string;
}

const MovieList: React.FC<MovieListProps> = ({ data, title }) => {
  if (isEmpty(data)) {
    return null;
  }

  return (
    <div className="px-5 md:px-12 mt-20 md:mt-4 space-y-4 md:space-y-8 py-2 ">
      <p className="text-white text-md md:text-xl lg:text-2xl font-semibold">
        {title}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-2 ">
        {data.map((movie) => (
          <MovieCard key={movie.id} data={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
