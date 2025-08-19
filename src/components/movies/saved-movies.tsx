import { Movie } from '@/types';
import MovieCard from './movie-card';
import { Button } from '@/components/ui/button';

interface SavedMoviesProps {
  movies: Movie[];
  onRemove?: (imdbID: string) => void;
}

export default function SavedMovies({ movies, onRemove }: SavedMoviesProps) {
  if (movies.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="mx-auto w-24 h-24 text-gray-400 mb-4">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No saved movies yet</h3>
        <p className="text-gray-500 mb-4">Start searching for movies and save your favorites!</p>
        <a href="/search" className="text-blue-600 hover:text-blue-500 font-medium">
          Search Movies
        </a>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="relative group">
          <MovieCard
            movie={movie}
            onSave={() => {}}
            isSaved={true}
          />
          {onRemove && (
            <Button
              onClick={() => onRemove(movie.imdbID)}
              variant="destructive"
              size="sm"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              Remove
            </Button>
          )}
        </div>
      ))}
    </div>
  );
}