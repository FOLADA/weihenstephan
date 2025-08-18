import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'ka' | 'ru' | 'en';

interface Translations {
  [key: string]: {
    ka: string;
    ru: string;
    en: string;
  };
}

const translations: Translations = {
  // Navigation
  gallery: { ka: 'გალერეა', ru: 'Галерея', en: 'Gallery' },
  menu: { ka: 'მენიუ', ru: 'Меню', en: 'Menu' },
  contact: { ka: 'კონტაქტი', ru: 'Контакт', en: 'Contact' },
  language: { ka: 'ენა', ru: 'Язык', en: 'Language' },
  
  // Hero
  welcomeTo: { ka: 'კეთილი იყოს თქვენი მობრძანება', ru: 'Добро пожаловать в', en: 'Welcome to' },
  weihenstephan: { ka: 'ვაიჰენშტეფანი', ru: 'Вайхенштефан', en: 'Weihenstephan' },
  heroDescription: { 
    ka: 'გამოცადეთ ულმობელი ბავარიული ტრადიცია, სადაც საუკუნოვანი ლუდის მემკვიდრეობა ხვდება თანამედროვე კულინარიულ ხელოვნებას ლუქსუსისა და ავთენტურობის ატმოსფეროში.',
    ru: 'Окунитесь в лучшие баварские традиции, где многовековое пивоваренное наследие встречается с современным кулинарным мастерством в атмосфере роскоши и подлинности.',
    en: 'Experience the finest Bavarian tradition, where centuries of brewing heritage meets modern culinary excellence in an atmosphere of luxury and authenticity.'
  },
  
  // Menu
  beer: { ka: 'ლუდი', ru: 'Пиво', en: 'Beer' },
  wine: { ka: 'ღვინო', ru: 'Вино', en: 'Wine' },
  coffee: { ka: 'ყავა/ჩაი', ru: 'Кофе/Чай', en: 'Coffee/Tea' },
  cocktails: { ka: 'კოქტეილები', ru: 'Коктейли', en: 'Cocktails' },
  chacha: { ka: 'ჭაჭა', ru: 'Чача', en: 'Chacha' },
  brandy: { ka: 'ბრენდი/კონიაკი', ru: 'Бренди/Коньяк', en: 'Brandy/Cognac' },
  whiskey: { ka: 'ვისკი', ru: 'Виски', en: 'Whiskey' },
  vodka: { ka: 'არაყი/ტეკილა', ru: 'Водка/Текила', en: 'Vodka/Tequila' },
  softDrinks: { ka: 'უალკოჰოლო სასმელები', ru: 'Безалкогольные напитки', en: 'Soft Drinks' },
  serviceCharge: { ka: 'მომსახურების საფასური: 10%', ru: 'Плата за обслуживание: 10%', en: 'Service charge: 10%' },
  
  // Contact
  reserveNow: { ka: 'დაჯავშნეთ ახლავე', ru: 'Забронировать сейчас', en: 'Reserve Now' },
  address: { ka: 'მისამართი', ru: 'Адрес', en: 'Address' },
  phone: { ka: 'ტელეფონი', ru: 'Телефон', en: 'Phone' },
  
  // Footer
  followUs: { ka: 'გამოგვყევით', ru: 'Следите за нами', en: 'Follow Us' },
  allRightsReserved: { ka: 'ყველა უფლება დაცულია', ru: 'Все права защищены', en: 'All rights reserved' }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ka');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};