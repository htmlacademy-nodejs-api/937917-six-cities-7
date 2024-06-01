import { DocumentType } from '@typegoose/typegoose';

import { FavoriteOfferEntity } from './favorite-offer.entity.js';
import { CreateFavoriteOfferDto } from './dto/create-favorite-offer.dto.js';

export interface FavoriteOfferService {
  create(dto: CreateFavoriteOfferDto): Promise<DocumentType<FavoriteOfferEntity>>;
  findByUserId(userId: string): Promise<DocumentType<FavoriteOfferEntity> | null>;
  findOrCreate(dto: CreateFavoriteOfferDto): Promise<DocumentType<FavoriteOfferEntity>>;
  deleteByUserId(userId: string): Promise<DocumentType<FavoriteOfferEntity> | null>;
  addItem(userId: string, offerId: string): Promise<DocumentType<FavoriteOfferEntity> | null>;
}
