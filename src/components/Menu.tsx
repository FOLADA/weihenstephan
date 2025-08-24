import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import image1 from "@/assets/MenuImages/image00001.jpeg"
import image2 from "@/assets/MenuImages/image00012.jpeg"
import image3 from "@/assets/MenuImages/image00014.jpeg"
import image4 from "@/assets/MenuImages/image00018.jpeg"

const Menu = () => {
  const { t } = useLanguage();

  const menuItems = [
    // Beer
    { nameKey: 'weihenOriginalName', descKey: 'weihenOriginalDescription', price: '15₾', category: 'beer', image: image1 },
    { nameKey: 'hefeweizenName', descKey: 'hefeweizenDescription', price: '18₾', category: 'beer', image: image2 },
    { nameKey: 'pilsnerPremiumName', descKey: 'pilsnerPremiumDescription', price: '16₾', category: 'beer', image: image3 },
    { nameKey: 'darkBeerSpecialName', descKey: 'darkBeerSpecialDescription', price: '17₾', category: 'beer', image: image4 },
  ];

  return (
    <section id="menu" className="py-24 bg-gradient-to-br from-amber-50/10 via-amber-100/10 to-amber-50/5">
      <div className="container mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl lg:text-6xl font-bavarian font-bold text-foreground mb-4 tracking-wide">
            {t('menu')}
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 mx-auto mb-6 rounded-full shadow-md"></div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('heroDescription')}
          </p>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {menuItems.map((item, index) => (
            <Card 
              key={index} 
              className="menu-item luxury-card border-0 rounded-2xl shadow-lg bg-gradient-to-br from-amber-50/20 via-amber-50/10 to-amber-50/5 overflow-hidden"
            >
              <div className="relative w-full aspect-[4/3]">
                <img 
                  src={item.image} 
                  alt={t(item.nameKey)}
                  className="w-full h-full object-contain bg-white rounded-t-2xl"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bavarian font-bold text-foreground mb-2">
                      {t(item.nameKey)}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {t(item.descKey)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* "See More" Button */}
        <div className="text-center mt-12">
          <Link to="/menu">
            <Button
              className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 
                         text-white font-bold text-xl px-14 py-5 rounded-full shadow-xl shadow-amber-500/50"
            >
              {t('seeMore')}
            </Button>
          </Link>
        </div>

        {/* Service Charge Card */}
        <div className="text-center mt-16 p-8 luxury-card max-w-md mx-auto bg-gradient-to-br from-amber-50/30 via-amber-50/20 to-amber-50/10 shadow-xl rounded-2xl border border-amber-200/30">
          <p className="text-lg md:text-xl text-muted-foreground">
            <span className="font-bold text-amber-600">{t('serviceCharge')}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;