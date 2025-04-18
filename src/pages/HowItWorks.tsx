
import React from 'react';
import Navbar from '@/components/header/Navbar';
import Footer from '@/components/footer/Footer';
import { ArrowRight, CheckCircle2, FileCheck, Shield, Users2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      icon: FileCheck,
      title: "Créez votre compte",
      description: "Inscrivez-vous gratuitement en quelques clics et commencez à gérer vos biens immobiliers."
    },
    {
      icon: Shield,
      title: "Ajoutez vos biens",
      description: "Enregistrez les informations de vos biens immobiliers en toute sécurité."
    },
    {
      icon: Users2,
      title: "Gérez vos interventions",
      description: "Suivez toutes les interventions et gardez un historique complet de vos travaux."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="bg-gradient-to-b from-izimmo-blue-500 to-izimmo-blue-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Comment ça marche ?</h1>
              <p className="text-xl text-izimmo-gray-100 mb-8">
                Découvrez comment Iz'Immo simplifie la gestion de votre patrimoine immobilier
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="h-12 w-12 rounded-full bg-izimmo-blue-100 flex items-center justify-center mb-6">
                    <step.icon className="h-6 w-6 text-izimmo-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-izimmo-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-izimmo-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Prêt à commencer ?</h2>
              <p className="text-lg text-izimmo-gray-600 mb-8">
                Rejoignez des milliers de propriétaires qui font confiance à Iz'Immo
              </p>
              <Link to="/signup">
                <Button size="lg" className="bg-izimmo-blue-600 hover:bg-izimmo-blue-700">
                  Créer un compte gratuit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;
