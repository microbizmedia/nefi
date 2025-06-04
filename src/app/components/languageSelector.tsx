'use client';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'en', label: 'EN', flag: '/icons/en.png' },
    { code: 'mk', label: 'MK', flag: '/icons/mk.png' },
    { code: 'de', label: 'DE', flag: '/icons/de.png' },
  ];

  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  // 🔍 Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="flex items-center gap-2  rounded-md cursor-pointer"
      >
        <li className="list-none">{t('Language')}</li>
        <Image src={currentLang.flag} alt={currentLang.label} width={20} height={14} />
      </button>

      {isOpen && (
        <div className="absolute mt-2 right-0 w-32 bg-white border border-gray-300/100 rounded-md shadow z-10">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className="flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-gray-100"
            >
              <Image src={lang.flag} alt={lang.label} width={20} height={14} />
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
