
import React, { useState } from 'react';
import Navbar from '@/components/header/Navbar';
import Footer from '@/components/footer/Footer';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  Share2, 
  Download, 
  Star, 
  Home, 
  MapPin, 
  Square, 
  Bed, 
  Bath, 
  Clock, 
  ChevronRight 
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import TimelineItem from '@/components/timeline/TimelineItem';
import { timelineData } from '@/data/timeline-data';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const PropertyDetail = () => {
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  // Filtrer les données de la timeline en fonction des sélections
  const filteredTimelineData = timelineData.filter(item => {
    const yearMatch = selectedYear === "all" || new Date(item.date).getFullYear().toString() === selectedYear;
    const categoryMatch = selectedCategory === "all" || item.category === selectedCategory;
    return yearMatch && categoryMatch;
  });

  // Extraire les années uniques pour le filtre
  const years = [...new Set(timelineData.map(item => new Date(item.date).getFullYear().toString()))];
  
  // Extraire les catégories uniques pour le filtre
  const categories = [...new Set(timelineData.map(item => item.category))];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-izimmo-gray-50">
        {/* Property Header */}
        <div className="bg-white border-b border-izimmo-gray-200">
          <div className="container py-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div className="flex items-center gap-2 text-izimmo-gray-600 text-sm mb-2">
                  <Home size={14} />
                  <span>Appartement</span>
                  <span>•</span>
                  <span>Ajouté le 12/04/2025</span>
                </div>
                <h1 className="text-2xl md:text-3xl font-semibold text-izimmo-gray-800">
                  Appartement Haussmannien - 75 m²
                </h1>
                <div className="flex items-center gap-2 mt-1">
                  <MapPin size={18} className="text-izimmo-gray-500" />
                  <span className="text-izimmo-gray-700">123 Avenue de la République, 75011 Paris</span>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Share2 size={16} />
                  <span>Partager</span>
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Download size={16} />
                  <span>Exporter PDF</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Property Content */}
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="md:col-span-1 space-y-6">
              <div className="bg-white rounded-lg border border-izimmo-gray-200 overflow-hidden">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80" 
                    alt="Appartement Haussmannien" 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4 border-b border-izimmo-gray-200">
                  <h3 className="font-semibold text-izimmo-gray-800 mb-4">Caractéristiques</h3>
                  <div className="grid grid-cols-2 gap-y-3">
                    <div className="flex items-center gap-2 text-izimmo-gray-700">
                      <Square size={16} />
                      <span>75 m²</span>
                    </div>
                    <div className="flex items-center gap-2 text-izimmo-gray-700">
                      <Bed size={16} />
                      <span>3 chambres</span>
                    </div>
                    <div className="flex items-center gap-2 text-izimmo-gray-700">
                      <Bath size={16} />
                      <span>1 salle de bain</span>
                    </div>
                    <div className="flex items-center gap-2 text-izimmo-gray-700">
                      <Clock size={16} />
                      <span>Construit en 1904</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-izimmo-gray-800 mb-4">Propriétaire</h3>
                  <div className="flex items-center gap-3">
                    <img 
                      src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                      alt="Jean Dupont" 
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-izimmo-gray-800">Jean Dupont</p>
                      <p className="text-izimmo-gray-600 text-sm">Propriétaire depuis 2015</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border border-izimmo-gray-200 p-4">
                <h3 className="font-semibold text-izimmo-gray-800 mb-4">Artisans récents</h3>
                <div className="space-y-4">
                  {timelineData.slice(0, 3).map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <img 
                        src={item.artisan.avatar} 
                        alt={item.artisan.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium text-izimmo-gray-800">{item.artisan.name}</p>
                        <p className="text-izimmo-gray-600 text-sm">{item.artisan.specialty}</p>
                      </div>
                      <div className="ml-auto flex items-center gap-1">
                        <Star className="fill-yellow-400 stroke-yellow-400" size={14} />
                        <span className="text-sm font-medium">{item.artisan.rating}</span>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" size="sm" className="w-full mt-2 flex items-center justify-center gap-1">
                    <span>Voir tous les artisans</span>
                    <ChevronRight size={14} />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="md:col-span-2">
              <Tabs defaultValue="timeline" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="timeline">Timeline</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                  <TabsTrigger value="photos">Photos</TabsTrigger>
                </TabsList>
                
                <TabsContent value="timeline">
                  <div className="bg-white rounded-lg border border-izimmo-gray-200 p-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                      <h2 className="text-xl font-semibold text-izimmo-gray-800">
                        Historique des interventions
                      </h2>
                      
                      <div className="flex gap-3 w-full md:w-auto">
                        <div className="w-full md:w-40">
                          <Select value={selectedYear} onValueChange={setSelectedYear}>
                            <SelectTrigger>
                              <SelectValue placeholder="Année" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">Toutes les années</SelectItem>
                              {years.map(year => (
                                <SelectItem key={year} value={year}>{year}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="w-full md:w-40">
                          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                            <SelectTrigger>
                              <SelectValue placeholder="Catégorie" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">Toutes les catégories</SelectItem>
                              {categories.map(category => (
                                <SelectItem key={category} value={category}>
                                  {category}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                    
                    <div className="timeline">
                      {filteredTimelineData.length > 0 ? (
                        filteredTimelineData.map((item, index) => (
                          <TimelineItem key={index} item={item} isLast={index === filteredTimelineData.length - 1} />
                        ))
                      ) : (
                        <div className="py-10 text-center">
                          <p className="text-izimmo-gray-600">
                            Aucune intervention ne correspond à vos critères de recherche.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="documents">
                  <div className="bg-white rounded-lg border border-izimmo-gray-200 p-6">
                    <h2 className="text-xl font-semibold text-izimmo-gray-800 mb-6">
                      Documents
                    </h2>
                    <p className="text-izimmo-gray-600">
                      Liste des documents associés au bien (factures, certificats, etc.)
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="photos">
                  <div className="bg-white rounded-lg border border-izimmo-gray-200 p-6">
                    <h2 className="text-xl font-semibold text-izimmo-gray-800 mb-6">
                      Photos du bien
                    </h2>
                    <p className="text-izimmo-gray-600">
                      Galerie photos du bien immobilier avant/après travaux
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyDetail;
