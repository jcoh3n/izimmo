
import { TimelineItemType } from '../types/timeline';

export const timelineData: TimelineItemType[] = [
  {
    date: '2025-03-15',
    title: 'Rénovation complète de la salle de bain',
    description: 'Remplacement de la baignoire par une douche à l'italienne, installation d'un meuble vasque, pose de carrelage mural et au sol.',
    category: 'Rénovation',
    documents: 3,
    photos: 8,
    comments: 2,
    price: 6500,
    warranty: 10,
    additionalDetails: 'La rénovation a inclus le remplacement de toute la plomberie existante et l'installation d'un sèche-serviette électrique.',
    materials: [
      'Carrelage imitation marbre 60x60',
      'Paroi de douche en verre 8mm',
      'Robinetterie thermostatique',
      'Meuble vasque en chêne massif'
    ],
    artisan: {
      name: 'Sophie Martin',
      specialty: 'Plombier',
      rating: 4.9,
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    }
  },
  {
    date: '2024-11-20',
    title: 'Mise aux normes du tableau électrique',
    description: 'Remplacement du tableau électrique et mise aux normes de l'installation électrique dans tout l'appartement.',
    category: 'Électricité',
    documents: 5,
    photos: 3,
    comments: 0,
    price: 2800,
    warranty: 5,
    additionalDetails: 'Installation d'un tableau électrique 3 rangées avec protection différentielle pour chaque circuit et parafoudre intégré.',
    materials: [
      'Tableau électrique Legrand',
      'Disjoncteurs différentiels 30mA',
      'Parafoudre type 2'
    ],
    artisan: {
      name: 'Jean Dubois',
      specialty: 'Électricien',
      rating: 4.7,
      avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    }
  },
  {
    date: '2024-07-05',
    title: 'Peinture du salon et de la salle à manger',
    description: 'Réfection complète des peintures du salon et de la salle à manger, incluant les plafonds et les plinthes.',
    category: 'Peinture',
    documents: 1,
    photos: 12,
    comments: 3,
    price: 3200,
    warranty: 2,
    materials: [
      'Peinture écologique mat velours',
      'Sous-couche universelle',
      'Enduit de rebouchage'
    ],
    artisan: {
      name: 'Thomas Bernard',
      specialty: 'Peintre',
      rating: 4.7,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    }
  },
  {
    date: '2024-05-12',
    title: 'Remplacement chaudière',
    description: 'Installation d'une nouvelle chaudière à condensation en remplacement de l'ancienne chaudière défectueuse.',
    category: 'Plomberie',
    documents: 4,
    photos: 5,
    comments: 1,
    price: 4800,
    warranty: 8,
    additionalDetails: 'La nouvelle chaudière est plus économe en énergie avec un rendement de 98%. Un crédit d'impôt de 30% a été appliqué.',
    materials: [
      'Chaudière à condensation Saunier Duval',
      'Thermostat connecté',
      'Vase d'expansion 8L'
    ],
    artisan: {
      name: 'Sophie Martin',
      specialty: 'Plombier',
      rating: 4.9,
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    }
  },
  {
    date: '2023-09-28',
    title: 'Rénovation des parquets',
    description: 'Ponçage et vitrification des parquets du salon, de la salle à manger et des trois chambres.',
    category: 'Rénovation',
    documents: 2,
    photos: 10,
    comments: 4,
    price: 3800,
    warranty: 5,
    materials: [
      'Vitrificateur professionnel mat',
      'Huile pour bois exotiques'
    ],
    artisan: {
      name: 'Philippe Moreau',
      specialty: 'Parqueteur',
      rating: 4.8,
      avatar: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    }
  }
];
