import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowDown } from 'lucide-react';

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

<div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
  <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif font-light text-foreground mb-2 tracking-wide">
    {t('welcomeTo')}
  </h1>

  <div className="relative inline-block">
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
