export interface User {
  id: string;
  email: string;
}

export interface Movie {
  title: string;
  year: string;
  poster: string;
  imdbID: string;
}

export interface AuthResponse {
  token: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  password: string;
}