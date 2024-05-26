import { City, HousingType, Location, User } from '../../../types/index.js';

export class CreateOfferDto {
  title: string;
  description: string;
  publishedAt: Date;
  city: City;
  previewImage: string;
  images: string[];
  isPremium: boolean;
  rating: number;
  housingType: HousingType;
  roomCount: number;
  guestCount: number;
  price: number;
  facilities: string[];
  userId: User;
  location: Location;
}
