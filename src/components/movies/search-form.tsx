'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Movie } from '@/types';
import api from '@/lib/api';

interface SearchFormProps {
  onSearchResults: (movies: Movie[]) => void;
  onLoading: (loading: boolean) => void;
}

export default function SearchForm({ onSearchResults, onLoading }: SearchFormProps) {
  const [query, setQuery] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    onLoading(true);
    try {
      const response = await api.get(`/movies/search?title=${encodeURIComponent(query)}`);
      onSearchResults(response.data);
    } catch (error) {
      console.error('Search error:', error);
      alert('Failed to search movies');
    } finally {
      onLoading(false);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-4 mb-8">
      <Input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1"
      />
      <Button type="submit">Search</Button>
    </form>
  );
}