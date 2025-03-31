
import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Sun, Moon, Search, Menu, X } from 'lucide-react';
import { useLanguage, Language, getLanguageLabel } from '@/contexts/LanguageContext';

const languages = [
  { code: 'es', name: 'Español' },
  { code: 'ca', name: 'Catalán' },
  { code: 'gl', name: 'Gallego' },
  { code: 'eu', name: 'Euskera' },
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' }
];

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/destinos', label: t('nav.destinations') },
    { path: '/escapadas', label: t('nav.getaways') },
    { path: '/consejos-de-viaje', label: t('nav.travelTips') },
    { path: '/vida-nomada', label: t('nav.nomadLife') },
    { path: '/sobre-nomadgo', label: t('nav.about') }
  ];

  useEffect(() => {
    if (localStorage.theme === 'dark' || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    // En una implementación real, aquí se podría guardar la preferencia en localStorage
    localStorage.setItem('preferredLanguage', lang);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log(`Buscando: ${searchTerm}`);
      // En una implementación real, aquí redirigirías a la página de resultados
      // navigate(`/buscar?q=${encodeURIComponent(searchTerm)}`);
      
      // Por ahora solo cerramos el buscador después de buscar
      setSearchOpen(false);
      setSearchTerm('');
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur shadow-md py-2' : 'py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-primary">
          NomadGo
        </NavLink>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink 
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Right Section */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            {searchOpen ? (
              <form onSubmit={handleSearch} className="flex items-center">
                <Input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={t('search.placeholder')}
                  className="w-48 pr-8"
                  autoFocus
                  onBlur={() => !searchTerm && setSearchOpen(false)}
                />
                <button 
                  type="submit" 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                >
                  <Search size={18} />
                </button>
              </form>
            ) : (
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setSearchOpen(true)}
              >
                <Search size={20} />
              </Button>
            )}
          </div>

          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                {language.toUpperCase()}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem 
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code as Language)}
                  className={language === lang.code ? "bg-secondary" : ""}
                >
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Dark Mode Toggle */}
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleDarkMode}
            title={isDark ? t('lightMode') : t('darkMode')}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-16 bg-background z-40 lg:hidden">
            <div className="container py-6 flex flex-col">
              <nav className="flex flex-col space-y-4 mb-8">
                {navItems.map((item) => (
                  <NavLink 
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) => 
                      `text-lg ${isActive ? 'text-primary font-medium' : 'text-foreground'}`
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>

              <div className="flex flex-col space-y-4">
                <form onSubmit={handleSearch} className="relative">
                  <Input 
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder={t('search.placeholder')}
                    className="w-full pr-8"
                  />
                  <button 
                    type="submit"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                  >
                    <Search size={18} />
                  </button>
                </form>

                <div className="flex justify-between">
                  {/* Language Selector */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        {getLanguageLabel(language)}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {languages.map((lang) => (
                        <DropdownMenuItem 
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code as Language)}
                          className={language === lang.code ? "bg-secondary" : ""}
                        >
                          {lang.name}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  {/* Dark Mode Toggle */}
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={toggleDarkMode}
                  >
                    {isDark ? <Sun size={16} className="mr-2" /> : <Moon size={16} className="mr-2" />}
                    {isDark ? t('lightMode') : t('darkMode')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
