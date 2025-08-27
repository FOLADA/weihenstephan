import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ArrowLeft, Search, Filter, Grid, List, Clock, ChefHat, Utensils } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

// Menu item images
import weihenstephanOriginalImg from '@/assets/MenuImages/ვეინშტეფანიორიგინალი.avif';
import porkKebabImg from '@/assets/MenuImages/ღორისმწვადი.avif';
import beefKebabImg from '@/assets/MenuImages/ხბოს მწვადი.jpg';
import chickenKebabImg from '@/assets/MenuImages/ქათმის მწვადი.avif';
import kababImg from '@/assets/MenuImages/ქაბაბი.avif';
import kababKutaisiImg from '@/assets/MenuImages/ქაბაბიქუთაისურად.avif';
import porkRibsImg from '@/assets/MenuImages/ღორისნეკნიგრილზე.avif';
import grilledVegetablesImg from '@/assets/MenuImages/ბოსტნეულიგრილზე.avif';

// New menu item images
import bologneseImg from '@/assets/MenuImages/ბოლონეზე.avif';
import carbonaraImg from '@/assets/MenuImages/კარბონარა.avif';
import mushroomSoupImg from '@/assets/MenuImages/სოკოს სუპი.avif';
import mushroomCreamSoupImg from '@/assets/MenuImages/სოკოს კრემსუპი.png';

