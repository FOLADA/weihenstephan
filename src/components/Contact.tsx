import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, MapPin, Clock, Mail, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Car } from 'lucide-react';
import GlovoDelivery from '@/assets/glovodelivery.png';

const Contact = () => {
  const { t } = useLanguage();

  const handleReservation = () => {
    window.open('tel:+995591123456', '_self');
  };

  return (
   <>
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl lg:text-6xl font-bavarian font-bold text-foreground mb-6">
            {t('contact')}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('contactDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-slide-in-left">
              <h3 className="text-3xl font-bavarian font-bold text-foreground mb-8">
                {t('visitUs')}
              </h3>
              
              <div className="space-y-6">
                {/* Location Card */}
                <Card className="luxury-card group relative overflow-hidden border border-amber-200/30 bg-gradient-to-br from-amber-50/5 to-amber-50/20 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-100/5 to-amber-200/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-amber-400/10 group-hover:bg-amber-400/20 transition-all duration-700"></div>
                  <div className="absolute -left-4 -bottom-4 h-24 w-24 rounded-full bg-amber-400/5 group-hover:bg-amber-400/15 transition-all duration-700"></div>
                  <CardContent className="p-6 flex items-start space-x-4 relative z-10">
                    <div className="p-3 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full shadow-lg">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t('location')}</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {t('weihenstephanLocation')}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Reservations Card */}
                <Card className="luxury-card group relative overflow-hidden border border-amber-200/30 bg-gradient-to-br from-amber-50/5 to-amber-50/20 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-100/5 to-amber-200/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-amber-400/10 group-hover:bg-amber-400/20 transition-all duration-700"></div>
                  <div className="absolute -left-4 -bottom-4 h-24 w-24 rounded-full bg-amber-400/5 group-hover:bg-amber-400/15 transition-all duration-700"></div>
                  <CardContent className="p-6 flex items-start space-x-4 relative z-10">
                    <div className="p-3 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full shadow-lg">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t('reservations')}</h4>
                      <p className="text-muted-foreground mb-2">+995 591 12 34 56</p>
                      <Button 
                        onClick={handleReservation}
                        className="relative overflow-hidden bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:via-amber-700 hover:to-amber-800 text-white font-semibold px-8 py-3 rounded-full transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-lg shadow-amber-500/40 group"
                      >
                        <span className="relative z-10">{t('reserveNow')}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-shine group-hover:translate-x-[100%] transition-all duration-700"></div>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Opening Hours Card */}
                <Card className="luxury-card group relative overflow-hidden border border-amber-200/30 bg-gradient-to-br from-amber-50/5 to-amber-50/20 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-100/5 to-amber-200/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-amber-400/10 group-hover:bg-amber-400/20 transition-all duration-700"></div>
                  <div className="absolute -left-4 -bottom-4 h-24 w-24 rounded-full bg-amber-400/5 group-hover:bg-amber-400/15 transition-all duration-700"></div>
                  <CardContent className="p-6 flex items-start space-x-4 relative z-10">
                    <div className="p-3 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full shadow-lg">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t('openingHours')}</h4>
                      <div className="text-muted-foreground space-y-1">
                        <p>{t('hoursMonThu')}</p>
                        <p>{t('hoursFriSat')}</p>
                        <p>{t('hoursSun')}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Email Card */}
                <Card className="luxury-card group relative overflow-hidden border border-amber-200/30 bg-gradient-to-br from-amber-50/5 to-amber-50/20 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-100/5 to-amber-200/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-amber-400/10 group-hover:bg-amber-400/20 transition-all duration-700"></div>
                  <div className="absolute -left-4 -bottom-4 h-24 w-24 rounded-full bg-amber-400/5 group-hover:bg-amber-400/15 transition-all duration-700"></div>
                  <CardContent className="p-6 flex items-start space-x-4 relative z-10">
                    <div className="p-3 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full shadow-lg">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t('email')}</h4>
                      <p className="text-muted-foreground">info@weihenstephan-kutaisi.ge</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Map - Made taller to match card heights */}
          <div className="animate-slide-in-right">
            <div className="luxury-card group relative overflow-hidden border border-amber-200/30 bg-gradient-to-br from-amber-50/5 to-amber-50/20 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full min-h-[700px]">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-100/5 to-amber-200/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-amber-400/10 group-hover:bg-amber-400/20 transition-all duration-700"></div>
              <div className="absolute -left-4 -bottom-4 h-24 w-24 rounded-full bg-amber-400/5 group-hover:bg-amber-400/15 transition-all duration-700"></div>
              <div className="relative z-10 overflow-hidden h-full rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.5234234234234!2d42.6984633!3d42.2695393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405c8d766cb36f0b%3A0x7787fd87fe1d6679!2sWeihenstephan%20Beer%20Museum!5e0!3m2!1sen!2sge!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '700px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t('mapTitle')}
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Glovo */}
      <div className="mt-20 flex justify-center items-center gap-14">
  {/* Animated Glovo Man */}
  <div className="relative">
    <img 
      src={GlovoDelivery}
      alt="glovo delivery man" 
      className="h-96 w-auto drop-shadow-[0_12px_30px_rgba(251,191,36,0.6)] animate-bounce-slow"
    />
    {/* Soft glow behind him */}
    <div className="absolute inset-0 -z-10 blur-3xl bg-amber-400/40 rounded-full scale-150"></div>
  </div>

  <ArrowRight className="h-24 w-24 text-amber-500 animate-pulse-slow" />

  {/* Order Now Button */}
  <Button
    asChild
    className="relative overflow-hidden bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600
               hover:from-amber-500 hover:via-amber-600 hover:to-amber-700
               text-white font-extrabold text-4xl px-20 py-10 rounded-full tracking-wider
               shadow-2xl shadow-amber-500/60 hover:shadow-amber-400/90
               transition-all duration-500 group"
  >
    <a
      href="https://glovoapp.com"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-6"
    >
      {/* Icon + Text */}
      <span className="flex items-center gap-4 relative z-10">
  <Car  className="!w-16 !h-16 animate-pulse-slow" />  {/* Increased from w-10 h-10 */}
  {t('orderNow')}
</span>


      {/* Shine Layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent 
                      -skew-x-12 group-hover:animate-shine"></div>

      {/* Animated Glow Ring */}
      <div className="absolute inset-0 rounded-full border border-amber-300/50 
                      group-hover:border-amber-100/80 transition-all duration-500"></div>
    </a>
  </Button>
</div>




      </div>
    </section>
    </>
  );
};

export default Contact;