
import React, { useState } from 'react';
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent, 
  SidebarHeader,
  SidebarFooter,
  SidebarTrigger
} from "@/components/ui/sidebar";
import { Home, Building, FilePlus, Clock, Users, Settings, LogOut, Plus, Search, Bell, Menu } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import PropertyCard from '@/components/dashboard/PropertyCard';
import { cn } from '@/lib/utils';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('properties');
  
  const propertyData = [
    {
      id: 1,
      title: 'Appartement Haussmannien',
      address: '123 Avenue de la République, 75011 Paris',
      type: 'Appartement',
      size: '75 m²',
      lastUpdate: '15/03/2025',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80',
      interventions: 12,
      sharedWith: 3
    },
    {
      id: 2,
      title: 'Maison de Ville',
      address: '45 Rue des Lilas, 69003 Lyon',
      type: 'Maison',
      size: '120 m²',
      lastUpdate: '02/02/2025',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      interventions: 8,
      sharedWith: 2
    },
    {
      id: 3,
      title: 'Loft Contemporain',
      address: '17 Quai de la Tournelle, 75005 Paris',
      type: 'Loft',
      size: '95 m²',
      lastUpdate: '20/01/2025',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80',
      interventions: 5,
      sharedWith: 1
    }
  ];
  
  const recentActivity = [
    {
      id: 1,
      property: 'Appartement Haussmannien',
      description: 'Rénovation complète de la salle de bain',
      date: '15/03/2025',
      artisan: 'Sophie Martin',
      artisanAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      type: 'intervention'
    },
    {
      id: 2,
      property: 'Maison de Ville',
      description: 'Partage d\'accès avec l\'agence Immo Plus',
      date: '05/03/2025',
      user: 'Agence Immo Plus',
      userAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      type: 'share'
    },
    {
      id: 3,
      property: 'Loft Contemporain',
      description: 'Nouvelle photo ajoutée',
      date: '28/02/2025',
      user: 'Vous',
      type: 'update'
    },
    {
      id: 4,
      property: 'Appartement Haussmannien',
      description: 'Mise aux normes du tableau électrique',
      date: '20/02/2025',
      artisan: 'Jean Dubois',
      artisanAvatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      type: 'intervention'
    }
  ];
  
  const stats = [
    {
      title: 'Biens',
      value: '3',
      icon: Home,
      color: 'text-blue-500 bg-blue-100'
    },
    {
      title: 'Interventions',
      value: '25',
      icon: Clock,
      color: 'text-green-500 bg-green-100'
    },
    {
      title: 'Artisans',
      value: '8',
      icon: Users,
      color: 'text-purple-500 bg-purple-100'
    }
  ];
  
  const SidebarNavItem = ({ icon: Icon, label, active, badge }: { icon: any, label: string, active?: boolean, badge?: number }) => (
    <div className={cn(
      "flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition-colors",
      active 
        ? "bg-sidebar-accent text-sidebar-accent-foreground" 
        : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
    )}>
      <Icon size={20} />
      <span className="flex-1">{label}</span>
      {badge && (
        <Badge variant="secondary" className="bg-izimmo-blue-700 text-white text-xs py-0 px-2">
          {badge}
        </Badge>
      )}
    </div>
  );

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar className="bg-sidebar border-r border-izimmo-gray-200">
          <SidebarHeader className="p-4 flex items-center justify-center border-b border-izimmo-gray-200">
            <div className="text-2xl font-bold text-white">
              Iz'<span className="text-izimmo-blue-300">Immo</span>
            </div>
          </SidebarHeader>
          
          <SidebarContent className="py-4">
            <div className="px-3 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Avatar>
                  <AvatarImage src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-white">Jean Dupont</p>
                  <p className="text-sm text-izimmo-blue-200">Propriétaire</p>
                </div>
              </div>
              
              <Button className="w-full bg-izimmo-blue-500 hover:bg-izimmo-blue-600 flex items-center gap-2">
                <Plus size={16} />
                <span>Ajouter un bien</span>
              </Button>
            </div>
            
            <div className="space-y-1 px-3 mb-6">
              <h3 className="text-xs uppercase text-izimmo-blue-300 font-semibold mb-2 ml-3">
                Tableau de bord
              </h3>
              <SidebarNavItem icon={Home} label="Accueil" active />
              <SidebarNavItem icon={Building} label="Mes biens" badge={3} />
              <SidebarNavItem icon={FilePlus} label="Ajouter une intervention" />
              <SidebarNavItem icon={Clock} label="Historique" />
              <SidebarNavItem icon={Users} label="Artisans" />
            </div>
            
            <Separator className="my-4 bg-izimmo-gray-700" />
            
            <div className="space-y-1 px-3">
              <SidebarNavItem icon={Settings} label="Paramètres" />
              <SidebarNavItem icon={LogOut} label="Déconnexion" />
            </div>
          </SidebarContent>
          
          <SidebarFooter className="p-4 border-t border-izimmo-gray-700 text-izimmo-blue-200 text-xs text-center">
            © 2025 Iz'Immo. Tous droits réservés.
          </SidebarFooter>
        </Sidebar>
        
        <div className="flex-1">
          <header className="bg-white border-b border-izimmo-gray-200 sticky top-0 z-10">
            <div className="flex justify-between items-center px-6 py-3">
              <div className="flex items-center">
                <SidebarTrigger>
                  <Button variant="ghost" size="icon" className="mr-2">
                    <Menu size={20} />
                  </Button>
                </SidebarTrigger>
                <div className="relative w-64">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-izimmo-gray-400" size={16} />
                  <Input
                    placeholder="Rechercher..."
                    className="pl-9 bg-izimmo-gray-50 border-izimmo-gray-200"
                  />
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="relative">
                  <Bell size={20} />
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" />
                </Button>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <span>Jean Dupont</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Mon profil</DropdownMenuItem>
                    <DropdownMenuItem>Paramètres</DropdownMenuItem>
                    <DropdownMenuItem>Déconnexion</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </header>
          
          <main className="p-6 bg-izimmo-gray-50 min-h-[calc(100vh-64px)]">
            <h1 className="text-2xl font-bold text-izimmo-gray-800 mb-6">
              Tableau de bord
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index}>
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className={`h-12 w-12 rounded-full flex items-center justify-center ${stat.color}`}>
                        <Icon size={24} />
                      </div>
                      <div>
                        <p className="text-izimmo-gray-600 text-sm">{stat.title}</p>
                        <p className="text-3xl font-bold text-izimmo-gray-800">{stat.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <Card className="h-full">
                  <CardHeader className="pb-2">
                    <CardTitle>Mes biens</CardTitle>
                    <CardDescription>
                      Gérez vos propriétés et consultez leurs fiches détaillées
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="all" className="mt-2">
                      <TabsList className="mb-4">
                        <TabsTrigger value="all">Tous</TabsTrigger>
                        <TabsTrigger value="apartments">Appartements</TabsTrigger>
                        <TabsTrigger value="houses">Maisons</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="all" className="space-y-4">
                        {propertyData.map((property) => (
                          <PropertyCard key={property.id} property={property} />
                        ))}
                      </TabsContent>
                      
                      <TabsContent value="apartments" className="space-y-4">
                        {propertyData
                          .filter(p => p.type === 'Appartement' || p.type === 'Loft')
                          .map((property) => (
                            <PropertyCard key={property.id} property={property} />
                          ))}
                      </TabsContent>
                      
                      <TabsContent value="houses" className="space-y-4">
                        {propertyData
                          .filter(p => p.type === 'Maison')
                          .map((property) => (
                            <PropertyCard key={property.id} property={property} />
                          ))}
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                  <CardFooter className="flex justify-center border-t pt-4">
                    <Button variant="outline" className="w-full">
                      <Plus size={16} className="mr-2" />
                      Ajouter un bien
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              
              <div>
                <Card className="h-full">
                  <CardHeader className="pb-2">
                    <CardTitle>Activité récente</CardTitle>
                    <CardDescription>
                      Les dernières mises à jour de vos biens
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity) => (
                        <div key={activity.id} className="flex gap-3 pb-3 border-b border-izimmo-gray-200 last:border-0">
                          {activity.type === 'intervention' && (
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={activity.artisanAvatar} />
                              <AvatarFallback>{activity.artisan?.substring(0, 2)}</AvatarFallback>
                            </Avatar>
                          )}
                          
                          {activity.type === 'share' && (
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={activity.userAvatar} />
                              <AvatarFallback>{activity.user?.substring(0, 2)}</AvatarFallback>
                            </Avatar>
                          )}
                          
                          {activity.type === 'update' && (
                            <div className="h-10 w-10 bg-izimmo-blue-100 rounded-full flex items-center justify-center text-izimmo-blue-600">
                              <FilePlus size={20} />
                            </div>
                          )}
                          
                          <div className="flex-1">
                            <p className="text-sm font-medium text-izimmo-gray-800">{activity.description}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <p className="text-xs text-izimmo-gray-600">{activity.property}</p>
                              <span className="text-izimmo-gray-400">•</span>
                              <p className="text-xs text-izimmo-gray-600">{activity.date}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center border-t pt-4">
                    <Button variant="link" className="text-izimmo-blue-600">
                      Voir tout l'historique
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
