import React from 'react';
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import logo from '@/assets/logo.png';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-background border-t border-primary/20">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <img
                src={logo}
                alt={t('logoAlt')}
                className="h-24 w-auto object-contain"
              />
              <div>
                <h3 className="text-xl font-bavarian font-bold text-foreground">
                  {t('ვაინშეტფანი')}
                </h3>
                <p className="text-sm text-muted-foreground">{t('tagline')}</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {t('footerDescription')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bavarian font-semibold text-foreground">
              {t('quickLinks')}
            </h4>
            <nav className="space-y-3">
              <a href="#gallery" className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                {t('gallery')}
              </a>
              <a href="#menu" className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                {t('menu')}
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                {t('contact')}
              </a>
              <a href="tel:+995591123456" className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                {t('reservations')}
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bavarian font-semibold text-foreground">
              {t('contactInfo')}
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-muted-foreground text-sm">{t('locationEN')}</p>
                  <p className="text-muted-foreground text-sm">{t('locationGE')}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+995591123456" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  +995 591 12 34 56
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:info@weihenstephan-kutaisi.ge" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  info@weihenstephan-kutaisi.ge
                </a>
              </div>
            </div>
          </div>

          {/* Social & Hours */}
          <div className="space-y-6">
            <h4 className="text-lg font-bavarian font-semibold text-foreground">
              {t('followUs')}
            </h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100090110058934" target="_blank" rel="noopener noreferrer" className="p-3 bg-primary/20 hover:bg-primary/30 rounded-full transition-colors duration-300 group">
                <Facebook className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.instagram.com/weihenstephan_beer_museum" target="_blank" rel="noopener noreferrer" className="p-3 bg-primary/20 hover:bg-primary/30 rounded-full transition-colors duration-300 group">
                <Instagram className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              </a>
            </div>

            <div>
              <h5 className="text-sm font-semibold text-foreground mb-3">{t('openingHours')}</h5>
              <div className="text-muted-foreground text-sm space-y-1">
                <p>{t('hoursMonThu')}</p>
                <p>{t('hoursFriSat')}</p>
                <p>{t('hoursSun')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              {t('copyright')}
            </p>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-2 bavarian-pattern rounded"></div>
              <p className="text-muted-foreground text-sm">{t('authenticExperience')}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
