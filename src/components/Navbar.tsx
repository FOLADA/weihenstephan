import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const languageOptions = [
    { code: 'ka' as const, name: 'ქართული', flag: '🇬🇪' },
    { code: 'ru' as const, name: 'Русский', flag: '🇷🇺' },
    { code: 'en' as const, name: 'English', flag: '🇺🇸' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-xl shadow-2xl border-b border-primary/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Navigation */}
          <div className="hidden lg:flex items-center space-x-12 animate-slide-in-left">
            <button
              onClick={() => scrollToSection('gallery')}
              className="group relative px-4 py-2 text-foreground hover:text-primary transition-all duration-300 font-medium"
            >
              <span className="relative z-10">{t('gallery')}</span>
              <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="group relative px-4 py-2 text-foreground hover:text-primary transition-all duration-300 font-medium"
            >
              <span className="relative z-10">{t('menu')}</span>
              <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
            </button>
          </div>

          {/* Center Logo */}
          <div className="flex-1 flex justify-center lg:flex-initial animate-fade-in">
            <div className="relative group">
              <img
                src={logo}
                alt="Weihenstephan Logo"
                className="h-14 w-auto object-contain transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-0 group-hover:scale-125 transition-all duration-500 -z-10"></div>
            </div>
          </div>

          {/* Right Navigation */}
          <div className="hidden lg:flex items-center space-x-8 animate-slide-in-right">
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative px-4 py-2 text-foreground hover:text-primary transition-all duration-300 font-medium"
            >
              <span className="relative z-10">{t('contact')}</span>
              <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
            </button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="group relative px-4 py-2 text-foreground hover:text-primary transition-all duration-300 font-medium">
                  <Globe className="h-4 w-4 mr-2" />
                  <span>{languageOptions.find(opt => opt.code === language)?.flag}</span>
                  <span className="ml-2">{languageOptions.find(opt => opt.code === language)?.name}</span>
                  <ChevronDown className="h-4 w-4 ml-2 transition-transform group-data-[state=open]:rotate-180" />
                  <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="luxury-card border-0 min-w-[200px] p-2">
                {languageOptions.map((option) => (
                  <DropdownMenuItem 
                    key={option.code}
                    onClick={() => setLanguage(option.code)}
                    className={`text-foreground hover:bg-primary/20 rounded-md p-3 cursor-pointer transition-all duration-200 ${
                      language === option.code ? 'bg-primary/10 text-primary' : ''
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
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-primary/20 animate-fade-in">
            <div className="px-6 py-8 space-y-6">
              <button
                onClick={() => scrollToSection('gallery')}
                className="block w-full text-left py-3 text-foreground hover:text-primary transition-colors font-medium text-lg"
              >
                {t('gallery')}
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="block w-full text-left py-3 text-foreground hover:text-primary transition-colors font-medium text-lg"
              >
                {t('menu')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left py-3 text-foreground hover:text-primary transition-colors font-medium text-lg"
              >
                {t('contact')}
              </button>
              <div className="pt-4 border-t border-primary/20">
                <p className="text-sm text-muted-foreground mb-4">{t('language')}</p>
                <div className="space-y-3">
                  {languageOptions.map((option) => (
                    <button 
                      key={option.code}
                      onClick={() => {
                        setLanguage(option.code);
                        setIsMenuOpen(false);
                      }}
                      className={`flex items-center w-full text-left py-2 transition-colors font-medium ${
                        language === option.code ? 'text-primary' : 'text-foreground hover:text-primary'
                      }`}
                    >
                      <span className="mr-3 text-lg">{option.flag}</span>
                      <span>{option.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;