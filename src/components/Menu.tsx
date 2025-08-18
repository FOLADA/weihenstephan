import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('Beer');

  const menuCategories = [
    'Beer', 'Wine', 'Coffee/Tea', 'Cocktails', 'Chacha', 'Brandy/Cognac', 'Whiskey', 'Vodka/Tequila', 'Soft Drinks'
  ];

  const menuItems = {
    Beer: [
      { name: 'Weihenstephan Original', nameGeo: 'ვაიჰენშტეფანი ორიგინალი', price: '15₾', volume: '0.5L', description: 'Traditional Bavarian lager with rich malty flavor' },
      { name: 'Hefeweizen', nameGeo: 'ჰეფევაიცენი', price: '18₾', volume: '0.5L', description: 'Classic wheat beer with banana and clove notes' },
      { name: 'Pilsner Premium', nameGeo: 'პილსნერ პრემიუმი', price: '16₾', volume: '0.5L', description: 'Crisp and refreshing with noble hop character' },
      { name: 'Dark Beer Special', nameGeo: 'მუქი ლუდი სპეციალი', price: '17₾', volume: '0.5L', description: 'Rich and complex dark beer with roasted malts' },
    ],
    Wine: [
      { name: 'Riesling', nameGeo: 'რისლინგი', price: '35₾', volume: '150ml', description: 'Elegant German white wine with floral notes' },
      { name: 'Gewürztraminer', nameGeo: 'გევიურცტრამინერი', price: '40₾', volume: '150ml', description: 'Aromatic white wine with spice and lychee' },
      { name: 'Pinot Noir', nameGeo: 'პინო ნუარი', price: '45₾', volume: '150ml', description: 'Light-bodied red with cherry and earth tones' },
      { name: 'House Red Blend', nameGeo: 'სახლის წითელი ნაზავი', price: '30₾', volume: '150ml', description: 'Smooth and approachable house selection' },
    ],
    'Coffee/Tea': [
      { name: 'Bavarian Coffee', nameGeo: 'ბავარიული ყავა', price: '8₾', volume: '200ml', description: 'Rich espresso with local alpine cream' },
      { name: 'German Breakfast Tea', nameGeo: 'გერმანული საუზმე ჩაი', price: '6₾', volume: '300ml', description: 'Traditional blend with bergamot' },
      { name: 'Herbal Mountain Tea', nameGeo: 'მთის მცენარეული ჩაი', price: '7₾', volume: '300ml', description: 'Organic herbs from Bavarian mountains' },
    ],
    Cocktails: [
      { name: 'Bavarian Mule', nameGeo: 'ბავარიული მულე', price: '25₾', volume: '300ml', description: 'Beer-based cocktail with ginger and lime' },
      { name: 'Alpine Spritz', nameGeo: 'ალპური შპრიცი', price: '22₾', volume: '250ml', description: 'Refreshing aperitif with elderflower' },
      { name: 'Munich Martini', nameGeo: 'მიუნხური მარტინი', price: '28₾', volume: '120ml', description: 'Premium gin cocktail with juniper essence' },
    ],
    Chacha: [
      { name: 'Premium Georgian Chacha', nameGeo: 'პრემიუმ ქართული ჭაჭა', price: '12₾', volume: '50ml', description: 'Traditional grape spirit, aged in oak' },
      { name: 'Honey Chacha', nameGeo: 'თოვლიანი ჭაჭა', price: '15₾', volume: '50ml', description: 'Smooth chacha infused with mountain honey' },
    ],
    'Brandy/Cognac': [
      { name: 'French Cognac VSOP', nameGeo: 'ფრანგული კონიაკი VSOP', price: '35₾', volume: '40ml', description: 'Refined cognac with vanilla and oak notes' },
      { name: 'German Brandy', nameGeo: 'გერმანული ბრენდი', price: '20₾', volume: '40ml', description: 'Smooth fruit brandy from local distillery' },
    ],
    Whiskey: [
      { name: 'Scottish Single Malt', nameGeo: 'შოტლანდიური სინგლ მოლტი', price: '45₾', volume: '40ml', description: 'Aged 12 years with peat and smoke' },
      { name: 'Irish Whiskey', nameGeo: 'ირლანდიური ვისკი', price: '30₾', volume: '40ml', description: 'Triple distilled for exceptional smoothness' },
    ],
    'Vodka/Tequila': [
      { name: 'Premium Vodka', nameGeo: 'პრემიუმ არაყი', price: '18₾', volume: '40ml', description: 'Crystal clear, distilled from winter wheat' },
      { name: 'Silver Tequila', nameGeo: 'ვერცხლისფერი ტეკილა', price: '25₾', volume: '40ml', description: '100% agave, smooth and crisp' },
    ],
    'Soft Drinks': [
      { name: 'Bavarian Lemonade', nameGeo: 'ბავარიული ლიმონათი', price: '8₾', volume: '300ml', description: 'Fresh Alpine spring water with lemon' },
      { name: 'Apple Schorle', nameGeo: 'ვაშლის შორლე', price: '7₾', volume: '300ml', description: 'Traditional German apple juice with sparkling water' },
      { name: 'Elderflower Sparkling', nameGeo: 'ზღმარტლის მინერალური', price: '9₾', volume: '300ml', description: 'Refreshing elderflower with bubbles' },
    ],
  };

  return (
    <section id="menu" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl lg:text-6xl font-bavarian font-bold text-foreground mb-6">
            Menu
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our carefully curated selection of premium beverages and authentic Bavarian specialties, 
            each crafted with passion and tradition.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="transition-all duration-300 hover:scale-105"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {menuItems[activeCategory as keyof typeof menuItems]?.map((item, index) => (
            <Card key={index} className="menu-item luxury-card border-0">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bavarian font-semibold text-foreground mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium mb-2">
                      {item.nameGeo}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="text-right ml-6">
                    <div className="text-xl font-bold text-primary mb-1">
                      {item.price}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {item.volume}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Charge Notice */}
        <div className="text-center mt-12 p-6 luxury-card max-w-md mx-auto">
          <p className="text-muted-foreground">
            <span className="font-semibold text-primary">Service Charge:</span> 10% will be added to your bill
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            მომსახურების საფასური: 10% დაემატება თქვენს ანგარიშს
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;