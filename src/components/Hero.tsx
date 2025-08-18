import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://video.fkut1-1.fna.fbcdn.net/v/t39.25447-2/536488090_1055406762882418_5577006671624639006_n.mp4?_nc_cat=109&ccb=1-7&_nc_sid=984c6a&efg=eyJybHIiOjE1NDIsInJsYSI6NDAzMywidmVuY29kZV90YWciOiJiZXR0ZXJfbWF4X3JhdGVfYml0cmF0ZS0xMDgwLXZwOSJ9&_nc_ohc=xQJr4x9z7xAQ7kNvwHHvwXW&rl=1542&vabr=857&_nc_ht=video.fkut1-1.fna&oh=00_AfDwqgTGXG9lcrRGKaTwVSCjHqH4Pr6FwD0aAIQB2KQu0Q&oe=68A8F8E8" type="video/mp4" />
          Your browser does not support the video tag.
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
            Welcome to
          </h1>
          <h2 className="text-4xl lg:text-6xl font-bavarian font-bold text-primary mb-8 animate-glow">
            Weihenstephan
          </h2>
          <p className="text-xl lg:text-2xl text-foreground/90 max-w-2xl mx-auto leading-relaxed animate-fade-in animation-delay-1000">
            Experience the finest Bavarian tradition, where centuries of brewing heritage 
            meets modern culinary excellence in an atmosphere of luxury and authenticity.
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