
import React, { createContext, useState, useContext, ReactNode } from 'react';

export type Language = 'es' | 'ca' | 'gl' | 'eu' | 'en' | 'fr';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const languageLabels = {
  es: 'Español',
  ca: 'Catalán',
  gl: 'Gallego',
  eu: 'Euskera',
  en: 'English',
  fr: 'Français'
};

// Diccionarios simplificados para demostración
const translations: Record<Language, Record<string, string>> = {
  es: {
    'nav.home': 'Inicio',
    'nav.destinations': 'Destinos',
    'nav.getaways': 'Escapadas',
    'nav.travelTips': 'Consejos de viaje',
    'nav.nomadLife': 'Vida nómada',
    'nav.about': 'Sobre NomadGo',
    'search.placeholder': 'Buscar...',
    'notFound.title': '¡Destino no encontrado!',
    'notFound.description': 'Parece que te has perdido en el camino. Esta ruta no existe en nuestro mapa de viajes.',
    'notFound.button': 'Volver a Inicio',
    'darkMode': 'Modo Oscuro',
    'lightMode': 'Modo Claro'
  },
  ca: {
    'nav.home': 'Inici',
    'nav.destinations': 'Destinacions',
    'nav.getaways': 'Escapades',
    'nav.travelTips': 'Consells de viatge',
    'nav.nomadLife': 'Vida nòmada',
    'nav.about': 'Sobre NomadGo',
    'search.placeholder': 'Cercar...',
    'notFound.title': 'Destinació no trobada!',
    'notFound.description': 'Sembla que t\'has perdut pel camí. Aquesta ruta no existeix al nostre mapa de viatges.',
    'notFound.button': 'Tornar a Inici',
    'darkMode': 'Mode Fosc',
    'lightMode': 'Mode Clar'
  },
  gl: {
    'nav.home': 'Inicio',
    'nav.destinations': 'Destinos',
    'nav.getaways': 'Escapadas',
    'nav.travelTips': 'Consellos de viaxe',
    'nav.nomadLife': 'Vida nómade',
    'nav.about': 'Sobre NomadGo',
    'search.placeholder': 'Buscar...',
    'notFound.title': 'Destino non atopado!',
    'notFound.description': 'Parece que te perdiches no camiño. Esta ruta non existe no noso mapa de viaxes.',
    'notFound.button': 'Volver ao Inicio',
    'darkMode': 'Modo Escuro',
    'lightMode': 'Modo Claro'
  },
  eu: {
    'nav.home': 'Hasiera',
    'nav.destinations': 'Helmugak',
    'nav.getaways': 'Ihesaldiak',
    'nav.travelTips': 'Bidaia-aholkuak',
    'nav.nomadLife': 'Bizitza nomada',
    'nav.about': 'NomadGo-ri buruz',
    'search.placeholder': 'Bilatu...',
    'notFound.title': 'Helmuga ez da aurkitu!',
    'notFound.description': 'Badirudi bidean galdu zarela. Ibilbide hau ez dago gure bidaia-mapan.',
    'notFound.button': 'Hasierara itzuli',
    'darkMode': 'Modu Iluna',
    'lightMode': 'Modu Argia'
  },
  en: {
    'nav.home': 'Home',
    'nav.destinations': 'Destinations',
    'nav.getaways': 'Getaways',
    'nav.travelTips': 'Travel Tips',
    'nav.nomadLife': 'Nomad Life',
    'nav.about': 'About NomadGo',
    'search.placeholder': 'Search...',
    'notFound.title': 'Destination Not Found!',
    'notFound.description': 'Seems like you\'ve lost your way. This route doesn\'t exist on our travel map.',
    'notFound.button': 'Back to Home',
    'darkMode': 'Dark Mode',
    'lightMode': 'Light Mode'
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.destinations': 'Destinations',
    'nav.getaways': 'Escapades',
    'nav.travelTips': 'Conseils de voyage',
    'nav.nomadLife': 'Vie nomade',
    'nav.about': 'À propos de NomadGo',
    'search.placeholder': 'Rechercher...',
    'notFound.title': 'Destination non trouvée!',
    'notFound.description': 'Il semble que vous vous soyez perdu en chemin. Cette route n\'existe pas sur notre carte de voyage.',
    'notFound.button': 'Retour à l\'accueil',
    'darkMode': 'Mode Sombre',
    'lightMode': 'Mode Clair'
  }
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const getLanguageLabel = (code: Language): string => {
  return languageLabels[code] || code;
};
