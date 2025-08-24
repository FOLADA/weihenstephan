import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'ka' | 'ru' | 'en';

interface Translations {
  [key: string]: {
    ka: string;
    ru: string;
    en: string;
  };
}

const translations: Translations = {
  // Navigation
  gallery: { ka: 'გალერეა', ru: 'Галерея', en: 'Gallery' },
  menu: { ka: 'მენიუ', ru: 'Меню', en: 'Menu' },
  about: { ka: 'ჩვენს შესახებ', ru: 'О нас', en: 'About Us' },
  contact: { ka: 'კონტაქტი', ru: 'Контакт', en: 'Contact' },
  language: { ka: 'ენა', ru: 'Язык', en: 'Language' },

  // Hero
  welcomeTo: { ka: 'კეთილი იყოს თქვენი მობრძანება', ru: 'Добро пожаловать в', en: 'Welcome to' },
  weihenstephan: { ka: 'ვაინშტეფანში', ru: 'Вайхенштефан', en: 'Weihenstephan' },
  heroDescription: {
    ka: 'გამოცადეთ საუკეთესო ბავარიული ტრადიცია.',
    ru: 'Окунитесь в лучшие баварские традиции.',
    en: 'Experience the finest Bavarian tradition.'
  },

  // Menu Categories
  beer: { ka: 'ლუდი', ru: 'Пиво', en: 'Beer' },
  wine: { ka: 'ღვინო', ru: 'Вино', en: 'Wine' },
  coffee: { ka: 'ყავა/ჩაი', ru: 'Кофе/Чай', en: 'Coffee/Tea' },
  cocktails: { ka: 'კოქტეილები', ru: 'Коктейли', en: 'Cocktails' },
  chacha: { ka: 'ჭაჭა', ru: 'Чача', en: 'Chacha' },
  brandy: { ka: 'ბრენდი/კონიაკი', ru: 'Бренди/Коньяк', en: 'Brandy/Cognac' },
  whiskey: { ka: 'ვისკი', ru: 'Виски', en: 'Whiskey' },
  vodka: { ka: 'არაყი/ტეკილა', ru: 'Водка/Текила', en: 'Vodka/Tequila' },
  softDrinks: { ka: 'უალკოჰოლო სასმელები', ru: 'Безалкогольные напитки', en: 'Soft Drinks' },
  processedFood: { ka: 'პროცესირებული საკვები', ru: 'Обработанная пища', en: 'Processed Food' }, 

  // Menu Items - Beer
  weihenOriginalName: { ka: 'ვაიჰენშტეფანი ორიგინალი', ru: 'Вайхенштефан Оригинал', en: 'Weihenstephan Original' },
  weihenOriginalDescription: { ka: 'ტრადიციული ბავარიული ლაგერი მდიდარი მალტის გემოთი', ru: 'Традиционный баварский лагер с богатым солодовым вкусом', en: 'Traditional Bavarian lager with rich malty flavor' },

  hefeweizenName: { ka: 'ჰეფევაიცენი', ru: 'Хефевайцен', en: 'Hefeweizen' },
  hefeweizenDescription: { ka: 'კლასიკური ხორბლის ლუდი ბანანისა და ჩაის ნოტებით', ru: 'Классический пшеничный эль с нотками банана и гвоздики', en: 'Classic wheat beer with banana and clove notes' },

  pilsnerPremiumName: { ka: 'პილსნერ პრემიუმი', ru: 'Пильснер Премиум', en: 'Pilsner Premium' },
  pilsnerPremiumDescription: { ka: 'სიგრილე და მსუბუქი ნობილი ჰოპის გემოთი', ru: 'Освежающий и лёгкий с характером благородного хмеля', en: 'Crisp and refreshing with noble hop character' },

  darkBeerSpecialName: { ka: 'მუქი ლუდი სპეციალი', ru: 'Тёмное пиво Специальное', en: 'Dark Beer Special' },
  darkBeerSpecialDescription: { ka: 'დიდი და რთული მუქი ლუდი შთამბეჭდავი წვნიანი ნოტებით', ru: 'Богатое и сложное тёмное пиво с обжаренными солодовыми нотами', en: 'Rich and complex dark beer with roasted malts' },

  // Menu Items - Wine
  rieslingName: { ka: 'რისლინგი', ru: 'Рислинг', en: 'Riesling' },
  rieslingDescription: { ka: 'ელეგანტური გერმანული თეთრი ღვინო ყვავილოვანი ნოტებით', ru: 'Элегантное немецкое белое вино с цветочными нотами', en: 'Elegant German white wine with floral notes' },

  gewurztraminerName: { ka: 'გევიურცტრამინერი', ru: 'Гевюрцтраминер', en: 'Gewürztraminer' },
  gewurztraminerDescription: { ka: 'არომატული თეთრი ღვინო სანელებლებითა და ლიჩით', ru: 'Ароматное белое вино со специями и личи', en: 'Aromatic white wine with spice and lychee' },

  pinotNoirName: { ka: 'პინო ნუარი', ru: 'Пино Нуар', en: 'Pinot Noir' },
  pinotNoirDescription: { ka: 'მსუბუქი წითელი ღვინო ალუბლისა და მიწის ნოტებით', ru: 'Лёгкое красное с нотами вишни и земли', en: 'Light-bodied red with cherry and earth tones' },

  houseRedBlendName: { ka: 'სახლის წითელი ნაზავი', ru: 'Домашний красный бленд', en: 'House Red Blend' },
  houseRedBlendDescription: { ka: 'მრგვალი და ხელმისაწვდომი სახლის არჩევანი', ru: 'Мягкий и доступный выбор дома', en: 'Smooth and approachable house selection' },

galleryDescription: {
  ka: 'შეიგრძენით ჩვენი ავთენტური ბავარიულ ატმოსფერო, სადაც ტრადიცია ხვდება სიმდიდრეს.',
  ru: 'Погрузитесь в аутентичную баварскую атмосферу, где традиции встречаются с роскошью.',
  en: 'Immerse yourself in the authentic Bavarian atmosphere where tradition meets luxury.'
},
viewFullSize: { ka: 'გაადიდეთ', ru: 'Посмотреть в полном размере', en: 'View Full Size' },

// Image alt texts
weihenInterior: { ka: 'Weihenstephan ინტერიერი', ru: 'Интерьер Вайхенштефан', en: 'Weihenstephan Interior Ambiance' },
traditionalDining: { ka: 'ტრადიციული ბავარიული ვახშამი', ru: 'Традиционный баварский обед', en: 'Traditional Bavarian Dining' },
beerCollection: { ka: 'ლუდის მუზეუმის კოლექცია', ru: 'Коллекция пивного музея', en: 'Beer Museum Collection' },
authenticCuisine: { ka: 'ავთენტური ბავარიული სამზარეულო', ru: 'Аутентичная баварская кухня', en: 'Authentic Bavarian Cuisine' },
premiumBeer: { ka: 'პრემიუმ ლუდის არჩევანი', ru: 'Выбор премиум пива', en: 'Premium Beer Selection' },
restaurantAtmosphere: { ka: 'რესტორნის ატმოსფერო', ru: 'Атмосфера ресторана', en: 'Restaurant Atmosphere' },
heritageDisplay: { ka: 'კულტურული მემკვიდრეობის ჩვენება', ru: 'Демонстрация культурного наследия', en: 'Cultural Heritage Display' },

// Gallery stats
yearsBrewing: { ka: 'ბრინირების მემკვიდრეობა', ru: 'Наследие пивоварения', en: 'Years of Brewing Heritage' },
premiumVarieties: { ka: 'პრემიუმ ლუდის ტიპები', ru: 'Премиум сорта пива', en: 'Premium Beer Varieties' },
satisfiedGuests: { ka: 'მომხიბლავი სტუმრები ყოველთვიურად', ru: 'Довольные гости ежемесячно', en: 'Satisfied Guests Monthly' },

contactDescription: {
  ka: 'გაეცანით ბავარიული სტუმართმოყვარეობის საუკეთესო გამოცდილებას. დაჯავშნეთ თქვენი მაგიდა დღესვე და გაატარეთ ელიტარული დრო ჩვენთან.',
  ru: 'Ощутите гостеприимство Баварии в лучшем виде. Забронируйте столик сегодня и присоединяйтесь к незабываемому кулинарному путешествию через традиции и совершенство.',
  en: 'Experience Bavarian hospitality at its finest. Reserve your table today and join us for an unforgettable culinary journey through tradition and excellence.'
},
visitUs: { ka: 'მოგვითვლეთ', ru: 'Посетите нас', en: 'Visit Us' },
location: { ka: 'ლოკაცია', ru: 'Расположение', en: 'Location' },
weihenstephanLocation: {
  ka: '9 Galaktion Tabidze St, Kutaisi 4600',
  ru: '9 Galaktion Tabidze St, Kutaisi 4600',
  en: '9 Galaktion Tabidze St, Kutaisi 4600'
},
reservations: { ka: 'დაჯავშნა', ru: 'Бронирование', en: 'Reservations' },
reserveNow: { ka: 'დაჯავშნე ახლა', ru: 'Забронировать', en: 'Reserve Now' },
openingHours: { ka: 'სამუშაო საათები', ru: 'Часы работы', en: 'Opening Hours' },
hoursMonThu: { ka: 'ორშაბათი - ხუთშაბათი: 12:00 - 23:00', ru: 'Понедельник - Четверг: 12:00 - 23:00', en: 'Monday - Thursday: 12:00 - 23:00' },
hoursFriSat: { ka: 'პარასკევი - შაბათი: 12:00 - 01:00', ru: 'Пятница - Суббота: 12:00 - 01:00', en: 'Friday - Saturday: 12:00 - 01:00' },
hoursSun: { ka: 'კვირა: 12:00 - 22:00', ru: 'Воскресенье: 12:00 - 22:00', en: 'Sunday: 12:00 - 22:00' },
email: { ka: 'ელ.ფოსტა', ru: 'Электронная почта', en: 'Email' },
mapTitle: { ka: 'ვაიჰენშტეფანი ლუდის მუზეუმის ლოკაცია', ru: 'Местоположение Музея пива Вайхенштефан', en: 'Weihenstephan Beer Museum Location' },

authenticCulture: { ka: 'გაეცანით ავთენტურ ბავარიულ კულტურას', ru: 'Ощутите аутентичную баварскую культуру', en: 'Experience Authentic Bavarian Culture' },
cultureDescription: {
  ka: 'დაესწარით სპეციალურ ღონისძიებებს, ლუდის დეგუსტაციასა და კულტურულ აღლუმებს მთელი წლის განმავლობაში. ჩვენი გამოცდილი პერსონალი შეგასწავლით ბავარიული ლუდმცოდნეობის მდიდარ ისტორიას, ხოლო თქვენ ისიამოვნებთ საუკეთესო სასმელებით და გასაოცარი სამზარეულოთი.',
  ru: 'Присоединяйтесь к специальным мероприятиям, дегустациям пива и культурным праздникам в течение года. Наш опытный персонал проведет вас через богатую историю баварских пивоваренных традиций, пока вы наслаждаетесь тщательно подобранными премиальными напитками и аутентичной кухней.',
  en: 'Join us for special events, beer tastings, and cultural celebrations throughout the year. Our knowledgeable staff will guide you through the rich history of Bavarian brewing traditions while you enjoy our carefully curated selection of premium beverages and authentic cuisine.'
},


  
  // Add all other categories in the same pattern...
  // Coffee/Tea
  bavarianCoffeeName: { ka: 'ბავარიული ყავა', ru: 'Баварский кофе', en: 'Bavarian Coffee' },
  bavarianCoffeeDescription: { ka: 'დიდი ესპრესო ადგილობრივი ალპური კრემით', ru: 'Крепкий эспрессо с местными альпийскими сливками', en: 'Rich espresso with local alpine cream' },
  // Continue for all Coffee/Tea, Cocktails, Chacha, Brandy/Cognac, Whiskey, Vodka/Tequila, Soft Drinks
  BavarianProcessedFood: { ka: 'ბავარიული პროცესირებული საკვები', ru: 'Баварская переработанная пища', en: 'Bavarian Processed Food' },

  // Service Charge
  serviceCharge: { ka: 'მომსახურების საფასური: 10%', ru: 'Плата за обслуживание: 10%', en: 'Service charge: 10%' },

  // Additional menu translations
  seeMore: { ka: 'იხილეთ მეტი', ru: 'Смотреть больше', en: 'See More' },
  ourFullMenu: { ka: 'ჩვენი სრული მენიუ', ru: 'Наше полное меню', en: 'Our Full Menu' },
  authenticGerman: { ka: 'ავთენტური გერმანული სამზარეულო ქართული სტუმართმოყვარეობით', ru: 'Аутентичная немецкая кухня с грузинским гостеприимством', en: 'Authentic German cuisine with Georgian hospitality' },
  appetizers: { ka: 'აპეტაიზერი', ru: 'Закуски', en: 'Appetizers' },
  mainCourses: { ka: 'მთავარი კერძები', ru: 'Основные блюда', en: 'Main Courses' },
  signatureDishes: { ka: 'ფირმის კერძები', ru: 'Фирменные блюда', en: 'Signature Dishes' },
  desserts: { ka: 'დესერტები', ru: 'Десерты', en: 'Desserts' },
  drinks: { ka: 'სასმელები', ru: 'Напитки', en: 'Drinks' },
  orderNow: { ka: 'შეუკვეთეთ ახლავე', ru: 'Заказать сейчас', en: 'Order Now' },
  order: { ka: 'შეკვეთა', ru: 'Заказ', en: 'Order' },

  // Menu item translations
  // German Meat Platter
  germanMeatPlatterName: { ka: 'გერმანული ხორცის დაჭრილი', ru: 'Немецкая мясная тарелка', en: 'German Meat Platter' },
  germanMeatPlatterDesc: { ka: 'ტრადიციული გერმანული ცივი ხორცეული ნაწარმი ძეხვით და მარინადებით', ru: 'Традиционные немецкие мясные нарезки с колбасами и гарнирами', en: 'Traditional German cold cuts with sausages and accompaniments' },
  
  // Roasted Chicken
  roastedChickenName: { ka: 'მწვადი კატმის ხორცი', ru: 'Жареная курица', en: 'Roasted Chicken' },
  roastedChickenDesc: { ka: 'შესანიშნავად მომზადებული კატმის ხორცი ახალ მწვანეულით', ru: 'Отлично приготовленная курица со свежей зеленью', en: 'Perfectly roasted chicken with fresh greens' },
  
  // Georgian Ojakhuri
  georgianOjakhuriName: { ka: 'ქართული ოჯახური', ru: 'Грузинский оджахури', en: 'Georgian Ojakhuri' },
  georgianOjakhuriDesc: { ka: 'ტრადიციული ქართული ხორცეული კერძი ბროწეულით', ru: 'Традиционное грузинское мясное блюдо с гранатом', en: 'Traditional Georgian skillet dish with meat and pomegranate' },
  
  // Beer House Special
  beerHouseSpecialName: { ka: 'ლუდის ბარის სპეციალური', ru: 'Специальное блюдо пивного дома', en: 'Beer House Special' },
  beerHouseSpecialDesc: { ka: 'სახლის სპეციალური ხორცის კომბინაცია ხელნაკეთი ლუდით', ru: 'Фирменная мясная комбинация с крафтовым пивом', en: 'House special meat combination with craft beer pairing' },

  // Additional Appetizer Items
  tandoorChickenName: { ka: 'თანდურში მომზადებული კატამი', ru: 'Курица тандур', en: 'Tandoor Chicken' },
  tandoorChickenDesc: { ka: 'ცხარე გრილზე შემწვარი კატმის ნაჭრები მუქი სოუსით', ru: 'Острые кусочки курицы на гриле с темным соусом', en: 'Spicy grilled chicken pieces with dark sauce' },
  
  georgianKhachapuriBowlName: { ka: 'ქართული ხაჭაპური ჯამში', ru: 'Грузинский хачапури в горшочке', en: 'Georgian Khachapuri Bowl' },
  georgianKhachapuriBowlDesc: { ka: 'ტრადიციული ქართული ყველის პური თიხის ქვაბში', ru: 'Традиционный грузинский сырный хлеб в глиняном горшочке', en: 'Traditional Georgian cheese bread in clay pot' },
  
  mushroomCreamSoupName: { ka: 'სოკოს კრემ-სუპი', ru: 'Грибной крем-суп', en: 'Mushroom Cream Soup' },
  mushroomCreamSoupDesc: { ka: 'კრემისებური სოკოს სუპი შემწვარი სოკოებით და პაპრიკით', ru: 'Кремовый грибной суп с обжаренными грибами и паприкой', en: 'Creamy mushroom soup with sautéed mushrooms and paprika' },
  
  georgianCheeseSoupName: { ka: 'ქართული ყველის სუპი პურით', ru: 'Грузинский сырный суп с хлебом', en: 'Georgian Cheese Soup with Bread' },
  georgianCheeseSoupDesc: { ka: 'კრემისებური ყველის სუპი ტრადიციული ქართული პურით', ru: 'Кремовый сырный суп с традиционным грузинским хлебом', en: 'Creamy cheese soup served with traditional Georgian bread' },
  
  georgianHerbSoupName: { ka: 'ქართული მწვანილის სუპი', ru: 'Грузинский травяной суп', en: 'Georgian Herb Soup' },
  georgianHerbSoupDesc: { ka: 'ტრადიციული ქართული მწვანე მწვანილის სუპი ახალი მწვანილით', ru: 'Традиционный грузинский зеленый травяной суп со свежими травами', en: 'Traditional Georgian green herb soup with fresh herbs' },
  
  roastedVegetableMedleyName: { ka: 'შემწვარი ბოსტნეული', ru: 'Смесь жареных овощей', en: 'Roasted Vegetable Medley' },
  roastedVegetableMedleyDesc: { ka: 'შერეული შემწვარი ბოსტნეული წიწაკით, სოკოთი და ბროწეულის მარცვლებით', ru: 'Смешанные жареные овощи с болгарским перцем, грибами и зернами граната', en: 'Mixed roasted vegetables with bell peppers, mushrooms, and pomegranate seeds' },
  
  seasonedPotatoWedgesName: { ka: 'გაფუებული კარტოფილის ნაჭრები', ru: 'Картофельные дольки с приправами', en: 'Seasoned Potato Wedges' },
  seasonedPotatoWedgesDesc: { ka: 'ხრაშუნა კარტოფილის ნაჭრები მწვანილითა და სანელებლებით, ნიორის სოუსით', ru: 'Хрустящие картофельные дольки с травами и специями, подается с чесночным соусом', en: 'Crispy potato wedges with herbs and spices, served with garlic dip' },
  
  georgianHerbSoupChakapuliName: { ka: 'ქართული მწვანე სუპი (ჩაქაფულის სტილში)', ru: 'Грузинский зеленый суп (в стиле чакапули)', en: 'Georgian Herb Soup (Chakapuli Style)' },
  georgianHerbSoupChakapuliDesc: { ka: 'ტრადიციული ქართული მწვანე ბალახეულის სუპი არომატული სანელებლებით', ru: 'Традиционный грузинский зеленый травяной суп с ароматными специями', en: 'Traditional Georgian green herb soup with aromatic spices' },
  
  charcuterieBoardName: { ka: 'ხორცეულის დაფა', ru: 'Мясная тарелка', en: 'Charcuterie Board' },
  charcuterieBoardDesc: { ka: 'გამომშრალი ხორცი, ყველის შერჩევა კრაკერებითა და სოუსებით', ru: 'Вяленое мясо, выбор сыров с крекерами и соусами', en: 'Cured meats, cheese selection with crackers and sauces' },
  
  georgianPkhaliPlatterName: { ka: 'ქართული ფხალის თეფში', ru: 'Грузинская тарелка пхали', en: 'Georgian Pkhali Platter' },
  georgianPkhaliPlatterDesc: { ka: 'ტრადიციული ქართული ბოსტნეულის პასტები ნიგვზითა და ბალახეულით', ru: 'Традиционные грузинские овощные паштеты с орехами и травами', en: 'Traditional Georgian vegetable pâtés with walnuts and herbs' },
  
  grilledVegetablePlatterName: { ka: 'შემწვარი ბოსტნეულის თეფში', ru: 'Тарелка жареных овощей', en: 'Grilled Vegetable Platter' },
  grilledVegetablePlatterDesc: { ka: 'შერეული შემწვარი ბოსტნეული ბადრიჯნით, კაბაჩოთი, სოკოთი, პომიდვრითა და წიწაკით მწვანე სოუსით', ru: 'Смешанные жареные овощи с баклажанами, кабачками, грибами, помидорами и перцем с зеленым соусом', en: 'Mixed grilled vegetables with eggplant, zucchini, mushrooms, tomatoes, and peppers served with green sauce' },
  
  georgianMushroomSoupName: { ka: 'ქართული სოკოს ჩარხი', ru: 'Грузинский грибной суп', en: 'Georgian Mushroom Soup' },
  georgianMushroomSoupDesc: { ka: 'ტრადიციული ქართული ჩარხი სოკოთი, მწვანილითა და სანელებლებით, ლიმონით მიირთმევა', ru: 'Традиционный грузинский суп с грибами, травами и специями, подается с лимоном', en: 'Traditional Georgian soup with mushrooms, herbs and spices, served with lemon' },
  
  georgianMushroomsCreamName: { ka: 'ქართული სოკო კრემის სოუსში', ru: 'Грузинские грибы в сливочном соусе', en: 'Georgian Mushrooms in Cream Sauce' },
  georgianMushroomsCreamDesc: { ka: 'ახალი სოკო კრემიან თეთრ სოუსში, მიირთმევა რკინის ტაფაში ქართული პურით', ru: 'Свежие грибы в сливочном белом соусе, подается в чугунной сковороде с грузинским хлебом', en: 'Fresh mushrooms cooked in creamy white sauce, served in cast iron pan with Georgian bread' },
  
  georgianAppetizerPlatterName: { ka: 'ქართული მიხვეული ფირფიტა', ru: 'Грузинская тарелка закусок', en: 'Georgian Appetizer Platter' },
  georgianAppetizerPlatterDesc: { ka: 'შერეული ქართული მიხვეული შავ პურზე ორაგულით, ყველით, მჟავე ბოსტნეულითა და ახალი ბოსტნეულით', ru: 'Ассорти грузинских закусок на черном хлебе с лососем, сыром, маринованными и свежими овощами', en: 'Assorted Georgian appetizers on dark bread with salmon, cheese, pickles and fresh vegetables' },
  
  georgianCheesePlatterName: { ka: 'ქართული ყველის ფირფიტა', ru: 'Грузинская сырная тарелка', en: 'Georgian Cheese Platter' },
  georgianCheesePlatterDesc: { ka: 'ქართული ყველების შერჩევა ტრადიციული შოთის პურით, კაკლითა და ზეთისხილით', ru: 'Выбор грузинских сыров с традиционным хлебом шоти, орехами и оливками', en: 'Selection of Georgian cheeses with traditional shotis puri bread, walnuts and olives' },
  
  fourCheesePizzaName: { ka: 'ოთხი ყველის პიცა', ru: 'Пицца четыре сыра', en: 'Four Cheese Pizza' },
  fourCheesePizzaDesc: { ka: 'ღუმელში მომზადებული პიცა ოთხი სახის ყველით, ალუბლისფერი ტომატითა და შავი ზეთისხილით', ru: 'Пицца на дровах с четырьмя видами сыра, помидорами черри и черными оливками', en: 'Wood-fired pizza topped with four types of cheese, cherry tomatoes and black olives' },
  
  traditionalGeorgianEggplantName: { ka: 'ტრადიციული ქართული ბადრიჯანი ბროწეულით', ru: 'Традиционные грузинские баклажаны с гранатом', en: 'Traditional Georgian Eggplant with Pomegranate' },
  traditionalGeorgianEggplantDesc: { ka: 'გრილზე შემწვარი ბადრიჯნის ნაჭრები ნიგვზის პასტით და ახალი ბროწეულის მარცვლებით, ტრადიციული ქართული პურით', ru: 'Жареные на гриле ломтики баклажанов с ореховой пастой и свежими зернами граната, подается с традиционным грузинским хлебом', en: 'Grilled eggplant slices topped with walnut paste and fresh pomegranate seeds, served with traditional Georgian bread' },
  
  // Main Course Items
  bavarianPorkKnuckleName: { ka: 'ბავარიული ღორის კოჭი', ru: 'Баварская свиная рулька', en: 'Bavarian Pork Knuckle' },
  bavarianPorkKnuckleDesc: { ka: 'ტრადიციული შემწვარი ღორის კოჭი ლუდით', ru: 'Традиционная жареная свиная рулька с пивом', en: 'Traditional roasted pork knuckle with beer' },
  
  smokedHamSelectionName: { ka: 'ნაკურთხი ლორის შერჩეული', ru: 'Коллекция копченой ветчины', en: 'Smoked Ham Selection' },
  smokedHamSelectionDesc: { ka: 'პრემიუმ ნაკურთხი ლორის ნაჭრები მარინადებით', ru: 'Премиум ломтики копченой ветчины с маринованными овощами', en: 'Premium smoked ham slices with pickles' },
  
  grilledBeefMedallionsName: { ka: 'გრილზე შემწვარი ძროხის მედალიონები', ru: 'Медальоны говядины на гриле', en: 'Grilled Beef Medallions' },
  grilledBeefMedallionsDesc: { ka: 'ნაზი ძროხის მედალიონები ბალზამიკო მწარეთი', ru: 'Нежные медальоны говядины с бальзамической глазурью', en: 'Tender beef medallions with balsamic glaze' },
  
  crispyWingsFriesName: { ka: 'ხრაშუნა ფრთები და ფრი', ru: 'Хрустящие крылышки с картофелем', en: 'Crispy Wings & Fries' },
  crispyWingsFriesDesc: { ka: 'ოქროსფერი ხრაშუნა კატმის ფრთები გამაგრილებელი ფრით', ru: 'Золотистые хрустящие куриные крылышки с приправленным картофелем', en: 'Golden crispy chicken wings with seasoned fries' },
  
  georgianKhinkaliName: { ka: 'ქართული ხინკალი', ru: 'Грузинские хинкали', en: 'Georgian Khinkali Dumplings' },
  georgianKhinkaliDesc: { ka: 'ტრადიციული ქართული ხინკალი', ru: 'Традиционные грузинские пельмени с мясным бульоном', en: 'Traditional Georgian soup dumplings with twisted tops' },
  
  seafoodPlatterName: { ka: 'ზღვის პროდუქტების თაბაკი', ru: 'Морская тарелка', en: 'Seafood Platter' },
  seafoodPlatterDesc: { ka: 'შერეული ზღვის პროდუქტები კრევეტებით, მიდიებით, კალმარებით და ბრინჯით', ru: 'Смешанная морская тарелка с креветками, мидиями, кольцами кальмаров и рисом', en: 'Mixed seafood platter with shrimp, mussels, squid rings and rice' },
  
  // Dessert Items
  chocolateSouffleName: { ka: 'შოკოლადის სუფლე ნაყინით', ru: 'Шоколадное суфле с мороженым', en: 'Chocolate Soufflé with Ice Cream' },
  chocolateSouffleDesc: { ka: 'ცხელი შოკოლადის სუფლე ვანილის ნაყინითა და შოკოლადის სოუსით', ru: 'Теплое шоколадное суфле с ванильным мороженым и шоколадным соусом', en: 'Warm chocolate soufflé served with vanilla ice cream and chocolate drizzle' },
  
  sweetCrepesName: { ka: 'ტკბილი კრეპები კარამელით', ru: 'Сладкие крепы с карамелью', en: 'Sweet Crepes with Caramel' },
  sweetCrepesDesc: { ka: 'თხელი ნაცვლები ტკბილი შიგთავსით, კარამელის სოუსითა და ფხვნილი შაქრით, ყავასთან ერთად', ru: 'Тонкие оладьи с сладкой начинкой, политые карамельным соусом и сахарной пудрой, подается с кофе', en: 'Thin pancakes filled with sweet filling, drizzled with caramel sauce and powdered sugar, served with coffee' },
  
  // Drinks
  classicCocktailName: { ka: 'კლასიკური კოქტეილი', ru: 'Классический коктейль', en: 'Classic Cocktail' },
  classicCocktailDesc: { ka: 'წითელი კოქტეილი ნარინჯით', ru: 'Красный коктейль с апельсиновым гарниром и льдом', en: 'Red cocktail with orange garnish and ice' },
  
  weihenstephanBeerName: { ka: 'ვაიჰენშტეფანის ლუდი', ru: 'Пиво Вайхенштефан', en: 'Weihenstephan Beer' },
  weihenstephanBeerDesc: { ka: 'გერმანული პრემიუმ ხორბლის ლუდი ტრადიციულ მუქში', ru: 'Немецкое премиум пшеничное пиво в традиционной кружке', en: 'German premium wheat beer in traditional mug' },

  // Additional Main Course Items
  grilledSausagePlatterName: { ka: 'გრილზე შემწვარი ძეხვის ფირფიტა', ru: 'Тарелка колбасок на гриле', en: 'Grilled Sausage Platter' },
  grilledSausagePlatterDesc: { ka: 'შერეული გრილზე შემწვარი ძეხვები მარინადებითა და მოსტარდით', ru: 'Смешанные колбаски на гриле с маринованными овощами и горчичным соусом', en: 'Mixed grilled sausages with pickled vegetables and mustard sauce' },
  
  georgianAjapsandaliName: { ka: 'ქართული აჯაფსანდალი', ru: 'Грузинский аджапсандали', en: 'Georgian Ajapsandali' },
  georgianAjapsandaliDesc: { ka: 'ტრადიციული ქართული ბოსტნეულის ღვეზელი ბადრიჯნით, წიწაკითა და მწვანილით', ru: 'Традиционное грузинское овощное рагу с баклажанами, перцем и травами', en: 'Traditional Georgian vegetable stew with eggplant, peppers, and herbs' },
  
  mushroomCreamSkilletName: { ka: 'სოკოს კრემის ღვეზელი', ru: 'Грибы в сливочном соусе на сковороде', en: 'Mushroom Cream Skillet' },
  mushroomCreamSkilletDesc: { ka: 'ტაფაზე შემწვარი სოკო კრემისფერ თეთრ სოუსში რკინის ტაფაში', ru: 'Жареные на сковороде грибы в сливочном белом соусе, подается в чугунной сковороде', en: 'Pan-fried mushrooms in creamy white sauce served in cast iron skillet' },
  
  georgianKhachapuriSlicedName: { ka: 'ქართული ხაჭაპური ნაჭრებად', ru: 'Грузинский хачапури нарезанный', en: 'Georgian Khachapuri' },
  georgianKhachapuriSlicedDesc: { ka: 'ტრადიციული ქართული ყველის პური, ნაჭრებად და ცხლად მიღებული', ru: 'Традиционный грузинский сырный хлеб, нарезанный и поданный горячим', en: 'Traditional Georgian cheese-filled bread, sliced and served hot' },
  
  georgianCheeseKhachapuriName: { ka: 'ქართული ყველის ხაჭაპური', ru: 'Грузинский сырный хачапури', en: 'Georgian Cheese Khachapuri' },
  georgianCheeseKhachapuriDesc: { ka: 'ტრადიციული ქართული ყველის პური ლღობილი ყველის შიგთავსით', ru: 'Традиционный грузинский сырный хлеб с расплавленной сырной начинкой', en: 'Traditional Georgian cheese bread with melted cheese filling' },
  
  traditionalGeorgianPlatterName: { ka: 'ტრადიციული ქართული ფირფიტა', ru: 'Традиционная грузинская тарелка', en: 'Traditional Georgian Platter' },
  traditionalGeorgianPlatterDesc: { ka: 'თიხის ქვაბში ღვეზელი ახალი მწვანილით, ქართული პურით, მჟავე და სეზონური ბოსტნეულით', ru: 'Тушеное блюдо в глиняном горшочке со свежими травами, грузинским хлебом, солеными и сезонными овощами', en: 'Clay pot stew with fresh herbs, Georgian bread, pickles and seasonal vegetables' },
  
  grilledSalmonRiceName: { ka: 'გრილზე შემწვარი ორაგული ბრინჯით', ru: 'Лосось на гриле с рисом', en: 'Grilled Salmon with Rice' },
  grilledSalmonRiceDesc: { ka: 'ტაფაზე შემწვარი ორაგულის ფილე მუქ ბრინჯთან ლიმონით, გერმანული ხორბლის ლუდთან ერთად', ru: 'Обжаренное филе лосося с приправленным рисом и лимоном, в паре с немецким пшеничным пивом', en: 'Pan-seared salmon fillet served with seasoned rice and lemon, paired with German wheat beer' },
  
  germanSausagePlatterName: { ka: 'გერმანული ძეხვის ფირფიტა', ru: 'Тарелка немецких колбас', en: 'German Sausage Platter' },
  germanSausagePlatterDesc: { ka: 'შერეული გერმანული ძეხვები მარინადებული კარტოფილითა და მოსტარდის სოუსით', ru: 'Ассорти немецких колбас с укропным картофелем и горчичным соусом', en: 'Assorted German sausages with dill potatoes and mustard sauce' },
  
  grilledPorkRibsPlatterName: { ka: 'გრილზე შემწვარი ღორის ნეკნების ფირფიტა', ru: 'Тарелка свиных ребрышек на гриле', en: 'Grilled Pork Ribs Platter' },
  grilledPorkRibsPlatterDesc: { ka: 'BBQ ღორის ნეკნები მარინადებული კარტოფილით, კომბოსტოს და მწვანე სოუსით', ru: 'Ребрышки BBQ с укропным картофелем, капустой и травяным соусом', en: 'BBQ pork ribs with dill potatoes, cabbage and herb sauce' },
  
  grilledFishFilletName: { ka: 'გრილზე შემწვარი თევზის ფილე', ru: 'Филе рыбы на гриле', en: 'Grilled Fish Fillet' },
  grilledFishFilletDesc: { ka: 'გრილზე შემწვარი თევზი მწვანე კარტოფილით, მჟავე კომბოსტოს და მარცხისფერი სოუსით', ru: 'Рыба на гриле с травяным картофелем, квашеной капустой и укропным соусом', en: 'Grilled fish with herb potatoes, sauerkraut and dill sauce' },
  
  caesarSaladChickenName: { ka: 'ცეზარის სალათი კატმით', ru: 'Салат Цезарь с курицей', en: 'Caesar Salad with Grilled Chicken' },
  caesarSaladChickenDesc: { ka: 'ახალი ცეზარის სალათი გრილზე შემწვარი კატმის ნაჭრებით', ru: 'Свежий салат Цезарь с кусочками курицы на гриле', en: 'Fresh caesar salad topped with grilled chicken pieces' },
  
  georgianBeanStewBeerName: { ka: 'ქართული ლობიო ლუდით', ru: 'Грузинское фасолевое рагу с пивом', en: 'Georgian Bean Stew with Beer' },
  georgianBeanStewBeerDesc: { ka: 'ტრადიციული ქართული ლობიო ბროწეულით, კაკლითა და მწვანილით, ქართული პურით და ლუდით', ru: 'Традиционное грузинское фасолевое рагу с гранатом, орехами и травами, подается с грузинским хлебом и пивом', en: 'Traditional Georgian bean stew with pomegranate, nuts and herbs, served with Georgian bread and beer' },
  
  georgianRiceVegetablesName: { ka: 'ქართული ბრინჯი ბოსტნეულით', ru: 'Грузинский рис с овощами', en: 'Georgian Rice with Vegetables' },
  georgianRiceVegetablesDesc: { ka: 'სუნელოვანი ბრინჯი შერეული ბოსტნეულით, მწვანილითა და კუნჟუთის მარცვლებით', ru: 'Ароматный рис со смешанными овощами, травами и семенами кунжута', en: 'Fragrant rice with mixed vegetables, herbs and sesame seeds' },
  
  pastaMeatSauceName: { ka: 'მაკარონი ხორცის სოუსით', ru: 'Паста с мясным соусом', en: 'Pasta with Meat Sauce' },
  pastaMeatSauceDesc: { ka: 'ხელნაკეთი მაკარონი ტრადიციული ხორცის სოუსით, პარმეზანის ყველითა და ახალი რეგანით', ru: 'Домашняя паста с традиционным мясным соусом, сыром пармезан и свежим базиликом', en: 'Homemade pasta with traditional meat sauce, parmesan cheese and fresh basil' },
  
  prosciuttoPizzaName: { ka: 'პროშუტოს პიცა', ru: 'Пицца с прошутто', en: 'Prosciutto Pizza' },
  prosciuttoPizzaDesc: { ka: 'ტრადიციული იტალიური პიცა პროშუტოს ლორით, მოცარელას ყველითა და ტომატის სოუსით', ru: 'Традиционная итальянская пицца с ветчиной прошутто, сыром моцарелла и томатным соусом', en: 'Traditional Italian pizza with prosciutto ham, mozzarella cheese and tomato sauce' },
  
  mixedGrilledMeatPlatterName: { ka: 'შერეული გრილზე შემწვარი ხორცის ფირფიტა', ru: 'Тарелка смешанного мяса на гриле', en: 'Mixed Grilled Meat Platter' },
  mixedGrilledMeatPlatterDesc: { ka: 'შერეული გრილზე შემწვარი ხორცი ძეხვებით, კაბაბითა და ბოსტნეულით, სოუსებთან ერთად', ru: 'Ассорти жареного мяса с колбасками, кебабами и овощами, подается с соусами', en: 'Assorted grilled meats with sausages, kebabs, and vegetables, served with sauces' },
  
  grilledMeatballsVegetablesName: { ka: 'გრილზე შემწვარი ხორცხალები ბოსტნეულით', ru: 'Мясные шарики на гриле с овощами', en: 'Grilled Meatballs with Vegetables' },
  grilledMeatballsVegetablesDesc: { ka: 'ტრადიციული ქართული ხორცხალები გრილზე შემწვარი წიწაკით და ტომატის სოუსით', ru: 'Традиционные грузинские мясные шарики на гриле с перцем и томатным соусом', en: 'Traditional Georgian meatballs grilled with peppers and served with tomato sauce' },
  
  pepperoniPizzaName: { ka: 'პეპერონის პიცა', ru: 'Пицца пепперони', en: 'Pepperoni Pizza' },
  pepperoniPizzaDesc: { ka: 'კლასიკური პიცა პეპერონით, მოცარელას ყველითა და მწვანილით', ru: 'Классическая пицца с пепперони, сыром моцарелла и травами', en: 'Classic pizza with pepperoni, mozzarella cheese and herbs' },
  
  kupatiTomatoSauceName: { ka: 'კუპატი ტომატის სოუსში', ru: 'Купати в томатном соусе', en: 'Kupati in Tomato Sauce' },
  kupatiTomatoSauceDesc: { ka: 'ტრადიციული ქართული ძეხვები გაფუებულ ტომატის სოუსში ახალი მწვანილით', ru: 'Традиционные грузинские колбаски в пряном томатном соусе со свежими травами', en: 'Traditional Georgian sausages served in spiced tomato sauce with fresh herbs' },
  
  georgianKupatiTomatoSauceName: { ka: 'ქართული კუპატი ტომატის სოუსით', ru: 'Грузинские купати с томатным соусом', en: 'Georgian Kupati with Tomato Sauce' },
  georgianKupatiTomatoSauceDesc: { ka: 'ტრადიციული ქართული გრილზე შემწვარი ძეხვები მდიდარ ტომატის სოუსში ახალი მწვანილითა და ხახვით', ru: 'Традиционные грузинские колбаски на гриле в богатом томатном соусе со свежими травами и луком', en: 'Traditional Georgian grilled sausages served in rich tomato sauce with fresh herbs and onions' },
  
  mixedGreenSaladSalmonName: { ka: 'შერეული მწვანე სალათი ორაგულით', ru: 'Смешанный зеленый салат с лососем', en: 'Mixed Green Salad with Salmon' },
  mixedGreenSaladSalmonDesc: { ka: 'ახალი შერეული მწვანე ფოთლები კვამლისფერი ორაგულით, კაკლითა და სახლის დრესინგით, გერმანული ლუდით', ru: 'Свежая смешанная зелень с копченым лососем, орехами и домашней заправкой, подается с немецким пивом', en: 'Fresh mixed greens with smoked salmon, nuts and house dressing, served with German beer' },
  
  beerBatteredFishChipsName: { ka: 'ლუდში ჩაბურღული თევზი ფრით', ru: 'Рыба в пивном кляре с картофелем', en: 'Beer Battered Fish and Chips' },
  beerBatteredFishChipsDesc: { ka: 'ხრაშუნა ლუდის ბისქვიტში ჩაბურღული თევზის ფილე ოქროსფერი ფრი კარტოფილითა და ტომატის სოუსით', ru: 'Хрустящее филе рыбы в пивном кляре с золотистым картофелем фри и томатным соусом', en: 'Crispy beer-battered fish fillets served with golden french fries and tomato sauce' },
  
  grilledFishWholeName: { ka: 'გრილზე შემწვარი მთლიანი თევზი', ru: 'Целая рыба на гриле', en: 'Grilled Fish' },
  grilledFishWholeDesc: { ka: 'ახალი მთლიანი თევზი გრილზე სრულყოფილად შემწვარი, სალათისა და ნარინჯის ნაჭრებით', ru: 'Свежая целая рыба, приготовленная на гриле до совершенства, подается с салатом и дольками апельсина', en: 'Fresh whole fish grilled to perfection, served with lettuce and orange slices' },
  
  cheesePizzaTomatoOliveName: { ka: 'ყველის პიცა ტომატითა და ზეთისხილით', ru: 'Сырная пицца с помидорами и оливками', en: 'Cheese Pizza' },
  cheesePizzaTomatoOliveDesc: { ka: 'ღუმელში მომზადებული პიცა ჩერის ტომატითა და შავი ზეთისხილით', ru: 'Пицца на дровах с помидорами черри и черными оливками', en: 'Wood-fired pizza topped with cherry tomatoes and black olives' },
  
  // Additional Signature Items
  georgianKupatiSausagesName: { ka: 'ქართული კუპატი ძეხვები', ru: 'Грузинские колбаски купати', en: 'Georgian Kupati Sausages' },
  georgianKupatiSausagesDesc: { ka: 'ტრადიციული ქართული გაფუებული ძეხვები შავ პურითა და მოსტარდით', ru: 'Традиционные грузинские острые колбаски с темным хлебом и горчицей', en: 'Traditional Georgian spiced sausages with dark bread and mustard' },
  
  georgianCheeseSouffleBeerName: { ka: 'ქართული ყველის სუფლე ლუდით', ru: 'Грузинское сырное суфле с пивом', en: 'Georgian Cheese Soufflé with Beer' },
  georgianCheeseSouffleBeerDesc: { ka: 'ტრადიციული ღუმელში მომზადებული ყველის სუფლე ქართული ლუდითა და კრემის სოუსით', ru: 'Традиционное запеченное сырное суфле с грузинским пивом и сливочным соусом', en: 'Traditional baked cheese souffle served with Georgian beer and cream sauce' },
  
  acharuliKhachapuriName: { ka: 'აჭარული ხაჭაპური', ru: 'Аджарский хачапури', en: 'Acharuli Khachapuri' },
  acharuliKhachapuriDesc: { ka: 'აჭარული ხაჭაპური მარინადებული ბოსტნეულით, მწვანილითა და სანელებლებით', ru: 'Аджарский хачапури с маринованными овощами, травами и специями', en: 'Acharuli Khachapuri topped with pickled vegetables, herbs and spices' },
  
  georgianFeastPlatterName: { ka: 'ქართული ზეიმის ფირფიტა', ru: 'Грузинская праздничная тарелка', en: 'Georgian Feast Platter' },
  georgianFeastPlatterDesc: { ka: 'მსხვილი ხის ფირფიტა შერეული ქართული ძეხვებით, გრილზე შემწვარი ხორცით, შემწვარი კარტოფილით, ახალი ბოსტნეულითა და მრავალი ტრადიციული სოუსით', ru: 'Большая деревянная тарелка с ассорти грузинских колбасок, жареным мясом, запеченным картофелем, свежими овощами и несколькими традиционными соусами', en: 'Generous wooden platter featuring assorted Georgian sausages, grilled meats, roasted potatoes, fresh vegetables and multiple traditional sauces' },

  // Contact
  address: { ka: 'მისამართი', ru: 'Адрес', en: 'Address' },
  phone: { ka: 'ტელეფონი', ru: 'Телефон', en: 'Phone' },

logoAlt: { ka: 'ვაიჰენშტეფანის ლოგო', ru: 'Логотип Вайхенштефан', en: 'Weihenstephan Logo' },
tagline: { ka: 'ლუდის მუზეუმი & რესტორანი', ru: 'Музей пива & Ресторан', en: 'Beer Museum & Restaurant' },
footerDescription: {
  ka: 'გაეცანით საუკეთესო ბავარიულ ტრადიციას, სადაც საუკუნოვანი ლუდმცოდნეობის მემკვიდრეობა ხვდება თანამედროვე კულინარიულ სრულყოფილებას, მდიდრულ და ავთენტურ გარემოში.',
  ru: 'Испытайте лучшие баварские традиции, где многовековое пивоваренное наследие встречается с современным кулинарным совершенством в атмосфере роскоши и аутентичности.',
  en: 'Experience the finest Bavarian tradition where centuries of brewing heritage meets modern culinary excellence in an atmosphere of luxury and authenticity.'
},
quickLinks: { ka: 'სწრაფი წვდომა', ru: 'Быстрые ссылки', en: 'Quick Links' },
contactInfo: { ka: 'კონტაქტი', ru: 'Контактная информация', en: 'Contact Info' },
locationEN: { ka: 'Kutaisi, Georgia', ru: 'Кутаиси, Грузия', en: 'Kutaisi, Georgia' },
locationGE: { ka: 'ქუთაისი, საქართველო', ru: 'Кутаиси, Грузия', en: 'ქუთაისი, საქართველო' },
followUs: { ka: 'გამოგვყევით', ru: 'Следите за нами', en: 'Follow Us' },
copyright: { ka: '© 2025 ვაიჰენშტეფანი ლუდის მუზეუმი & რესტორანი. ყველა უფლება დაცულია.', ru: '© 2025 Музей пива Вайхенштефан & Ресторан. Все права защищены.', en: '© 2025 Weihenstephan Beer Museum & Restaurant. All rights reserved.' },
authenticExperience: { ka: 'ავთენტური ბავარიული გამოცდილება', ru: 'Аутентичный баварский опыт', en: 'Authentic Bavarian Experience' },


  
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ka');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
