'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { removeToken, isAuthenticated } from '@/lib/auth';
import { useEffect, useState } from 'react';

export default function Header() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication only on client side
    setAuthenticated(isAuthenticated());
  }, []);

  const handleLogout = () => {
    removeToken();
    setAuthenticated(false);
    router.push('/login');
  };

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Movie App
        </Link>
        
        <nav className="flex items-center gap-4">
          {authenticated ? (
            <>
              <Link href="/search">Search</Link>
              <Link href="/saved">Saved Movies</Link>
              <Button variant="outline" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">Login</Link>
              <Link href="/register">Register</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}