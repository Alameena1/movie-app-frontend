'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ProtectedRoute from '@/components/layout/protected-route';
import SearchForm from '@/components/movies/search-form';
import MovieCard from '@/components/movies/movie-card';
import { Movie } from '@/types';
import api from '@/lib/api';

export default function SearchPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [savedMovies, setSavedMovies] = useState<Set<string>>(new Set());

  const handleSearchResults = (results: Movie[]) => {
    setMovies(results);
  };

  const handleSaveMovie = async (movie: Movie) => {
    try {
      await api.post('/movies/save', movie);
      setSavedMovies(prev => new Set(prev).add(movie.imdbID));
      alert('Movie saved successfully!');
    } catch (error: unknown) {
      if (error && typeof error === 'object' && 'response' in error && error.response && typeof error.response === 'object' && 'data' in error.response && error.response.data && typeof error.response.data === 'object' && 'message' in error.response.data) {
        alert((error as { response: { data: { message: string } } }).response.data.message);
      } else {
        alert('Failed to save movie');
      }
    }
  };

  return (
    <ProtectedRoute>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Search Movies</h1>
        
        <SearchForm 
          onSearchResults={handleSearchResults} 
          onLoading={setLoading}
        />
        
        {loading && <p className="text-center">Loading...</p>}
        
        {movies.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {movies.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                movie={movie}
                onSave={handleSaveMovie}
                isSaved={savedMovies.has(movie.imdbID)}
              />
            ))}
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
}