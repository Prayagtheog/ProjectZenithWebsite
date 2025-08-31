import React from 'react';
import { Mail, MapPin, Share2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function Contact() {
  return (
    <div className="bg-gray-50">
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            We'd love to hear from you. Whether you have a question, a partnership idea, or just want to say hi, feel free to reach out.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card className="card-elevation border-0">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-navy">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your Name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="your.email@example.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="Question about Programs" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Your message..." rows={5} />
                    </div>
                    <div className="flex justify-end">
                      <Button type="submit" className="btn-primary px-8 py-3 text-lg">Send Message</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-8 animate-slide-up">
              <Card className="bg-white border-0 card-elevation">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-navy" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy">Email Us</h3>
                      <a href="mailto:info@projectzenith.org" className="text-gray-600 hover:text-gold">info@projectzenith.org</a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 card-elevation">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-navy" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy">Our Location</h3>
                      <p className="text-gray-600">Piscataway, NJ, USA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 card-elevation">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center">
                      <Share2 className="h-6 w-6 text-navy" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy">Follow Us</h3>
                      <div className="flex space-x-4 mt-1">
                        <a href="#" className="text-gray-600 hover:text-gold">Instagram</a>
                        <a href="#" className="text-gray-600 hover:text-gold">LinkedIn</a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

