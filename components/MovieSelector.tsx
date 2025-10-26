import React from 'react';
import type { Movie } from '../types';

interface MovieSelectorProps {
  movies: Movie[];
  selectedMovie: Movie | null;
  onSelectMovie: (movie: Movie) => void;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

const MovieSelector: React.FC<MovieSelectorProps> = ({ movies, selectedMovie, onSelectMovie, isExpanded, onToggleExpand }) => {
  const displayedMovies = isExpanded ? movies : movies.slice(0, 4);

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
        {displayedMovies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => onSelectMovie(movie)}
            className="cursor-pointer group flex flex-col items-center"
          >
            <img
              src={movie.posterUrl}
              alt={movie.title}
              referrerPolicy="no-referrer"
              className={`w-32 h-32 md:w-40 md:h-40 object-cover rounded-full shadow-lg border-4 transition-all duration-300 ease-in-out ${
                selectedMovie?.id === movie.id
                  ? 'border-cyan-400 scale-105'
                  : 'border-transparent group-hover:border-cyan-600 group-hover:scale-105'
              }`}
            />
            <p className={`mt-2 text-center text-sm font-medium transition-colors w-32 md:w-40 break-words ${selectedMovie?.id === movie.id ? 'text-cyan-400' : 'text-gray-400 group-hover:text-white'}`}>
              {movie.title}
            </p>
          </div>
        ))}
      </div>
      {movies.length > 4 && (
        <div className="text-center mt-6">
          <button
            onClick={onToggleExpand}
            className="px-6 py-2 text-base font-bold rounded-full transition-colors duration-300 bg-pink-300 text-gray-800 hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-pink-500 font-cute"
          >
            {isExpanded ? '접기' : '펼치기'}
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieSelector;