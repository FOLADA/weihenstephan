import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';

const Contact = () => {
  const handleReservation = () => {
    window.open('tel:+995591123456', '_self');
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl lg:text-6xl font-bavarian font-bold text-foreground mb-6">
            Contact
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience Bavarian hospitality at its finest. Reserve your table today and join us 
            for an unforgettable culinary journey through tradition and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-slide-in-left">
              <h3 className="text-3xl font-bavarian font-bold text-foreground mb-8">
                Visit Us
              </h3>
              
              <div className="space-y-6">
                <Card className="luxury-card border-0">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="p-3 bg-primary/20 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Location</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Weihenstephan Beer Museum<br />
                        Kutaisi, Georgia<br />
                        მდებარეობა: ქუთაისი, საქართველო
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="luxury-card border-0">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="p-3 bg-primary/20 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Reservations</h4>
                      <p className="text-muted-foreground mb-2">
                        +995 591 12 34 56
                      </p>
                      <Button 
                        onClick={handleReservation}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      >
                        Reserve Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="luxury-card border-0">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="p-3 bg-primary/20 rounded-full">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Opening Hours</h4>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Thursday: 12:00 - 23:00</p>
                        <p>Friday - Saturday: 12:00 - 01:00</p>
                        <p>Sunday: 12:00 - 22:00</p>
                        <p className="text-sm mt-2 text-primary">
                          Kitchen closes 1 hour before closing time
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="luxury-card border-0">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="p-3 bg-primary/20 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Email</h4>
                      <p className="text-muted-foreground">
                        info@weihenstephan-kutaisi.ge
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="animate-slide-in-right">
            <div className="luxury-card border-0 overflow-hidden h-full min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.5234234234234!2d42.6984633!3d42.2695393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405c8d766cb36f0b%3A0x7787fd87fe1d6679!2sWeihenstephan%20Beer%20Museum!5e0!3m2!1sen!2sge!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Weihenstephan Beer Museum Location"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <Card className="luxury-card border-0 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bavarian font-bold text-foreground mb-4">
                Experience Authentic Bavarian Culture
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Join us for special events, beer tastings, and cultural celebrations throughout the year. 
                Our knowledgeable staff will guide you through the rich history of Bavarian brewing traditions 
                while you enjoy our carefully curated selection of premium beverages and authentic cuisine.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bavarian font-bold text-primary">Live Music</div>
                  <p className="text-sm text-muted-foreground">Friday & Saturday</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bavarian font-bold text-primary">Beer Tastings</div>
                  <p className="text-sm text-muted-foreground">Every Thursday</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bavarian font-bold text-primary">Cultural Events</div>
                  <p className="text-sm text-muted-foreground">Monthly</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;