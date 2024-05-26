import { readFileSync } from 'node:fs';

import { FileReader } from './file-reader.interface.js';
import { City, HousingType, Location, Offer, User } from '../../types/index.js';

import { convertStrToBoolean } from '../../helpers/index.js';

export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor(
    private readonly filename: string
  ) {}

  private validateRawData(): void {
    if (!this.rawData) {
      throw new Error('File was not read');
    }
  }

  private parseRawDataToOffers(): Offer[] {
    return this.rawData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => this.parseLineToOffer(line));
  }

  private parseLineToOffer(line: string): Offer {
    const [
      title,
      description,
      publishedAt,
      cityName,
      cityLocation,
      previewImage,
      images,
      isPremium,
      isFavorite,
      rating,
      housingType,
      roomCount,
      guestCount,
      price,
      facilities,
      userName,
      userEmail,
      userRole,
      userPassword,
      userAvatar,
      location
    ] = line.split('\t').map((item) => item.trim());

    return {
      title,
      description,
      publishedAt: new Date(publishedAt),
      city: this.parseCity(cityName, cityLocation),
      previewImage,
      images: this.parseStrArray(images),
      isPremium: convertStrToBoolean(isPremium),
      isFavorite: convertStrToBoolean(isFavorite),
      rating: +rating,
      housingType: housingType as HousingType,
      roomCount: +roomCount,
      guestCount: +guestCount,
      price: +price,
      facilities: this.parseStrArray(facilities),
      user: {
        name: userName,
        email: userEmail,
        avatar: userAvatar,
        password: userPassword,
        role: userRole
      } as User,
      location: this.parseLocation(location)
    };
  }

  private parseCity(name: string, location: string): City {
    const parsedLocation = this.parseLocation(location);

    return { name, location: parsedLocation };
  }

  private parseLocation(location: string): Location {
    const [latitude, longitude] = this.parseStrArray(location).map((prop) => +prop);
    return { latitude, longitude };
  }

  private parseStrArray(str: string): string[] {
    return str.split(';');
  }

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf-8' });
  }

  public toArray(): Offer[] {
    this.validateRawData();
    return this.parseRawDataToOffers();
  }
}
