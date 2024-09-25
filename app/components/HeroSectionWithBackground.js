'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import dna from '/public/dna.jpg'; // Asegúrate de que la ruta a la imagen sea correcta

const HeroSectionWithBackground = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "\u00DA nete a nuestra escuela líder en medicina regenerativa y longevidad.";

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(index)); // Usa charAt para evitar undefined
        index += 1;
      } else {
        clearInterval(interval);
      }
    }, 100); // Ajusta la velocidad de la máquina de escribir aquí

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, []);

  return (
    <section id="start" className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${dna.src})` }}>
      {/* Imagen para SEO y accesibilidad */}
      <Image
        src={dna}
        alt="Imagen de ADN representando la medicina regenerativa"
        layout="fill"
        objectFit="cover"
        className="hidden"
      />
      
      {/* Contenido encima del background */}
      <div className="flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50 text-white text-center p-4 rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-glow">Transforma el Futuro de la Salud</h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl max-w-xl">{displayedText}</p>
        <Link href="#carrousel" className="mt-6 inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
          Descubre Nuestros Programas
        </Link>
      </div>
    </section>
  );
};

export default HeroSectionWithBackground;
