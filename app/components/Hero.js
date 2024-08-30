'use client';
import React from 'react'
import { useTheme } from '../context/ThemeContext';
import HeroSectionWithBackground from './HeroSectionWithBackground'


function Hero() {
    const { isDarkTheme } = useTheme();
  
    return (
      <div
        className={`hero-content  rounded-lg ${
          isDarkTheme ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
        }`}
      >
       <HeroSectionWithBackground/>
      </div>
    );
}

export default Hero
