// components/Introduction.js
import React from 'react';
import { useState } from 'react';

function Introduction() {
  const [yourName, setYourName] = useState('ThiArtGalry');
  return (
    <section className="bg-cream-100 py-12">
      <h1 className="text-4xl font-bold text-teal-700 text-center mb-16">Our Gallery</h1>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Section 1: Welcome message */}
        <div className="flex flex-col space-y-4 mx-6">
          <h1 className="text-4xl font-bold text-teal-700">Welcome to {yourName}'s Art Gallery</h1>
          <p className="text-xl text-gray-700">
            Discover the captivating world of contemporary art through the lens of {yourName}'s unique vision.
          </p>
          <p className="text-lg text-gray-700">
            Step into a virtual realm where creativity knows no bounds and explore a diverse collection of artworks that speak to the soul.
          </p>
        </div>

        {/* Image for Section 1 (replace with your image URL) */}
        <img
          src="https://picsum.photos/id/1001/800/400"
          alt="Abstract artwork"
          className="object-cover w-full h-full rounded-md md:rounded-tl-md md:rounded-bl-md"
        />

        {/* Remaining sections will follow the same structure */}
        {/* Section 2: Exquisite Collections */}
        <div className="flex flex-col space-y-4 mx-6">
          <h2 className="text-2xl font-semibold text-gray-800">Exquisite Collections</h2>
          <p className="text-lg text-gray-700">
            Experience an eclectic array of artistic expressions curated by {yourName} himself/herself. From vibrant abstract compositions to thought-provoking sculptures, each piece invites you to delve deeper into its meaning and craftsmanship.
          </p>
        </div>
        <img
          src="https://picsum.photos/id/1002/800/400"
          alt="Sculpture"
          className="object-cover w-full h-full rounded-md md:rounded-tr-md md:rounded-br-md"
        />

        {/* ... repeat for other sections */}
      </div>
    </section>
  );
}

export default Introduction;

