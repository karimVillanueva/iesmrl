'use client';
import { ThemeProvider } from './context/ThemeContext.js';
import Header from './components/Header.js';
import Whastapp from './components/Whastapp.js';
import Background from './components/Background.js'


export default function App({ Component, pageProps: any }) {  
 
  return (
    <ThemeProvider>
      <Background>
        <Whastapp />
        <Header />
      </Background>
    </ThemeProvider>
  );
}
