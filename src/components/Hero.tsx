import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDkxQTMzIi8+PC9zdmc+"
        >
          <source src="/api/placeholder/1920/1080" type="video/mp4" />
          <div className="w-full h-full bg-bavarian-blue flex items-center justify-center">
            <p className="text-white text-center">Loading video...</p>
          </div>
        </video>
        
        {/* Elegant Overlay */}
        <div className="absolute inset-0 hero-overlay"></div>
        
        {/* Bavarian Pattern Accent */}
        <div className="absolute top-0 left-0 w-full h-2 bavarian-pattern opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-full h-2 bavarian-pattern opacity-60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in animation-delay-500">
          <h1 className="text-6xl lg:text-8xl font-bavarian font-bold text-foreground mb-6 text-glow-gold">
            {t('welcomeTo')}
          </h1>
          <h2 className="text-4xl lg:text-6xl font-bavarian font-bold text-primary mb-8 animate-glow">
            {t('weihenstephan')}
          </h2>
          <p className="text-xl lg:text-2xl text-foreground/90 max-w-2xl mx-auto leading-relaxed animate-fade-in animation-delay-1000">
            {t('heroDescription')}
          </p>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;