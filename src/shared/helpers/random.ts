import dayjs from 'dayjs';
import { shuffle } from 'lodash-es';

export function generateRandomValue(min: number, max: number, numAfterDigit = 0) {
  return +((Math.random() * (max - min)) + min).toFixed(numAfterDigit);
}

export function getRandomItems<T>(items: T[]):T[] {
  const startPosition = generateRandomValue(0, items.length - 1);
  const endPosition = startPosition + generateRandomValue(startPosition, items.length);

  return items.slice(startPosition, endPosition);
}

export function getRandomItem<T>(items: T[]):T {
  return items[generateRandomValue(0, items.length - 1)];
}

export function getRandomDate(min: string, max: string): string {
  const minTimestamp = dayjs(min).valueOf();
  const maxTimestamp = dayjs(max).valueOf();
  const randomTimestamp = generateRandomValue(minTimestamp, maxTimestamp);

  return dayjs(randomTimestamp).toISOString();
}

export function getRandomItemsSet<T>(items: T[], count: number = 1):T[] {
  return shuffle(items).slice(0, count);
}

export function generateRandomBoolean(): boolean {
  return !!generateRandomValue(0, 1);
}
