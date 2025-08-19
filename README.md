
## Frontend README.md

```markdown
# Movie Search App - Frontend

A React/Next.js frontend application for searching and saving movies with a modern UI built with Shadcn components.

## Features

- User authentication (login/register)
- Movie search functionality
- Save favorite movies
- Responsive design with modern UI
- Protected routes for authenticated users

## Tech Stack

- Next.js 14+ 
- React 18
- TypeScript
- Tailwind CSS
- Shadcn UI components
- Axios for API calls

## Prerequisites

- Node.js 
- Backend server running 

## Installation

1. Clone the repository:
```bash
git clone <https://github.com/Alameena1/movie-app-frontend.git>
cd frontend
Install dependencies:

bash
npm install
Create environment file:

bash
cp .env.local.example .env.local
Configure environment variables in .env.local:

env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
Running the Application
Development Mode
bash
npm run dev
Application will start on http://localhost:3000

Production Build
bash
npm run build
npm start
Project Structure
text
frontend/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── (auth)/         # Authentication pages
│   │   ├── (protected)/    # Protected pages
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/         # React components
│   │   ├── ui/            # Shadcn UI components
│   │   ├── auth/          # Authentication components
│   │   ├── movies/        # Movie-related components
│   │   └── layout/        # Layout components
│   ├── lib/               # Utility libraries
│   └── types/             # TypeScript type definitions
├── public/                # Static assets
├── next.config.js         # Next.js configuration
└── tailwind.config.ts     # Tailwind CSS configuration
Pages
Public Pages
/ - Home page with navigation

/login - User login

/register - User registration

Protected Pages (require authentication)
/search - Movie search page

/saved - Saved movies page

Component Architecture
Authentication Components
LoginForm - User login form

RegisterForm - User registration form

Movie Components
MovieCard - Individual movie display card

SearchForm - Movie search input and button

SavedMovies - Grid of saved movies

Layout Components
Header - Navigation header with auth state

ProtectedRoute - Route protection wrapper

API Integration
The frontend communicates with the backend API using Axios:

Authentication
Register: POST /api/auth/register

Login: POST /api/auth/login

Movies
Search: GET /api/movies/search?title=...

Save: POST /api/movies/save

List: GET /api/movies/list

Styling
Tailwind CSS for utility-first styling

Shadcn UI for pre-built components

Custom CSS in globals.css for global styles

Development
Scripts
npm run dev - Start development server

npm run build - Build for production

npm run start - Start production server

npm run lint - Run ESLint

Adding New UI Components
bash
npx shadcn@latest add [component-name]
Environment Variables
Variable	Description	Default
NEXT_PUBLIC_API_URL	Backend API base URL	http://localhost:5000/api
