
import React from 'react';
import Navbar from '@/components/header/Navbar';
import { Button } from '@/components/ui/button';
import { ChevronRight, Shield, Clipboard, FileText, Clock, Search, Home, Tool, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import ArtisanCard from '@/components/artisans/ArtisanCard';
import StepCard from '@/components/home/StepCard';
import Footer from '@/components/footer/Footer';
import FeatureCard from '@/components/home/FeatureCard';

const Index = () => {
  const stepCards = [
    {
      id: 1,
      title: "Enregistrez votre bien",
      description: "Créez une fiche détaillée pour chacun de vos biens immobiliers en quelques clics.",
      icon: Home,
      color: "bg-izimmo-blue-500",
    },
    {
      id: 2,
      title: "Suivez les interventions",
      description: "Visualisez l'historique complet des travaux et interventions sur une timeline interactive.",
      icon: Clock,
      color: "bg-izimmo-blue-600",
    },
    {
      id: 3,
      title: "Partagez en toute sécurité",
      description: "Partagez l'historique avec des acheteurs potentiels ou des agences en toute transparence.",
      icon: Shield,
      color: "bg-izimmo-blue-700",
    },
  ];

  const features = [
    {
      title: "Transparence totale",
      description: "Suivez l'historique complet de chaque bien immobilier, de sa construction aux dernières rénovations.",
      icon: FileText,
    },
    {
      title: "Artisans certifiés",
      description: "Trouvez des professionnels qualifiés et vérifiés pour vos projets de rénovation et d'entretien.",
      icon: Tool,
    },
    {
      title: "Recherche simplifiée",
      description: "Filtrez facilement les interventions par date, type ou artisan pour trouver rapidement l'information.",
      icon: Search,
    },
    {
      title: "Collaboration fluide",
      description: "Partagez facilement les informations entre propriétaires, agences et artisans.",
      icon: Users,
    },
  ];

  const featuredArtisans = [
    {
      id: 1,
      name: "Martin Dupont",
      speciality: "Électricien",
      rating: 4.8,
      completedJobs: 127,
      imgSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
    {
      id: 2,
      name: "Sophie Martin",
      speciality: "Plombier",
      rating: 4.9,
      completedJobs: 89,
      imgSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
    {
      id: 3,
      name: "Thomas Bernard",
      speciality: "Peintre",
      rating: 4.7,
      completedJobs: 112,
      imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
    {
      id: 4,
      name: "Emma Legrand",
      speciality: "Architecte d'intérieur",
      rating: 4.9,
      completedJobs: 78,
      imgSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 md:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                L'historique transparent de votre bien immobilier
              </h1>
              <p className="text-lg md:text-xl text-izimmo-gray-100 leading-relaxed">
                Iz'Immo centralise l'historique des interventions sur vos biens immobiliers. 
                Suivez, partagez et valorisez votre patrimoine en toute transparence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link to="/signup">
                  <Button size="lg" className="bg-white text-izimmo-blue-700 hover:bg-izimmo-gray-100">
                    Créer un compte
                  </Button>
                </Link>
                <Link to="/fonctionnement">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                    Découvrir la plateforme
                    <ChevronRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="relative z-10 glass-card rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80" 
                  alt="Iz'Immo platform"
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-izimmo-gray-800 mb-4">
              Comment ça fonctionne
            </h2>
            <p className="text-izimmo-gray-600 text-lg">
              Iz'Immo simplifie le suivi de vos biens immobiliers en trois étapes simples
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stepCards.map((step) => (
              <StepCard key={step.id} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-izimmo-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-izimmo-gray-800 mb-4">
              Pourquoi choisir Iz'Immo
            </h2>
            <p className="text-izimmo-gray-600 text-lg">
              Découvrez les avantages qui font d'Iz'Immo la référence pour la transparence immobilière
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artisans Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-izimmo-gray-800 mb-2">
                Artisans certifiés
              </h2>
              <p className="text-izimmo-gray-600 text-lg">
                Collaborez avec des professionnels qualifiés et reconnus
              </p>
            </div>
            <Link to="/artisans">
              <Button variant="outline" className="mt-4 md:mt-0">
                Voir tous les artisans
                <ChevronRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredArtisans.map((artisan) => (
              <ArtisanCard key={artisan.id} {...artisan} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-izimmo-blue-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à valoriser votre patrimoine immobilier ?
            </h2>
            <p className="text-xl mb-8 text-izimmo-gray-100">
              Rejoignez Iz'Immo dès aujourd'hui et accédez à un historique complet et transparent de vos biens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="bg-white text-izimmo-blue-700 hover:bg-izimmo-gray-100">
                  Créer un compte gratuit
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
