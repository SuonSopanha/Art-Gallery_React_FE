// components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-700">Connect with us:</p>
          <ul className="flex justify-center mt-4">
            <li className="mr-4"><a href="#" className="text-blue-500 hover:text-blue-600">Facebook</a></li>
            <li className="mr-4"><a href="#" className="text-blue-500 hover:text-blue-600">Twitter</a></li>
            <li><a href="#" className="text-blue-500 hover:text-blue-600">Instagram</a></li>
          </ul>
        </div>
        <div className="mt-8">
          <p className="text-center text-gray-700">&copy; 2024 [Your Name]'s Art Gallery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
