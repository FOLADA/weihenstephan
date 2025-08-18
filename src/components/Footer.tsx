import React from 'react';
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import logo from '@/assets/logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-primary/20">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <img
                src={logo}
                alt="Weihenstephan Logo"
                className="h-12 w-auto object-contain"
              />
              <div>
                <h3 className="text-xl font-bavarian font-bold text-foreground">
                  Weihenstephan
                </h3>
                <p className="text-sm text-muted-foreground">
                  Beer Museum & Restaurant
                </p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Experience the finest Bavarian tradition where centuries of brewing heritage 
              meets modern culinary excellence in an atmosphere of luxury and authenticity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bavarian font-semibold text-foreground">
              Quick Links
            </h4>
            <nav className="space-y-3">
              <a 
                href="#gallery" 
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Gallery
              </a>
              <a 
                href="#menu" 
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Menu
              </a>
              <a 
                href="#contact" 
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Contact
              </a>
              <a 
                href="tel:+995591123456" 
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Reservations
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bavarian font-semibold text-foreground">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-muted-foreground text-sm">
                    Kutaisi, Georgia
                  </p>
                  <p className="text-muted-foreground text-sm">
                    ქუთაისი, საქართველო
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <a 
                  href="tel:+995591123456"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  +995 591 12 34 56
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <a 
                  href="mailto:info@weihenstephan-kutaisi.ge"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  info@weihenstephan-kutaisi.ge
                </a>
              </div>
            </div>
          </div>

          {/* Social & Hours */}
          <div className="space-y-6">
            <h4 className="text-lg font-bavarian font-semibold text-foreground">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100090110058934"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary/20 hover:bg-primary/30 rounded-full transition-colors duration-300 group"
              >
                <Facebook className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.instagram.com/weihenstephan_beer_museum"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary/20 hover:bg-primary/30 rounded-full transition-colors duration-300 group"
              >
                <Instagram className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              </a>
            </div>
            
            <div>
              <h5 className="text-sm font-semibold text-foreground mb-3">Opening Hours</h5>
              <div className="text-muted-foreground text-sm space-y-1">
                <p>Mon-Thu: 12:00 - 23:00</p>
                <p>Fri-Sat: 12:00 - 01:00</p>
                <p>Sun: 12:00 - 22:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © 2024 Weihenstephan Beer Museum & Restaurant. All rights reserved.
            </p>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-2 bavarian-pattern rounded"></div>
              <p className="text-muted-foreground text-sm">
                Authentic Bavarian Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;