import { log } from '../../shared/helpers/log.js';

import { Command } from './command.interface.js';

export class HelpCommand implements Command {
  public getName(): string {
    return '--help';
  }

  public async execute(..._parameters: string[]): Promise<void> {
    log(`
      Program for preparing data for the REST API of the server.

      USAGE
        {cyan main.cli.js} {yellow --<command> [--arguments]}

      COMMANDS
        {yellow --version}                     # output of version number
        {yellow --help }                       # print this text
        {yellow --import <path>}               # import data from TSV
        {yellow --generate <n> <path> <url>}   # generates an arbitrary amount of mock data
    `);
  }
}
