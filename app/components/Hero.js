'use client';
import React from 'react'
import { useTheme } from '../context/ThemeContext';
import HeroSectionWithBackground from './HeroSectionWithBackground'
import Header from './Header'


function Hero() {
    const { isDarkTheme } = useTheme();
  
    return (
      <div
        className={`hero-content h-min-screen  rounded-lg ${
          isDarkTheme ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
        }`}
      >
       <Header/>
       <HeroSectionWithBackground/>
      </div>
    );
}

export default Hero
