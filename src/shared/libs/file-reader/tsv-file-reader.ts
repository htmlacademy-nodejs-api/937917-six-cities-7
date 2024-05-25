import { readFileSync } from 'node:fs';

import { FileReader } from './file-reader.interface.js';
import { City, HousingType, Location, RentOffer, User } from '../../types/index.js';

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

  private parseRawDataToRentOffers(): RentOffer[] {
    return this.rawData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => this.parseLineToRentOffer(line));
  }

  private parseLineToRentOffer(line: string): RentOffer {
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
      ownerName,
      ownerEmail,
      ownerRole,
      ownerPassword,
      ownerAvatar,
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
      owner: {
        name: ownerName,
        email: ownerEmail,
        avatar: ownerAvatar,
        password: ownerPassword,
        role: ownerRole
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

  public toArray(): RentOffer[] {
    this.validateRawData();
    return this.parseRawDataToRentOffers();
  }
}
