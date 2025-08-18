import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import gallery1 from '@/assets/gallery1.jpg';
import gallery2 from '@/assets/gallery2.jpg';
import gallery3 from '@/assets/gallery3.jpg';
import gallery4 from '@/assets/gallery4.jpg';
import gallery5 from '@/assets/gallery5.jpg';
import gallery6 from '@/assets/gallery6.jpg';
import gallery7 from '@/assets/gallery7.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: gallery1, alt: "Weihenstephan Interior Ambiance" },
    { src: gallery2, alt: "Traditional Bavarian Dining" },
    { src: gallery3, alt: "Beer Museum Collection" },
    { src: gallery4, alt: "Authentic Bavarian Cuisine" },
    { src: gallery5, alt: "Premium Beer Selection" },
    { src: gallery6, alt: "Restaurant Atmosphere" },
    { src: gallery7, alt: "Cultural Heritage Display" },
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl lg:text-6xl font-bavarian font-bold text-foreground mb-6">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Immerse yourself in the authentic Bavarian atmosphere where tradition meets luxury. 
            Every corner tells a story of our rich heritage and commitment to excellence.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div 
                  className="gallery-item cursor-pointer group relative aspect-square"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover rounded-lg"
                    loading="lazy"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg flex items-center justify-center">
                    <div className="text-center text-foreground">
                      <p className="text-lg font-bavarian font-semibold">View Full Size</p>
                    </div>
                  </div>
                  
                  {/* Decorative Border */}
                  <div className="absolute inset-0 border-2 border-primary/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-0">
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                  />
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 p-2 bg-background/80 hover:bg-background rounded-full transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Gallery Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="text-center animate-fade-in">
            <div className="text-4xl font-bavarian font-bold text-primary mb-2">500+</div>
            <p className="text-muted-foreground">Years of Brewing Heritage</p>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="text-4xl font-bavarian font-bold text-primary mb-2">50+</div>
            <p className="text-muted-foreground">Premium Beer Varieties</p>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div className="text-4xl font-bavarian font-bold text-primary mb-2">1000+</div>
            <p className="text-muted-foreground">Satisfied Guests Monthly</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;