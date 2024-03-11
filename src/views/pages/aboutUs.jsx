import React from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";

function AboutUs() {
  return (
    <div className="font-sans">
      <Header />
      <section className="bg-cream-100 py-12">
        <h1 className="text-4xl font-bold text-teal-700 text-center mb-16">
          About Us
        </h1>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Section 1: Introduction */}
          <div className="flex flex-col space-y-4 mx-6">
            <h1 className="text-4xl font-bold text-teal-700">Who We Are</h1>
            <p className="text-xl text-gray-700">
              We are ThiArtGalry, a premier destination for art enthusiasts.
              Founded with a passion for art and a vision to showcase
              extraordinary talent, ThiArtGalry is dedicated to curating a
              diverse collection of contemporary artworks that inspire and
              captivate.
            </p>
          </div>

          {/* Image for Section 1 (replace with your image URL) */}
          <img
            src="https://picsum.photos/id/1003/800/400"
            alt="Gallery Interior"
            className="object-cover w-full h-full rounded-md md:rounded-tl-md md:rounded-bl-md"
          />

          {/* Section 2: Our Mission */}
          <div className="flex flex-col space-y-4 mx-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700">
              At ThiArtGalry, our mission is to celebrate creativity and foster
              a deeper appreciation for the arts. We strive to create a platform
              where artists can thrive and art enthusiasts can discover new
              inspirations. Through our commitment to quality, innovation, and
              inclusivity, we aim to enrich lives through the power of art.
            </p>
          </div>
          <img
            src="https://picsum.photos/id/1004/800/400"
            alt="Artwork Showcase"
            className="object-cover w-full h-full rounded-md md:rounded-tr-md md:rounded-br-md"
          />

          {/* Section 3: Our Values */}
          <div className="flex flex-col space-y-4 mx-6">
            <h2 className="text-2xl font-semibold text-gray-800">Our Values</h2>
            <ul className="list-disc pl-6">
              <li className="text-lg text-gray-700">
                Passion for Art: We are driven by our love for art and our
                desire to share it with the world.
              </li>
              <li className="text-lg text-gray-700">
                Creativity: We value creativity and innovation, both in the
                artworks we showcase and in our approach to curating and
                presenting them.
              </li>
              <li className="text-lg text-gray-700">
                Inclusivity: We believe that art should be accessible to all,
                regardless of background or experience, and strive to create an
                inclusive environment for artists and art enthusiasts alike.
              </li>
              <li className="text-lg text-gray-700">
                Excellence: We are committed to excellence in everything we do,
                from selecting artworks for our collection to providing
                exceptional customer service.
              </li>
            </ul>
          </div>

          {/* Section 4: Our Team */}
          <div className="flex flex-col space-y-4 mx-6">
            <h2 className="text-2xl font-semibold text-gray-800">Our Team</h2>
            <p className="text-lg text-gray-700">
              Meet the passionate individuals behind ThiArtGalry who work
              tirelessly to bring the best of contemporary art to our audience.
            </p>
            <div className="flex space-x-4">
              {/* Team Member 1 */}
              <div className="flex flex-col items-center">
                <img
                  src="https://randomuser.me/api/portraits/women/1.jpg"
                  alt="Team Member 1"
                  className="w-20 h-20 rounded-full"
                />
                <p className="text-gray-700">Jane Doe</p>
                <p className="text-sm text-gray-600">Curator</p>
              </div>
              {/* Team Member 2 */}
              <div className="flex flex-col items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/2.jpg"
                  alt="Team Member 2"
                  className="w-20 h-20 rounded-full"
                />
                <p className="text-gray-700">John Smith</p>
                <p className="text-sm text-gray-600">Marketing Manager</p>
              </div>
              {/* Add more team members as needed */}
            </div>
          </div>

          {/* ... repeat for other sections */}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default AboutUs;
