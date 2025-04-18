
import React from 'react';
import Navbar from '@/components/header/Navbar';
import Footer from '@/components/footer/Footer';
import { Building2, Mail, MessageSquare, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      info: "+33 1 23 45 67 89",
      description: "Du lundi au vendredi, 9h-18h"
    },
    {
      icon: Mail,
      title: "Email",
      info: "contact@izimmo.fr",
      description: "Réponse sous 24h ouvrées"
    },
    {
      icon: Building2,
      title: "Adresse",
      info: "123 Avenue de la République",
      description: "75011 Paris, France"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="bg-gradient-to-b from-izimmo-blue-500 to-izimmo-blue-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-nous</h1>
              <p className="text-xl text-izimmo-gray-100">
                Notre équipe est à votre écoute pour répondre à toutes vos questions
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {contactInfo.map((item, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mx-auto h-12 w-12 rounded-full bg-izimmo-blue-100 flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-izimmo-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-izimmo-blue-600 font-medium mb-1">{item.info}</p>
                    <p className="text-izimmo-gray-500 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="max-w-2xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-6 text-center">Envoyez-nous un message</h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Nom</label>
                        <Input placeholder="Votre nom" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <Input type="email" placeholder="votre@email.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Sujet</label>
                      <Input placeholder="Sujet de votre message" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Message</label>
                      <Textarea placeholder="Votre message" rows={5} />
                    </div>
                    <Button className="w-full bg-izimmo-blue-600 hover:bg-izimmo-blue-700">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Envoyer le message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
