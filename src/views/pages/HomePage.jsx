// App.js
import React from 'react';
import Header from '../layout/header';
import Introduction from '../components/introduction';
import FeaturedArtworks from '../components/featureArtwork';
import Hero from '../components/hero';
import Footer from '../layout/footer';

function HomePage() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Introduction />
      <FeaturedArtworks />
      <Footer />
    </div>
  );
}

export default HomePage;
