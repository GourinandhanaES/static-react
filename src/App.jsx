import React from 'react';
import Home from './assets/components/Home';
import Navbar from './assets/components/Navbar';
import Service from './assets/components/Service';
import Program from './assets/components/Program';
import Location from './assets/components/Location';
import Contact from './assets/components/Contact';
import Footer from './assets/components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Service />
      <Program />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
