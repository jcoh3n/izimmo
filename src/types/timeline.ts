
export interface ArtisanType {
  name: string;
  specialty: string;
  rating: number;
  avatar: string;
}

export interface TimelineItemType {
  date: string;
  title: string;
  description: string;
  category: string;
  documents: number;
  photos: number;
  comments: number;
  price?: number;
  warranty?: number;
  additionalDetails?: string;
  materials?: string[];
  artisan: ArtisanType;
}
