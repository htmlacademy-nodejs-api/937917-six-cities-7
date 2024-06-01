import { HousingType, Location } from '../../../types/index.js';

export class CreateOfferDto {
  title: string;
  description: string;
  publishedAt: Date;
  cityId: string | null;
  previewImage: string;
  images: string[];
  isPremium: boolean;
  rating: number;
  housingType: HousingType;
  roomCount: number;
  guestCount: number;
  price: number;
  facilities: string[];
  userId: string;
  location: Location;
}
