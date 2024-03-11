import React from 'react';

function Header() {
  return (
    <nav className="bg-cream-100 shadow-md py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo or title */}
        <h1 className="text-2xl font-semibold text-teal-700">Your Art Gallery</h1>

        {/* Navigation links */}
        <ul className="hidden sm:flex space-x-4">
          <li>
            <a href="/" className="text-gray-700 hover:text-teal-700">Home</a>
          </li>
          <li>
            <a href="/about" className="text-gray-700 hover:text-teal-700">About Us</a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-teal-700">Artists</a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-teal-700">Exhibitions</a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-teal-700">Shop</a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-teal-700">Contact</a>
          </li>
          <li>
            <a href="#" className="px-4 py-2 text-gray-200   bg-teal-700 border border-gray-300 hover:bg-teal-500 rounded-xl">Login</a>
          </li>
        </ul>


        {/* Mobile navigation (optional) */}
        <button
          type="button"
          className="sm:hidden block p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Header;

