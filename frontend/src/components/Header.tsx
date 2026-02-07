import React, { useState, useEffect } from 'react';
import logo from '../assets/react.svg';

function Header() {
  const [scrolling, setScrolling] = useState(false);

  // Detect scroll event
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-18 p-4 flex items-center justify-between shadow-md z-50 
        ${scrolling ? 'backdrop-blur-xs text-white' : ' backdrop-blur-xs bg-gradient-to-r from-slate-900/60 to-gray-600/60 text-white'}
        transition-all duration-500 ease-in-out`}
    >
      <div className="flex items-center space-x-4">
        <a href="/"><img src={logo} alt="Logo" className="h-8 transform hover:animate-spin transition-all duration-300" /></a>
      </div>
      <nav className="flex space-x-6">
        <a href="#" className="underline-animation">Hem</a>
        <a href="#" className="underline-animation">Produkter</a>
        <a href="#" className="underline-animation">Kontakta oss</a>
        <a href="#" className="underline-animation">Om oss</a>
      </nav>
    </header>
  );
}

export default Header;
