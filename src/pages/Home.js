import React from 'react';

import { HeroSection } from '../component/HeroSection';
import Navbar from '../component/Navbar';
import Services from '../component/Services';
import Footer from '../component/Footer';

function Home () {

  return (
    <section className='page-home'>
      <Navbar />
      <HeroSection />
      <Services />
      <Footer />
    </section>
    
  );
}

export default Home;
