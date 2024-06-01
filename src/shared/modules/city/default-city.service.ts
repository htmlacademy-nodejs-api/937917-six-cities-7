import { DocumentType, types } from '@typegoose/typegoose';
import { inject, injectable } from 'inversify';

import { CityService } from './city-service.interface.js';
import { CityEntity } from './city.entity.js';
import { CreateCityDto } from './dto/create-city.dto.js';
import { Component } from '../../types/index.js';
import { Logger } from '../../libs/logger/index.js';

@injectable()
export class DefaultCityService implements CityService {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.CityModel) private readonly cityModel: types.ModelType<CityEntity>
  ) {}

  public async create(dto: CreateCityDto): Promise<DocumentType<CityEntity>> {
    const result = await this.cityModel.findOneAndUpdate(
      { ...dto },
      {},
      { upsert: true, new: true }
    );

    this.logger.info(`New city created: ${dto.name}`);

    return result;
  }

  public async findById(cityId: string): Promise<DocumentType<CityEntity> | null> {
    return this.cityModel.findById(cityId);
  }
}
