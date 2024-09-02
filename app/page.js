'use client';
import { ThemeProvider } from './context/ThemeContext.js';
import Whastapp from './components/Whastapp.js';
import Background from './components/Background.js';
import Hero from './components/Hero.js';
import Carrousel from './components/Carrousel.js';
import TeacherSection from './components/TeacherSection.js'
import NewsLetters from './components/NewsLetters.js'

export default function App() {  
 
  return (
    <ThemeProvider>
      <Background>
        <Whastapp />       
        <Hero/>
        <Carrousel/>
        <TeacherSection/>
        <NewsLetters/>
      </Background>    
    </ThemeProvider>
  );
}
