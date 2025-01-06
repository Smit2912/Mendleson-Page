import React from 'react';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Projects from './components/Projects';
import Clients from './components/Clients';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative font-rubik overflow-x-hidden">
      <HeroSection />
      <About/>
      <Services/>
      <Team/>
      <Projects/>
      <Clients/>
      <Footer />
    </div>
  );
}

export default App;
