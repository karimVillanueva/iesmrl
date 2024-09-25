// components/AvalesSection.js
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Image from 'next/image';

const AvalesSection = () => {
    const { isDarkTheme } = useTheme();

    const institutions = [
        {
            name: 'Universidad Autónoma de Tlaxcala',
            logo: 'https://drive.google.com/uc?export=download&id=11DelyMtYibbQlDQo7kG33Aoca0LN_Smv', 
        },
        {
            name: 'Clínica Biomedica AXOLOTL',
            logo: 'https://drive.google.com/uc?export=download&id=10zAj-U5RZBybB3p2SNEwIj8akRNYXSbk',
        },
        {
            name: 'Livceller',
            logo: 'https://drive.google.com/uc?export=download&id=10zV4v2aa23HdJrXopaffo0Yg0kFqzAMg', 
        },
    ];

      return (
        <section className={`py-10 ${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-[#eeebd4] text-gray-900'}`}>
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Diplomados avalados por</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {institutions.map((institution, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="w-32 h-32  overflow-hidden mb-4">
                                <Image 
                                    src={institution.logo} 
                                    alt={institution.name} 
                                    className="w-full h-full " 
                                    width={500} 
                                    height={500} 
                                />
                            </div>
                            <h3 className="text-xl font-semibold">{institution.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AvalesSection;
