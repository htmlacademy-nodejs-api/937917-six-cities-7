import { Chalk } from 'chalk';
import { makeTemplate } from 'chalk-template';

export const log = (input: string) => {
  const template = makeTemplate(new Chalk({ level: 1 }));

  console.log(template(input));
};
