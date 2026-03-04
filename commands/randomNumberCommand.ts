import { Command } from 'commander';
import chalk from 'chalk';

export class RandomNumberCommand {
    constructor(private program: Command) { }

    register() {
        this.program
            .command('random <min> <max>')
            .description('Generate a random number between a given min and max.')
            .action((min, max) => {
                const minNum = parseInt(min, 10);
                const maxNum = parseInt(max, 10);

                if (isNaN(minNum) || isNaN(maxNum)) {
                    console.error(chalk.red('Error: min and max must be valid numbers.'));
                    process.exit(1);
                }

                if (minNum > maxNum) {
                    console.error(chalk.red('Error: min cannot be greater than max.'));
                    process.exit(1);
                }

                const result = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
                console.log(chalk.green(`Random number between ${minNum} and ${maxNum}: `) + chalk.bold.cyan(result));
            });
    }
}
