import React, { useState } from 'react';
import Navbar from '@/components/header/Navbar';
import Footer from '@/components/footer/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, MapPin, ArrowUpDown, Star, SlidersHorizontal } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from '@/components/ui/sheet';
import ArtisanDetailCard from '@/components/artisans/ArtisanDetailCard';

const Artisans = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [specialty, setSpecialty] = useState('all');
  const [location, setLocation] = useState('all');
  const [sortBy, setSortBy] = useState('rating');
  const [filterOpen, setFilterOpen] = useState(false);
  
  const artisans = [
    {
      id: 1,
      name: "Martin Dupont",
      specialty: "Électricien",
      location: "Paris",
      rating: 4.8,
      completedJobs: 127,
      description: "Électricien certifié avec plus de 15 ans d'expérience dans les installations électriques résidentielles et commerciales. Spécialiste en mise aux normes et domotique.",
      certifications: ["Qualifélec", "Handibat"],
      imgSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
    {
      id: 2,
      name: "Sophie Martin",
      specialty: "Plombier",
      location: "Lyon",
      rating: 4.9,
      completedJobs: 89,
      description: "Plombière qualifiée spécialisée dans les installations sanitaires et le chauffage. Experte en rénovation de salles de bains et installation de systèmes écologiques.",
      certifications: ["RGE", "Qualibat"],
      imgSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
    {
      id: 3,
      name: "Thomas Bernard",
      specialty: "Peintre",
      location: "Bordeaux",
      rating: 4.7,
      completedJobs: 112,
      description: "Artisan peintre spécialisé dans les finitions haut de gamme et les techniques décoratives. Utilise des peintures écologiques pour un habitat sain.",
      certifications: ["Artisan d'Art"],
      imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
    {
      id: 4,
      name: "Emma Legrand",
      specialty: "Architecte d'intérieur",
      location: "Paris",
      rating: 4.9,
      completedJobs: 78,
      description: "Architecte d'intérieur diplômée avec une approche contemporaine et écologique. Spécialiste de l'optimisation des petits espaces et de la rénovation d'appartements haussmanniens.",
      certifications: ["CFAI", "Éco-rénovation"],
      imgSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
    {
      id: 5,
      name: "Philippe Moreau",
      specialty: "Parqueteur",
      location: "Nantes",
      rating: 4.8,
      completedJobs: 94,
      description: "Artisan parqueteur spécialiste des parquets anciens et contemporains. Expert en restauration de parquets historiques et en pose de parquets techniques.",
      certifications: ["Compagnon du Devoir", "Artisan d'Art"],
      imgSrc: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
    {
      id: 6,
      name: "Jean Dubois",
      specialty: "Électricien",
      location: "Marseille",
      rating: 4.7,
      completedJobs: 104,
      description: "Électricien spécialisé dans les installations domotiques et les systèmes d'économie d'énergie. Expert en diagnostic électrique des bâtiments anciens.",
      certifications: ["Qualifélec", "RGE"],
      imgSrc: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
  ];
  
  // Récupérer les spécialités uniques
  const specialties = [...new Set(artisans.map(a => a.specialty))];
  
  // Récupérer les villes uniques
  const locations = [...new Set(artisans.map(a => a.location))];
  
  // Filtrer les artisans
  const filteredArtisans = artisans.filter(artisan => {
    const matchesSearch = artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         artisan.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = specialty === 'all' || artisan.specialty === specialty;
    const matchesLocation = location === 'all' || artisan.location === location;
    
    return matchesSearch && matchesSpecialty && matchesLocation;
  });
  
  // Trier les artisans
  const sortedArtisans = [...filteredArtisans].sort((a, b) => {
    if (sortBy === 'rating') {
      return b.rating - a.rating;
    } else if (sortBy === 'experience') {
      return b.completedJobs - a.completedJobs;
    } else {
      return a.name.localeCompare(b.name);
    }
  });

  // Réinitialiser les filtres
  const resetFilters = () => {
    setSearchTerm('');
    setSpecialty('all');
    setLocation('all');
    setFilterOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-izimmo-blue-700 text-white py-10 md:py-16">
        <div className="container">
          <h1 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
            Artisans certifiés
          </h1>
          <p className="text-base md:text-xl text-izimmo-gray-100 mb-6 md:mb-8 max-w-2xl">
            Trouvez des professionnels qualifiés pour l'entretien et la rénovation de votre bien immobilier.
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-izimmo-gray-400" size={18} />
              <Input
                placeholder="Rechercher un artisan..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Filtres sur écran large */}
            <div className="hidden md:grid md:grid-cols-3 gap-4">
              <Select value={specialty} onValueChange={setSpecialty}>
                <SelectTrigger className="flex items-center gap-2">
                  <Filter size={16} className="text-izimmo-gray-500" />
                  <SelectValue placeholder="Spécialité" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les spécialités</SelectItem>
                  {specialties.map((s, index) => (
                    <SelectItem key={index} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger className="flex items-center gap-2">
                  <MapPin size={16} className="text-izimmo-gray-500" />
                  <SelectValue placeholder="Localisation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les villes</SelectItem>
                  {locations.map((l, index) => (
                    <SelectItem key={index} value={l}>{l}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="flex items-center gap-2">
                  <ArrowUpDown size={16} className="text-izimmo-gray-500" />
                  <SelectValue placeholder="Trier par" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Avis clients</SelectItem>
                  <SelectItem value="experience">Expérience</SelectItem>
                  <SelectItem value="name">Ordre alphabétique</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Bouton de filtre sur mobile */}
            <div className="md:hidden">
              <Sheet open={filterOpen} onOpenChange={setFilterOpen}>
                <SheetTrigger asChild>
                  <Button className="w-full flex items-center justify-center gap-2 bg-izimmo-blue-500 hover:bg-izimmo-blue-600 text-white">
                    <SlidersHorizontal size={16} />
                    Filtres et tri
                  </Button>
                </SheetTrigger>
                <SheetContent side="bottom" className="h-[70vh] p-0">
                  <SheetHeader className="p-4 border-b">
                    <SheetTitle>Filtrer et trier</SheetTitle>
                  </SheetHeader>
                  <div className="p-4 space-y-4 overflow-y-auto">
                    <div>
                      <p className="text-sm font-medium mb-2">Spécialité</p>
                      <Select value={specialty} onValueChange={setSpecialty}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Toutes les spécialités" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Toutes les spécialités</SelectItem>
                          {specialties.map((s, index) => (
                            <SelectItem key={index} value={s}>{s}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium mb-2">Localisation</p>
                      <Select value={location} onValueChange={setLocation}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Toutes les villes" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Toutes les villes</SelectItem>
                          {locations.map((l, index) => (
                            <SelectItem key={index} value={l}>{l}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium mb-2">Trier par</p>
                      <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Avis clients" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="rating">Avis clients</SelectItem>
                          <SelectItem value="experience">Expérience</SelectItem>
                          <SelectItem value="name">Ordre alphabétique</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <SheetFooter className="flex flex-row justify-between p-4 border-t">
                    <Button variant="outline" className="w-1/2" onClick={resetFilters}>
                      Réinitialiser
                    </Button>
                    <Button className="w-1/2 bg-izimmo-blue-500" onClick={() => setFilterOpen(false)}>
                      Appliquer
                    </Button>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
      
      <main className="flex-1 bg-izimmo-gray-50 py-8 md:py-12">
        <div className="container">
          {filteredArtisans.length > 0 ? (
            <>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 md:mb-8">
                <div>
                  <p className="text-izimmo-gray-600 mb-2 sm:mb-0">
                    {filteredArtisans.length} artisans trouvés
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-izimmo-gray-600 text-sm">Filtres actifs :</span>
                  {specialty !== 'all' && (
                    <Badge className="bg-izimmo-blue-100 text-izimmo-blue-800 hover:bg-izimmo-blue-200">
                      {specialty}
                    </Badge>
                  )}
                  {location !== 'all' && (
                    <Badge className="bg-izimmo-blue-100 text-izimmo-blue-800 hover:bg-izimmo-blue-200">
                      {location}
                    </Badge>
                  )}
                  
                  {(specialty !== 'all' || location !== 'all') && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-izimmo-gray-500 h-8 px-2"
                      onClick={resetFilters}
                    >
                      Réinitialiser
                    </Button>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4 md:gap-6">
                {sortedArtisans.map((artisan) => (
                  <ArtisanDetailCard key={artisan.id} artisan={artisan} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-10 md:py-16">
              <p className="text-izimmo-gray-600 text-lg mb-4">
                Aucun artisan ne correspond à vos critères de recherche.
              </p>
              <Button 
                variant="outline" 
                onClick={resetFilters}
                className="touch-target h-10"
              >
                Réinitialiser les filtres
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Artisans;
