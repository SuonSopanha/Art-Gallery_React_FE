// components/Hero.js
import React from 'react';

function Hero() {
  return (
    <div className="bg-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Background image */}
          <div className="relative">
            <img src='https://th.bing.com/th/id/R.57464ad2482d0b863b9c1565dc5e716e?rik=zB1WHKrduEq%2fQA&pid=ImgRaw&r=0' alt="Artwork" className="w-full h-64 object-cover  rounded-lg shadow-md" />
            <div className="absolute inset-0 bg-gray-800 opacity-25 rounded-lg"></div> {/* Overlay */}
          </div>
          <div className="relative z-10 mt-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-teal-900">Welcome to a World of Inspiration</h1>
            <p className="mt-4 text-lg text-teal-800">Discover breathtaking artworks that ignite your imagination</p>
            <button className="mt-8 bg-teal-700 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-full">Explore Gallery</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;


