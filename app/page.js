'use client';
import { ThemeProvider } from './context/ThemeContext.js';
import Header from './components/Header.js';
import Whastapp from './components/Whastapp.js';
import Background from './components/Background.js';
import Hero from './components/Hero.js';
import Carrousel from './components/Carrousel.js';

export default function App() {  
 
  return (
    <ThemeProvider>
      <Background>
        <Whastapp />
        <Header />
        <Hero/>
        <Carrousel/>
      </Background>
    </ThemeProvider>
  );
}
