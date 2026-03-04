#!/usr/bin/env node
import { Command } from 'commander';
import chalk from 'chalk';
import { RandomNumberCommand } from './commands/randomNumberCommand';
import { PalindromeCommand } from './commands/palindromeCommand';
import { WordCountCommand } from './commands/wordCountCommand';
import { FactorialCommand } from './commands/factorialCommand';
import { FibonacciCommand } from './commands/fibonacciCommand';
import { UuidCommand } from './commands/uuidCommand';
import { JsonFormatCommand } from './commands/jsonFormatCommand';
import { UrlStatusCommand } from './commands/urlStatusCommand';
import { Base64Command } from './commands/base64Command';
import { DateDiffCommand } from './commands/dateDiffCommand';

const program = new Command();

program
    .name('mycmd')
    .description(chalk.blue.bold('A comprehensive mult-tool CLI created with TypeScript and Commander.js'))
    .version('1.0.0');

// Register commands
new RandomNumberCommand(program).register();
new PalindromeCommand(program).register();
new WordCountCommand(program).register();
new FactorialCommand(program).register();
new FibonacciCommand(program).register();
new UuidCommand(program).register();
new JsonFormatCommand(program).register();
new UrlStatusCommand(program).register();
new Base64Command(program).register();
new DateDiffCommand(program).register();

program.parse(process.argv);

if (!process.argv.slice(2).length) {
    program.outputHelp();
}