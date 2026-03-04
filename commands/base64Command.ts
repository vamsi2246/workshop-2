import { Command } from 'commander';
import chalk from 'chalk';

export class Base64Command {
    constructor(private program: Command) { }

    register() {
        this.program
            .command('base64 <action> <string>')
            .description('Encode or decode base64 strings. Action can be "encode" or "decode".')
            .action((action, str) => {
                if (action === 'encode') {
                    const encoded = Buffer.from(str, 'utf-8').toString('base64');
                    console.log(chalk.green('Encoded string: ') + chalk.cyan(encoded));
                } else if (action === 'decode') {
                    const decoded = Buffer.from(str, 'base64').toString('utf-8');
                    console.log(chalk.green('Decoded string: ') + chalk.cyan(decoded));
                } else {
                    console.error(chalk.red('Invalid action. Use "encode" or "decode".'));
                    process.exit(1);
                }
            });
    }
}
