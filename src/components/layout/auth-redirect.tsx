'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '@/lib/auth';

interface AuthRedirectProps {
  children: React.ReactNode;
}

export default function AuthRedirect({ children }: AuthRedirectProps) {
  const router = useRouter();

  useEffect(() => {
    // Redirect to search page if already authenticated
    if (isAuthenticated()) {
      router.push('/search');
    }
  }, [router]);

  return <>{children}</>;
}