import weihenstephanUnfilteredImg from '@/assets/MenuImages/ვაიჰენშტეფანიგაუფილტრავი.avif';
import weihenstephanDarkImg from '@/assets/MenuImages/ვაიჰენშტეფანიმუქი.avif';
import budweiserImg from '@/assets/MenuImages/ბუდვაიზერი.avif';
import beerKegGiraffeImg from '@/assets/MenuImages/ლუდიკასრით(ჟირაფი).jpg';
import rosatoWineImg from '@/assets/MenuImages/როსატო.jpg';
import rossoWineImg from '@/assets/MenuImages/როსო.jpg';
import sparklingBagrationiImg from '@/assets/MenuImages/ცქრიალაღვინობაგრატიონი.png';
import kisiTelianiImg from '@/assets/MenuImages/ქისითელიანი.png';
import saperaviTelianiImg from '@/assets/MenuImages/საფერავითელიანიველი.jpg';
import tsinandaliTelianiImg from '@/assets/MenuImages/წინანდალითელიანიველი.png';
import tvishiTelianiImg from '@/assets/MenuImages/ტვიშითელიანიველი.png';
import mukuzaniTelianiImg from '@/assets/MenuImages/მუკუზანითელიანიველი.png';
import otskhanurriSaperaviImg from '@/assets/MenuImages/ოცხანურისაფერავითელიანი.png';
import kindzmarauliTelianiImg from '@/assets/MenuImages/ქინთე.png';
import khvanchkaraTelianiImg from '@/assets/MenuImages/ხვანჭკარათელიანი.png';
import familyWhiteDryImg from '@/assets/MenuImages/ჩამოსასხმელითეთრიმშრალიღვინო.jpg';
import jrbClassicImg from '@/assets/MenuImages/ჯრბ კლასიკი.png';
import badagoniClassicImg from '@/assets/MenuImages/ბადაგონი კლასიკი.jpg';
import badagoniOriginalImg from '@/assets/MenuImages/ბადაგონიორიგინალი.jpg';
import askanelPlatinumImg from '@/assets/MenuImages/ასკანელიოქრო.jpg';
import askanelGoldImg from '@/assets/MenuImages/ასკანელივერცხლი.jpg';
import chachaOakAgedImg from '@/assets/MenuImages/ჭაჭა მუხაში დავარგებული.jpg';
import jimsherImg from '@/assets/MenuImages/ჯიმშერი.png';
import macallanImg from '@/assets/MenuImages/მაკლანი.jpg';
import chivasRegalImg from '@/assets/MenuImages/ჩივასრეგალი.jpg';
import jackDanielsAppleImg from '@/assets/MenuImages/ჯერდანეილსივაშლის.jpg';
import jackDanielsHoneyImg from '@/assets/MenuImages/ჯერდენიელსითაფლის.png';
import hennessyImg from '@/assets/MenuImages/ჰენესი.jpg';
import sarajishviliXOImg from '@/assets/MenuImages/სარაჯXO.jpg';
import sarajishviliVSImg from '@/assets/MenuImages/სარაჯიშვილიVS.jpg';
import cognac250gImg from '@/assets/MenuImages/კონიაკი250გ.jpg';
import cognacImg from '@/assets/MenuImages/კონიაკი.jpg';
import montBlancImg from '@/assets/MenuImages/მონბლანკი.jpg';
import greyGooseImg from '@/assets/MenuImages/გრეიგუსი.jpg';
import belugaImg from '@/assets/MenuImages/ბელუგა.jpg';
import honeySpiritImg from '@/assets/MenuImages/თაფლის არაყი.png';
import danzkaImg from '@/assets/MenuImages/დზანკა.jpg';
import kirkeImg from '@/assets/MenuImages/კირკე.jpg';
import nemiroffImg from '@/assets/MenuImages/ნემიროვი.jpeg';
import absolutBlueImg from '@/assets/MenuImages/აბსოლუტბლუ.png';
import absolutCurrantImg from '@/assets/MenuImages/აბსოლუტკურანტი.jpg';
import oneginImg from '@/assets/MenuImages/ონეგინი.png';
import finlandiaImg from '@/assets/MenuImages/ფინლანდია.png';
import siberianWolfImg from '@/assets/MenuImages/ციმბირულიმგელი.png';
import homemadeLemonadeJugImg from '@/assets/MenuImages/საფირმოლიმონათიდოქით.jpg';
import homemadeLemonadeGlassImg from '@/assets/MenuImages/საფირმო ლიმონათი ჭიქით.jpg';
import juiceOneLiterImg from '@/assets/MenuImages/წვენი.jpg';
import juiceOneGlassImg from '@/assets/MenuImages/წვენიჭიქით.jpg';
import iceTeaImg from '@/assets/MenuImages/ცივი ჩაი.jpg';
import borjomiWaterImg from '@/assets/MenuImages/მინერალურიწყალიბორჯომი.avif';
import bakurianiWaterImg from '@/assets/MenuImages/მინერალურიწყალიბაკურიანი.avif';
import kazbegiLemonadeImg from '@/assets/MenuImages/ლიმონათიყაზბეგი.png';
import cocaColaImg from '@/assets/MenuImages/კოკაკოლა.avif';
import fantaImg from '@/assets/MenuImages/ფანტა.jpg';
import redBullImg from '@/assets/MenuImages/რედბული.jpg';
import americanoImg from '@/assets/MenuImages/ამერიკანო.jpg';
import espressoImg from '@/assets/MenuImages/ესპრესო.jpg';
import doubleEspressoImg from '@/assets/MenuImages/ორმაგიესპრესო.jpg';
import cappuccinoImg from '@/assets/MenuImages/კაპუჩინო.jpg';
import latteImg from '@/assets/MenuImages/ლატე.jpg';
import turkishCoffeeImg from '@/assets/MenuImages/თურქულიყავა.jpg';
import hotChocolateImg from '@/assets/MenuImages/ცხელიშოკოლადი.jpg';
import iceCoffeeImg from '@/assets/MenuImages/ცივიყავა.jpg';
import iceCoffeeIceCreamImg from '@/assets/MenuImages/ცივიყავანაყინით.jpg';
import iceCoffeeBaileysImg from '@/assets/MenuImages/ცივიყავანაყინითდაბეილსით.jpg';
import teaImg from '@/assets/MenuImages/ჩააი.jpg';
import europeanCheeseBoardImg from '@/assets/MenuImages/ევროპული ყველის დაფა.jpg';
import bruschettaBoardImg from '@/assets/MenuImages/ბრუსკეტის დაფა.jpg';
import sulguniBallsImg from '@/assets/MenuImages/სულგუნის ბურთები.avif';
import garlicBreadImg from '@/assets/MenuImages/ნივრიანი პური.avif';
import pistachiosImg from '@/assets/MenuImages/ფისტა.jpg';
import georgianWalnutsImg from '@/assets/MenuImages/ქართთ.png';
import peanutsImg from '@/assets/MenuImages/ქართულიმიწისთხილი.jpg';
import ajapsandaliPlateImg from '@/assets/MenuImages/აჯაფსანდალიტაფაზე.jpg';
import caesarShrimpImg from '@/assets/MenuImages/ცეზარიკრევეტებით.jpg';
import caesarSalmonImg from '@/assets/MenuImages/ცეზარისიოგმით.jpg';
import caesarChickenImg from '@/assets/MenuImages/ცეზარიქაათმის.jpg';
import caesarMushroomImg from '@/assets/MenuImages/ცეზარისოკოს.avif';
import steakSaladImg from '@/assets/MenuImages/სტეიკსალათი.avif';
import chickenRagoutImg from '@/assets/MenuImages/ქათმისრაგუ.avif';
import vegetableRagoutImg from '@/assets/MenuImages/ბოსტნეულისრაგუ.jpeg';
import greekSaladImg from '@/assets/MenuImages/ბერძნულისალათი.avif';
import greenSaladImg from '@/assets/MenuImages/მწვანესალათი.jpg';
import cucumberTomatoWalnutImg from '@/assets/MenuImages/კიტრიპამიდვრისსალათინიგვზით.avif';
import cucumberTomatoSaladImg from '@/assets/MenuImages/კიტრიპამიდვრისსალათი.avif';
import cucumberTomatoKakhuriImg from '@/assets/MenuImages/კიტრიპამიდვრისსალათიკახურიზეთით.avif';
import georgianCheeseAssortmentImg from '@/assets/MenuImages/ქართულიყველისნაირსახეობა.jpeg';
import sulguniCheeseImg from '@/assets/MenuImages/სულგუნი.avif';
import regularCheeseImg from '@/assets/MenuImages/ყველი.jpg';
import eggplantWalnutImg from '@/assets/MenuImages/ბადრიჯანინიგვზით.avif';
import pkhaliPlatterImg from '@/assets/MenuImages/ფხალისდაფა.avif';
import pickleAssortmentImg from '@/assets/MenuImages/მწნილისნაირსახეობა.avif';
import porkRibsPicklesSauceImg from '@/assets/MenuImages/ღორის ფერდი მწნილის სალათითა და მაყვლის სოუსით.jpg';
import bbqPlatterImg from '@/assets/MenuImages/წვადის დაფა (3-4 პერსონა) -=.avif';
import tabakaGrillImg from '@/assets/MenuImages/ტაბაკაგრილზე.avif';
import tabakaFriedImg from '@/assets/MenuImages/ტაბაკაშებრაწული.avif';
import chickenShkmeruliImg from '@/assets/MenuImages/წიწილაშქმრეულად.jpeg';
import chickenInPlumsImg from '@/assets/MenuImages/წიწილამაყვალში.jpg';
import kanchiPlatterImg from '@/assets/MenuImages/კანჭი4.avif';
import rabbitFriedImg from '@/assets/MenuImages/კურდღელი შებრაწული.jpg';
import porkOjakhuriImg from '@/assets/MenuImages/ღორისოჯახური.avif';
import beefOjakhuriImg from '@/assets/MenuImages/ხბოსოჯახური.avif';
import beefKebabPomegranateplateImg from '@/assets/MenuImages/ხბოს მწვადი ბროწეულით ტაფაზე.avif';
import beefFreshTomatoImg from '@/assets/MenuImages/ხბო ცოცხლად პომიდორში.avif';
import beefRibsAjikaImg from '@/assets/MenuImages/ხბოს ნეკნი აჯიკაში.avif';
import beefBoiledRibsGarlicImg from '@/assets/MenuImages/ხბოს მოხარშული ნეკნი ნიორში.jpg';
import chickenFajitasRiceImg from '@/assets/MenuImages/ფახიტასი ქათმის ბრინჯის გარნირით.avif';
import chickenSchnitzelImg from '@/assets/MenuImages/ქათმისშნიცელიბრინჯითფრიპიურე.avif';
import chickenSteakImg from '@/assets/MenuImages/ქათმისსტეიკიბრინჯითფრიპირე.jpg';
import kharchoImg from '@/assets/MenuImages/ხარჩო.jpg';
import kharchoGhomiImg from '@/assets/MenuImages/ხარჩო ღომით.avif';
import kuchmachImg from '@/assets/MenuImages/კუჭმაჭი.avif';
import kupatiImg from '@/assets/MenuImages/კუპატი.jpg';
import kupatiPlatterImg from '@/assets/MenuImages/კუპატისდაფა.jpeg';
import mushroomSulguniImg from '@/assets/MenuImages/სოკოსულგუნით.jpeg';
import mushroomFriedImg from '@/assets/MenuImages/სოკოშემწვარი.jpg';
import mushroomOjakhuriImg from '@/assets/MenuImages/სოკოსოჯახური.avif';
import pelmeniPotImg from '@/assets/MenuImages/პელმენიქოთანში.jpg';
import lobioPlatter4PersonsImg from '@/assets/MenuImages/ლობიოდ.avif';
import lobioPotMchadiImg from '@/assets/MenuImages/ლობიოქოთანშიმჭაადით.avif';
import potatoHomestyleImg from '@/assets/MenuImages/კარტოფილიოჯახური.avif';
import omeletBaconImg from '@/assets/MenuImages/ომლეტიბეკონით.jpg';
import sulguniSkewerImg from '@/assets/MenuImages/სულგუნიკეცზე.jpeg';
import beerPlatterImg from '@/assets/MenuImages/ლუდიდ.avif';
import huntingSausageImg from '@/assets/MenuImages/შემწვარი მონადირული ძეხვი.jpg';
import sausageAssortmentImg from '@/assets/MenuImages/სოსისების ასორტი ტრადიციულად.jpg';
import austrianSausageBaconImg from '@/assets/MenuImages/ავსტრიული სოსისი ბეკონით (ბეკონში გახვეული სოსისი, მდოგვი, კომბოსტოს მწნილი).avif';
import chickenWingsImg from '@/assets/MenuImages/ქათმის ფრთები (შებრაწული ფრთები, კარტოფილი ფრი, სოუსი).avif';
import porkRibsBBQSauceImg from '@/assets/MenuImages/ღორის ნეკნი ბარბექიუს სოუსში.avif';
import boiledRibsImg from '@/assets/MenuImages/შებოლილი ნეკნი.avif';
import hamRachulianImg from '@/assets/MenuImages/ლორი რაჭულად კარტოფილით.avif';
import asianSoupImg from '@/assets/MenuImages/სუპია.avif';
import ukhaWithSalmonImg from '@/assets/MenuImages/უხას.avif';
import beefChakafuliImg from '@/assets/MenuImages/ხბოს ჩაქაფული.avif';
import chickenChikhirtmaImg from '@/assets/MenuImages/ქათმის ჩიხირთმა.avif';
import penneChickenMushroomsImg from '@/assets/MenuImages/პენე ქათმით და სოკოთ.avif';
import seafoodPlatterImg from '@/assets/MenuImages/ზღვისპრ.avif';
import tigerShrimpImg from '@/assets/MenuImages/კრევეტები ვეფხისებრი.jpeg';
import friedMusselsImg from '@/assets/MenuImages/მიდიები შემწვარი.jpeg';
import blackSeaBarabulkaImg from '@/assets/MenuImages/შავი ზღვის ბარაბულკა.avif';
import grilledDoradoImg from '@/assets/MenuImages/დორადო გრილზე.avif';
import salmonSteakImg from '@/assets/MenuImages/სიომგის სტეიკი (ბრინჯის გარნირით).avif';
import salmonKebabImg from '@/assets/MenuImages/სიომგის მწვადი.avif';
import friedSquidImg from '@/assets/MenuImages/კალმახი შემწვარი.jpg';
import grilledSquidImg from '@/assets/MenuImages/კალმახი გრილზე.jpg';
import mexicanPotatoImg from '@/assets/MenuImages/კარტოფილი მექსიკურად.avif';
import frenchFriesImg from '@/assets/MenuImages/კარტოფილი ფრი.avif';
import riceWithVegetablesImg from '@/assets/MenuImages/ბრინჯი ბოსტნეულით.avif';
import mashedPotatoImg from '@/assets/MenuImages/პიურე.avif';
import cheeseSauceImg from '@/assets/MenuImages/ყველის სოუსი.avif';
import mushroomSauceImg from '@/assets/MenuImages/სოკოს სოუსი.avif';
import sweetSourSauceImg from '@/assets/MenuImages/ტკბილცხარე სოუსი.avif';
import tkemaliImg from '@/assets/MenuImages/ტყემალი.avif';
import satsebliImg from '@/assets/MenuImages/საწებელი.avif';
import ketchupImg from '@/assets/MenuImages/კეტჩუპი.avif';
import marashafiImg from '@/assets/MenuImages/მარაშაფი.avif';
import garlicWaterImg from '@/assets/MenuImages/ნივრიანი წყალი.avif';
import greenSaltImg from '@/assets/MenuImages/მწვანე მარილი.avif';
import mexicanSauceImg from '@/assets/MenuImages/მექსიკურის სოუსი.avif';
import mdogviImg from '@/assets/MenuImages/მდოგვი.avif';
import seasonalFruitImg from '@/assets/MenuImages/სეზონური ხილის ნაირსახეობა.jpeg';
import cheesecakeImg from '@/assets/MenuImages/ჩიზქეიქი.avif';
import tiramisuImg from '@/assets/MenuImages/ტირამისუ.jpeg';
import affogatoImg from '@/assets/MenuImages/აფოგატო.jpeg';
import lavaCakeImg from '@/assets/MenuImages/ლავა ქეიქი.jpeg';
import bananaCrepeImg from '@/assets/MenuImages/კრეპი ბანანით და შოკოლადით.jpeg';
import plainCrepeImg from '@/assets/MenuImages/კრეპი არაფრით.png';
import pizzaFourCheeseImg from '@/assets/MenuImages/პიცაოთხიყველით.avif';
import pizzaPepperoniImg from '@/assets/MenuImages/პიცაპეპერონი.avif';
import pizzaBaconImg from '@/assets/MenuImages/პიცაბეკონით.avif';
import pizzaMargheritaImg from '@/assets/MenuImages/პიცამარგარიტა.avif';
import pizzaVegetarianImg from '@/assets/MenuImages/პიცასამარხვო.avif';
import khachapuriSpecialImg from '@/assets/MenuImages/ხაჭაპურისამეფო.avif';
import khachapuriAcharuliImg from '@/assets/MenuImages/ხაჭაპურიაჭარული.avif';
import khachapuriImeretiImg from '@/assets/MenuImages/ხაჭაპურიიმერული.avif';
import lobianiHamImg from '@/assets/MenuImages/ლობიანილორით.avif';
import lobianiAcharuliImg from '@/assets/MenuImages/აჭარულილობიანი.avif';
import lobianiImg from '@/assets/MenuImages/ლობიანი.avif';
import kubdariImg from '@/assets/MenuImages/კუბდარი.avif';
import focacciaCheeseImg from '@/assets/MenuImages/ფოკაჩოყველით.jpg';
import focacciaImg from '@/assets/MenuImages/ფოკაჩო.jpg';
import toneBreadImg from '@/assets/MenuImages/თონისპური.avif';
import blackBreadImg from '@/assets/MenuImages/შავიპური.jpg';
import breadBasketImg from '@/assets/MenuImages/პურისკალათა.jpeg';
import chvishtiariImg from '@/assets/MenuImages/ჭვიშტარი.jpg';
import mchadiImg from '@/assets/MenuImages/ჭადი.avif';
import ghomiImg from '@/assets/MenuImages/ღომი.png';

