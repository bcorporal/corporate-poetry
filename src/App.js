import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

import Services from './components/Services'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
     <Services />
      <Testimonials />
      <About />
      <Contact />
 
      <Footer />
    </div>
  );
}

export default App;