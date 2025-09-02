import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowDown, Car, Calendar, MenuIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover filter brightness-85"
        poster="/images/hero-poster.jpg"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        <div className="w-full h-full bg-bavarian-blue flex items-center justify-center">
          <p className="text-white text-center">Loading video...</p>
        </div>
      </video>

      {/* Gentle Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Hero Content */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70"></div>

<div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
  <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif font-light text-foreground mb-2 tracking-wide">
    {t('welcomeTo')}
  </h1>

  <div className="relative inline-block mb-12">
    {/* Premium glowing text */}
    <h2
  className="relative text-5xl sm:text-6xl lg:text-7xl font-[Fraktur] font-extrabold tracking-wide
             bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-500
             bg-clip-text text-transparent
             drop-shadow-[0_0_8px_rgb(250,204,21)]
             drop-shadow-[0_0_16px_rgb(251,191,36)]
             leading-[5rem] lg:leading-[6rem]"
>
  {t('weihenstephan')}
</h2>

    {/* Glow layers behind text */}
    <div className="absolute -inset-6 rounded-full blur-3xl
                    bg-gradient-to-r from-amber-900/30 via-yellow-800/20 to-amber-900/30
                    opacity-70 -z-10"></div>
    <div className="absolute -inset-6 blur-2xl
                    bg-gradient-to-r from-amber-600/30 via-yellow-500/20 to-amber-600/30
                    opacity-70 -z-10"></div>
  </div>

  {/* Clean Action Buttons */}
  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16">
    {/* Online Order Button */}
    <Button
      asChild
      className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700
                 text-white font-bold text-lg px-8 py-4 rounded-full
                 shadow-xl shadow-amber-500/30
                 border-2 border-amber-400/30
                 min-w-[200px] sm:min-w-[220px]"
    >
      <a
        href="https://glovoapp.com/ge/ka/kutaisi/shushabandi-kut?content=dziritadi-kerdzebi-c.2527043777&section=dziritadi-kerdzebi-s.5348930794"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3"
      >
        <Car className="w-5 h-5" />
        <span>{t('onlineOrder')}</span>
      </a>
    </Button>

    {/* Table Reservation Button */}
    <Button
      asChild
      className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700
                 text-white font-bold text-lg px-8 py-4 rounded-full
                 shadow-xl shadow-amber-500/30
                 border-2 border-amber-400/30
                 min-w-[200px] sm:min-w-[220px]"
    >
      <a
        href="https://appt.link/weihenstephan-cD53ngGA/reservation"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3"
      >
        <Calendar className="w-5 h-5" />
        <span>{t('tableReservation')}</span>
      </a>
    </Button>

    {/* View Menu Button */}
    <Button
      asChild
      className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700
                 text-white font-bold text-lg px-8 py-4 rounded-full
                 shadow-xl shadow-amber-500/30
                 border-2 border-amber-400/30
                 min-w-[200px] sm:min-w-[220px]"
    >
      <Link to="/menu" className="flex items-center gap-3">
        <MenuIcon className="w-5 h-5" />
        <span>{t('viewMenu')}</span>
      </Link>
    </Button>
  </div>
</div>


      {/* Scroll Indicator */}
     <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2">
  {/* Arrow with glowing neon effect */}
  <ArrowDown 
    className="w-6 h-6 text-yellow-400 animate-bounce drop-shadow-[0_0_4px_rgb(250,204,21)] drop-shadow-[0_0_8px_rgb(251,191,36)]" 
  />

  {/* Scroll text in Georgian */}
  <span className="text-sm sm:text-base lg:text-lg text-yellow-400 font-serif font-bold tracking-wide 
                   drop-shadow-[0_0_4px_rgb(250,204,21)] drop-shadow-[0_0_8px_rgb(251,191,36)]">
    
  </span>
</div>

    </section>
  );
};

export default Hero;
