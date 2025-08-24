import React from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom'; // ✅ Import Link
import gallery2 from '@/assets/gallery2.jpg';
import gallery5 from '@/assets/gallery5.jpg';
import gallery8 from '@/assets/gallery8.jpg';

const Gallery = () => {
  const { t } = useLanguage();

  const galleryImages = [
    { src: gallery2, altKey: "traditionalDining" },
    { src: gallery5, altKey: "premiumBeer" },
    { src: gallery8, altKey: "authenticCuisine" },
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in relative group">
          <div className="relative inline-block">
            <h2
              className="text-5xl lg:text-6xl font-[Fraktur] font-bold tracking-wide
                         bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-500
                         text-transparent bg-clip-text
                         drop-shadow-[0_0_4px_rgba(139,69,19,0.6)]
                         leading-[5rem] lg:leading-[6rem]"
            >
              {t('gallery')}
            </h2>
            
            {/* Darker Royal Aura */}
            <div
              className="absolute inset-0 rounded-full blur-3xl 
                         bg-gradient-to-r from-amber-900/30 via-yellow-800/20 to-amber-900/30 
                         opacity-70 scale-0 group-hover:scale-125 
                         transition-transform duration-700 -z-10"
            ></div>

            {/* Inner Subtle Glow */}
            <div
              className="absolute inset-0 blur-2xl 
                         bg-gradient-to-r from-amber-600/30 via-yellow-500/20 to-amber-600/30
                         opacity-0 group-hover:opacity-100 
                         transition-opacity duration-700 -z-10"
            ></div>
          </div>
          
          <p className="text-xl max-w-2xl mx-auto mt-4
                        bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-500
                        text-transparent bg-clip-text drop-shadow-[0_0_3px_rgba(139,69,19,0.4)]">
            {t('galleryDescription')}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer transition-transform duration-500 hover:scale-[1.02]">
                  <img
                    src={image.src}
                    alt={t(image.altKey)}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-5xl w-full p-0 bg-background/95 backdrop-blur-md border rounded-xl shadow-xl">
                <div className="relative">
                  <img
                    src={image.src}
                    alt={t(image.altKey)}
                    className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
                  />
                  <button
                    onClick={() => null}
                    className="absolute top-4 right-4 p-2 rounded-full bg-amber-700/50 hover:bg-amber-600 transition-colors"
                  >
                    <X className="h-6 w-6 text-white" />
                  </button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* See More Button with Link */}
        <div className="text-center mt-12 relative group">
          <Link to="/gallery">
            <button
              className="px-8 py-3 text-lg font-[Fraktur] font-semibold relative
                         bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-500
                         text-transparent bg-clip-text drop-shadow-[0_0_4px_rgba(139,69,19,0.6)]
                         rounded-full border-2 border-amber-700
                         hover:scale-105 transition-transform duration-300"
            >
              {t('seeMore')}
              
              {/* Darker Royal Aura */}
              <div
                className="absolute inset-0 rounded-full blur-3xl 
                           bg-gradient-to-r from-amber-900/30 via-yellow-800/20 to-amber-900/30 
                           opacity-70 scale-0 group-hover:scale-125 
                           transition-transform duration-700 -z-10"
              ></div>

              {/* Inner Subtle Glow */}
              <div
                className="absolute inset-0 blur-2xl 
                           bg-gradient-to-r from-amber-600/30 via-yellow-500/20 to-amber-600/30
                           opacity-0 group-hover:opacity-100 
                           transition-opacity duration-700 -z-10"
              ></div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
