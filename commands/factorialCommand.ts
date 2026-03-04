import { Command } from 'commander';
import chalk from 'chalk';

export class FactorialCommand {
    constructor(private program: Command) { }

    register() {
        this.program
            .command('factorial <number>')
            .description('Calculate factorial of a number.')
            .action((numStr) => {
                const num = parseInt(numStr, 10);

                if (isNaN(num) || num < 0) {
                    console.error(chalk.red('Error: Please provide a valid non-negative integer.'));
                    process.exit(1);
                }

                let result = BigInt(1);
                for (let i = 2; i <= num; i++) {
                    result *= BigInt(i);
                }

                console.log(chalk.green(`Factorial of ${num}: `) + chalk.bold.cyan(result.toString()));
            });
    }
}
