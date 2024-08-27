'use client';
import { ThemeProvider } from './context/ThemeContext.js';
import Header from './components/Header.js';
import Whastapp from './components/Whastapp.js';
import Background from './components/Background.js'


export default function App({ Component, pageProps }) {  
 
  return (
    <ThemeProvider>
      <Background>
        <Whastapp {...pageProps}/>
        <Header {...pageProps}/>
      </Background>
    </ThemeProvider>
  );
}
