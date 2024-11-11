'use client';

import { Button } from '@/components';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-700 dark:via-purple-700 dark:to-pink-700">
      <div className="mx-auto max-w-md rounded-lg bg-white p-8 text-center shadow-xl dark:bg-gray-900">
        <div className="mb-6 animate-pulse text-indigo-600 dark:text-indigo-400">
          <Home className="mx-auto h-24 w-24" />
        </div>
        <h2 className="mb-4 text-5xl font-extrabold text-gray-800 dark:text-white">404</h2>
        <h3 className="mb-2 text-xl font-semibold text-gray-600 dark:text-gray-300">
          Oops! Page Not Found
        </h3>
        <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
          We {`couldn't`} find the page you were looking for. It might have been moved or deleted.
        </p>
        <Button
          onClick={() => (window.location.href = '/')}
          className="w-full max-w-xs rounded-lg bg-blue-600 py-3 text-white shadow-md transition duration-300 ease-in-out hover:bg-blue-700"
        >
          Go Back Home
        </Button>
        <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">Or try another page.</p>
      </div>
    </div>
  );
}
