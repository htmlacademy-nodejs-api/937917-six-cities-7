import { Container } from 'inversify';
import { types } from '@typegoose/typegoose';

import { FavoriteOfferService } from './favorite-offer-service.interface.js';
import { Component } from '../../types/index.js';
import { DefaultFavoriteOfferService } from './default-favorite-offer.service.js';
import { FavoriteOfferEntity, FavoriteOfferModel } from './favorite-offer.entity.js';

export function createFavoriteOfferContainer() {
  const favoriteOfferContainer = new Container();

  favoriteOfferContainer
    .bind<FavoriteOfferService>(Component.FavoriteOfferService)
    .to(DefaultFavoriteOfferService)
    .inSingletonScope();
  favoriteOfferContainer
    .bind<types.ModelType<FavoriteOfferEntity>>(Component.FavoriteOfferModel)
    .toConstantValue(FavoriteOfferModel);

  return favoriteOfferContainer;
}
