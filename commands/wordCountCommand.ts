import { Command } from 'commander';
import chalk from 'chalk';

export class WordCountCommand {
    constructor(private program: Command) { }

    register() {
        this.program
            .command('wordcount <sentence>')
            .description('Count words in a given sentence.')
            .action((sentence) => {
                const words = sentence.trim().split(/\s+/);
                const count = sentence.trim() === '' ? 0 : words.length;
                console.log(chalk.cyan(`Word count: `) + chalk.bold.yellow(count));
            });
    }
}
