import { Command } from 'commander';
import chalk from 'chalk';

export class PalindromeCommand {
    constructor(private program: Command) { }

    register() {
        this.program
            .command('palindrome <string>')
            .description('Check whether a string is a palindrome.')
            .action((str) => {
                const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
                const reversedStr = cleanStr.split('').reverse().join('');

                if (cleanStr === reversedStr) {
                    console.log(chalk.green(`"${str}" is a palindrome!`));
                } else {
                    console.log(chalk.red(`"${str}" is not a palindrome.`));
                }
            });
    }
}