const CategorizedMenu = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('alcoholicDrinks');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [isLoading, setIsLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const itemsPerPage = viewMode === 'grid' ? 6 : 8;

  const menuData = {
    alcoholicDrinks: [
      {
        nameKey: 'weihenstephanOriginalName',
        descKey: 'weihenstephanOriginalDesc',
        price: '₾7.50 / ₾18.75',
        image: weihenstephanOriginalImg
      },
      {
        nameKey: 'weihenstephanUnfilteredName',
        descKey: 'weihenstephanUnfilteredDesc',
        price: '₾7.50 / ₾18.75',
        image: weihenstephanUnfilteredImg
      },
      {
        nameKey: 'weihenstephanDarkName',
        descKey: 'weihenstephanDarkDesc',
        price: '₾7.50 / ₾18.75',
        image: weihenstephanDarkImg
      },
      {
        nameKey: 'budweiserName',
        descKey: 'budweiserDesc',
        price: '₾7.50 / ₾18.75',
        image: budweiserImg
      },
      {
        nameKey: 'beerKegGiraffeName',
        descKey: 'beerKegGiraffeDesc',
        price: '₾56.25',
        image: beerKegGiraffeImg
      },
      {
        nameKey: 'rosatoWineName',
        descKey: 'rosatoWineDesc',
        price: '₾38.90',
        image: rosatoWineImg
      },
      {
        nameKey: 'rossoWineName',
        descKey: 'rossoWineDesc',
        price: '₾49.90',
        image: rossoWineImg
      },
      {
        nameKey: 'sparklingBagrationiName',
        descKey: 'sparklingBagrationiDesc',
        price: '₾23.00',
        image: sparklingBagrationiImg
      },
      {
        nameKey: 'kisiTelianiName',
        descKey: 'kisiTelianiDesc',
        price: '₾37.00',
        image: kisiTelianiImg
      },
      {
        nameKey: 'saperaviTelianiName',
        descKey: 'saperaviTelianiDesc',
        price: '₾8.00 / ₾28.00',
        image: saperaviTelianiImg
      },
      {
        nameKey: 'tsinandaliTelianiName',
        descKey: 'tsinandaliTelianiDesc',
        price: '₾7.00 / ₾22.00',
        image: tsinandaliTelianiImg
      },
      {
        nameKey: 'tvishiTelianiName',
        descKey: 'tvishiTelianiDesc',
        price: '₾14.00 / ₾39.00',
        image: tvishiTelianiImg
      },
      {
        nameKey: 'mukuzaniTelianiName',
        descKey: 'mukuzaniTelianiDesc',
        price: '₾35.00',
        image: mukuzaniTelianiImg
      },
      {
        nameKey: 'otskhanurriSaperaviName',
        descKey: 'otskhanurriSaperaviDesc',
        price: '₾67.00',
        image: otskhanurriSaperaviImg
      },
      {
        nameKey: 'kindzmarauliTelianiName',
        descKey: 'kindzmarauliTelianiDesc',
        price: '₾12.00 / ₾40.00',
        image: kindzmarauliTelianiImg
      },
      {
        nameKey: 'khvanchkaraTelianiName',
        descKey: 'khvanchkaraTelianiDesc',
        price: '₾85.00',
        image: khvanchkaraTelianiImg
      },
      {
        nameKey: 'familyWhiteDryName',
        descKey: 'familyWhiteDryDesc',
        price: '₾5.00 / ₾19.90',
        image: familyWhiteDryImg
      },
      {
        nameKey: 'jrbClassicName',
        descKey: 'jrbClassicDesc',
        price: '₾42.90',
        image: jrbClassicImg
      },
      {
        nameKey: 'badagoniClassicName',
        descKey: 'badagoniClassicDesc',
        price: '₾33.00',
        image: badagoniClassicImg
      },
      {
        nameKey: 'badagoniOriginalName',
        descKey: 'badagoniOriginalDesc',
        price: '₾34.00',
        image: badagoniOriginalImg
      },
      {
        nameKey: 'askanelPlatinumName',
        descKey: 'askanelPlatinumDesc',
        price: '₾35.90',
        image: askanelPlatinumImg
      },
      {
        nameKey: 'askanelGoldName',
        descKey: 'askanelGoldDesc',
        price: '₾31.90',
        image: askanelGoldImg
      },
      {
        nameKey: 'chachaOakAgedName',
        descKey: 'chachaOakAgedDesc',
        price: '₾3.50 / ₾11.95',
        image: chachaOakAgedImg
      },
      {
        name: 'Chacha (0.5L)',
        description: 'Oak aged Georgian chacha 0.5L bottle',
        price: '₾23.90'
      },
      {
        nameKey: 'jimsherName',
        descKey: 'jimsherDesc',
        price: '₾4.90 / ₾64.90',
        image: jimsherImg
      },
      {
        nameKey: 'macallanName',
        descKey: 'macallanDesc',
        price: '₾35.00 / ₾450.00',
        image: macallanImg
      },
      {
        nameKey: 'chivasRegalName',
        descKey: 'chivasRegalDesc',
        price: '₾15.90 / ₾149.90',
        image: chivasRegalImg
      },
      {
        nameKey: 'jackDanielsAppleName',
        descKey: 'jackDanielsAppleDesc',
        price: '₾11.90',
        image: jackDanielsAppleImg
      },
      {
        nameKey: 'jackDanielsHoneyName',
        descKey: 'jackDanielsHoneyDesc',
        price: '₾109.90',
        image: jackDanielsHoneyImg
      },
      {
        nameKey: 'hennessyName',
        descKey: 'hennessyDesc',
        price: '₾15.00 / ₾199.00',
        image: hennessyImg
      },
      {
        nameKey: 'sarajishviliXOName',
        descKey: 'sarajishviliXODesc',
        price: '₾24.00 / ₾249.00',
        image: sarajishviliXOImg
      },
      {
        nameKey: 'sarajishviliVSName',
        descKey: 'sarajishviliVSDesc',
        price: '₾8.00 / ₾66.00',
        image: sarajishviliVSImg
      },
      {
        nameKey: 'cognac250gName',
        descKey: 'cognac250gDesc',
        price: '₾12.45',
        image: cognac250gImg
      },
      {
        nameKey: 'cognacName',
        descKey: 'cognacDesc',
        price: '₾3.50 / ₾24.90',
        image: cognacImg
      },
      {
        nameKey: 'montBlancName',
        descKey: 'montBlancDesc',
        price: '₾133.90',
        image: montBlancImg
      },
      {
        nameKey: 'greyGooseName',
        descKey: 'greyGooseDesc',
        price: '₾133.90',
        image: greyGooseImg
      },
      {
        nameKey: 'belugaName',
        descKey: 'belugaDesc',
        price: '₾161.00',
        image: belugaImg
      },
      {
        nameKey: 'honeySpiritName',
        descKey: 'honeySpiritDesc',
        price: '₾23.90 (0.5L) / ₾3.50 / ₾11.95 (0.05/0.250)',
        image: honeySpiritImg
      },
      {
        nameKey: 'danzkaName',
        descKey: 'danzkaDesc',
        price: '₾4.50 / ₾38.00 / ₾65.00',
        image: danzkaImg
      },
      {
        nameKey: 'kirkeName',
        descKey: 'kirkeDesc',
        price: '₾49.90',
        image: kirkeImg
      },
      {
        nameKey: 'nemiroffName',
        descKey: 'nemiroffDesc',
        price: '₾49.90',
        image: nemiroffImg
      },
      {
        nameKey: 'absolutBlueName',
        descKey: 'absolutBlueDesc',
        price: '₾5.50 / ₾44.00 / ₾88.00',
        image: absolutBlueImg
      },
      {
        nameKey: 'absolutCurrantName',
        descKey: 'absolutCurrantDesc',
        price: '₾6.50 / ₾49.50 / ₾90.00',
        image: absolutCurrantImg
      },
      {
        nameKey: 'oneginName',
        descKey: 'oneginDesc',
        price: '₾109.90',
        image: oneginImg
      },
      {
        nameKey: 'finlandiaName',
        descKey: 'finlandiaDesc',
        price: '₾5.00 / ₾42.00 / ₾84.00',
        image: finlandiaImg
      },
      {
        nameKey: 'siberianWolfName',
        descKey: 'siberianWolfDesc',
        price: '₾4.90 / ₾29.90 / ₾59.90',
        image: siberianWolfImg
      }
    ],
    nonAlcoholicDrinks: [
      {
        nameKey: 'homemadeLemonadeJugName',
        descKey: 'homemadeLemonadeJugDesc',
        price: '₾13.95',
        image: homemadeLemonadeJugImg
      },
      {
        nameKey: 'homemadeLemonadeGlassName',
        descKey: 'homemadeLemonadeGlassDesc',
        price: '₾6.95',
        image: homemadeLemonadeGlassImg
      },
      {
        nameKey: 'juiceOneLiterName',
        descKey: 'juiceOneLiterDesc',
        price: '₾9.95',
        image: juiceOneLiterImg
      },
      {
        nameKey: 'juiceOneGlassName',
        descKey: 'juiceOneGlassDesc',
        price: '₾3.95',
        image: juiceOneGlassImg
      },
      {
        nameKey: 'iceTeaName',
        descKey: 'iceTeaDesc',
        price: '₾6.95',
        image: iceTeaImg
      },
      {
        nameKey: 'borjomiWaterName',
        descKey: 'borjomiWaterDesc',
        price: '₾2.50',
        image: borjomiWaterImg
      },
      {
        nameKey: 'bakurianiWaterName',
        descKey: 'bakurianiWaterDesc',
        price: '₾2.50',
        image: bakurianiWaterImg
      },
      {
        nameKey: 'kazbegiLemonadeName',
        descKey: 'kazbegiLemonadeDesc',
        price: '₾2.50',
        image: kazbegiLemonadeImg
      },
      {
        nameKey: 'cocaColaName',
        descKey: 'cocaColaDesc',
        price: '₾3.00',
        image: cocaColaImg
      },
      {
        nameKey: 'fantaName',
        descKey: 'fantaDesc',
        price: '₾3.00',
        image: fantaImg
      },
      {
        nameKey: 'redBullName',
        descKey: 'redBullDesc',
        price: '₾10.00',
        image: redBullImg
      }
    ],
    coffeeTea: [
      {
        nameKey: 'americanoName',
        descKey: 'americanoDesc',
        price: '₾3.90',
        image: americanoImg
      },
      {
        nameKey: 'espressoName',
        descKey: 'espressoDesc',
        price: '₾3.90',
        image: espressoImg
      },
      {
        nameKey: 'doubleEspressoName',
        descKey: 'doubleEspressoDesc',
        price: '₾7.80',
        image: doubleEspressoImg
      },
      {
        nameKey: 'cappuccinoName',
        descKey: 'cappuccinoDesc',
        price: '₾5.00',
        image: cappuccinoImg
      },
      {
        nameKey: 'latteName',
        descKey: 'latteDesc',
        price: '₾6.00',
        image: latteImg
      },
      {
        nameKey: 'turkishCoffeeName',
        descKey: 'turkishCoffeeDesc',
        price: '₾3.00',
        image: turkishCoffeeImg
      },
      {
        nameKey: 'hotChocolateName',
        descKey: 'hotChocolateDesc',
        price: '₾8.00',
        image: hotChocolateImg
      },
      {
        nameKey: 'iceCoffeeName',
        descKey: 'iceCoffeeDesc',
        price: '₾6.00',
        image: iceCoffeeImg
      },
      {
        nameKey: 'iceCoffeeIceCreamName',
        descKey: 'iceCoffeeIceCreamDesc',
        price: '₾10.00',
        image: iceCoffeeIceCreamImg
      },
      {
        nameKey: 'iceCoffeeBaileysName',
        descKey: 'iceCoffeeBaileysDesc',
        price: '₾13.00',
        image: iceCoffeeBaileysImg
      },
      {
        nameKey: 'teaName',
        descKey: 'teaDesc',
        price: '₾1.80 / ₾4.50',
        image: teaImg
      }
    ],
    appetizer: [
      {
        nameKey: 'europeanCheeseBoardName',
        descKey: 'europeanCheeseBoardDesc',
        price: '₾30.00',
        image: europeanCheeseBoardImg
      },
      {
        nameKey: 'bruschettaBoardName',
        descKey: 'bruschettaBoardDesc',
        price: '₾25.90',
        image: bruschettaBoardImg
      },
      {
        nameKey: 'sulguniBallsName',
        descKey: 'sulguniBallsDesc',
        price: '₾22.90',
        image: sulguniBallsImg
      },
      {
        nameKey: 'garlicBreadName',
        descKey: 'garlicBreadDesc',
        price: '₾6.00',
        image: garlicBreadImg
      },
      {
        nameKey: 'pistachiosName',
        descKey: 'pistachiosDesc',
        price: '₾13.95',
        image: pistachiosImg
      },
      {
        nameKey: 'georgianWalnutsName',
        descKey: 'georgianWalnutsDesc',
        price: '₾9.95',
        image: georgianWalnutsImg
      },
      {
        nameKey: 'peanutsName',
        descKey: 'peanutsDesc',
        price: '₾6.00',
        image: peanutsImg
      }
    ],
    bakery: [
      { nameKey: 'pizzaFourCheeseName', descKey: 'pizzaFourCheeseDesc', price: '₾25.90', image: pizzaFourCheeseImg },
      { nameKey: 'pizzaPepperoniName', descKey: 'pizzaPepperoniDesc', price: '₾22.90', image: pizzaPepperoniImg },
      { nameKey: 'pizzaBaconName', descKey: 'pizzaBaconDesc', price: '₾22.90', image: pizzaBaconImg },
      { nameKey: 'pizzaMargheritaName', descKey: 'pizzaMargheritaDesc', price: '₾17.90', image: pizzaMargheritaImg },
      { nameKey: 'pizzaVegetarianName', descKey: 'pizzaVegetarianDesc', price: '₾13.90', image: pizzaVegetarianImg },
      { nameKey: 'khachapuriSpecialName', descKey: 'khachapuriSpecialDesc', price: '₾22.90', image: khachapuriSpecialImg },
      { nameKey: 'khachapuriAcharuliName', descKey: 'khachapuriAcharuliDesc', price: '₾14.95', image: khachapuriAcharuliImg },
      { nameKey: 'khachapuriImeretiName', descKey: 'khachapuriImeretiDesc', price: '₾13.95', image: khachapuriImeretiImg },
      { nameKey: 'lobianiHamName', descKey: 'lobianiHamDesc', price: '₾14.00', image: lobianiHamImg },
      { nameKey: 'lobianiAcharuliName', descKey: 'lobianiAcharuliDesc', price: '₾10.90', image: lobianiAcharuliImg },
      { nameKey: 'lobianiName', descKey: 'lobianiDesc', price: '₾8.00', image: lobianiImg },
      { nameKey: 'kubdariName', descKey: 'kubdariDesc', price: '₾14.90', image: kubdariImg },
      { nameKey: 'focacciaCheeseName', descKey: 'focacciaCheeseDesc', price: '₾7.90', image: focacciaCheeseImg },
      { nameKey: 'focacciaName', descKey: 'focacciaDesc', price: '₾3.90', image: focacciaImg },
      { nameKey: 'toneBreadName', descKey: 'toneBreadDesc', price: '₾2.00', image: toneBreadImg },
      { nameKey: 'blackBreadName', descKey: 'blackBreadDesc', price: '₾2.50', image: blackBreadImg },
      { nameKey: 'breadBasketName', descKey: 'breadBasketDesc', price: '₾4.00', image: breadBasketImg },
      { nameKey: 'chvishtiariName', descKey: 'chvishtiariDesc', price: '₾6.50', image: chvishtiariImg },
      { nameKey: 'mchadiName', descKey: 'mchadiDesc', price: '₾1.05', image: mchadiImg },
      { nameKey: 'ghomiName', descKey: 'ghomiDesc', price: '₾2.90', image: ghomiImg }
    ],
    coldDishes: [
      { nameKey: 'ajapsandaliPlateName', descKey: 'ajapsandaliPlateDesc', price: '₾11.90', image: ajapsandaliPlateImg },
      { nameKey: 'caesarShrimpName', descKey: 'caesarShrimpDesc', price: '₾29.90', image: caesarShrimpImg },
      { nameKey: 'caesarSalmonName', descKey: 'caesarSalmonDesc', price: '₾24.90', image: caesarSalmonImg },
      { nameKey: 'caesarChickenName', descKey: 'caesarChickenDesc', price: '₾19.90', image: caesarChickenImg },
      { nameKey: 'caesarMushroomName', descKey: 'caesarMushroomDesc', price: '₾16.95', image: caesarMushroomImg },
      { nameKey: 'steakSaladName', descKey: 'steakSaladDesc', price: '₾20.90', image: steakSaladImg },
      { nameKey: 'chickenRagoutName', descKey: 'chickenRagoutDesc', price: '₾14.00', image: chickenRagoutImg },
      { nameKey: 'vegetableRagoutName', descKey: 'vegetableRagoutDesc', price: '₾11.90', image: vegetableRagoutImg },
      { nameKey: 'greekSaladName', descKey: 'greekSaladDesc', price: '₾13.90', image: greekSaladImg },
      { nameKey: 'greenSaladName', descKey: 'greenSaladDesc', price: '₾7.50', image: greenSaladImg },
      { nameKey: 'cucumberTomatoWalnutName', descKey: 'cucumberTomatoWalnutDesc', price: '₾10.95', image: cucumberTomatoWalnutImg },
      { nameKey: 'cucumberTomatoSaladName', descKey: 'cucumberTomatoSaladDesc', price: '₾8.95', image: cucumberTomatoSaladImg },
      { nameKey: 'cucumberTomatoKakhuriName', descKey: 'cucumberTomatoKakhuriDesc', price: '₾8.95', image: cucumberTomatoKakhuriImg },
      { nameKey: 'georgianCheeseAssortmentName', descKey: 'georgianCheeseAssortmentDesc', price: '₾23.50', image: georgianCheeseAssortmentImg },
      { nameKey: 'sulguniCheeseName', descKey: 'sulguniCheeseDesc', price: '₾13.90', image: sulguniCheeseImg },
      { nameKey: 'regularCheeseName', descKey: 'regularCheeseDesc', price: '₾9.90', image: regularCheeseImg },
      { nameKey: 'eggplantWalnutName', descKey: 'eggplantWalnutDesc', price: '₾10.00', image: eggplantWalnutImg },
      { nameKey: 'pkhaliPlatterName', descKey: 'pkhaliPlatterDesc', price: '₾17.90', image: pkhaliPlatterImg },
      { nameKey: 'pickleAssortmentName', descKey: 'pickleAssortmentDesc', price: '₾9.95', image: pickleAssortmentImg }
    ],
    grillBarbecue: [
      { nameKey: 'porkRibsPicklesSauceName', descKey: 'porkRibsPicklesSauceDesc', price: '₾29.90', image: porkRibsPicklesSauceImg },
      { nameKey: 'porkRibsGrillName', descKey: 'porkRibsGrillDesc', price: '₾16.00', image: porkRibsImg },
      { nameKey: 'bbqPlatterName', descKey: 'bbqPlatterDesc', price: '₾69.90', image: bbqPlatterImg },
      { nameKey: 'porkKebabName', descKey: 'porkKebabDesc', price: '₾13.90', image: porkKebabImg },
      { nameKey: 'beefKebabName', descKey: 'beefKebabDesc', price: '₾24.90', image: beefKebabImg },
      { nameKey: 'chickenKebabName', descKey: 'chickenKebabDesc', price: '₾10.95', image: chickenKebabImg },
      { nameKey: 'kabab', descKey: 'kababDesc', price: '₾13.90', image: kababImg },
      { nameKey: 'kababKutaisiName', descKey: 'kababKutaisiDesc', price: '₾15.90', image: kababKutaisiImg },
      { nameKey: 'kababSignatureName', descKey: 'kababSignatureDesc', price: '₾22.90' },
      { nameKey: 'grilledVegetablesName', descKey: 'grilledVegetablesDesc', price: '₾13.90', image: grilledVegetablesImg }
    ],
    chickenPoultry: [
      { nameKey: 'tabakaGrillName', descKey: 'tabakaGrillDesc', price: '₾26.90', image: tabakaGrillImg },
      { nameKey: 'tabakaFriedName', descKey: 'tabakaFriedDesc', price: '₾26.90', image: tabakaFriedImg },
      { nameKey: 'chickenShkmeruliName', descKey: 'chickenShkmeruliDesc', price: '₾30.00', image: chickenShkmeruliImg },
      { nameKey: 'chickenInPlumsName', descKey: 'chickenInPlumsDesc', price: '₾39.90', image: chickenInPlumsImg }
    ],
    mainDishes: [
      { nameKey: 'kanchiPlatterName', descKey: 'kanchiPlatterDesc', price: '₾79.90', image: kanchiPlatterImg },
      { nameKey: 'rabbitFriedName', descKey: 'rabbitFriedDesc', price: '₾59.90', image: rabbitFriedImg },
      { nameKey: 'porkOjakhuriName', descKey: 'porkOjakhuriDesc', price: '₾16.00', image: porkOjakhuriImg },
      { nameKey: 'beefOjakhuriName', descKey: 'beefOjakhuriDesc', price: '₾25.90', image: beefOjakhuriImg },
      { nameKey: 'beefKebabPomegranateplateName', descKey: 'beefKebabPomegranateplateDesc', price: '₾25.90', image: beefKebabPomegranateplateImg },
      { nameKey: 'beefFreshTomatoName', descKey: 'beefFreshTomatoDesc', price: '₾23.90', image: beefFreshTomatoImg },
      { nameKey: 'beefRibsAjikaName', descKey: 'beefRibsAjikaDesc', price: '₾29.90', image: beefRibsAjikaImg },
      { nameKey: 'beefBoiledRibsGarlicName', descKey: 'beefBoiledRibsGarlicDesc', price: '₾29.90', image: beefBoiledRibsGarlicImg },
      { nameKey: 'chickenFajitasRiceName', descKey: 'chickenFajitasRiceDesc', price: '₾16.90', image: chickenFajitasRiceImg },
      { nameKey: 'chickenSchnitzelName', descKey: 'chickenSchnitzelDesc', price: '₾14.90', image: chickenSchnitzelImg },
      { nameKey: 'chickenSteakName', descKey: 'chickenSteakDesc', price: '₾15.90', image: chickenSteakImg },
      { nameKey: 'kharchoName', descKey: 'kharchoDesc', price: '₾21.90', image: kharchoImg },
      { nameKey: 'kharchoGhomiName', descKey: 'kharchoGhomiDesc', price: '₾23.90', image: kharchoGhomiImg },
      { nameKey: 'kuchmachName', descKey: 'kuchmachDesc', price: '₾16.95', image: kuchmachImg },
      { nameKey: 'kupatiName', descKey: 'kupatiDesc', price: '₾16.90', image: kupatiImg },
      { nameKey: 'kupatiPlatterName', descKey: 'kupatiPlatterDesc', price: '₾32.80', image: kupatiPlatterImg },
      { nameKey: 'mushroomSulguniName', descKey: 'mushroomSulguniDesc', price: '₾13.00', image: mushroomSulguniImg },
      { nameKey: 'mushroomFriedName', descKey: 'mushroomFriedDesc', price: '₾9.90', image: mushroomFriedImg },
      { nameKey: 'mushroomOjakhuriName', descKey: 'mushroomOjakhuriDesc', price: '₾9.90', image: mushroomOjakhuriImg },
      { nameKey: 'pelmeniPotName', descKey: 'pelmeniPotDesc', price: '₾9.90', image: pelmeniPotImg },
      { nameKey: 'lobioPlatter4PersonsName', descKey: 'lobioPlatter4PersonsDesc', price: '₾29.90', image: lobioPlatter4PersonsImg },
      { nameKey: 'lobioPotMchadiName', descKey: 'lobioPotMchadiDesc', price: '₾6.95', image: lobioPotMchadiImg },
      { nameKey: 'potatoHomestyleName', descKey: 'potatoHomestyleDesc', price: '₾5.00', image: potatoHomestyleImg },
      { nameKey: 'omeletBaconName', descKey: 'omeletBaconDesc', price: '₾11.90', image: omeletBaconImg },
      { nameKey: 'sulguniSkewerName', descKey: 'sulguniSkewerDesc', price: '₾13.90', image: sulguniSkewerImg }
    ],
    beerMenu: [
      { nameKey: 'beerPlatterName', descKey: 'beerPlatterDesc', price: '₾34.90', image: beerPlatterImg },
      { nameKey: 'huntingSausageName', descKey: 'huntingSausageDesc', price: '₾13.90', image: huntingSausageImg },
      { nameKey: 'sausageAssortmentName', descKey: 'sausageAssortmentDesc', price: '₾34.90', image: sausageAssortmentImg },
      { nameKey: 'austrianSausageBaconName', descKey: 'austrianSausageBaconDesc', price: '₾45.50', image: austrianSausageBaconImg },
      { nameKey: 'chickenWingsName', descKey: 'chickenWingsDesc', price: '₾19.90', image: chickenWingsImg },
      { nameKey: 'porkRibsBBQSauceName', descKey: 'porkRibsBBQSauceDesc', price: '₾24.90', image: porkRibsBBQSauceImg },
      { nameKey: 'boiledRibsName', descKey: 'boiledRibsDesc', price: '₾29.90', image: boiledRibsImg },
      { nameKey: 'hamRachulianName', descKey: 'hamRachulianDesc', price: '₾25.00', image: hamRachulianImg }
    ],
    soups: [
      { nameKey: 'asianSoupName', descKey: 'asianSoupDesc', price: '₾19.90', image: asianSoupImg },
      { nameKey: 'ukhaWithSalmonName', descKey: 'ukhaWithSalmonDesc', price: '₾19.90', image: ukhaWithSalmonImg },
      { nameKey: 'beefChakafuliName', descKey: 'beefChakafuliDesc', price: '₾18.90', image: beefChakafuliImg },
      { nameKey: 'chickenChikhirtmaName', descKey: 'chickenChikhirtmaDesc', price: '₾10.00', image: chickenChikhirtmaImg },
      { nameKey: 'mushroomSoupName', descKey: 'mushroomSoupDesc', price: '₾6.95', image: mushroomSoupImg },
      { nameKey: 'mushroomCreamSoupName', descKey: 'mushroomCreamSoupDesc', price: '₾7.95', image: mushroomCreamSoupImg }
    ],
    pasta: [
      { nameKey: 'bologneseName', descKey: 'bologneseDesc', price: '₾16.00', image: bologneseImg },
      { nameKey: 'carbonaraName', descKey: 'carbonaraDesc', price: '₾15.00', image: carbonaraImg },
      { nameKey: 'penneChickenMushroomsName', descKey: 'penneChickenMushroomsDesc', price: '₾13.90', image: penneChickenMushroomsImg }
    ],
    seafood: [
      { nameKey: 'seafoodPlatterName', descKey: 'seafoodPlatterDesc', price: '₾129.90', image: seafoodPlatterImg },
      { nameKey: 'tigerShrimpName', descKey: 'tigerShrimpDesc', price: '₾37.90', image: tigerShrimpImg },
      { nameKey: 'friedMusselsName', descKey: 'friedMusselsDesc', price: '₾29.00', image: friedMusselsImg },
      { nameKey: 'blackSeaBarabulkaName', descKey: 'blackSeaBarabulkaDesc', price: '₾49.90', image: blackSeaBarabulkaImg },
      { nameKey: 'grilledDoradoName', descKey: 'grilledDoradoDesc', price: '₾34.50', image: grilledDoradoImg },
      { nameKey: 'salmonSteakName', descKey: 'salmonSteakDesc', price: '₾35.90', image: salmonSteakImg },
      { nameKey: 'salmonKebabName', descKey: 'salmonKebabDesc', price: '₾25.90', image: salmonKebabImg },
      { nameKey: 'friedSquidName', descKey: 'friedSquidDesc', price: '₾16.00', image: friedSquidImg },
      { nameKey: 'grilledSquidName', descKey: 'grilledSquidDesc', price: '₾16.00', image: grilledSquidImg }
    ],
    sideDishes: [
      { nameKey: 'mexicanPotatoName', descKey: 'mexicanPotatoDesc', price: '₾6.90', image: mexicanPotatoImg },
      { nameKey: 'frenchFriesName', descKey: 'frenchFriesDesc', price: '₾5.50', image: frenchFriesImg },
      { nameKey: 'riceWithVegetablesName', descKey: 'riceWithVegetablesDesc', price: '₾6.50', image: riceWithVegetablesImg },
      { nameKey: 'mashedPotatoName', descKey: 'mashedPotatoDesc', price: '₾4.90', image: mashedPotatoImg },
      { nameKey: 'ghomiName', descKey: 'ghomiDesc', price: '₾2.90', image: ghomiImg }
    ],
    sauces: [
      { nameKey: 'cheeseSauceName', descKey: 'cheeseSauceDesc', price: '₾8.00', image: cheeseSauceImg },
      { nameKey: 'mushroomSauceName', descKey: 'mushroomSauceDesc', price: '₾10.00', image: mushroomSauceImg },
      { nameKey: 'sweetSourSauceName', descKey: 'sweetSourSauceDesc', price: '₾3.00', image: sweetSourSauceImg },
      { nameKey: 'tkemaliName', descKey: 'tkemaliDesc', price: '₾2.50', image: tkemaliImg },
      { nameKey: 'satsebliName', descKey: 'satsebliDesc', price: '₾2.50', image: satsebliImg },
      { nameKey: 'ketchupName', descKey: 'ketchupDesc', price: '₾2.50', image: ketchupImg },
      { nameKey: 'marashafiName', descKey: 'marashafiDesc', price: '₾2.50', image: marashafiImg },
      { nameKey: 'garlicWaterName', descKey: 'garlicWaterDesc', price: '₾2.50', image: garlicWaterImg },
      { nameKey: 'greenSaltName', descKey: 'greenSaltDesc', price: '₾2.50', image: greenSaltImg },
      { nameKey: 'mexicanSauceName', descKey: 'mexicanSauceDesc', price: '₾2.50', image: mexicanSauceImg },
      { nameKey: 'mdogviName', descKey: 'mdogviDesc', price: '₾2.50', image: mdogviImg }
    ],
    dessert: [
      { nameKey: 'seasonalFruitName', descKey: 'seasonalFruitDesc', price: '₾19.90', image: seasonalFruitImg },
      { nameKey: 'cheesecakeName', descKey: 'cheesecakeDesc', price: '₾11.90', image: cheesecakeImg },
      { nameKey: 'tiramisuName', descKey: 'tiramisuDesc', price: '₾11.90', image: tiramisuImg },
      { nameKey: 'affogatoName', descKey: 'affogatoDesc', price: '₾11.90', image: affogatoImg },
      { nameKey: 'lavaCakeName', descKey: 'lavaCakeDesc', price: '₾9.95', image: lavaCakeImg },
      { nameKey: 'bananaCrepeName', descKey: 'bananaCrepeDesc', price: '₾6.90', image: bananaCrepeImg },
      { nameKey: 'plainCrepeName', descKey: 'plainCrepeDesc', price: '₾6.90', image: plainCrepeImg }
    ]
  };

  const categories = [
    { id: 'alcoholicDrinks', nameKey: 'alcoholicDrinks', icon: '🍷' },
    { id: 'nonAlcoholicDrinks', nameKey: 'nonAlcoholicDrinks', icon: '🥤' },
    { id: 'coffeeTea', nameKey: 'coffeeTea', icon: '☕' },
    { id: 'appetizer', nameKey: 'appetizer', icon: '🧀' },
    { id: 'bakery', nameKey: 'bakery', icon: '🍞' },
    { id: 'coldDishes', nameKey: 'coldDishes', icon: '🥗' },
    { id: 'grillBarbecue', nameKey: 'grillBarbecue', icon: '🍖' },
    { id: 'chickenPoultry', nameKey: 'chickenPoultry', icon: '🍗' },
    { id: 'mainDishes', nameKey: 'mainDishes', icon: '🍽' },
    { id: 'beerMenu', nameKey: 'beerMenu', icon: '🍺' },
    { id: 'soups', nameKey: 'soups', icon: '🍜' },
    { id: 'pasta', nameKey: 'pasta', icon: '🍝' },
    { id: 'seafood', nameKey: 'seafood', icon: '🐟' },
    { id: 'sideDishes', nameKey: 'sideDishes', icon: '🥔' },
    { id: 'sauces', nameKey: 'sauces', icon: '🍯' },
    { id: 'dessert', nameKey: 'dessert', icon: '🍰' }
  ];

  // Filter items based on search term
  const filteredItems = (menuData[activeCategory] || []).filter(item => {
    const name = item.nameKey ? t(item.nameKey) : item.name || '';
    const desc = item.descKey ? t(item.descKey) : item.description || '';
    return name.toLowerCase().includes(searchTerm.toLowerCase()) || 
           desc.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const currentItems = filteredItems;
  const totalPages = Math.ceil(currentItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedItems = currentItems.slice(startIndex, startIndex + itemsPerPage);

  const handleCategoryChange = async (categoryId) => {
    setIsLoading(true);
    setActiveCategory(categoryId);
    setCurrentPage(1);
    setSearchTerm(''); // Reset search when changing category
    
    // Simulate loading for better UX
    await new Promise(resolve => setTimeout(resolve, 300));
    setIsLoading(false);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Smooth scroll to top of menu items
      document.querySelector('.menu-items-container')?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const clearSearch = () => {
    setSearchTerm('');
    setCurrentPage(1);
  };

  const toggleViewMode = () => {
    setViewMode(viewMode === 'grid' ? 'list' : 'grid');
    setCurrentPage(1);
  };

  // Add custom styles to document head
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes pulse {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0.7;
        }
      }
      
      .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      
      .animate-fade-in {
        animation: fadeInUp 0.8s ease-out;
      }
      
      .animate-pulse {
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-amber-50/10 via-amber-100/10 to-amber-50/5 min-h-screen">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Back Button */}
        <div className="mb-8">
          <Button
            asChild
            className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700
                       text-white font-semibold px-6 py-3 rounded-full
                       shadow-lg shadow-amber-500/30
                       border-2 border-amber-400/30"
          >
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              <span>{t('backToHome')}</span>
            </Link>
          </Button>
        </div>
        
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl lg:text-6xl font-bavarian font-bold text-foreground mb-4 tracking-wide">
            {t('ourFullMenu')}
          </h1>
          <div className="w-28 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 mx-auto mb-6 rounded-full shadow-md"></div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            {t('authenticGerman')}
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500 w-5 h-5" />
            <input
              type="text"
              placeholder={`${t('searchIn')} ${t(categories.find(c => c.id === activeCategory)?.nameKey || '')}...`}
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-10 h-12 border-2 border-amber-200 focus:border-amber-400 rounded-full bg-white/80 focus:bg-white focus:outline-none transition-all duration-200"
            />
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-amber-500 hover:text-amber-700"
              >
                ✕
              </button>
            )}
          </div>
          
          <div className="flex gap-2">
            <Button
              onClick={toggleViewMode}
              variant="outline"
              className="h-12 px-4 border-2 border-amber-200 hover:border-amber-400"
            >
              {viewMode === 'grid' ? <List className="w-5 h-5" /> : <Grid className="w-5 h-5" />}
            </Button>
            <Button
              onClick={() => setShowFilters(!showFilters)}
              variant="outline"
              className="h-12 px-4 border-2 border-amber-200 hover:border-amber-400"
            >
              <Filter className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {categories.map((category) => {
              const isActive = activeCategory === category.id;
              const itemCount = menuData[category.id]?.length || 0;
              
              return (
                <Button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  disabled={isLoading}
                  className={`relative group px-4 py-3 h-auto rounded-2xl font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-white shadow-xl shadow-amber-500/50 scale-105'
                      : 'bg-white/80 text-amber-700 border-2 border-amber-200 hover:bg-amber-50 hover:border-amber-300 hover:shadow-lg disabled:opacity-50'
                  }`}
                >
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-lg">{category.icon}</span>
                    <span className="text-xs md:text-sm font-medium">{t(category.nameKey)}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      isActive ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-600'
                    }`}>
                      {itemCount}
                    </span>
                  </div>
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-lg"></div>
                  )}
                </Button>
              );
            })}
          </div>
          
          {/* Active Category Info */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full border border-amber-200">
              <span className="text-lg">{categories.find(c => c.id === activeCategory)?.icon}</span>
              <span className="font-medium text-amber-700">
                {t(categories.find(c => c.id === activeCategory)?.nameKey || '')}
              </span>
              {searchTerm && (
                <span className="text-sm text-amber-600">
                  • {currentItems.length} results
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="menu-items-container mb-12">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-amber-200 border-t-amber-500 rounded-full animate-spin"></div>
                <p className="text-amber-600 font-medium">{t('loadingDeliciousItems')}</p>
              </div>
            </div>
          ) : displayedItems.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-muted-foreground mb-2">No items found</h3>
              <p className="text-muted-foreground mb-4">
                {searchTerm ? `No results for "${searchTerm}"` : 'No items in this category'}
              </p>
              {searchTerm && (
                <Button onClick={clearSearch} variant="outline">
                  Clear search
                </Button>
              )}
            </div>
          ) : (
            <div className={`grid gap-6 max-w-7xl mx-auto ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1 max-w-4xl'
            }`}>
              {displayedItems.map((item, index) => {
                const itemName = item.nameKey ? t(item.nameKey) : item.name;
                const itemDesc = item.descKey ? t(item.descKey) : item.description;
                const isHighlighted = searchTerm && (
                  itemName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  itemDesc?.toLowerCase().includes(searchTerm.toLowerCase())
                );
                
                return (
                  <Card 
                    key={index} 
                    className={`group transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 rounded-2xl overflow-hidden ${
                      viewMode === 'grid'
                        ? 'bg-gradient-to-br from-amber-50/20 via-amber-50/10 to-amber-50/5'
                        : 'bg-gradient-to-r from-amber-50/20 to-amber-50/5'
                    } ${
                      isHighlighted ? 'ring-2 ring-amber-400 shadow-lg' : 'shadow-md'
                    }`}
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: 'fadeInUp 0.6s ease-out forwards'
                    }}
                  >
                    <CardContent className={viewMode === 'grid' ? 'p-0' : 'p-4 flex items-center justify-between'}>
                      {/* Image Section - Only shown in grid mode when image is available */}
                      {viewMode === 'grid' && item.image && (
                        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-2xl">
                          <img 
                            src={item.image} 
                            alt={itemName}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      )}
                      
                      <div className={viewMode === 'grid' ? 'p-6 space-y-3' : 'flex-1'}>
                        <div className="flex items-start justify-between gap-2">
                          <h3 className={`font-bavarian font-bold text-foreground group-hover:text-amber-600 transition-colors ${
                            viewMode === 'grid' ? 'text-xl mb-2' : 'text-lg'
                          }`}>
                            {itemName}
                          </h3>
                          {viewMode === 'list' && (
                            <span className="text-lg font-bold text-amber-600 whitespace-nowrap">
                              {item.price}
                            </span>
                          )}
                        </div>
                        
                        {viewMode === 'grid' && itemDesc && (
                          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                            {itemDesc}
                          </p>
                        )}
                        
                        {viewMode === 'grid' && item.price && (
                          <div className="flex items-center justify-between pt-2 border-t border-amber-100">
                            <span className="text-lg font-bold text-amber-600">
                              {item.price}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {viewMode === 'grid' && (
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                            <ChefHat className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && !isLoading && (
          <div className="space-y-4 mb-12">
            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-2">
              <Button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-3 rounded-full bg-white/70 hover:bg-amber-50 border-2 border-amber-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                <ChevronLeft className="w-5 h-5 text-amber-600" />
              </Button>
              
              <div className="flex gap-1">
                {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 7) {
                    pageNum = i + 1;
                  } else if (currentPage <= 4) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 3) {
                    pageNum = totalPages - 6 + i;
                  } else {
                    pageNum = currentPage - 3 + i;
                  }
                  
                  return (
                    <Button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`w-10 h-10 rounded-full font-bold transition-all duration-200 ${
                        currentPage === pageNum
                          ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-white shadow-lg scale-110'
                          : 'bg-white/70 text-amber-700 border-2 border-amber-200 hover:bg-amber-50 hover:scale-105'
                      }`}
                    >
                      {pageNum}
                    </Button>
                  );
                })}
              </div>

              <Button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-3 rounded-full bg-white/70 hover:bg-amber-50 border-2 border-amber-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                <ChevronRight className="w-5 h-5 text-amber-600" />
              </Button>
            </div>
          </div>
        )}

        {/* Service Note & Additional Info */}
        <div className="space-y-6">
          <div className="text-center">
            <div className="inline-block p-6 bg-gradient-to-br from-amber-50/40 via-amber-50/20 to-amber-50/10 shadow-lg rounded-2xl border border-amber-200/30">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Utensils className="w-6 h-6 text-amber-600" />
                <span className="text-lg font-bold text-amber-600">{t('serviceCharge')}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CategorizedMenu;