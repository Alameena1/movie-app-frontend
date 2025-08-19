'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { isAuthenticated } from '@/lib/auth';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication only on client side
    setAuthenticated(isAuthenticated());
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">Welcome to Movie Search App</h1>
        <p className="text-xl text-gray-600">
          Search for movies and save your favorites
        </p>
        <div className="space-x-4">
          {authenticated ? (
            <>
              <Link href="/search">
                <Button>Search Movies</Button>
              </Link>
              <Link href="/saved">
                <Button variant="outline">View Saved Movies</Button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button>Login</Button>
              </Link>
              <Link href="/register">
                <Button variant="outline">Register</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}