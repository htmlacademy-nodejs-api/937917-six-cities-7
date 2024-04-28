export const strToBoolean = (value: string): boolean => {
  if (!value.match(/(true|false)/i)) {
    throw new Error('The input value must be of string type and equal to true or false');
  }

  return value.toLowerCase() === 'true';
};
