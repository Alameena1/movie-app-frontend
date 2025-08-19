import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Movie } from '@/types';
import Image from 'next/image';

interface MovieCardProps {
  movie: Movie;
  onSave: (movie: Movie) => void;
  isSaved?: boolean;
}

export default function MovieCard({ movie, onSave, isSaved = false }: MovieCardProps) {
  return (
    <Card className="w-64 overflow-hidden">
      <div className="relative h-80">
        <Image
          src={movie.poster !== 'N/A' ? movie.poster : '/placeholder-poster.jpg'}
          alt={movie.title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg truncate">{movie.title}</h3>
        <p className="text-sm text-gray-500">Year: {movie.year}</p>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => onSave(movie)}
          disabled={isSaved}
          className="w-full"
        >
          {isSaved ? 'Saved' : 'Save Movie'}
        </Button>
      </CardFooter>
    </Card>
  );
}