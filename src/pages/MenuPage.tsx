import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Dessert } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Import images (simulated paths - in actual implementation these would be your image imports)
import image1 from "@/assets/MenuImages/image00001.jpeg";
import image2 from "@/assets/MenuImages/image00002.jpeg";
import image3 from "@/assets/MenuImages/image00003.jpeg";
import image4 from "@/assets/MenuImages/image00004.jpeg";
import image5 from "@/assets/MenuImages/image00005.jpeg";
import image6 from "@/assets/MenuImages/image00006.jpeg";
import image7 from "@/assets/MenuImages/image00007.jpeg";
import image8 from "@/assets/MenuImages/image00008.jpeg";
import image9 from "@/assets/MenuImages/image00009.jpeg";
import image10 from "@/assets/MenuImages/image00010.jpeg";
import image11 from "@/assets/MenuImages/image00011.jpeg";
import image12 from "@/assets/MenuImages/image00012.jpeg";
import image13 from "@/assets/MenuImages/image00013.jpeg";
import image14 from "@/assets/MenuImages/image00014.jpeg";
import image15 from "@/assets/MenuImages/image00015.jpeg";
import image16 from "@/assets/MenuImages/image00016.jpeg";
import image17 from "@/assets/MenuImages/image00017.jpeg";
import image18 from "@/assets/MenuImages/image00018.jpeg";
import image19 from "@/assets/MenuImages/image00019.jpeg";
import image20 from "@/assets/MenuImages/image00020.jpeg";
import image21 from "@/assets/MenuImages/image00021.jpeg";
import image22 from "@/assets/MenuImages/image00022.jpeg";
import image23 from "@/assets/MenuImages/image00023.jpeg";
import image24 from "@/assets/MenuImages/image00024.jpeg";
import image25 from "@/assets/MenuImages/image00025.jpeg";
import image26 from "@/assets/MenuImages/image00026.jpeg";
import image27 from "@/assets/MenuImages/image00027.jpeg";
import image28 from "@/assets/MenuImages/image00028.jpeg";
import image29 from "@/assets/MenuImages/image00029.jpeg";
import image30 from "@/assets/MenuImages/image00030.jpeg";
import image31 from "@/assets/MenuImages/image00031.jpeg";
import image32 from "@/assets/MenuImages/image00032.jpeg";
import image33 from "@/assets/MenuImages/image00033.jpeg";
import image34 from "@/assets/MenuImages/image00034.jpeg";
import image35 from "@/assets/MenuImages/image00035.jpeg";
import image37 from "@/assets/MenuImages/image00037.jpeg";
import image38 from "@/assets/MenuImages/image00038.jpeg";
import image39 from "@/assets/MenuImages/image00039.jpeg";
import image40 from "@/assets/MenuImages/image00040.jpeg";
import image41 from "@/assets/MenuImages/image00041.jpeg";
import image42 from "@/assets/MenuImages/image00042.jpeg";
import image43 from "@/assets/MenuImages/image00043.jpeg";
import image44 from "@/assets/MenuImages/image00044.jpeg";
import image45 from "@/assets/MenuImages/image00045.jpeg";
import image46 from "@/assets/MenuImages/image00046.jpeg";
import image47 from "@/assets/MenuImages/image00047.jpeg";
import image48 from "@/assets/MenuImages/image00048.jpeg";
import image49 from "@/assets/MenuImages/image00049.jpeg";
import image50 from "@/assets/MenuImages/image00050.jpeg";
import image51 from "@/assets/MenuImages/image00051.jpeg";
import image52 from "@/assets/MenuImages/image00052.jpeg";
import image53 from "@/assets/MenuImages/image00053.jpeg";
import image54 from "@/assets/MenuImages/image00054.jpeg";
import image55 from "@/assets/MenuImages/image00055.jpeg";
import image56 from "@/assets/MenuImages/image00056.jpeg";
import image57 from "@/assets/MenuImages/image00057.jpeg";
import image58 from "@/assets/MenuImages/image00058.jpeg";
import image59 from "@/assets/MenuImages/image00059.jpeg";
import image60 from "@/assets/MenuImages/image00060.jpeg";
import image61 from "@/assets/MenuImages/image00061.jpeg";
import image62 from "@/assets/MenuImages/image00062.jpeg";
import image63 from "@/assets/MenuImages/image00063.jpeg";
const CategorizedMenu = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('appetizers');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const menuData = {
    appetizers: [
      { nameKey: 'germanMeatPlatterName', descKey: 'germanMeatPlatterDesc', price: '45₾', image: image1 },
      { nameKey: 'roastedChickenName', descKey: 'roastedChickenDesc', price: '35₾', image: image2 },
      { nameKey: 'tandoorChickenName', descKey: 'tandoorChickenDesc', price: '28₾', image: image3 },
      { nameKey: 'georgianKhachapuriBowlName', descKey: 'georgianKhachapuriBowlDesc', price: '18₾', image: image4 },
      { nameKey: 'mushroomCreamSoupName', descKey: 'mushroomCreamSoupDesc', price: '14₾', image: image15 },
      { nameKey: 'georgianCheeseSoupName', descKey: 'georgianCheeseSoupDesc', price: '16₾', image: image16 },
      { nameKey: 'georgianHerbSoupName', descKey: 'georgianHerbSoupDesc', price: '14₾', image: image17 },
      { nameKey: 'roastedVegetableMedleyName', descKey: 'roastedVegetableMedleyDesc', price: '16₾', image: image21 },
      { nameKey: 'seasonedPotatoWedgesName', descKey: 'seasonedPotatoWedgesDesc', price: '14₾', image: image23 },
      { nameKey: 'georgianHerbSoupChakapuliName', descKey: 'georgianHerbSoupChakapuliDesc', price: '12₾', image: image28 },
      { nameKey: 'charcuterieBoardName', descKey: 'charcuterieBoardDesc', price: '35₾', image: image30 },
      { nameKey: 'georgianPkhaliPlatterName', descKey: 'georgianPkhaliPlatterDesc', price: '16₾', image: image33 },
      { nameKey: 'grilledVegetablePlatterName', descKey: 'grilledVegetablePlatterDesc', price: '22₾', image: image37 },
      { nameKey: 'georgianMushroomSoupName', descKey: 'georgianMushroomSoupDesc', price: '10₾', image: image43 },
      { nameKey: 'georgianMushroomsCreamName', descKey: 'georgianMushroomsCreamDesc', price: '16₾', image: image52 },
      { nameKey: 'georgianAppetizerPlatterName', descKey: 'georgianAppetizerPlatterDesc', price: '32₾', image: image59 },
      { nameKey: 'georgianCheesePlatterName', descKey: 'georgianCheesePlatterDesc', price: '26₾', image: image56 },
      { nameKey: 'fourCheesePizzaName', descKey: 'fourCheesePizzaDesc', price: '24₾', image: image57 },
      { nameKey: 'traditionalGeorgianEggplantName', descKey: 'traditionalGeorgianEggplantDesc', price: '16₾', image: image62 }
    ],



    mains: [
      { nameKey: 'bavarianPorkKnuckleName', descKey: 'bavarianPorkKnuckleDesc', price: '65₾', image: image5 },
      { nameKey: 'smokedHamSelectionName', descKey: 'smokedHamSelectionDesc', price: '42₾', image: image6 },
      { nameKey: 'grilledBeefMedallionsName', descKey: 'grilledBeefMedallionsDesc', price: '58₾', image: image7 },
      { nameKey: 'crispyWingsFriesName', descKey: 'crispyWingsFriesDesc', price: '32₾', image: image8 },
      { nameKey: 'georgianKhinkaliName', descKey: 'georgianKhinkaliDesc', price: '15₾', image: image11 },
      { nameKey: 'seafoodPlatterName', descKey: 'seafoodPlatterDesc', price: '45₾', image: image12 },
      { nameKey: 'grilledSausagePlatterName', descKey: 'grilledSausagePlatterDesc', price: '28₾', image: image13 },
      { nameKey: 'georgianAjapsandaliName', descKey: 'georgianAjapsandaliDesc', price: '18₾', image: image19 },
      { nameKey: 'mushroomCreamSkilletName', descKey: 'mushroomCreamSkilletDesc', price: '22₾', image: image20 },
      { nameKey: 'georgianKhachapuriSlicedName', descKey: 'georgianKhachapuriSlicedDesc', price: '18₾', image: image22 },
      { nameKey: 'georgianCheeseKhachapuriName', descKey: 'georgianCheeseKhachapuriDesc', price: '20₾', image: image24 },
      { nameKey: 'traditionalGeorgianPlatterName', descKey: 'traditionalGeorgianPlatterDesc', price: '25₾', image: image26 },
      { nameKey: 'grilledSalmonRiceName', descKey: 'grilledSalmonRiceDesc', price: '28₾', image: image27 },
      { nameKey: 'germanSausagePlatterName', descKey: 'germanSausagePlatterDesc', price: '28₾', image: image29 },
      { nameKey: 'grilledPorkRibsPlatterName', descKey: 'grilledPorkRibsPlatterDesc', price: '32₾', image: image31 },
      { nameKey: 'grilledFishFilletName', descKey: 'grilledFishFilletDesc', price: '26₾', image: image32 },
      { nameKey: 'caesarSaladChickenName', descKey: 'caesarSaladChickenDesc', price: '18₾', image: image34 },
      { nameKey: 'georgianBeanStewBeerName', descKey: 'georgianBeanStewBeerDesc', price: '16₾', image: image38 },
      { nameKey: 'georgianRiceVegetablesName', descKey: 'georgianRiceVegetablesDesc', price: '14₾', image: image39 },
      { nameKey: 'pastaMeatSauceName', descKey: 'pastaMeatSauceDesc', price: '18₾', image: image40 },
      { nameKey: 'prosciuttoPizzaName', descKey: 'prosciuttoPizzaDesc', price: '28₾', image: image45 },
      { nameKey: 'mixedGrilledMeatPlatterName', descKey: 'mixedGrilledMeatPlatterDesc', price: '45₾', image: image47 },
      { nameKey: 'grilledMeatballsVegetablesName', descKey: 'grilledMeatballsVegetablesDesc', price: '29₾', image: image48 },
      { nameKey: 'pepperoniPizzaName', descKey: 'pepperoniPizzaDesc', price: '22₾', image: image50 },
      { nameKey: 'kupatiTomatoSauceName', descKey: 'kupatiTomatoSauceDesc', price: '26₾', image: image49 },
      { nameKey: 'georgianKupatiTomatoSauceName', descKey: 'georgianKupatiTomatoSauceDesc', price: '22₾', image: image51 },
      { nameKey: 'mixedGreenSaladSalmonName', descKey: 'mixedGreenSaladSalmonDesc', price: '24₾', image: image53 },
      { nameKey: 'beerBatteredFishChipsName', descKey: 'beerBatteredFishChipsDesc', price: '28₾', image: image54 },
      { nameKey: 'grilledFishWholeName', descKey: 'grilledFishWholeDesc', price: '35₾', image: image55 },
      { nameKey: 'cheesePizzaTomatoOliveName', descKey: 'cheesePizzaTomatoOliveDesc', price: '24₾', image: image60 }
    ],
    signature: [
      { nameKey: 'georgianOjakhuriName', descKey: 'georgianOjakhuriDesc', price: '38₾', image: image10 },
      { nameKey: 'beerHouseSpecialName', descKey: 'beerHouseSpecialDesc', price: '48₾', image: image9 },
      { nameKey: 'georgianKupatiSausagesName', descKey: 'georgianKupatiSausagesDesc', price: '22₾', image: image35 },
      { nameKey: 'georgianCheeseSouffleBeerName', descKey: 'georgianCheeseSouffleBeerDesc', price: '20₾', image: image42 },
      { nameKey: 'acharuliKhachapuriName', descKey: 'acharuliKhachapuriDesc', price: '24₾', image: image46 },
      { nameKey: 'georgianFeastPlatterName', descKey: 'georgianFeastPlatterDesc', price: '45₾', image: image63 }
    ],





    desserts: [
      { nameKey: 'chocolateSouffleName', descKey: 'chocolateSouffleDesc', price: '12₾', image: image25 },
      { nameKey: 'sweetCrepesName', descKey: 'sweetCrepesDesc', price: '16₾', image: image44 }
    ],

    drinks: [
      { nameKey: 'classicCocktailName', descKey: 'classicCocktailDesc', price: '12₾', image: image14 },
      { nameKey: 'weihenstephanBeerName', descKey: 'weihenstephanBeerDesc', price: '8₾', image: image18 },
      { nameKey: 'weihenstephanBeerName', descKey: 'weihenstephanBeerDesc', price: '12₾', image: image41 }
    ]
  };

  const categories = [
    { id: 'appetizers', nameKey: 'appetizers' },
    { id: 'mains', nameKey: 'mainCourses' },
    { id: 'signature', nameKey: 'signatureDishes' },
    { id: 'desserts', nameKey: 'desserts' },
    { id: 'drinks', nameKey: 'drinks' }
  ];

  const currentItems = menuData[activeCategory] || [];
  const totalPages = Math.ceil(currentItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedItems = currentItems.slice(startIndex, startIndex + itemsPerPage);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-amber-50/10 via-amber-100/10 to-amber-50/5 min-h-screen">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl lg:text-6xl font-bavarian font-bold text-foreground mb-4 tracking-wide">
            {t('ourFullMenu')}
          </h1>
          <div className="w-28 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 mx-auto mb-6 rounded-full shadow-md"></div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('authenticGerman')}
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-white shadow-xl shadow-amber-500/50'
                  : 'bg-white/70 text-amber-700 border-2 border-amber-200 hover:bg-amber-50 hover:border-amber-300 hover:shadow-lg'
              }`}
            >
              {t(category.nameKey)}
            </Button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {displayedItems.map((item, index) => (
            <Card 
              key={index} 
              className="group luxury-card border-0 rounded-2xl shadow-lg bg-gradient-to-br from-amber-50/20 via-amber-50/10 to-amber-50/5 overflow-hidden"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-2xl">
                <img 
                  src={item.image} 
                  alt={item.nameKey ? t(item.nameKey) : item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bavarian font-bold text-foreground mb-1">
                    {item.nameKey ? t(item.nameKey) : item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                    {item.descKey ? t(item.descKey) : item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mb-12">
            <Button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-3 rounded-full bg-white/70 hover:bg-amber-50 border-2 border-amber-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5 text-amber-600" />
            </Button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-12 h-12 rounded-full font-bold transition-all duration-300 ${
                    currentPage === page
                      ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-white shadow-lg'
                      : 'bg-white/70 text-amber-700 border-2 border-amber-200 hover:bg-amber-50'
                  }`}
                >
                  {page}
                </Button>
              ))}
            </div>

            <Button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-3 rounded-full bg-white/70 hover:bg-amber-50 border-2 border-amber-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5 text-amber-600" />
            </Button>
          </div>
        )}

        {/* Service Note */}
        <div className="text-center mt-12">
          <div className="inline-block p-6 luxury-card bg-gradient-to-br from-amber-50/20 via-amber-50/10 to-amber-50/5 shadow-lg rounded-xl border border-amber-200/20">
            <p className="text-lg text-muted-foreground">
              <span className="font-bold text-amber-600">{t('serviceCharge')}</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CategorizedMenu;