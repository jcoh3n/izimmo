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
        <section className="bg-gradient-to-b from-izimmo-blue-500 to-izimmo-blue-700 text-white py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Comment ça marche ?</h1>
              <p className="text-base md:text-xl text-izimmo-gray-100 mb-6 md:mb-8">
                Découvrez comment Iz'Immo simplifie la gestion de votre patrimoine immobilier
              </p>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {steps.map((step, index) => (
                <div key={index} className="bg-white rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-izimmo-blue-100 flex items-center justify-center mb-4 md:mb-6">
                    <step.icon className="h-5 w-5 md:h-6 md:w-6 text-izimmo-blue-600" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">{step.title}</h3>
                  <p className="text-sm md:text-base text-izimmo-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-izimmo-gray-50 py-10 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-6">Prêt à commencer ?</h2>
              <p className="text-base md:text-lg text-izimmo-gray-600 mb-6 md:mb-8">
                Rejoignez des milliers de propriétaires qui font confiance à Iz'Immo
              </p>
              <Link to="/signup" className="w-full sm:w-auto inline-block">
                <Button size="lg" className="w-full sm:w-auto bg-izimmo-blue-600 hover:bg-izimmo-blue-700 touch-target h-12">
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
