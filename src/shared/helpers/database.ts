import { MongoURIOptions } from '../types/index.js';

export function getMongoURI(options: MongoURIOptions): string {
  const {
    username,
    password,
    host,
    port,
    databaseName
  } = options;

  return `mongodb://${username}:${password}@${host}:${port}/${databaseName}?authSource=admin`;
}
