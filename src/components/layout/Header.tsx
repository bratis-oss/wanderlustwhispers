
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Sun, Moon, Search, Menu, X } from 'lucide-react';

const languages = [
  { code: 'es', name: 'Español' },
  { code: 'ca', name: 'Catalán' },
  { code: 'gl', name: 'Gallego' },
  { code: 'eu', name: 'Euskera' },
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' }
];

const navItems = [
  { path: '/', label: 'Inicio' },
  { path: '/destinos', label: 'Destinos' },
  { path: '/escapadas', label: 'Escapadas' },
  { path: '/consejos-de-viaje', label: 'Consejos de viaje' },
  { path: '/vida-nomada', label: 'Vida nómada' },
  { path: '/sobre-nomadgo', label: 'Sobre NomadGo' }
];

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState('es');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

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

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    // In a real implementation, this would activate language change logic
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
              <div className="flex items-center">
                <Input 
                  type="text" 
                  placeholder="Buscar..." 
                  className="w-48 pr-8"
                  autoFocus
                  onBlur={() => setSearchOpen(false)}
                />
                <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              </div>
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
                  onClick={() => changeLanguage(lang.code)}
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
                <div className="relative">
                  <Input 
                    type="text" 
                    placeholder="Buscar..." 
                    className="w-full pr-8"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                </div>

                <div className="flex justify-between">
                  {/* Language Selector */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        {language.toUpperCase()}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {languages.map((lang) => (
                        <DropdownMenuItem 
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
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
                    {isDark ? "Modo Claro" : "Modo Oscuro"}
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
