import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
  userId: string;
  exp: number;
}

// Check if we're in the browser environment
const isBrowser = typeof window !== 'undefined';

export const setToken = (token: string) => {
  if (isBrowser) {
    localStorage.setItem('token', token);
  }
};

export const getToken = (): string | null => {
  if (!isBrowser) return null;
  return localStorage.getItem('token');
};

export const removeToken = () => {
  if (isBrowser) {
    localStorage.removeItem('token');
  }
};

export const isAuthenticated = (): boolean => {
  if (!isBrowser) return false;
  
  const token = getToken();
  if (!token) return false;

  try {
    const decoded: JwtPayload = jwtDecode(token);
    return decoded.exp * 1000 > Date.now();
  } catch {
    return false;
  }
};

export const getUserId = (): string | null => {
  if (!isBrowser) return null;
  
  const token = getToken();
  if (!token) return null;

  try {
    const decoded: JwtPayload = jwtDecode(token);
    return decoded.userId;
  } catch {
    return null;
  }
};