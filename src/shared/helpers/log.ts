import { Chalk } from 'chalk';
import { makeTemplate } from 'chalk-template';

export function log(input: string): void {
  const template = makeTemplate(new Chalk({ level: 1 }));

  console.log(template(input));
}
