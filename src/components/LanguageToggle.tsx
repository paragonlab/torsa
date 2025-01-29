import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative inline-flex items-center p-1 rounded-full bg-gray-800 shadow-inner">
      <button
        onClick={() => setLanguage('es')}
        className={`relative px-3 py-1 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 ${
          language === 'es'
            ? 'text-white bg-green-600'
            : 'text-gray-400 hover:text-white'
        }`}
        aria-label="Cambiar a Español"
        aria-pressed={language === 'es'}
      >
        ES
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`relative px-3 py-1 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 ${
          language === 'en'
            ? 'text-white bg-green-600'
            : 'text-gray-400 hover:text-white'
        }`}
        aria-label="Switch to English"
        aria-pressed={language === 'en'}
      >
        EN
      </button>
    </div>
  );
}