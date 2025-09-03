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
  // Hero Actions
  onlineOrder: { ka: 'ონლაინ შეკვეთა', ru: 'Онлайн заказ', en: 'Online Order' },
  tableReservation: { ka: 'მაგიდის დაჯავშნა', ru: 'Бронирование столика', en: 'Table Reservation' },
  viewMenu: { ka: 'მენიუ', ru: 'Меню', en: 'View Menu' },
  backToHome: { ka: 'უკან', ru: 'Назад', en: 'Back' },

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
  softDrinks: { ka: 'უალკოჰოლო სასმელები', ru: 'Безалкагольные напитки', en: 'Soft Drinks' },
  processedFood: { ka: 'პროცესირებული საკვები', ru: 'Обработанная пища', en: 'Processed Food' },

  // New Georgian Menu Categories
  alcoholicDrinks: { ka: 'ალკოჰოლური სასმელები', ru: 'Алкагольные напитки', en: 'Alcoholic Drinks' },
  nonAlcoholicDrinks: { ka: 'უალკოჰოლო სასმელები', ru: 'Безалкагольные напитки', en: 'Non-Alcoholic Drinks' },
  appetizer: { ka: 'აპეტაიზერი', ru: 'Закуски', en: 'Appetizer' },
  bakery: { ka: 'ცომეული', ru: 'Выпечка', en: 'Bakery' },
  coldDishes: { ka: 'ცივი კერძები', ru: 'Холодные блюда', en: 'Cold Dishes' },
  grillBarbecue: { ka: 'გრილი / მაყალი', ru: 'Гриль / Барбекю', en: 'Grill / Barbecue' },
  chickenPoultry: { ka: 'წიწილა / ქათამი', ru: 'Курица / Птица', en: 'Chicken / Poultry' },
  mainDishes: { ka: 'ძირითადი კერძები', ru: 'Основные блюда', en: 'Main Dishes' },
  beerMenu: { ka: 'ლუდის მენიუ', ru: 'Пивное меню', en: 'Beer Menu' },
  soups: { ka: 'წვნიანი', ru: 'Супы', en: 'Soups' },
  pasta: { ka: 'პასტა', ru: 'Паста', en: 'Pasta' },
  seafood: { ka: 'ზღვის პროდუქტები', ru: 'Морепродукты', en: 'Seafood' },
  sideDishes: { ka: 'გარნირი', ru: 'Гарниры', en: 'Side Dishes' },
  sauces: { ka: 'სოუსები', ru: 'Соусы', en: 'Sauces' },
  dessert: { ka: 'დესერტი', ru: 'Десерты', en: 'Dessert' },
  coffeeTea: { ka: 'ყავა/ჩაი', ru: 'Кофе/Чай', en: 'Coffee/Tea' }, 

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
  serviceChargeDescription: { ka: 'სერვისის გადასახადი მოიცავს მაგიდის  observing-ს, უფასო პურს და რესტორნის ატმოსფეროს', ru: 'Плата за обслуживание включает обслуживание стола, бесплатный хлеб и атмосферу ресторана', en: 'Service charge includes table service, complimentary bread, and restaurant ambiance' },
  preparationTime: { ka: 'მომზადების დრო: 10-15 წუთი', ru: 'Время приготовления: 10-15 минут', en: 'Preparation time: 10-15 min' },

  // Additional translations
  searchIn: { ka: 'ძიება', ru: 'Поиск в', en: 'Search in' },
  loadingDeliciousItems: { ka: 'სასურველი ელემენტების ჩატვირთვა...', ru: 'Загрузка вкусных блюд...', en: 'Loading delicious items...' },
  seeMore: { ka: 'იხილეთ მეტი', ru: 'Смотреть больше', en: 'See More' },
  ourFullMenu: { ka: 'ჩვენი მენიუ', ru: 'Наше меню', en: 'Our Menu' },
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
  
  seafoodPlatterName: { ka: 'ზღვის პროდუქტების დაფა', ru: 'Морская тарелка', en: 'Seafood Platter' },
  seafoodPlatterDesc: { ka: 'კრევეტები, მიდიები, რვაფეხა, კალმარი, ბრინჯი ბოსტნეულით', ru: 'Креветки, мидии, осьминог, кальмар, рис с овощами', en: 'Shrimp, mussels, octopus, squid, rice with vegetables' },
  
  // Dessert Items
  chocolateSouffleName: { ka: 'შოკოლადის სუფლე ნაყინით', ru: 'Шоколадное суфле с мороженым', en: 'Chocolate Soufflé with Ice Cream' },
  chocolateSouffleDesc: { ka: 'ცხელი შოკოლადის სუფლე ვანილის ნაყინითა და შოკოლადის სოუსით', ru: 'Теплое шоколадное суфле с ванильным мороженым и шоколадным соусом', en: 'Warm chocolate soufflé served with vanilla ice cream and chocolate drizzle' },
  
  sweetCrepesName: { ka: 'ტკბილი კრეპები კარამელით', ru: 'Сладкие крепы с карамелью', en: 'Sweet Crepes with Caramel' },
  sweetCrepesDesc: { ka: 'თხელი ნაცვლები ტკბილი შიგთავსით, კარამელის სოუსითა და ფხვნილი შაქრით, ყავასთან ერთად', ru: 'Тонкие оладьи с сладкой начинкой, политые карамельным соусом и сахарной пудрой, подается с кофе', en: 'Thin pancakes filled with sweet filling, drizzled with caramel sauce and powdered sugar, served with coffee' },
  
  // Drinks
  classicCocktailName: { ka: 'კლასიკური კოქტეილი', ru: 'Классический коктейль', en: 'Classic Cocktail' },
  classicCocktailDesc: { ka: 'წითელი კოქტეილი ნარინჯით', ru: 'Красный коктейль с апельсиновым гарниром и льдом', en: 'Red cocktail with orange garnish and ice' },
  
  // Cocktails
  aperolName: { ka: 'აპეროლი', ru: 'Апероль', en: 'Aperol' },
  aperolDesc: { ka: 'აპეროლი, პროსეკო და სოდა', ru: 'Апероль, просекко и сода', en: 'Aperol, prosecco and soda' },
  
  cosmopolitanName: { ka: 'კოსმოპოლიტენი', ru: 'Космополитен', en: 'Cosmopolitan' },
  cosmopolitanDesc: { ka: 'ვოდკა, ტრიპლ სეკი, ჟოლოს წვენი და ლაიმის წვენი', ru: 'Водка, трипл сек, клюквенный сок и сок лайма', en: 'Vodka, triple sec, cranberry juice and lime juice' },
  
  mojitoName: { ka: 'მოჰიტო', ru: 'Мохито', en: 'Mojito' },
  mojitoDesc: { ka: 'თეთრი რომი, შაქარი, ლაიმის წვენი, სოდის წყალი და ნანა', ru: 'Белый ром, сахар, сок лайма, газированная вода и мята', en: 'White rum, sugar, lime juice, soda water and mint' },
  
  museumName: { ka: 'მუზეუმი', ru: 'Музей', en: 'Museum' },
  museumDesc: { ka: 'ლუდი', ru: ' Льуди', en: 'Beer' },
  
  blueLagoonName: { ka: 'ცისფერი ლაგუნა', ru: 'Голубая лагуна', en: 'Blue Lagoon' },
  blueLagoonDesc: { ka: 'ვოდკა, ლურჯი კიურასაო, ლიმონათი და ლიმონი', ru: 'Водка, синий кюрасао, лимонад и лимон', en: 'Vodka, blue curaçao, lemonade and lemon' },
  
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
locationEN: { ka: '9 Galaktion Tabidze Street, Kutaisi 4600, Georgia', ru: '9 улица Галактиона Табидзе, Кутаиси 4600, Грузия', en: '9 Galaktion Tabidze Street, Kutaisi 4600, Georgia' },
locationGE: { ka: '9 გალაკტიონ ტაბიძის ქუჩა, ქუთაისი 4600, საქართველო', ru: '9 улица Галактиона Табидзе, Кутаиси 4600, Грузия', en: '9 გალაკტიონ ტაბიძის ქუჩა, ქუთაისი 4600, საქართველო' },
followUs: { ka: 'გამოგვყევით', ru: 'Следите за нами', en: 'Follow Us' },
copyright: { ka: '© 2025 ვაიჰენშტეფანი ლუდის მუზეუმი & რესტორანი. ყველა უფლება დაცულია.', ru: '© 2025 Музей пива Вайхенштефан & Ресторан. Все права защищены.', en: '© 2025 Weihenstephan Beer Museum & Restaurant. All rights reserved.' },
authenticExperience: { ka: 'ავთენტური ბავარიული გამოცდილება', ru: 'Аутентичный баварский опыт', en: 'Authentic Bavarian Experience' },

  // Alcoholic Drinks
  weihenstephanOriginalName: { ka: 'ვაიჰენშტეფანი ორიგინალი', ru: 'Вайхенштефан Оригинал', en: 'Weihenstephan Original' },
  weihenstephanOriginalDesc: { ka: 'ტრადიციული ბავარიული ლაგერი მდიდარი მალტის გემოთი', ru: 'Традиционный баварский лагер с богатым солодовым вкусом', en: 'Traditional Bavarian lager with rich malty flavor' },

  weihenstephanUnfilteredName: { ka: 'ვაიჰენშტეფანი გაუფილტრავი', ru: 'Вайхенштефан Нефильтрованное', en: 'Weihenstephan Unfiltered' },
  weihenstephanUnfilteredDesc: { ka: 'გაუფილტრავი ბავარიული ლუდი ბუნებრივი მდიდარი გემოთი', ru: 'Нефильтрованное баварское пиво с натуральным богатым вкусом', en: 'Unfiltered Bavarian beer with natural rich flavor' },

  weihenstephanDarkName: { ka: 'ვაიჰენშტეფანი მუქი', ru: 'Вайхенштефан Темное', en: 'Weihenstephan Dark' },
  weihenstephanDarkDesc: { ka: 'მუქი ბავარიული ლუდი ღრმა მალტის გემოთი', ru: 'Темное баварское пиво с глубоким солодовым вкусом', en: 'Dark Bavarian beer with deep malty taste' },

  budweiserName: { ka: 'ბუდვაიზერი', ru: 'Будвайзер', en: 'Budweiser' },
  budweiserDesc: { ka: 'კლასიკური ამერიკული ლუდი სუფთა გემოთი', ru: 'Классическое американское пиво с чистым вкусом', en: 'Classic American beer with clean taste' },

  beerKegGiraffeName: { ka: 'ლუდი კასრით (ჟირაფი)', ru: 'Пиво в кеге (Жираф)', en: 'Beer Keg (Giraffe)' },
  beerKegGiraffeDesc: { ka: '3 ლიტრიანი ლუდის კასრი საზიარო დასალევად', ru: '3-литровый кег пива для коллективного потребления', en: '3L beer keg for sharing' },

  rosatoWineName: { ka: 'როსატო', ru: 'Розато', en: 'Rosato' },
  rosatoWineDesc: { ka: 'ელეგანტური იტალიური ვარდისფერი ღვინო', ru: 'Элегантное итальянское розовое вино', en: 'Elegant Italian rosé wine' },

  rossoWineName: { ka: 'როსო', ru: 'Россо', en: 'Rosso' },
  rossoWineDesc: { ka: 'მდიდარი იტალიური წითელი ღვინო', ru: 'Богатое итальянское красное вино', en: 'Rich Italian red wine' },

  sparklingBagrationiName: { ka: 'ცქრიალა ღვინო ბაგრატიონი', ru: 'Игристое вино Багратиони', en: 'Sparkling Wine Bagrationi' },
  sparklingBagrationiDesc: { ka: 'ქართული პრემიუმ ცქრიალა ღვინო', ru: 'Грузинское премиум игристое вино', en: 'Georgian premium sparkling wine' },

  kisiTelianiName: { ka: 'ქისი თელიანი', ru: 'Киси Телани', en: 'Kisi Teliani' },
  kisiTelianiDesc: { ka: 'ქართული თეთრი ღვინო ქისის ვაზისაგან', ru: 'Грузинское белое вино из винограда Киси', en: 'Georgian white wine from Kisi grape' },

  saperaviTelianiName: { ka: 'საფერავი თელიანი ველი', ru: 'Саперави Телани Вэлли', en: 'Saperavi Teliani Valley' },
  saperaviTelianiDesc: { ka: 'ქართული წითელი ღვინო საფერავის ვაზისაგან', ru: 'Грузинское красное вино из винограда Саперави', en: 'Georgian red wine from Saperavi grape' },

  tsinandaliTelianiName: { ka: 'წინანდალი თელიანი ველი', ru: 'Цинандали Телани Вэлли', en: 'Tsinandali Teliani Valley' },
  tsinandaliTelianiDesc: { ka: 'ცნობილი ქართული თეთრი ღვინო', ru: 'Знаменитое грузинское белое вино', en: 'Famous Georgian white wine' },

  tvishiTelianiName: { ka: 'ტვიში თელიანი ველი', ru: 'Твиши Телани Вэлли', en: 'Tvishi Teliani Valley' },
  tvishiTelianiDesc: { ka: 'ნახევრად ტკბილი ქართული თეთრი ღვინო', ru: 'Полусладкое грузинское белое вино', en: 'Semi-sweet Georgian white wine' },

  mukuzaniTelianiName: { ka: 'მუკუზანი თელიანი ველი', ru: 'Мукузани Телани Вэлли', en: 'Mukuzani Teliani Valley' },
  mukuzaniTelianiDesc: { ka: 'პრესტიჟული ქართული მშრალი წითელი ღვინო', ru: 'Престижное грузинское сухое красное вино', en: 'Prestigious Georgian dry red wine' },

  otskhanurriSaperaviName: { ka: 'ოცხანური საფერავი თელიანი', ru: 'Оцханури Сапере Телани', en: 'Otskhanuri Sapere Teliani' },
  otskhanurriSaperaviDesc: { ka: 'იშვიათი ქართული წითელი ღვინო', ru: 'Редкое грузинское красное вино', en: 'Rare Georgian red wine' },

  kindzmarauliTelianiName: { ka: 'ქინძმარაული თელიანი', ru: 'Киндзмараули Телани', en: 'Kindzmarauli Teliani' },
  kindzmarauliTelianiDesc: { ka: 'ნახევრად ტკბილი ქართული წითელი ღვინო', ru: 'Полусладкое грузинское красное вино', en: 'Semi-sweet Georgian red wine' },

  khvanchkaraTelianiName: { ka: 'ხვანჩკარა თელიანი', ru: 'Хванчкара Телани', en: 'Khvanchkara Teliani' },
  khvanchkaraTelianiDesc: { ka: 'ელიტარული ქართული ნახევრად ტკბილი წითელი ღვინო', ru: 'Элитное грузинское полусладкое красное вино', en: 'Elite Georgian semi-sweet red wine' },

  familyWhiteDryName: { ka: 'ჩამოსასხმელი თეთრი მშრალი ღვინო', ru: 'Домашнее белое сухое вино', en: 'Family Wine White Dry' },
  familyWhiteDryDesc: { ka: 'სახლის სპეციალური თეთრი მშრალი ღვინო', ru: 'Специальное домашнее белое сухое вино', en: 'House special white dry wine' },

  jrbClassicName: { ka: 'ჯრბ კლასიკი', ru: 'ЖРБ Классик', en: 'JRB Classic' },
  jrbClassicDesc: { ka: 'პრემიუმ ქართული ღვინო', ru: 'Премиальное грузинское вино', en: 'Premium Georgian wine' },

  badagoniClassicName: { ka: 'ბადაგონი კლასიკი', ru: 'Бадагони Классик', en: 'Badagoni Classic' },
  badagoniClassicDesc: { ka: 'ტრადიციული ქართული ღვინო', ru: 'Традиционное грузинское вино', en: 'Traditional Georgian wine' },

  badagoniOriginalName: { ka: 'ბადაგონი ორიგინალი', ru: 'Бадагони Ориджинал', en: 'Badagoni Original' },
  badagoniOriginalDesc: { ka: 'ორიგინალური ქართული ღვინო', ru: 'Оригинальное грузинское вино', en: 'Original Georgian wine' },

  askanelPlatinumName: { ka: 'ასკანელი ვერცხლი', ru: 'Асканели Платинум', en: 'Askaneli Platinum' },
  askanelPlatinumDesc: { ka: 'პლატინუმ სერიის ქართული ღვინო', ru: 'Грузинское вино серии Платинум', en: 'Platinum series Georgian wine' },

  askanelGoldName: { ka: 'ასკანელი ოქრო', ru: 'Асканели Голд', en: 'Askaneli Gold' },
  askanelGoldDesc: { ka: 'ოქროს სერიის ქართული ღვინო', ru: 'Грузинское вино серии Голд', en: 'Gold series Georgian wine' },

  chachaOakAgedName: { ka: 'ჭაჭა მუხაში დავარგებული', ru: 'Чача выдержанная в дубе', en: 'Chacha Oak Aged' },
  chachaOakAgedDesc: { ka: 'მუხის კასრში დავარგებული ქართული ჭაჭა', ru: 'Грузинская чача, выдержанная в дубовых бочках', en: 'Georgian chacha aged in oak barrels' },

  jimsherName: { ka: 'ჯიმშერი', ru: 'Джимшер', en: 'Jimsher' },
  jimsherDesc: { ka: 'პრემიუმ ქართული ალკოჰოლური სასმელი', ru: 'Премиальный грузинский алкогольный напиток', en: 'Premium Georgian alcoholic beverage' },

  macallanName: { ka: 'მაკალანი', ru: 'Макаллан', en: 'Macallan' },
  macallanDesc: { ka: 'შოტლანდიური სინგლ მოლტ ვისკი', ru: 'Шотландский односолодовый виски', en: 'Scottish single malt whisky' },

  chivasRegalName: { ka: 'ჩივას რეგალი', ru: 'Чивас Регал', en: 'Chivas Regal' },
  chivasRegalDesc: { ka: 'პრემიუმ შოტლანდიური ვისკი', ru: 'Премиальный шотландский виски', en: 'Premium Scottish whisky' },

  jackDanielsAppleName: { ka: 'ჯეკ დანიელსი (ვაშლის)', ru: 'Джек Дэниелс (яблочный)', en: 'Jack Daniel\'s (Apple)' },
  jackDanielsAppleDesc: { ka: 'ვაშლის გემოვნებით ამერიკული ვისკი', ru: 'Американский виски со вкусом яблока', en: 'American whiskey with apple flavor' },

  jackDanielsHoneyName: { ka: 'ჯეკ დანიელსი (თაფლის)', ru: 'Джек Дэниелс (медовый)', en: 'Jack Daniel\'s (Honey)' },
  jackDanielsHoneyDesc: { ka: 'თაფლის გემოვნებით ამერიკული ვისკი', ru: 'Американский виски со вкусом меда', en: 'American whiskey with honey flavor' },

  hennessyName: { ka: 'ჰენესი', ru: 'Хеннесси', en: 'Hennessy' },
  hennessyDesc: { ka: 'ფრანგული პრემიუმ კონიაკი', ru: 'Французский премиальный коньяк', en: 'French premium cognac' },

  sarajishviliXOName: { ka: 'სარაჯიშვილი XO', ru: 'Сараджишвили XO', en: 'Sarajishvili XO' },
  sarajishviliXODesc: { ka: 'ექსტრა ძველი ქართული კონიაკი', ru: 'Экстра старый грузинский коньяк', en: 'Extra old Georgian cognac' },

  sarajishviliVSName: { ka: 'სარაჯიშვილი VS', ru: 'Сараджишвили VS', en: 'Sarajishvili VS' },
  sarajishviliVSDesc: { ka: 'ძალიან სპეციალური ქართული კონიაკი', ru: 'Очень специальный грузинский коньяк', en: 'Very special Georgian cognac' },

  cognac250gName: { ka: 'კონიაკი 250 გრ', ru: 'Коньяк 250 г', en: 'Cognac 250g' },
  cognac250gDesc: { ka: 'კონიაკი 250 გრამი', ru: 'Коньяк 250 грамм', en: 'Cognac 250 grams' },

  cognacName: { ka: 'კონიაკი', ru: 'Коньяк', en: 'Cognac' },
  cognacDesc: { ka: 'კლასიკური კონიაკი', ru: 'Классический коньяк', en: 'Classic cognac' },

  montBlancName: { ka: 'მონ ბლანკი', ru: 'Мон Блан', en: 'Mont Blanc' },
  montBlancDesc: { ka: 'პრემიუმ ვოდკა', ru: 'Премиальная водка', en: 'Premium vodka' },

  greyGooseName: { ka: 'გრეი გუსი', ru: 'Грей Гус', en: 'Grey Goose' },
  greyGooseDesc: { ka: 'ფრანგული პრემიუმ ვოდკა', ru: 'Французская премиальная водка', en: 'French premium vodka' },

  belugaName: { ka: 'ბელუგა', ru: 'Белуга', en: 'Beluga' },
  belugaDesc: { ka: 'რუსული ელიტარული ვოდკა', ru: 'Русская элитная водка', en: 'Russian elite vodka' },

  honeySpiritName: { ka: 'თაფლის არაყი', ru: 'Медовая водка', en: 'Honey Spirit' },
  honeySpiritDesc: { ka: 'თაფლის გემოვნებით ალკოჰოლური სასმელი', ru: 'Алкогольный напиток со вкусом меда', en: 'Alcoholic beverage with honey flavor' },

  danzkaName: { ka: 'დანცკა', ru: 'Данска', en: 'Danzka' },
  danzkaDesc: { ka: 'პრემიუმ ვოდკა', ru: 'Премиальная водка', en: 'Premium vodka' },

  kirkeName: { ka: 'კირკე', ru: 'Кирке', en: 'Kirke' },
  kirkeDesc: { ka: 'საქართველოში წარმოებული ვოდკა', ru: 'Водка, произведенная в Грузии', en: 'Vodka produced in Georgia' },

  nemiroffName: { ka: 'ნემიროვი', ru: 'Немиров', en: 'Nemiroff' },
  nemiroffDesc: { ka: 'უკრაინული პრემიუმ ვოდკა', ru: 'Украинская премиальная водка', en: 'Ukrainian premium vodka' },

  absolutBlueName: { ka: 'აბსოლუტი ბლუ', ru: 'Абсолют Блю', en: 'Absolut Blue' },
  absolutBlueDesc: { ka: 'შვედური კლასიკური ვოდკა', ru: 'Шведская классическая водка', en: 'Swedish classic vodka' },

  absolutCurrantName: { ka: 'აბსოლუტი კურანტი', ru: 'Абсолют Курант', en: 'Absolut Currant' },
  absolutCurrantDesc: { ka: 'შავი ჭაბუკის გემოვნებით შვედური ვოდკა', ru: 'Шведская водка со вкусом черной смородины', en: 'Swedish vodka with blackcurrant flavor' },

  oneginName: { ka: 'ონეგინი', ru: 'Онегин', en: 'Onegin' },
  oneginDesc: { ka: 'რუსული პრემიუმ ვოდკა', ru: 'Русская премиальная водка', en: 'Russian premium vodka' },

  finlandiaName: { ka: 'ფინლანდია', ru: 'Финляндия', en: 'Finlandia' },
  finlandiaDesc: { ka: 'ფინური ვოდკა', ru: 'Финская водка', en: 'Finnish vodka' },

  siberianWolfName: { ka: 'ციმბირული მგელი', ru: 'Сибирский волк', en: 'Siberian Wolf' },
  siberianWolfDesc: { ka: 'რუსული ვოდკა', ru: 'Русская водка', en: 'Russian vodka' },

  // Non-Alcoholic Drinks
  homemadeLemonadeJugName: { ka: 'საფირმო ლიმონათი დოქით', ru: 'Фирменный лимонад (кувшин)', en: 'Homemade Lemonade (Jug)' },
  homemadeLemonadeJugDesc: { ka: 'ახალი ლიმონის ნაზავი დოქში მიწოდებული', ru: 'Свежий лимонный напиток, подается в кувшине', en: 'Fresh lemon drink served in a jug' },

  homemadeLemonadeGlassName: { ka: 'საფირმო ლიმონათი ჭიქით', ru: 'Фирменный лимонад (стакан)', en: 'Homemade Lemonade (Glass)' },
  homemadeLemonadeGlassDesc: { ka: 'ახალი ლიმონის ნაზავი ერთ ჭიქაში', ru: 'Свежий лимонный напиток в стакане', en: 'Fresh lemon drink in a glass' },

  juiceOneLiterName: { ka: 'წვენი', ru: 'Сок (1л)', en: 'Juice (1L)' },
  juiceOneLiterDesc: { ka: 'ნატურალური ხილის წვენი 1 ლიტრი', ru: 'Натуральный фруктовый сок 1 литр', en: 'Natural fruit juice 1 liter' },

  juiceOneGlassName: { ka: 'წვენი (ჭიქით)', ru: 'Сок (стакан)', en: 'Juice (One Glass)' },
  juiceOneGlassDesc: { ka: 'ნატურალური ხილის წვენი ერთ ჭიქაში', ru: 'Натуральный фруктовый сок в стакане', en: 'Natural fruit juice in one glass' },

  iceTeaName: { ka: 'ცივი ჩაი', ru: 'Холодный чай', en: 'Ice Tea' },
  iceTeaDesc: { ka: 'გაცივებული არომატული ჩაი', ru: 'Охлажденный ароматный чай', en: 'Chilled aromatic tea' },

  borjomiWaterName: { ka: 'მინერალური წყალი ბორჯომი', ru: 'Минеральная вода «Боржоми»', en: 'Sparkling Water Borjomi' },
  borjomiWaterDesc: { ka: 'ქართული მინერალური წყალი ბორჯომი', ru: 'Грузинская минеральная вода Боржоми', en: 'Georgian mineral water Borjomi' },

  bakurianiWaterName: { ka: 'მინერალური წყალი ბაკურიანი', ru: 'Минеральная вода «Бакуриани»', en: 'Spring Water Bakuriani' },
  bakurianiWaterDesc: { ka: 'ქართული მთის წყალი ბაკურიანი', ru: 'Грузинская горная вода Бакуриани', en: 'Georgian mountain spring water Bakuriani' },

  kazbegiLemonadeName: { ka: 'ლიმონათი ყაზბეგი', ru: 'Лимонад «Казбеги»', en: 'Lemonade Kazbegi' },
  kazbegiLemonadeDesc: { ka: 'ქართული ლიმონათი ყაზბეგი', ru: 'Грузинский лимонад Казбеги', en: 'Georgian lemonade Kazbegi' },

  cocaColaName: { ka: 'კოკა-კოლა', ru: 'Кока-Кола', en: 'Coca-Cola' },
  cocaColaDesc: { ka: 'კლასიკური კოკა-კოლა', ru: 'Классическая Кока-Кола', en: 'Classic Coca-Cola' },

  fantaName: { ka: 'ფანტა', ru: 'Фанта', en: 'Fanta' },
  fantaDesc: { ka: 'ნარინჯისფერი გაზიანი სასმელი', ru: 'Апельсиновый газированный напиток', en: 'Orange carbonated drink' },

  redBullName: { ka: 'რედ-ბული', ru: 'Ред Булл', en: 'Red Bull' },
  redBullDesc: { ka: 'ენერგეტიკული სასმელი', ru: 'Энергетический напиток', en: 'Energy drink' },

  // Coffee & Tea
  americanoName: { ka: 'ამერიკანო', ru: 'Американо', en: 'Americano' },
  americanoDesc: { ka: 'კლასიკური ამერიკანო ყავა', ru: 'Классическое американо', en: 'Classic Americano coffee' },

  espressoName: { ka: 'ესპრესო', ru: 'Эспрессо', en: 'Espresso' },
  espressoDesc: { ka: 'კლასიკური იტალიური ესპრესო', ru: 'Классический итальянский эспрессо', en: 'Classic Italian espresso' },

  doubleEspressoName: { ka: 'ორმაგი ესპრესო', ru: 'Двойной эспрессо', en: 'Double Espresso' },
  doubleEspressoDesc: { ka: 'ორმაგი ძლიერი ესპრესო', ru: 'Двойная порция эспрессо', en: 'Double shot espresso' },

  cappuccinoName: { ka: 'კაპუჩინო', ru: 'Капучино', en: 'Cappuccino' },
  cappuccinoDesc: { ka: 'ესპრესო რძის სფეროს ქაფით', ru: 'Эспрессо с пенным молоком', en: 'Espresso with steamed milk foam' },

  latteName: { ka: 'ლატე', ru: 'Латте', en: 'Latte' },
  latteDesc: { ka: 'ესპრესო რძის ქაფით', ru: 'Эспрессо с молоком', en: 'Espresso with steamed milk' },

  turkishCoffeeName: { ka: 'თურქული ყავა', ru: 'Турецкий кофе', en: 'Turkish Coffee' },
  turkishCoffeeDesc: { ka: 'ტრადიციული თურქული ყავა', ru: 'Традиционный турецкий кофе', en: 'Traditional Turkish coffee' },

  hotChocolateName: { ka: 'ცხელი შოკოლადი', ru: 'Горячий шоколад', en: 'Hot Chocolate' },
  hotChocolateDesc: { ka: 'მდიდარი ცხელი შოკოლადი', ru: 'Богатый горячий шоколад', en: 'Rich hot chocolate' },

  iceCoffeeName: { ka: 'ცივი ყავა', ru: 'Холодный кофе', en: 'Ice Coffee' },
  iceCoffeeDesc: { ka: 'გაცივებული ყავა ყინულით', ru: 'Охлажденный кофе со льдом', en: 'Chilled coffee with ice' },

  iceCoffeeIceCreamName: { ka: 'ცივი ყავა ნაყინით', ru: 'Холодный кофе с мороженым', en: 'Ice Coffee with Ice Cream' },
  iceCoffeeIceCreamDesc: { ka: 'გაცივებული ყავა ნაყინით', ru: 'Охлажденный кофе с мороженым', en: 'Chilled coffee topped with ice cream' },

  iceCoffeeBaileysName: { ka: 'ცივი ყავა ნაყინით და ბეილისით', ru: 'Холодный кофе с мороженым и Бейлисом', en: 'Ice Coffee with Ice Cream and Baileys' },
  iceCoffeeBaileysDesc: { ka: 'გაცივებული ყავა ნაყინით და ბეილისის ლიქარით', ru: 'Охлажденный кофе с мороженым и ликером Бейлис', en: 'Chilled coffee with ice cream and Baileys liqueur' },

  teaName: { ka: 'ჩაი', ru: 'Чай', en: 'Tea' },
  teaDesc: { ka: 'არომატული ჩაი მრავალფეროვანი', ru: 'Ароматный чай в ассортименте', en: 'Aromatic tea selection' },

  // Bakery Items
  pizzaFourCheeseName: { ka: 'პიცა ოთხი ყველით', ru: 'Пицца четыре сыра', en: 'Four Cheese Pizza' },
  pizzaFourCheeseDesc: { ka: 'ოთხი სახის ყველით პიცა', ru: 'Пицца с четырьмя видами сыра', en: 'Pizza with four types of cheese' },
  pizzaPepperoniName: { ka: 'პიცა პეპერონი', ru: 'Пицца пепперони', en: 'Pepperoni Pizza' },
  pizzaPepperoniDesc: { ka: 'პეპერონით პიცა', ru: 'Пицца с пепперони', en: 'Pizza with pepperoni' },
  pizzaBaconName: { ka: 'პიცა ბეკონით', ru: 'Пицца с беконом', en: 'Bacon Pizza' },
  pizzaBaconDesc: { ka: 'ბეკონით პიცა', ru: 'Пицца с беконом', en: 'Pizza with bacon' },
  pizzaMargheritaName: { ka: 'პიცა მარგარიტა', ru: 'Пицца Маргарита', en: 'Margherita Pizza' },
  pizzaMargheritaDesc: { ka: 'კლასიკური მარგარიტა პიცა', ru: 'Классическая пицца Маргарита', en: 'Classic Margherita pizza' },
  pizzaVegetarianName: { ka: 'პიცა სამარხვო', ru: 'Вегетарианская пицца', en: 'Vegetarian Pizza' },
  pizzaVegetarianDesc: { ka: 'სამარხვო პიცა ბოსტნეულით', ru: 'Постная пицца с овощами', en: 'Lenten pizza with vegetables' },
  khachapuriSpecialName: { ka: 'ხაჭაპური საფირმო', ru: 'Хачапури фирменный', en: 'Signature Khachapuri' },
  khachapuriSpecialDesc: { ka: 'საფირმო ხაჭაპური', ru: 'Фирменный хачапури', en: 'Signature khachapuri' },
  khachapuriAcharuliName: { ka: 'ხაჭაპური აჭარული', ru: 'Аджарский хачапури', en: 'Acharuli Khachapuri' },
  khachapuriAcharuliDesc: { ka: 'აჭარული ხაჭაპური კვერცხით', ru: 'Аджарский хачапури с яйцом', en: 'Acharuli khachapuri with egg' },
  khachapuriImeretiName: { ka: 'ხაჭაპური იმერული', ru: 'Имеретинский хачапури', en: 'Imereti Khachapuri' },
  khachapuriImeretiDesc: { ka: 'იმერული ხაჭაპური ყველით', ru: 'Имеретинский хачапури с сыром', en: 'Imereti khachapuri with cheese' },
  lobianiHamName: { ka: 'ლობიანი ლორით', ru: 'Лобиани с ветчиной', en: 'Lobiani with Ham' },
  lobianiHamDesc: { ka: 'ლობიანი ლორით', ru: 'Лобиани с ветчиной', en: 'Bean bread with ham' },
  lobianiAcharuliName: { ka: 'აჭარული ლობიანი', ru: 'Аджарский лобиани', en: 'Acharuli Lobiani' },
  lobianiAcharuliDesc: { ka: 'აჭარული სტილის ლობიანი', ru: 'Лобиани в аджарском стиле', en: 'Acharuli style lobiani' },
  lobianiName: { ka: 'ლობიანი', ru: 'Лобиани', en: 'Lobiani' },
  lobianiDesc: { ka: 'ტრადიციული ლობიანი', ru: 'Традиционный лобиани', en: 'Traditional lobiani' },
  kubdariName: { ka: 'კუბდარი', ru: 'Кубдари', en: 'Kubdari' },
  kubdariDesc: { ka: 'სვანური კუბდარი', ru: 'Сванский кубдари', en: 'Svan kubdari' },
  focacciaCheeseName: { ka: 'ფოკაჩო ყველით', ru: 'Фокачча с сыром', en: 'Focaccia with Cheese' },
  focacciaCheeseDesc: { ka: 'ფოკაჩო ყველით', ru: 'Фокачча с сыром', en: 'Focaccia with cheese' },
  focacciaName: { ka: 'ფოკაჩო', ru: 'Фокачча', en: 'Focaccia' },
  focacciaDesc: { ka: 'კლასიკური ფოკაჩო', ru: 'Классическая фокачча', en: 'Classic focaccia' },
  toneBreadName: { ka: 'პური თონის', ru: 'Хлеб из тандыра', en: 'Tone Bread' },
  toneBreadDesc: { ka: 'თონეში გამომცხვარი პური', ru: 'Хлеб, выпеченный в тандыре', en: 'Bread baked in tone oven' },
  blackBreadName: { ka: 'შავი პური', ru: 'Черный хлеб', en: 'Black Bread' },
  blackBreadDesc: { ka: 'ტრადიციული შავი პური', ru: 'Традиционный черный хлеб', en: 'Traditional black bread' },
  breadBasketName: { ka: 'პურის კალათა', ru: 'Корзина хлеба', en: 'Bread Basket' },
  breadBasketDesc: { ka: 'შოთის პური, ბებოს ლავაში, ჭვავის პური', ru: 'Шоти, лаваш, чурек', en: 'Shoti bread, lavash, churek' },
  chvishtiariName: { ka: 'ჭვიშტარი', ru: 'Чвиштари', en: 'Chvishtari' },
  chvishtiariDesc: { ka: 'მეგრული ჭვიშტარი', ru: 'Мегрельский чвиштари', en: 'Megrelian chvishtari' },
  mchadiName: { ka: 'მჭადი', ru: 'Мчади', en: 'Mchadi' },
  mchadiDesc: { ka: 'სიმინდის მჭადი', ru: 'Кукурузный мчади', en: 'Corn mchadi' },
  ghomiName: { ka: 'ღომი', ru: 'Гоми', en: 'Ghomi' },
  ghomiDesc: { ka: 'მეგრული ღომი', ru: 'Мегрельский гоми', en: 'Megrelian ghomi' },

  // Appetizer Items
  europeanCheeseBoardName: { ka: 'ევროპული ყველის დაფა', ru: 'Европейская сырная доска', en: 'European Cheese Board' },
  europeanCheeseBoardDesc: { ka: 'შერეული ევროპული ყველები და თანმხლები', ru: 'Ассорти европейских сыров с аккомпанементом', en: 'Assorted European cheeses with accompaniments' },

  bruschettaBoardName: { ka: 'ბრუსკეტის დაფა', ru: 'Доска брускетт', en: 'Bruschetta Board' },
  bruschettaBoardDesc: { ka: 'შერეული ბრუსკეტები მრავალფეროვანი ზედამწერით', ru: 'Ассорти брускетт с разнообразными топпингами', en: 'Assorted bruschetta with various toppings' },

  sulguniBallsName: { ka: 'სულგუნის ბურთები', ru: 'Шарики из сулгуни', en: 'Sulguni Balls' },
  sulguniBallsDesc: { ka: 'ხრაშუნა სულგუნის ყველის ბურთები', ru: 'Хрустящие шарики из сыра сулгуни', en: 'Crispy sulguni cheese balls' },

  garlicBreadName: { ka: 'ნივრიანი პური', ru: 'Чесночный хлеб', en: 'Garlic Bread' },
  garlicBreadDesc: { ka: 'ცხელი ნივრიანი პური ბაღქირით', ru: 'Горячий чесночный хлеб с маслом', en: 'Hot garlic bread with butter' },

  pistachiosName: { ka: 'ფისტა', ru: 'Фисташки', en: 'Pistachios' },
  pistachiosDesc: { ka: 'ღია ხილი ფისტა', ru: 'Орехи фисташки', en: 'Pistachio nuts' },

  georgianWalnutsName: { ka: 'ქართული თხილი', ru: 'Грузинские орехи', en: 'Georgian Walnuts' },
  georgianWalnutsDesc: { ka: 'ახალი ქართული თხილი', ru: 'Свежие грузинские орехи', en: 'Fresh Georgian walnuts' },

  peanutsName: { ka: 'მიწის თხილი', ru: 'Арахис', en: 'Peanuts' },
  peanutsDesc: { ka: 'შემწვარი მიწის თხილი', ru: 'Жареный арахис', en: 'Roasted peanuts' },

  // Cold Dishes
  ajapsandaliPlateName: { ka: 'აჯაფსანდალი ტაფაზე', ru: 'Аджапсандали на тарелке', en: 'Ajapsandali on Plate' },
  ajapsandaliPlateDesc: { ka: 'ტრადიციული ქართული ბოსტნეულის სალათი', ru: 'Традиционный грузинский овощной салат', en: 'Traditional Georgian vegetable salad' },

  caesarShrimpName: { ka: 'ცეზარი კრევეტების', ru: 'Цезарь с креветками', en: 'Caesar with Shrimp' },
  caesarShrimpDesc: { ka: 'ცეზარის სალათი ახალი კრევეტებით', ru: 'Салат Цезарь со свежими креветками', en: 'Caesar salad with fresh shrimp' },

  caesarSalmonName: { ka: 'ცეზარი სიომგის', ru: 'Цезарь с лососем', en: 'Caesar with Salmon' },
  caesarSalmonDesc: { ka: 'ცეზარის სალათი მშვენიერი სიომგით', ru: 'Салат Цезарь с копченой семгой', en: 'Caesar salad with smoked salmon' },

  caesarChickenName: { ka: 'ცეზარი ქათმის', ru: 'Цезарь с курицей', en: 'Caesar with Chicken' },
  caesarChickenDesc: { ka: 'კლასიკური ცეზარის სალათი გრილზე შემწვარი ქათმით', ru: 'Классический салат Цезарь с курицей гриль', en: 'Classic Caesar salad with grilled chicken' },

  caesarMushroomName: { ka: 'ცეზარი სოკოსი', ru: 'Цезарь с грибами', en: 'Caesar with Mushroom' },
  caesarMushroomDesc: { ka: 'ცეზარის სალათი შემწვარი სოკოებით', ru: 'Салат Цезарь с обжаренными грибами', en: 'Caesar salad with sautéed mushrooms' },

  steakSaladName: { ka: 'სტეიკ სალათი', ru: 'Салат со стейком', en: 'Steak Salad' },
  steakSaladDesc: { ka: 'ნაზავი მწვადი სტეიკით და ახალი მწვანეულით', ru: 'Микс салат с жареным стейком и свежей зеленью', en: 'Mixed salad with grilled steak and fresh greens' },

  chickenRagoutName: { ka: 'ქათმის რაგუ', ru: 'Куриное рагу', en: 'Chicken Ragout' },
  chickenRagoutDesc: { ka: 'ნაზი ქათმის რაგუ ბოსტნეულთან ერთად', ru: 'Нежное куриное рагу с овощами', en: 'Tender chicken ragout with vegetables' },

  vegetableRagoutName: { ka: 'ბოსტნეულის რაგუ', ru: 'Овощное рагу', en: 'Vegetable Ragout' },
  vegetableRagoutDesc: { ka: 'სეზონური ბოსტნეულის მრავალფეროვანი რაგუ', ru: 'Разнообразное рагу из сезонных овощей', en: 'Assorted seasonal vegetable ragout' },

  greekSaladName: { ka: 'ბერძნული სალათი', ru: 'Греческий салат', en: 'Greek Salad' },
  greekSaladDesc: { ka: 'კლასიკური ბერძნული სალათი ფეტა ყველითა და ზეთისხილით', ru: 'Классический греческий салат с сыром фета и оливками', en: 'Classic Greek salad with feta cheese and olives' },

  greenSaladName: { ka: 'მწვანე სალათი', ru: 'Зеленый салат', en: 'Green Salad' },
  greenSaladDesc: { ka: 'ახალი მწვანე ფოთლოვანი სალათი', ru: 'Свежий зеленый листовой салат', en: 'Fresh green leafy salad' },

  cucumberTomatoWalnutName: { ka: 'კიტრი-პომიდვრის სალათი ნიგვზით', ru: 'Салат из огурцов и помидоров с орехами', en: 'Cucumber-Tomato Salad with Walnuts' },
  cucumberTomatoWalnutDesc: { ka: 'კიტრისა და პომიდვრის სალათი დაქუცმაცებული ნიგვზით', ru: 'Салат из огурцов и помидоров с измельченными орехами', en: 'Cucumber and tomato salad with crushed walnuts' },

  cucumberTomatoSaladName: { ka: 'კიტრი-პომიდვრის სალათი', ru: 'Салат из огурцов и помидоров', en: 'Cucumber-Tomato Salad' },
  cucumberTomatoSaladDesc: { ka: 'ახალი კიტრისა და პომიდვრის კლასიკური სალათი', ru: 'Классический салат из свежих огурцов и помидоров', en: 'Classic fresh cucumber and tomato salad' },

  cucumberTomatoKakhuriName: { ka: 'კიტრი-პომიდვრის სალათი კახური ზეთით', ru: 'Салат из огурцов и помидоров с кахетинским маслом', en: 'Cucumber-Tomato Salad with Kakhuri Oil' },
  cucumberTomatoKakhuriDesc: { ka: 'კიტრისა და პომიდვრის სალათი კახური ზეთისხილის ზეთით', ru: 'Салат из огурцов и помидоров с кахетинским оливковым маслом', en: 'Cucumber and tomato salad with Kakhuri olive oil' },

  georgianCheeseAssortmentName: { ka: 'ქართული ყველის ნაირსახეობა', ru: 'Ассорти грузинских сыров', en: 'Georgian Cheese Assortment' },
  georgianCheeseAssortmentDesc: { ka: 'შერეული ქართული ყველები და ლევანის თაფლი', ru: 'Ассорти грузинских сыров с левановым медом', en: 'Assorted Georgian cheeses with levan honey' },

  sulguniCheeseName: { ka: 'სულგუნი', ru: 'Сулгуни', en: 'Sulguni' },
  sulguniCheeseDesc: { ka: 'ახალი ქართული სულგუნის ყველი', ru: 'Свежий грузинский сыр сулгуни', en: 'Fresh Georgian sulguni cheese' },

  regularCheeseName: { ka: 'ყველი', ru: 'Сыр', en: 'Cheese' },
  regularCheeseDesc: { ka: 'ყველის ნაირსახეობა', ru: 'Ассорти сыров', en: 'Cheese assortment' },

  eggplantWalnutName: { ka: 'ბადრიჯანი ნიგვზით', ru: 'Баклажан с орехами', en: 'Eggplant with Walnuts' },
  eggplantWalnutDesc: { ka: 'ქართული ბადრიჯანი ნიგვზის პასტით', ru: 'Грузинский баклажан с ореховой пастой', en: 'Georgian eggplant with walnut paste' },

  pkhaliPlatterName: { ka: 'ფხალის დაფა', ru: 'Доска пхали', en: 'Pkhali Platter' },
  pkhaliPlatterDesc: { ka: 'შერეული ფხალი - ქართული მწვანე სალათები', ru: 'Ассорти пхали - грузинские зеленые салаты', en: 'Assorted pkhali - Georgian green salads' },

  pickleAssortmentName: { ka: 'მწნილის ნაირსახეობა', ru: 'Ассорти солений', en: 'Pickle Assortment' },
  pickleAssortmentDesc: { ka: 'შერეული ქართული მწნილი ბოსტნეული', ru: 'Ассорти грузинских маринованных овощей', en: 'Assorted Georgian pickled vegetables' },

  // Grill / Barbecue Items
  porkRibsPicklesSauceName: { ka: 'ღორის ფერდი მწნილის სალათითა და მაყვლის სოუსით', ru: 'Свиные ребрышки с салатом из солений и сливовым соусом', en: 'Pork Ribs with Pickle Salad and Plum Sauce' },
  porkRibsPicklesSauceDesc: { ka: 'ნაზი ღორის ფერდი მწნილი ბოსტნეულის სალათითა და მაყვლის სოუსით', ru: 'Нежные свиные ребрышки с салатом из маринованных овощей и сливовым соусом', en: 'Tender pork ribs with pickled vegetables salad and plum sauce' },

  porkRibsGrillName: { ka: 'ღორის ნეკნი გრილზე (1 პერსონაზე)', ru: 'Свиные ребрышки на гриле (на 1 человека)', en: 'Grilled Pork Ribs (For 1 Person)' },
  porkRibsGrillDesc: { ka: 'გრილზე შემწვარი ღორის ნეკნი ერთ პორციაში', ru: 'Жареные на гриле свиные ребрышки на одну порцию', en: 'Grilled pork ribs single serving portion' },

  bbqPlatterName: { ka: 'მწვადის დაფა (3-4 პერსონა)', ru: 'Шашлычная доска (на 3-4 человека)', en: 'BBQ Platter (3-4 Persons)' },
  bbqPlatterDesc: { ka: 'მწვადის ნაირსახეობა 3-4 კაცზე გათვლილი', ru: 'Ассорти шашлыков, рассчитанное на 3-4 человека', en: 'BBQ assortment designed for 3-4 people' },

  porkKebabName: { ka: 'ღორის მწვადი', ru: 'Свиной шашлык', en: 'Pork Kebab' },
  porkKebabDesc: { ka: 'კლასიკური ღორის მწვადი', ru: 'Классический свиной шашлык', en: 'Classic pork kebab' },

  beefKebabName: { ka: 'ხბოს მწვადი (კეცზე)', ru: 'Говяжий шашлык (на вертеле)', en: 'Beef Kebab (On Skewer)' },
  beefKebabDesc: { ka: 'ხბოს ხორცის მწვადი კეცზე შემწვარი', ru: 'Шашлык из говядины, жаренный на вертеле', en: 'Beef kebab grilled on skewer' },

  chickenKebabName: { ka: 'ქათმის მწვადი', ru: 'Куриный шашлык', en: 'Chicken Kebab' },
  chickenKebabDesc: { ka: 'ნაზი ქათმის მწვადი', ru: 'Нежный куриный шашлык', en: 'Tender chicken kebab' },

  kabab: { ka: 'ქაბაბი', ru: 'Кабаб', en: 'Kabab' },
  kababDesc: { ka: 'კლასიკური ქაბაბი', ru: 'Классический кабаб', en: 'Classic kabab' },

  kababKutaisiName: { ka: 'ქაბაბი ქუთაისურად (ტაფაზე შებრაწული პომიდვრის სოუსით)', ru: 'Кабаб по-кутаисски (завернутый в лепешку с томатным соусом)', en: 'Kutaisi-Style Kabab (Wrapped in Flatbread with Tomato Sauce)' },
  kababKutaisiDesc: { ka: 'ქუთაისური სტილის ქაბაბი ტაფაში შებრუნული პომიდვრის სოუსით', ru: 'Кабаб в кутаисском стиле, завернутый в лепешку с томатным соусом', en: 'Kutaisi-style kabab wrapped in flatbread with tomato sauce' },

  kababSignatureName: { ka: 'ქაბაბი საფირმო', ru: 'Фирменный кабаб', en: 'Signature Kabab' },
  kababSignatureDesc: { ka: 'რესტორნის სპეციალური ქაბაბი', ru: 'Фирменный кабаб ресторана', en: 'Restaurant\'s signature kabab' },

  grilledVegetablesName: { ka: 'ბოსტნეული გრილზე', ru: 'Овощи на гриле', en: 'Grilled Vegetables' },
  grilledVegetablesDesc: { ka: 'სეზონური ბოსტნეული გრილზე შემწვარი', ru: 'Сезонные овощи, жаренные на гриле', en: 'Seasonal vegetables grilled to perfection' },

  // Chicken / Poultry Items
  tabakaGrillName: { ka: 'ტაბაკა გრილზე', ru: 'Табака на гриле', en: 'Tabaka on Grill' },
  tabakaGrillDesc: { ka: 'კლასიკური ქართული ტაბაკა გრილზე შემწვარი', ru: 'Классическая грузинская табака, жаренная на гриле', en: 'Classic Georgian tabaka grilled to perfection' },

  tabakaFriedName: { ka: 'ტაბაკა შებრაწული', ru: 'Табака жареная', en: 'Fried Tabaka' },
  tabakaFriedDesc: { ka: 'ტრადიციული ტაბაკა ქართული სტილით შებრაწული', ru: 'Традиционная табака, жаренная в грузинском стиле', en: 'Traditional tabaka fried in Georgian style' },

  chickenShkmeruliName: { ka: 'წიწილა შქმერულად', ru: 'Курица по-шкмерски', en: 'Chicken Shkmeruli' },
  chickenShkmeruliDesc: { ka: 'წიწილა შქმერული სტილით - ნივრისა და რძის სოუსში', ru: 'Курица в шкмерском стиле - в чесночно-молочном соусе', en: 'Chicken in Shkmeruli style - in garlic and milk sauce' },

  chickenInPlumsName: { ka: 'წიწილა მაყვალში', ru: 'Курица в сливах', en: 'Chicken in Plums' },
  chickenInPlumsDesc: { ka: 'წიწილა ტკბილი მაყვლის სოუსით', ru: 'Курица в сладком сливовом соусе', en: 'Chicken in sweet plum sauce' },

  // Main Dishes
  kanchiPlatterName: { ka: 'კანჭი (4 პერსონა)', ru: 'Канчи (на 4 персоны)', en: 'Kanchi Platter (4 Persons)' },
  kanchiPlatterDesc: { ka: 'შებრაწული კანჭი, სარდელი, სოსისი, კარტოფილი მექსიკურად, მწნილი, სოუსი, მწვანე სალათი', ru: 'Жареный канчи, сардели, сосиски, картофель по-мексикански, соленья, соус, зеленый салат', en: 'Fried kanchi, sardines, sausages, Mexican-style potatoes, pickles, sauce, green salad' },

  rabbitFriedName: { ka: 'კურდღელი შებრაწული', ru: 'Жареный кролик', en: 'Fried Rabbit' },
  rabbitFriedDesc: { ka: 'ტრადიციულად შებრაწული კურდღლის ხორცი', ru: 'Традиционно жареное мясо кролика', en: 'Traditionally fried rabbit meat' },

  porkOjakhuriName: { ka: 'ღორის ოჯახური', ru: 'Свиной оджахури', en: 'Pork Ojakhuri' },
  porkOjakhuriDesc: { ka: 'ღორის ხორცი ქართული ოჯახურის სტილით', ru: 'Свинина в стиле грузинского оджахури', en: 'Pork in Georgian ojakhuri style' },

  beefOjakhuriName: { ka: 'ხბოს ოჯახური', ru: 'Говяжий оджахури', en: 'Beef Ojakhuri' },
  beefOjakhuriDesc: { ka: 'ხბოს ხორცი ქართული ოჯახურის სტილით', ru: 'Говядина в стиле грузинского оджахури', en: 'Beef in Georgian ojakhuri style' },

  beefKebabPomegranateplateName: { ka: 'ხბოს მწვადი ბროწეულით ტაფაზე', ru: 'Говяжий шашлык с гранатом на тарелке', en: 'Beef Kebab with Pomegranate on Plate' },
  beefKebabPomegranateplateDesc: { ka: 'ხბოს მწვადი ბროწეულის მარცვლებით ტაფაზე მიწოდებული', ru: 'Говяжий шашлык с зернами граната, подается на тарелке', en: 'Beef kebab with pomegranate seeds served on plate' },

  beefFreshTomatoName: { ka: 'ხბო ცოცხლად პომიდორში', ru: 'Говядина по-домашнему в томатах', en: 'Beef Fresh in Tomato' },
  beefFreshTomatoDesc: { ka: 'ხბოს ხორცი ახალ პომიდვრის სოუსში', ru: 'Говядина в свежем томатном соусе', en: 'Beef in fresh tomato sauce' },

  beefRibsAjikaName: { ka: 'ხბოს ნეკნი აჯიკაში', ru: 'Говяжьи ребра в аджике', en: 'Beef Ribs in Ajika' },
  beefRibsAjikaDesc: { ka: 'ხბოს ნეკნები ქართული აჯიკის სოუსში', ru: 'Говяжьи ребра в грузинском соусе аджика', en: 'Beef ribs in Georgian ajika sauce' },

  beefBoiledRibsGarlicName: { ka: 'ხბოს მოხარშული ნეკნი ნიორში', ru: 'Вареные говяжьи ребра в чесноке', en: 'Boiled Beef Ribs in Garlic' },
  beefBoiledRibsGarlicDesc: { ka: 'მოხარშული ხბოს ნეკნები ნიორის სოუსში', ru: 'Вареные говяжьи ребра в чесночном соусе', en: 'Boiled beef ribs in garlic sauce' },

  chickenFajitasRiceName: { ka: 'ფახიტასი ქათმის ბრინჯის გარნირით', ru: 'Фахитас из курицы с рисовым гарниром', en: 'Chicken Fajitas with Rice Garnish' },
  chickenFajitasRiceDesc: { ka: 'ქათმის ფახიტასი ბრინჯის გარნირთან ერთად', ru: 'Куриный фахитас с рисовым гарниром', en: 'Chicken fajitas served with rice garnish' },

  chickenSchnitzelName: { ka: 'ქათმის შნიცელი ბრინჯით/ფრი/პიურე', ru: 'Куриный шницель с рисом/фри/пюре', en: 'Chicken Schnitzel with Rice/Fries/Puree' },
  chickenSchnitzelDesc: { ka: 'ქათმის შნიცელი სხვადასხვა გარნირით', ru: 'Куриный шницель с различными гарнирами', en: 'Chicken schnitzel with various side dishes' },

  chickenSteakName: { ka: 'ქათმის სტეიკი ბრინჯით/ფრი/პირე', ru: 'Куриный стейк с рисом/фри/пюре', en: 'Chicken Steak with Rice/Fries/Puree' },
  chickenSteakDesc: { ka: 'ქათმის სტეიკი სხვადასხვა გარნირით', ru: 'Куриный стейк с различными гарнирами', en: 'Chicken steak with various side dishes' },

  kharchoName: { ka: 'ხარჩო', ru: 'Харчо', en: 'Kharcho' },
  kharchoDesc: { ka: 'ტრადიციული ქართული ხარჩოს წვნიანი', ru: 'Традиционный грузинский суп харчо', en: 'Traditional Georgian kharcho soup' },

  kharchoGhomiName: { ka: 'ხარჩო ღომით', ru: 'Харчо с гоми', en: 'Kharcho with Ghomi' },
  kharchoGhomiDesc: { ka: 'ხარჩოს წვნიანი მეგრული ღომით', ru: 'Суп харчо с мегрельским гоми', en: 'Kharcho soup with Megrelian ghomi' },

  kuchmachName: { ka: 'კუჭმაჭი', ru: 'Кучмачи', en: 'Kuchmachi' },
  kuchmachDesc: { ka: 'ტრადიციული ქართული კუჭმაჭი', ru: 'Традиционное грузинское кучмачи', en: 'Traditional Georgian kuchmachi' },

  kupatiName: { ka: 'კუპატი', ru: 'Купаты', en: 'Kupati' },
  kupatiDesc: { ka: 'ქართული ტრადიციული ძეხვი კუპატი', ru: 'Грузинские традиционные колбаски купаты', en: 'Georgian traditional sausage kupati' },

  kupatiPlatterName: { ka: 'კუპატის დაფა', ru: 'Доска купатов', en: 'Kupati Platter' },
  kupatiPlatterDesc: { ka: 'კუპატის ნაირსახეობა დიდ ტაფაზე', ru: 'Ассорти купатов на большой тарелке', en: 'Kupati assortment on large platter' },

  mushroomSulguniName: { ka: 'სოკო სულგუნით', ru: 'Грибы с сулгуни', en: 'Mushrooms with Sulguni' },
  mushroomSulguniDesc: { ka: 'სოკო ქართული სულგუნის ყველით', ru: 'Грибы с грузинским сыром сулгуни', en: 'Mushrooms with Georgian sulguni cheese' },

  mushroomFriedName: { ka: 'სოკო შემწვარი', ru: 'Жареные грибы', en: 'Fried Mushrooms' },
  mushroomFriedDesc: { ka: 'შემწვარი სოკოები ქართული სტილით', ru: 'Жареные грибы в грузинском стиле', en: 'Fried mushrooms in Georgian style' },

  mushroomOjakhuriName: { ka: 'სოკოს ოჯახური', ru: 'Грибной оджахури', en: 'Mushroom Ojakhuri' },
  mushroomOjakhuriDesc: { ka: 'სოკოს ოჯახური ქართული სტილით', ru: 'Грибной оджахури в грузинском стиле', en: 'Mushroom ojakhuri in Georgian style' },

  pelmeniPotName: { ka: 'პელმენი ქოთანში', ru: 'Пельмени в горшочке', en: 'Pelmeni in Pot' },
  pelmeniPotDesc: { ka: 'ტრადიციული პელმენი ქოთანში მომზადებული', ru: 'Традиционные пельмени, приготовленные в горшочке', en: 'Traditional pelmeni cooked in pot' },

  lobioPlatter4PersonsName: { ka: 'ლობიოს დაფა (4 პერსონა)', ru: 'Доска лобио (на 4 персоны)', en: 'Lobio Platter (4 Persons)' },
  lobioPlatter4PersonsDesc: { ka: 'მწნილისა და მწვანილის ნაირსახეობა, მჭადი', ru: 'Ассорти солений и зелени с мчади', en: 'Assortment of pickles and greens with mchadi' },

  lobioPotMchadiName: { ka: 'ლობიო ქოთანში მჭადით', ru: 'Лобио в горшочке с мчади', en: 'Lobio in Pot with Mchadi' },
  lobioPotMchadiDesc: { ka: 'ტრადიციული ლობიო ქოთანში მჭადით', ru: 'Традиционное лобио в горшочке с мчади', en: 'Traditional lobio in pot with mchadi' },

  potatoHomestyleName: { ka: 'კარტოფილი ოჯახურად', ru: 'Картофель по-домашнему', en: 'Potato Homestyle' },
  potatoHomestyleDesc: { ka: 'კარტოფილი ოჯახურის სტილით მომზადებული', ru: 'Картофель, приготовленный в домашнем стиле', en: 'Potato prepared in homestyle' },

  omeletBaconName: { ka: 'ომლეტი ბეკონით', ru: 'Омлет с беконом', en: 'Omelet with Bacon' },
  omeletBaconDesc: { ka: 'ომლეტი ხრაშუნა ბეკონით', ru: 'Омлет с хрустящим беконом', en: 'Omelet with crispy bacon' },

  sulguniSkewerName: { ka: 'სულგუნი კეცზე', ru: 'Сулгуни на шампуре', en: 'Sulguni on Skewer' },
  sulguniSkewerDesc: { ka: 'სულგუნის ყველი კეცზე შემწვარი', ru: 'Сыр сулгуни, жаренный на шампуре', en: 'Sulguni cheese grilled on skewer' },

  // Beer Menu Items
  beerPlatterName: { ka: 'ლუდის დაფა', ru: 'Пивная доска', en: 'Beer Platter' },
  beerPlatterDesc: { ka: 'სიომღის, სულგუნისა და ძეხვის ჩხირები, მოცარელა ბეკონში, ნივრიანი პური, სოუსი', ru: 'Копченые палочки семги, сулгуни и колбас, моцарелла в беконе, чесночный хлеб, соус', en: 'Smoked salmon, sulguni and sausage sticks, mozzarella wrapped in bacon, garlic bread, sauce' },

  huntingSausageName: { ka: 'შემწვარი მონადირული ძეხვი', ru: 'Жареная охотничья колбаса', en: 'Fried Hunting Sausage' },
  huntingSausageDesc: { ka: 'შემწვარი მონადირული ძეხვი', ru: 'Жареная охотничья колбаса', en: 'Fried hunting sausage' },

  sausageAssortmentName: { ka: 'სოსისების ასორტი ტრადიციულად', ru: 'Ассорти колбас по-традиционному', en: 'Traditional Sausage Assortment' },
  sausageAssortmentDesc: { ka: 'ტრადიციული სოსისების ნაირსახეობა', ru: 'Ассорти традиционных колбас', en: 'Assortment of traditional sausages' },

  austrianSausageBaconName: { ka: 'ავსტრიული სოსისი ბეკონით', ru: 'Австрийская колбаса с беконом', en: 'Austrian Sausage with Bacon' },
  austrianSausageBaconDesc: { ka: 'ბეკონში გახვეული სოსისი, მდოგვი, კომბოსტოს მწნილი', ru: 'Колбаса, завернутая в бекон, отварной молодой картофель, соленая капуста', en: 'Bacon-wrapped sausage, boiled potatoes, sauerkraut' },

  chickenWingsName: { ka: 'ქათმის ფრთები', ru: 'Куриные крылышки', en: 'Chicken Wings' },
  chickenWingsDesc: { ka: 'შებრაწული ფრთები, კარტოფილი ფრი, სოუსი', ru: 'Жареные крылышки, картофель фри, соус', en: 'Fried wings, french fries, sauce' },

  porkRibsBBQSauceName: { ka: 'ღორის ნეკნი ბარბექიუს სოუსში', ru: 'Свиные ребрышки в барбекю соусе', en: 'Pork Ribs in BBQ Sauce' },
  porkRibsBBQSauceDesc: { ka: 'ღორის ნეკნები ბარბექიუს სოუსში', ru: 'Свиные ребрышки в барбекю соусе', en: 'Pork ribs in barbecue sauce' },

  boiledRibsName: { ka: 'შებოლილი ნეკნი', ru: 'Отварные ребрышки', en: 'Boiled Ribs' },
  boiledRibsDesc: { ka: 'შებოლილი ნეკნები', ru: 'Отварные рეбрышки', en: 'Boiled ribs' },

  hamRachulianName: { ka: 'ლორი რაჭულად კარტოფილით', ru: 'Сало по-рачински с картофелем', en: 'Ham Rachulian Style with Potato' },
  hamRachulianDesc: { ka: 'ლორი რაჭული სტილით კარტოფილთან ერთად', ru: 'Сало в рачинском стиле с картофелем', en: 'Ham in Rachulian style with potatoes' },

  // Soups
  asianSoupName: { ka: 'სუპი აზიურად', ru: 'Суп по-азиатски', en: 'Asian Soup' },
  asianSoupDesc: { ka: 'რვაფეხა, კრევეტები, მიდიები, კალმარის რგოლები', ru: 'Осьминог, креветки, мидии, кольца кальмара', en: 'Octopus, shrimp, mussels, squid rings' },

  ukhaWithSalmonName: { ka: 'უხა სიომღით', ru: 'Уха с лососем', en: 'Ukha with Salmon' },
  ukhaWithSalmonDesc: { ka: 'ტრადიციული უხა სიომღით', ru: 'Традиционная уха с лососем', en: 'Traditional ukha with salmon' },

  beefChakafuliName: { ka: 'ხბოს ჩაქაფული', ru: 'Чакафули из говядины', en: 'Beef Chakafuli' },
  beefChakafuliDesc: { ka: 'ტრადიციული ქართული ჩაქაფული ხბოს ხორცით', ru: 'Традиционный грузинский чакафули с говядиной', en: 'Traditional Georgian chakafuli with beef' },

  chickenChikhirtmaName: { ka: 'ქათმის ჩიხირთმა', ru: 'Чихиртма из курицы', en: 'Chicken Chikhirtma' },
  chickenChikhirtmaDesc: { ka: 'ტრადიციული ქართული ჩიხირთმა', ru: 'Традиционная грузинская чихиртма', en: 'Traditional Georgian chikhirtma' },

  mushroomSoupName: { ka: 'სოკოს სუპი', ru: 'Грибной суп', en: 'Mushroom Soup' },
  mushroomSoupDesc: { ka: 'სოკოების სუპი', ru: 'Суп из грибов', en: 'Soup with mushrooms' },

  // Pasta
  bologneseName: { ka: 'ბოლონეზე', ru: 'Болоньезе', en: 'Bolognese' },
  bologneseDesc: { ka: 'კლასიკური ბოლონეზე სოუსით', ru: 'Классические макароны болоньезе', en: 'Classic pasta with bolognese sauce' },

  carbonaraName: { ka: 'კარბონარა', ru: 'Карбонара', en: 'Carbonara' },
  carbonaraDesc: { ka: 'კლასიკური კარბონარა', ru: 'Классическая карбонара', en: 'Classic carbonara pasta' },

  penneChickenMushroomsName: { ka: 'პენე ქათმით და სოკოთ', ru: 'Пенне с курицей и грибами', en: 'Penne with Chicken and Mushrooms' },
  penneChickenMushroomsDesc: { ka: 'პენე ქათმისა და სოკოებით', ru: 'Паста пенне с курицей и грибами', en: 'Penne pasta with chicken and mushrooms' },

  // Seafood
  tigerShrimpName: { ka: 'კრევეტები ვეფხისებრი', ru: 'Креветки тигровые', en: 'Tiger Shrimp' },
  tigerShrimpDesc: { ka: 'ვეფხისებრი კრევეტები', ru: 'Креветки тигровые', en: 'Tiger shrimp' },

  friedMusselsName: { ka: 'მიდიები შემწვარი', ru: 'Мидии жареные', en: 'Fried Mussels' },
  friedMusselsDesc: { ka: 'შემწვარი მიდიები', ru: 'Жареные Ⴜидии', en: 'Fried mussels' },

  // Khachapuri Safirmo (Seafood)
  khachapuriSafirmoName: { ka: 'ხაჭაპურისაფირმო', ru: 'Хачапури фирменное', en: 'Signature Khachapuri' },
  khachapuriSafirmoDesc: { ka: 'ფირმის ხაჭაპური ზღვის პროდუქტებით', ru: 'Фирменный хачапури с морепродуктами', en: 'Signature khachapuri with seafood' },

  blackSeaBarabulkaName: { ka: 'შავი ზღვის ბარაბულკა', ru: 'Черноморская барабулька', en: 'Black Sea Barabulka' },
  blackSeaBarabulkaDesc: { ka: 'შავი ზღვის ბარაბულკა', ru: 'Черноморская барабулька', en: 'Black Sea barabulka fish' },

  grilledDoradoName: { ka: 'დორადო გრილზე', ru: 'Дорадо на гриმе', en: 'Grilled Dorado' },
  grilledDoradoDesc: { ka: 'დორადო გრილზე შემწვარი', ru: 'Дорадо, жаренная на гриле', en: 'Dorado grilled to perfection' },

  salmonSteakName: { ka: 'სიომღის სტეიკი (ბრინჯის გარნირით)', ru: 'Стейк из лосося (с рисовым гарниром)', en: 'Salmon Steak (with Rice Garnish)' },
  salmonSteakDesc: { ka: 'სიომღის სტეიკი ბრინჯის გარნირთან ერთად', ru: 'Стейк из лосося с рисовым гарниром', en: 'Salmon steak served with rice garnish' },

  salmonKebabName: { ka: 'სიომღის მწვადი', ru: 'Шашлык из лосося', en: 'Salmon Kebab' },
  salmonKebabDesc: { ka: 'სიომღის მწვადი', ru: 'Шашлык из лосося', en: 'Salmon kebab' },

  friedSquidName: { ka: 'კალმახი შემწვარი', ru: 'Кальмар жареный', en: 'Fried Squid' },
  friedSquidDesc: { ka: 'შემწვარი კალმახი', ru: 'Жареный кальмар', en: 'Fried squid' },

  grilledSquidName: { ka: 'კალმახი გრილზე', ru: 'Кальмар на гриле', en: 'Grilled Squid' },
  grilledSquidDesc: { ka: 'კალმახი გრილზე შემწვარი', ru: 'Кальмар, жаренный на гриле', en: 'Squid grilled to perfection' },

  // Side Dishes
  mexicanPotatoName: { ka: 'კარტოფილი მექსიკურად', ru: 'Картофель по-мексикански', en: 'Mexican-Style Potato' },
  mexicanPotatoDesc: { ka: 'კარტოფილი მექსიკური სტილით', ru: 'Картофель в мексиканском стиле', en: 'Potato prepared Mexican style' },

  frenchFriesName: { ka: 'კარტოფილი ფრი', ru: 'Картофель фри', en: 'French Fries' },
  frenchFriesDesc: { ka: 'ხრაშუნა კარტოფილი ფრი', ru: 'Хрустящий картофель фри', en: 'Crispy french fries' },

  riceWithVegetablesName: { ka: 'ბრინჯი ბოსტნეულით', ru: 'Рис с овощами', en: 'Rice with Vegetables' },
  riceWithVegetablesDesc: { ka: 'ბრინჯი ახალი ბოსტნეულით', ru: 'Рис со свежими овощами', en: 'Rice with fresh vegetables' },

  mashedPotatoName: { ka: 'პიურე', ru: 'Пюре', en: 'Mashed Potato' },
  mashedPotatoDesc: { ka: 'კარტოფილის პიურე', ru: 'Картофельное пюре', en: 'Creamy mashed potato' },

  // Sauces
  cheeseSauceName: { ka: 'ყველის სოუსი', ru: 'Сырный соус', en: 'Cheese Sauce' },
  cheeseSauceDesc: { ka: 'კრემისებური ყველის სოუსი', ru: 'Кремовый сырный соус', en: 'Creamy cheese sauce' },

  mushroomSauceName: { ka: 'სოკოს სოუსი', ru: 'Грибной соус', en: 'Mushroom Sauce' },
  mushroomSauceDesc: { ka: 'სოკოების სოუსი', ru: 'Соус с грибами', en: 'Sauce with mushrooms' },

  sweetSourSauceName: { ka: 'ტკბილცხარე სოუსი', ru: 'Кисло-сладкий соус', en: 'Sweet and Sour Sauce' },
  sweetSourSauceDesc: { ka: 'ტკბილცხარე სოუსი', ru: 'Кисло-сладкий соус', en: 'Sweet and sour sauce' },

  tkemaliName: { ka: 'ტყემალი', ru: 'Ткемали', en: 'Tkemali' },
  tkemaliDesc: { ka: 'ტრადიციული ქართული ტყემალი', ru: 'Традиционный грузинский ткемали', en: 'Traditional Georgian tkemali' },

  satsebliName: { ka: 'საწებელი', ru: 'Сацебели', en: 'Satsebeli' },
  satsebliDesc: { ka: 'ტრადიციული ქართული საწებელი', ru: 'Традиционный грузинский сацебели', en: 'Traditional Georgian satsebeli' },

  ketchupName: { ka: 'კეტჩუპი', ru: 'Кетчуп', en: 'Ketchup' },
  ketchupDesc: { ka: 'კლასიკური კეტჩუპი', ru: 'Классический кетчуп', en: 'Classic ketchup' },

  marashafiName: { ka: 'მარაშაფი', ru: 'Марашафи', en: 'Marashafi' },
  marashafiDesc: { ka: 'ტრადიციული ქართული მარაშაფი', ru: 'Традиционный грузинский марашафи', en: 'Traditional Georgian marashafi' },

  garlicWaterName: { ka: 'ნივრიანი წყალი', ru: 'Чесночная вода', en: 'Garlic Water' },
  garlicWaterDesc: { ka: 'ნივრიანი წყალი', ru: 'Чесночная вода', en: 'Garlic water sauce' },

  greenSaltName: { ka: 'მწვანე მარილი', ru: 'Зеленая соль', en: 'Green Salt' },
  greenSaltDesc: { ka: 'მწვანე მარილი', ru: 'Зеленая соль', en: 'Green salt seasoning' },

  mexicanSauceName: { ka: 'მექსიკურის სოუსი', ru: 'Мексиканский соус', en: 'Mexican Sauce' },
  mexicanSauceDesc: { ka: 'მექსიკური სოუსი', ru: 'Мексиканский соус', en: 'Mexican sauce' },

  mdogviName: { ka: 'მდოგვი', ru: 'Мдогви', en: 'Mdogvi' },
  mdogviDesc: { ka: 'ტრადიციული ქართული მდოგვი', ru: 'Традиционный грузинский мдогви', en: 'Traditional Georgian mdogvi' },

  // Desserts
  seasonalFruitName: { ka: 'სეზონური ხილის ნაირსახეობა', ru: 'Ассорти сезонных фруктов', en: 'Seasonal Fruit Assortment' },
  seasonalFruitDesc: { ka: 'სეზონური ხილის ნაირსახეობა', ru: 'Ассорти свежих сезонных фруктов', en: 'Assortment of fresh seasonal fruits' },

  cheesecakeName: { ka: 'ჩიზქეიქი', ru: 'Чизкейк', en: 'Cheesecake' },
  cheesecakeDesc: { ka: 'კლასიკური ჩიზქეიქი', ru: 'Классический чизкейк', en: 'Classic cheesecake' },

  tiramisuName: { ka: 'ტირამისუ', ru: 'Тирамису', en: 'Tiramisu' },
  tiramisuDesc: { ka: 'იტალიური კლასიკური ტირამისუ', ru: 'Итальянский классический тирамису', en: 'Classic Italian tiramisu' },

  affogatoName: { ka: 'აფოგატო', ru: 'Аффогато', en: 'Affogato' },
  affogatoDesc: { ka: 'აფოგატო - ვანილის ნაყინი ცხელი ესპრესოთ', ru: 'Аффогато - ванильное мороженое с горячим эспрессо', en: 'Affogato - vanilla ice cream with hot espresso' },

  lavaCakeName: { ka: 'ლავა ქეიქი', ru: 'Лава кейк', en: 'Lava Cake' },
  lavaCakeDesc: { ka: 'ჩოკოლადის ლავა ქეიქი', ru: 'Шоколадный лава кейк', en: 'Chocolate lava cake' },

  bananaCrepeName: { ka: 'კრეპი ბანანით და ჩოკოლადით', ru: 'Креп с бананом и шоколадом', en: 'Crepe with Banana and Chocolate' },
  bananaCrepeDesc: { ka: 'კრეპი ბანანისა და ჩოკოლადით', ru: 'Креп с бананом и шоколадом', en: 'Crepe with banana and chocolate' },

  plainCrepeName: { ka: 'კრეპი არაფრით', ru: 'Креп без начинки', en: 'Plain Crepe' },
  plainCrepeDesc: { ka: 'უდღილო კრეპი არაფრით', ru: 'Простой креп без начинки', en: 'Simple crepe without filling' },

  // Bliniarazhan (Dessert)
  bliniarazhanName: { ka: 'ბლინიარაჟანი', ru: 'Блини аражани', en: 'Bliniarazhan' },
  bliniarazhanDesc: { ka: 'ტრადიციული ქართული ბლინები არაყით', ru: 'Традиционные грузинские блины с араком', en: 'Traditional Georgian pancakes with arak' },
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
  const [language, setLanguage] = useState<Language>(() => {
    // Load language from localStorage or default to 'ka'
    const savedLanguage = localStorage.getItem('selectedLanguage');
    return (savedLanguage as Language) || 'ka';
  });

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  const updateLanguage = (lang: Language) => {
    setLanguage(lang);
    // Save language to localStorage
    localStorage.setItem('selectedLanguage', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: updateLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
