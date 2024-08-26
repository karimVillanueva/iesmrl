'use client';
import { useState } from 'react';
import Link from 'next/link';
import BackgroundVideo from 'next-video/background-video';
import adnVideo from '/videos/adn.mp4';
import logo from '../public/logo_oscuro_no_bg.svg'
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa6'


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);    
  }
  return (
    <>
    <a
      href="https://wa.me/+525562109769" // Reemplaza con tu número
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 transition-transform duration-300 transform hover:scale-110"
    >
       <FaWhatsapp color='white' className='w-7 h-7 md:w-10 md:h-10' />
    </a>
    <header className="bg-[#bca61c] p-4 ">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <div className="text-white text-xl font-bold ">
              <Link href="/">
                <Image src={logo} alt="Logo" className="h-8" /> {/* Ajusta la altura según sea necesario */}
              </Link>
            </div>

            {/* Nav Links */}
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-white hover:text-blue-300">Nosotros</Link>
              <Link href="/services" className="text-white hover:text-blue-300">Diplomados</Link>
              <Link href="/contact" className="text-white hover:text-blue-300">Contacto</Link>
            </nav>

            {/* Hamburger Icon */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-white focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden mt-4 ${isOpen ? 'block' : 'hidden'}`}>
            <Link href="/" className="block text-white hover:text-blue-300 mb-2">Inicio</Link>
            <Link href="/services" className="block text-white hover:text-blue-300 mb-2">Servicios</Link>
            <Link href="/contact" className="block text-white hover:text-blue-300">Contacto</Link>
          </div>
    </header>

    <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      <BackgroundVideo src={adnVideo} >
        <div className="bg-white opacity-100 mix-blend-multiply font-bold text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
        <Image src={logo} alt="Logo" />
          </div> 
      </BackgroundVideo>
    </div>
   <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      <h1>
      <q> Transforma tu futuro con la última vanguardia en medicina regenerativa y longevidad. Ofrecemos una formación integral y avanzada para profesionales apasionados por innovar en el campo de la salud y el bienestar. Conviértete en un líder en el avance de tratamientos que potencian la calidad de vida y promueven una vida más larga y saludable.</q>
      </h1>
      </div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Diplomados{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Descubre nuestros cursos avanzados en medicina regenerativa y longevidad, y da el siguiente paso en tu carrera profesional con formación de vanguardia.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docentes{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Conoce a nuestros expertos docentes y descubre la excelencia en educación que impulsa el futuro de la medicina regenerativa y longevidad.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Intalaciones{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Explora nuestras modernas instalaciones y descubre el entorno donde la innovación en medicina regenerativa cobra vida.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Calendario{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
          Accede a nuestro calendario de diplomados y organiza tu formación para dominar las últimas innovaciones en medicina regenerativa y longevidad.
          </p>
        </a>
      </div>
    </main>
    </>
  );
}
