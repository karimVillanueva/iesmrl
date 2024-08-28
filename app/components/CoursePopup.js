// components/CoursePopup.js
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const CoursePopup = ({ course, isVisible, onClose }) => {
  const { isDarkTheme } = useTheme();

  if (!isVisible) return null; // No renderizar si el popup no es visible

  return (
    <div
      className={` inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ${isDarkTheme === false ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}
      onClick={onClose}
    >
      <div
        className={`relative bg-white dark:bg-gray-800 p-8 rounded-lg w-full max-w-xl mx-4 ${isDarkTheme === false ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className={`text-2xl font-bold mb-4 ${isDarkTheme === false ? ' text-white' : ' text-black'}`}>{course.title}</h2>
        <p className="mb-2"><strong>Instructor:</strong> {course.instructor}</p>
        <p className="mb-2"><strong>Fecha de inicio:</strong> {course.startDate}</p>
        <p className="mb-2"><strong>Duración:</strong> {course.duration}</p>
        <p className="mb-4"><strong>Horario de clases:</strong> {course.schedule}</p>
        
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-sm text-gray-500 hover:text-gray-700"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default CoursePopup;
