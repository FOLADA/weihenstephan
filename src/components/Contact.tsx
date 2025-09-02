import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, MapPin, Clock, Mail, ArrowRight, Car } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import GlovoDelivery from '@/assets/glovodelivery.png';

const Contact = () => {
  const { t } = useLanguage();

  const handleReservation = () => {
    window.open('tel:+995591123456', '_self');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t('location'),
      content: t('weihenstephanLocation'),
      type: 'text'
    },
    {
      icon: Phone,
      title: t('reservations'),
      content: '+995 591 12 34 56',
      type: 'phone'
    },
    {
      icon: Clock,
      title: t('openingHours'),
      content: [
        t('hoursMonThu'),
        t('hoursFriSat'),
        t('hoursSun')
      ],
      type: 'hours'
    },
    {
      icon: Mail,
      title: t('email'),
      content: 'info@weihenstephan-kutaisi.ge',
      type: 'email'
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bavarian font-bold text-foreground mb-4 md:mb-6">
            {t('contact')}
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 mx-auto mb-4 md:mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('contactDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bavarian font-bold text-foreground mb-6 md:mb-8">
              {t('visitUs')}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="border border-amber-200/30 bg-gradient-to-br from-amber-50/10 to-amber-50/20 backdrop-blur-sm rounded-xl shadow-lg">
                    <CardContent className="p-4 md:p-6 flex items-start space-x-3 md:space-x-4">
                      <div className="p-2 md:p-3 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full shadow-md flex-shrink-0">
                        <Icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-foreground mb-1 md:mb-2 text-sm md:text-base">
                          {item.title}
                        </h4>
                        {item.type === 'hours' ? (
                          <div className="text-muted-foreground space-y-1 text-sm md:text-base">
                            {(item.content as string[]).map((hour, i) => (
                              <p key={i} className="leading-relaxed">{hour}</p>
                            ))}
                          </div>
                        ) : (
                          <p className="text-muted-foreground leading-relaxed text-sm md:text-base break-words">
                            {item.content as string}
                          </p>
                        )}
                        {item.type === 'phone' && (
                          <Button 
                            onClick={handleReservation}
                            className="mt-3 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg text-sm md:text-base"
                          >
                            {t('reserveNow')}
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Map */}
          <div className="order-first lg:order-last">
            <Card className="border border-amber-200/30 bg-gradient-to-br from-amber-50/10 to-amber-50/20 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden h-full min-h-[400px] md:min-h-[600px] lg:min-h-[700px]">
              <div className="h-full rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.5234234234234!2d42.6984633!3d42.2695393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405c8d766cb36f0b%3A0x7787fd87fe1d6679!2sWeihenstephan%20Beer%20Museum!5e0!3m2!1sen!2sge!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 'inherit' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t('mapTitle')}
                  className="w-full h-full"
                />
              </div>
            </Card>
          </div>
        </div>

        {/* Delivery Section */}
        <div className="mt-16 md:mt-20">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 lg:gap-14 max-w-6xl mx-auto">
            {/* Delivery Image */}
            <div className="relative flex-shrink-0">
              <img 
                src={GlovoDelivery}
                alt="Glovo delivery service" 
                className="h-48 md:h-64 lg:h-80 w-auto drop-shadow-2xl"
                loading="lazy"
              />
              <div className="absolute inset-0 -z-10 blur-2xl bg-amber-400/20 rounded-full scale-125"></div>
            </div>

            {/* Arrow - Hidden on mobile */}
            <ArrowRight className="hidden md:block h-12 lg:h-16 w-12 lg:w-16 text-amber-500 flex-shrink-0" />

            {/* Order Button */}
            <div className="text-center">
              <Button
                asChild
                className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700
                           text-white font-bold text-xl md:text-2xl lg:text-3xl 
                           px-8 md:px-12 lg:px-16 py-4 md:py-6 lg:py-8 
                           rounded-full shadow-2xl shadow-amber-500/50
                           border-2 border-amber-400/30"
              >
                <a
                  href="https://glovoapp.com/ge/ka/kutaisi/shushabandi-kut?content=dziritadi-kerdzebi-c.2527043777&section=dziritadi-kerdzebi-s.5348930794"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 md:gap-4"
                >
                  <span>{t('orderNow')}</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;