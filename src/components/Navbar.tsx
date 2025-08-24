import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();

  const languageOptions = [
    { code: 'ka', name: 'KA', flag: '🇬🇪' },
    { code: 'ru', name: 'RU', flag: '🇷🇺' },
    { code: 'en', name: 'EN', flag: '🇺🇸' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setMenuVisible(false);
      setTimeout(() => setIsMenuOpen(false), 500);
    } else {
      setIsMenuOpen(true);
      setTimeout(() => setMenuVisible(true), 20);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    toggleMenu();
  };

  const redirectTo = (path: string) => {
    navigate(path);
    if (isMenuOpen) toggleMenu();
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-white/30 backdrop-blur-2xl shadow-2xl border-b border-primary/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20 relative">

          {/* Desktop Left Navigation */}
          <div className="hidden lg:flex items-center space-x-8 animate-slide-in-left">
            {['gallery', 'menu'].map(section => (
              <button
                key={section}
                onClick={() => redirectTo(`/${section}`)}
                className="group relative px-4 py-2 text-lg lg:text-xl font-serif text-foreground hover:text-yellow-500 font-semibold transition-all duration-500"
              >
                <span className="relative z-10">{t(section)}</span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-100/20 to-yellow-200/20 scale-0 group-hover:scale-100 transition-transform duration-500 origin-center"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 group-hover:w-full group-hover:left-0 transition-all duration-500"></div>
              </button>
            ))}
          </div>

          {/* Desktop Logo */}
          <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 animate-fade-in">
            <div className="relative group">
              <div
                className="text-4xl font-[Fraktur] tracking-wide 
                           bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-500
                           text-transparent bg-clip-text
                           drop-shadow-[0_0_4px_rgba(139,69,19,0.6)]
                           transition-transform duration-500 group-hover:scale-110"
              >
                <Link to="/">Weihenstephan</Link>
              </div>
              <div
                className="absolute inset-0 rounded-full blur-3xl 
                           bg-gradient-to-r from-amber-900/30 via-yellow-800/20 to-amber-900/30 
                           opacity-70 scale-0 group-hover:scale-125 
                           transition-transform duration-700 -z-10"
              ></div>
              <div
                className="absolute inset-0 blur-2xl 
                           bg-gradient-to-r from-amber-600/30 via-yellow-500/20 to-amber-600/30
                           opacity-0 group-hover:opacity-100 
                           transition-opacity duration-700 -z-10"
              ></div>
            </div>
          </div>

          {/* Mobile Language Buttons */}
          <div className="flex lg:hidden space-x-3">
            {languageOptions.map(option => (
              <Button
                key={option.code}
                variant={language === option.code ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLanguage(option.code)}
                className="px-3 py-2 text-sm font-semibold"
              >
                {option.name}
              </Button>
            ))}
          </div>

          {/* Desktop Right Navigation */}
          <div className="hidden lg:flex items-center space-x-6 animate-slide-in-right">
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative px-4 py-2 text-lg lg:text-xl font-serif text-foreground hover:text-yellow-500 font-semibold transition-all duration-500"
            >
              <span className="relative z-10">{t('contact')}</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-100/20 to-yellow-200/20 scale-0 group-hover:scale-100 transition-transform duration-500 origin-center"></div>
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 group-hover:w-full group-hover:left-0 transition-all duration-500"></div>
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="group relative px-4 py-2 text-lg lg:text-xl text-foreground hover:text-yellow-500 font-semibold transition-all duration-500 flex items-center gap-2"
                >
                  <span>{languageOptions.find(opt => opt.code === language)?.flag}</span>
                  <span className="ml-1">{languageOptions.find(opt => opt.code === language)?.name}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="luxury-card border-0 min-w-[200px] p-2 rounded-2xl shadow-xl bg-white/80 backdrop-blur-lg"
              >
                {languageOptions.map(option => (
                  <DropdownMenuItem
                    key={option.code}
                    onClick={() => setLanguage(option.code)}
                    className={`flex items-center p-3 rounded-md transition-all duration-200 cursor-pointer ${
                      language === option.code
                        ? 'bg-yellow-100 text-yellow-600'
                        : 'text-foreground hover:bg-yellow-200/20'
                    }`}
                  >
                    <span className="mr-3 text-lg">{option.flag}</span>
                    <span className="font-medium">{option.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center justify-end flex-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-foreground hover:text-yellow-500 transition-all duration-500"
            >
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </Button>
          </div>
        </div>

        {/* Mobile Overlay Menu */}
        {isMenuOpen && (
          <div
            className={`lg:hidden fixed inset-0 z-50 bg-gradient-to-b from-white/40 to-white/20 backdrop-blur-3xl shadow-2xl pt-24 px-6 transition-all duration-500 ease-in-out transform ${
              menuVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
            }`}
          >
            <div className="absolute top-6 right-6">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                className="text-foreground hover:text-yellow-500 transition-transform duration-300 transform hover:rotate-90 hover:scale-125"
              >
                <X className="h-7 w-7" />
              </Button>
            </div>

            <div className="flex flex-col items-center space-y-8">
              {['gallery', 'menu', 'about', 'contact'].map((section, i) => (
                <button
                  key={section}
                  onClick={() =>
                    section === 'contact'
                      ? scrollToSection('contact')
                      : redirectTo(`/${section}`)
                  }
                  className="text-2xl font-serif font-semibold text-yellow-700 hover:text-amber-600 transition-colors duration-300"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {t(section)}
                </button>
              ))}
              <div className="w-2/3 border-t border-yellow-300/60 mt-6"></div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
