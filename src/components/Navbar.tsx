import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import logo from '@/assets/logo.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          ? 'bg-background/95 backdrop-blur-xl shadow-2xl' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Navigation */}
          <div className="hidden lg:flex items-center space-x-8 animate-slide-in-left">
            <button
              onClick={() => scrollToSection('gallery')}
              className="navbar-link text-foreground hover:text-primary transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="navbar-link text-foreground hover:text-primary transition-colors"
            >
              Menu
            </button>
          </div>

          {/* Center Logo */}
          <div className="flex-1 flex justify-center lg:flex-initial animate-fade-in">
            <img
              src={logo}
              alt="Weihenstephan Logo"
              className="h-12 w-auto object-contain hover:scale-110 transition-transform duration-500 animate-glow"
            />
          </div>

          {/* Right Navigation */}
          <div className="hidden lg:flex items-center space-x-8 animate-slide-in-right">
            <button
              onClick={() => scrollToSection('contact')}
              className="navbar-link text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="navbar-link flex items-center space-x-2">
                  <span>ქართული</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="luxury-card border-0">
                <DropdownMenuItem className="text-foreground hover:bg-primary/20">
                  ქართული
                </DropdownMenuItem>
                <DropdownMenuItem className="text-foreground hover:bg-primary/20">
                  Русский
                </DropdownMenuItem>
                <DropdownMenuItem className="text-foreground hover:bg-primary/20">
                  English
                </DropdownMenuItem>
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
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection('gallery')}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
              <div className="pt-2 border-t border-primary/20">
                <p className="text-sm text-muted-foreground mb-2">Language</p>
                <div className="space-y-2">
                  <button className="block w-full text-left py-1 text-foreground hover:text-primary transition-colors">
                    ქართული
                  </button>
                  <button className="block w-full text-left py-1 text-foreground hover:text-primary transition-colors">
                    Русский
                  </button>
                  <button className="block w-full text-left py-1 text-foreground hover:text-primary transition-colors">
                    English
                  </button>
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