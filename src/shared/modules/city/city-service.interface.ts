import { DocumentType } from '@typegoose/typegoose';

import { CityEntity } from './city.entity.js';
import { CreateCityDto } from './dto/create-city.dto.js';

export interface CityService {
  create(dto: CreateCityDto): Promise<DocumentType<CityEntity>>;
  findById(cityId: string): Promise<DocumentType<CityEntity> | null>;
}
