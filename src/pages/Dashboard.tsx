import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent, 
  SidebarHeader,
  SidebarFooter,
  SidebarTrigger
} from "@/components/ui/sidebar";
import { 
  Home, Building, FilePlus, Clock, Users, Settings, LogOut, 
  Plus, Search, Bell, Menu, LayoutDashboard, History, 
  ChevronRight, MoreVertical 
} from 'lucide-react';
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
import { useIsMobile } from '@/hooks/use-mobile';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('properties');
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  
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
      icon: Building,
      color: 'text-blue-600 bg-blue-100'
    },
    {
      title: 'Interventions',
      value: '25',
      icon: Clock,
      color: 'text-green-600 bg-green-100'
    },
    {
      title: 'Artisans',
      value: '8',
      icon: Users,
      color: 'text-purple-600 bg-purple-100'
    }
  ];
  
  const SidebarNavItem = ({ icon: Icon, label, active, badge, onClick }: { 
    icon: React.ElementType;
    label: string;
    active?: boolean;
    badge?: number;
    onClick?: () => void;
  }) => (
    <div 
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-md cursor-pointer transition-colors touch-target",
        active 
          ? "bg-sidebar-accent text-sidebar-accent-foreground" 
          : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
      )}
      onClick={onClick}
    >
      <Icon size={20} />
      <span className="flex-1 font-medium">{label}</span>
      {badge && (
        <Badge variant="secondary" className="bg-sidebar-primary text-white text-xs py-0 px-2">
          {badge}
        </Badge>
      )}
    </div>
  );

  // Composant d'onglets mobiles pour basculer entre les sections
  const MobileTabs = () => (
    <Tabs defaultValue="properties" className="w-full mb-6 md:hidden">
      <TabsList className="w-full grid grid-cols-3 bg-izimmo-gray-50 p-1">
        <TabsTrigger value="properties" className="rounded-md data-[state=active]:bg-white">Biens</TabsTrigger>
        <TabsTrigger value="activity" className="rounded-md data-[state=active]:bg-white">Activité</TabsTrigger>
        <TabsTrigger value="stats" className="rounded-md data-[state=active]:bg-white">Stats</TabsTrigger>
      </TabsList>
      
      <TabsContent value="properties" className="mt-4">
        <StatsCards showOnly="biens" />
        <PropertiesSection />
      </TabsContent>
      
      <TabsContent value="activity" className="mt-4">
        <StatsCards showOnly="interventions" />
        <ActivitySection />
      </TabsContent>
      
      <TabsContent value="stats" className="mt-4">
        <StatsCards showOnly="all" />
      </TabsContent>
    </Tabs>
  );
  
  // Cartes de statistiques
  const StatsCards = ({ showOnly = "all" }: { showOnly?: "all" | "biens" | "interventions" | "artisans" }) => {
    const filteredStats = showOnly === "all" 
      ? stats 
      : stats.filter(stat => {
          if (showOnly === "biens" && stat.title === "Biens") return true;
          if (showOnly === "interventions" && stat.title === "Interventions") return true;
          if (showOnly === "artisans" && stat.title === "Artisans") return true;
          return false;
        });
    
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
        {filteredStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="border border-slate-200 hover:border-slate-300 transition-colors">
              <CardContent className="p-5 flex items-center gap-4">
                <div className={`h-12 w-12 rounded-full flex items-center justify-center ${stat.color}`}>
                  <Icon size={22} />
                </div>
                <div>
                  <p className="text-izimmo-gray-600 text-sm font-medium">{stat.title}</p>
                  <p className="text-3xl font-bold text-izimmo-gray-800">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    );
  };
  
  // Section de propriétés
  const PropertiesSection = () => (
    <Card className="h-full border border-slate-200">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Mes biens</CardTitle>
            <CardDescription>
              Gérez vos propriétés et consultez leurs fiches
            </CardDescription>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical size={18} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Ajouter un bien</DropdownMenuItem>
              <DropdownMenuItem>Voir tous les biens</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all" className="mt-2">
          <TabsList className="mb-4 flex overflow-x-auto bg-slate-100 p-1 rounded-md">
            <TabsTrigger value="all" className="flex-1 rounded-md data-[state=active]:bg-white">Tous</TabsTrigger>
            <TabsTrigger value="apartments" className="flex-1 rounded-md data-[state=active]:bg-white">Appartements</TabsTrigger>
            <TabsTrigger value="houses" className="flex-1 rounded-md data-[state=active]:bg-white">Maisons</TabsTrigger>
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
        <Button variant="outline" className="w-full bg-white hover:bg-slate-50">
          <Plus size={16} className="mr-2" />
          Ajouter un bien
        </Button>
      </CardFooter>
    </Card>
  );
  
  // Section d'activité récente
  const ActivitySection = () => (
    <Card className="h-full border border-slate-200">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Activité récente</CardTitle>
            <CardDescription>
              Les dernières mises à jour de vos biens
            </CardDescription>
          </div>
          <Button variant="ghost" size="icon">
            <MoreVertical size={18} />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="flex gap-3 pb-3 border-b border-izimmo-gray-200 last:border-0">
              {activity.type === 'intervention' && (
                <Avatar className="h-10 w-10 shrink-0">
                  <AvatarImage src={activity.artisanAvatar} />
                  <AvatarFallback>{activity.artisan?.substring(0, 2)}</AvatarFallback>
                </Avatar>
              )}
              
              {activity.type === 'share' && (
                <Avatar className="h-10 w-10 shrink-0">
                  <AvatarImage src={activity.userAvatar} />
                  <AvatarFallback>{activity.user?.substring(0, 2)}</AvatarFallback>
                </Avatar>
              )}
              
              {activity.type === 'update' && (
                <div className="h-10 w-10 shrink-0 bg-izimmo-blue-100 rounded-full flex items-center justify-center text-izimmo-blue-600">
                  <FilePlus size={20} />
                </div>
              )}
              
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-izimmo-gray-800 break-words">{activity.description}</p>
                <div className="flex items-center gap-2 mt-1 flex-wrap">
                  <p className="text-xs text-izimmo-gray-600 truncate max-w-full">{activity.property}</p>
                  <span className="text-izimmo-gray-400 hidden xs:inline">•</span>
                  <p className="text-xs text-izimmo-gray-600">{activity.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center border-t pt-4">
        <Button variant="link" className="text-izimmo-blue-600 w-full">
          Voir tout l'historique
          <ChevronRight size={16} className="ml-1" />
        </Button>
      </CardFooter>
    </Card>
  );

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar className="bg-sidebar border-r border-sidebar-border">
          <SidebarHeader className="p-4 flex items-center justify-center border-b border-sidebar-border">
            <Link to="/" className="text-2xl font-bold text-white hover:text-izimmo-blue-200 transition-colors">
              Iz'<span className="text-izimmo-blue-300">Immo</span>
            </Link>
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
              
              <Button className="w-full bg-sidebar-primary hover:bg-sidebar-primary/90 flex items-center gap-2">
                <Plus size={16} />
                <span>Ajouter un bien</span>
              </Button>
            </div>
            
            <div className="space-y-1 px-3 mb-6">
              <h3 className="text-xs uppercase text-izimmo-blue-300 font-semibold mb-2 ml-3">
                Tableau de bord
              </h3>
              <SidebarNavItem 
                icon={Home} 
                label="Accueil" 
                onClick={() => navigate('/')}
              />
              <SidebarNavItem 
                icon={LayoutDashboard} 
                label="Tableau de bord" 
                active
              />
              <SidebarNavItem 
                icon={Building} 
                label="Mes biens" 
                badge={3}
              />
              <SidebarNavItem 
                icon={FilePlus} 
                label="Ajouter une intervention" 
              />
              <SidebarNavItem 
                icon={History} 
                label="Historique" 
              />
              <SidebarNavItem 
                icon={Users} 
                label="Artisans" 
                onClick={() => navigate('/artisans')}
              />
            </div>
            
            <Separator className="my-4 bg-sidebar-border" />
            
            <div className="space-y-1 px-3">
              <SidebarNavItem icon={Settings} label="Paramètres" />
              <SidebarNavItem icon={LogOut} label="Déconnexion" />
            </div>
          </SidebarContent>
          
          <SidebarFooter className="p-4 border-t border-sidebar-border text-izimmo-blue-200 text-xs text-center">
            © 2025 Iz'Immo. Tous droits réservés.
          </SidebarFooter>
        </Sidebar>
        
        <div className="flex-1 bg-white">
          <header className="bg-white border-b border-izimmo-gray-200 sticky top-0 z-10">
            <div className="flex justify-between items-center px-4 md:px-6 py-3">
              <div className="flex items-center gap-2">
                <SidebarTrigger>
                  <Button variant="ghost" size="icon" className="mr-0 md:mr-2">
                    <Menu size={20} />
                  </Button>
                </SidebarTrigger>
                <div className="relative w-40 md:w-64 mr-2 md:mr-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-izimmo-gray-400" size={16} />
                  <Input
                    placeholder="Rechercher..."
                    className="pl-9 bg-izimmo-gray-50 border-izimmo-gray-200"
                  />
                </div>
              </div>
              
              <div className="flex items-center gap-2 md:gap-4">
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
                      <span className="hidden md:inline">Jean Dupont</span>
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
          
          <main className="p-4 md:p-6 bg-izimmo-gray-50 min-h-[calc(100vh-64px)]">
            <h1 className="text-xl md:text-2xl font-bold text-izimmo-gray-800 mb-6">
              Tableau de bord
            </h1>
            
            {/* Navigation mobile par onglets */}
            {isMobile ? (
              <MobileTabs />
            ) : (
              <>
                <StatsCards showOnly="all" />
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <PropertiesSection />
                  </div>
                  
                  <div>
                    <ActivitySection />
                  </div>
                </div>
              </>
            )}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
