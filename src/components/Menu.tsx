import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

// Importing images from MenuPage for the featured dishes - selecting more visually appealing options
import seafoodPlatterImg from '@/assets/MenuImages/ზღცის პროდუქტების დაფა (კრევეტები, მიდიები, რვაფეხა, კალმარი, ბრინჯი ბოსტნეულით.avif';
import europeanCheeseBoardImg from '@/assets/MenuImages/ევროპული ყველის დაფა.jpg';
import bbqPlatterImg from '@/assets/MenuImages/წვადის დაფა (3-4 პერსონა) -=.avif';
import bruschettaBoardImg from '@/assets/MenuImages/ბრუსკეტის დაფა.jpg';

const Menu = () => {
  const { t } = useLanguage();

  const menuItems = [
    {
      nameKey: 'seafoodPlatterName',
      descKey: 'seafoodPlatterDesc',
      price: '₾129.90',
      image: seafoodPlatterImg
    },
    {
      nameKey: 'europeanCheeseBoardName',
      descKey: 'europeanCheeseBoardDesc',
      price: '₾30.00',
      image: europeanCheeseBoardImg
    },
    {
      nameKey: 'bbqPlatterName',
      descKey: 'bbqPlatterDesc',
      price: '₾69.90',
      image: bbqPlatterImg
    },
    {
      nameKey: 'bruschettaBoardName',
      descKey: 'bruschettaBoardDesc',
      price: '₾25.90',
      image: bruschettaBoardImg
    }
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {menuItems.map((item, index) => (
            <Card 
              key={index} 
              className="group transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 rounded-2xl overflow-hidden bg-gradient-to-br from-amber-50/20 via-amber-50/10 to-amber-50/5 shadow-md"
            >
              <CardContent className="p-0">
                {/* Image Section */}
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-2xl">
                  <img 
                    src={item.image} 
                    alt={t(item.nameKey)}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <div className="p-6 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl font-bavarian font-bold text-foreground mb-2 group-hover:text-amber-600 transition-colors">
                      {t(item.nameKey)}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {t(item.descKey)}
                  </p>
                  
                  <div className="flex items-center justify-between pt-2 border-t border-amber-100">
                    <span className="text-lg font-bold text-amber-600">
                      {item.price}
                    </span>
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