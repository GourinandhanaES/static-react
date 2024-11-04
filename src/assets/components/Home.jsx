import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="home">
      <div className="overlay">
        <h1>BUILD YOUR BODY <br /> <span className='head'>TRANSFORM YOUR LIFE</span></h1>
        <div className="button">
          <a href="#contact"><button className="cta-button">GET STARTED</button></a>
        </div>
      </div>
    </section>
  );
};

export default Home;
