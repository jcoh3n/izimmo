
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ArrowLeft, Home } from 'lucide-react';
import Logo from '@/components/header/Logo';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, la logique de connexion serait implémentée
    console.log('Connexion avec:', { email, password });
  };

  return (
    <div className="min-h-screen bg-izimmo-gray-50 flex flex-col">
      <div className="container pt-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-izimmo-gray-600 hover:text-izimmo-blue-600 transition-colors">
            <ArrowLeft size={16} />
            <span>Retour à l'accueil</span>
          </Link>
          <Logo />
        </div>
      </div>
      
      <div className="flex-1 flex items-center justify-center py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-md p-8">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid grid-cols-2 mb-8">
                <TabsTrigger value="login">Connexion</TabsTrigger>
                <TabsTrigger value="signup">Inscription</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Mot de passe</Label>
                      <Link to="/forgot-password" className="text-sm text-izimmo-blue-600 hover:underline">
                        Mot de passe oublié ?
                      </Link>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-izimmo-blue-500 hover:bg-izimmo-blue-600">
                    Se connecter
                  </Button>
                </form>
                
                <div className="mt-6 text-center text-sm text-izimmo-gray-600">
                  Pas encore de compte ?{' '}
                  <Link to="/signup" className="text-izimmo-blue-600 hover:underline">
                    Créer un compte
                  </Link>
                </div>
              </TabsContent>
              
              <TabsContent value="signup">
                <div className="text-center mb-6">
                  <h2 className="text-xl font-semibold text-izimmo-gray-800">Rejoindre Iz'Immo</h2>
                  <p className="text-izimmo-gray-600 mt-1">Choisissez votre profil</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link to="/signup/proprietaire">
                    <div className="border border-izimmo-gray-200 rounded-lg p-4 text-center hover:border-izimmo-blue-400 hover:bg-izimmo-blue-50 transition-colors">
                      <Home className="mx-auto mb-2 text-izimmo-blue-500" size={32} />
                      <h3 className="font-medium text-izimmo-gray-800">Propriétaire</h3>
                      <p className="text-xs text-izimmo-gray-600 mt-1">Gérez vos biens</p>
                    </div>
                  </Link>
                  
                  <Link to="/signup/artisan">
                    <div className="border border-izimmo-gray-200 rounded-lg p-4 text-center hover:border-izimmo-blue-400 hover:bg-izimmo-blue-50 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-2 text-izimmo-blue-500" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                      </svg>
                      <h3 className="font-medium text-izimmo-gray-800">Artisan</h3>
                      <p className="text-xs text-izimmo-gray-600 mt-1">Enregistrez vos interventions</p>
                    </div>
                  </Link>
                  
                  <Link to="/signup/agence">
                    <div className="border border-izimmo-gray-200 rounded-lg p-4 text-center hover:border-izimmo-blue-400 hover:bg-izimmo-blue-50 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-2 text-izimmo-blue-500" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      <h3 className="font-medium text-izimmo-gray-800">Agence</h3>
                      <p className="text-xs text-izimmo-gray-600 mt-1">Consultez les historiques</p>
                    </div>
                  </Link>
                </div>
                
                <div className="mt-6 text-center text-sm text-izimmo-gray-600">
                  Déjà inscrit ?{' '}
                  <Link to="/login" className="text-izimmo-blue-600 hover:underline">
                    Se connecter
                  </Link>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
