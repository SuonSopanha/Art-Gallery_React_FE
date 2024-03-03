import React from "react";
import { useState } from "react";

const artworks = [
  {
    id: 1,
    imageUrl: "https://picsum.photos/id/1005/800/600", // Replace with your image URL
    title: "Ephemeral Symphony",
    description:
      "A vibrant abstract expressionist piece capturing the fleeting beauty of nature.",
    artist: "Your Name",
    price: 5000,
  },
  {
    id: 2,
    imageUrl: "https://picsum.photos/id/1001/800/600", // Replace with your image URL
    title: "Cityscape in Twilight",
    description: "A detailed cityscape bathed in the warm glow of twilight.",
    artist: "Jane Doe",
    price: 3500,
  },
  {
    id: 3,
    imageUrl: "https://picsum.photos/id/1024/800/600", // Replace with your image URL
    title: "Serene Meadow",
    description:
      "A peaceful landscape depicting a lush green meadow bathed in sunlight.",
    artist: "John Smith",
    price: 2000,
  },
  {
    id: 4,
    imageUrl: "https://picsum.photos/id/1008/800/600", // Replace with your image URL
    title: "Abstract Forms in Motion",
    description:
      "A dynamic composition of geometric shapes and bold colors, evoking a sense of movement and energy.",
    artist: "Your Name",
    price: 4000,
  },
  {
    id: 5,
    imageUrl: "https://picsum.photos/id/1014/800/600", // Replace with your image URL
    title: "The Dreamer's Garden",
    description:
      "A whimsical landscape filled with fantastical flora and fauna, inviting the viewer to enter a world of imagination.",
    artist: "Alice Jones",
    price: 2500,
  },
  {
    id: 6,
    imageUrl: "https://picsum.photos/id/1080/800/600", // Replace with your image URL
    title: "Portrait of Serenity",
    description:
      "A captivating portrait capturing the essence of peace and tranquility. ",
    artist: "David Lee",
    price: 6000,
  },
];

function FeaturedArtworks() {
  const categories = [
    "All",
    "Painting",
    "Drawing",
    "Sculpture",
    "Printmaking",
    "Photography",
    "Mixed Media",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArtworks = artworks.filter(
    (artwork) =>
      artwork.category === selectedCategory || selectedCategory === "All"
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section className="bg-cream-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-teal-700">
            Featured Artworks
          </h2>
        </div>
        <div className="container mx-auto px-4 flex justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category} // Use category as unique key
              className={`px-4 py-2 text-gray-700 hover:text-teal-700 border border-gray-300 rounded-md ${
                selectedCategory === category ? "bg-gray-100 text-teal-700" : ""
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {filteredArtworks.map((artwork) => (
            <div
              key={artwork.id}
              className="group shadow-md rounded-md overflow-hidden"
            >
              <img
                src={artwork.imageUrl}
                alt={artwork.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300 ease-in-out"
              />
              <div className="p-4 flex flex-col justify-between">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-teal-700">
                  {artwork.title}
                </h3>
                <p className="text-gray-700 line-clamp-2">
                  {artwork.description}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-gray-700 text-sm">
                    {artwork.artist}
                  </span>
                  <span className="text-teal-700 font-semibold text-sm">
                    ${artwork.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
            className="mx-auto mt-8 px-4 py-2 items-center text-teal-700 bg-gray-100 rounded-md hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Show More
          </button>
      </div>
    </section>
  );
}

export default FeaturedArtworks;
