import React from 'react';
import Header from './components/header';
import HeroSection from './components/HeroSection';
import MentoringSection from './components/MentoringSection';
import Testimonials from './components/Testimonials';
import NewsEvents from './components/NewsEvents';
import Footer from './components/Footer';
import "semantic-ui-css/semantic.min.css";
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <HeroSection />
      <MentoringSection />
      <Testimonials />
      <NewsEvents />
      <Footer />
    </div>
  );
}

export default App;