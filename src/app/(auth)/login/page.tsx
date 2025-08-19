import LoginForm from '@/components/auth/login-form';
import AuthRedirect from '@/components/layout/auth-redirect';

export default function LoginPage() {
  return (
    <AuthRedirect>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Login</h1>
            <p className="mt-2 text-sm text-gray-600">
              Sign in to your account
            </p>
          </div>
          <LoginForm />
          <p className="text-center text-sm text-gray-600">
            Don&apos;t have an account?{' '}
            <a href="/register" className="font-medium text-blue-600 hover:text-blue-500">
              Register
            </a>
          </p>
        </div>
      </div>
    </AuthRedirect>
  );
}