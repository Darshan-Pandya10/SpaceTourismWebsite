import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex mx-auto items-center justify-center m-6 w-fit h-fit p-4 ">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">Oops! Page Not Found</h1>
        <p className="text-lg md:text-xl mb-8">The page you are looking for does not exist.</p>
        <Link to="/" className="font-semibold tracking-wider hover:text-blue-700 text-lg">Go back to homepage.</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
