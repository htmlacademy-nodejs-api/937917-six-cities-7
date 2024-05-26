import { defaultClasses, getModelForClass, prop, modelOptions } from '@typegoose/typegoose';

import { City, Location } from '../../types/index.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface CityEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'cities'
  }
})
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class CityEntity implements City {
  @prop({ required: true })
  public name: string;

  @prop({ required: true })
  public location: Location;
}

export const CityModel = getModelForClass(CityEntity);
