import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className='foothead'>50% OFF TRIAL <br />TRAINING</h2>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">JOIN NOW <br />[+]</button>
      </form>
    </section>
  );
};

export default Contact;
