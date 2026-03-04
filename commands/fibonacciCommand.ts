import { Command } from 'commander';
import chalk from 'chalk';

export class FibonacciCommand {
    constructor(private program: Command) { }

    register() {
        this.program
            .command('fibonacci <n>')
            .description('Print Fibonacci sequence up to N numbers.')
            .action((nStr) => {
                const n = parseInt(nStr, 10);

                if (isNaN(n) || n <= 0) {
                    console.error(chalk.red('Error: Please provide a valid positive integer.'));
                    process.exit(1);
                }

                const sequence: string[] = [];
                let a = BigInt(0), b = BigInt(1);

                for (let i = 0; i < n; i++) {
                    sequence.push(a.toString());
                    const next = a + b;
                    a = b;
                    b = next;
                }

                console.log(chalk.green(`Fibonacci sequence (first ${n} numbers):`));
                console.log(chalk.cyan(sequence.join(', ')));
            });
    }
}
