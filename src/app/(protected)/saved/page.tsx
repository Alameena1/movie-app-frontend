'use client';

import { useState, useEffect } from 'react';
import ProtectedRoute from '@/components/layout/protected-route';
import SavedMovies from '@/components/movies/saved-movies';
import { Button } from '@/components/ui/button';
import { Movie } from '@/types';
import api from '@/lib/api';

export default function SavedPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchSavedMovies = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await api.get('/movies/list');
      setMovies(response.data);
    } catch (error: unknown) {
      console.error('Failed to fetch saved movies:', error);
      setError('Failed to load saved movies. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveMovie = async (imdbID: string) => {
    try {
      await api.delete(`/movies/delete/${imdbID}`);
      // Remove from local state
      setMovies(prev => prev.filter(movie => movie.imdbID !== imdbID));
    } catch (error: unknown) {
      if (typeof error === 'object' && error !== null && 'response' in error) {
        // @ts-expect-error: error.response might exist
        alert(error.response?.data?.message || 'Failed to remove movie');
      } else {
        alert('Failed to remove movie');
      }
    }
  };

  useEffect(() => {
    fetchSavedMovies();
  }, []);

  return (
    <ProtectedRoute>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Saved Movies</h1>
          <Button 
            onClick={fetchSavedMovies} 
            variant="outline"
            disabled={loading}
          >
            Refresh
          </Button>
        </div>
        
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}
        
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading your saved movies...</p>
          </div>
        ) : (
          <SavedMovies movies={movies} onRemove={handleRemoveMovie} />
        )}
      </div>
    </ProtectedRoute>
  );
}