import { Command } from 'commander';
import chalk from 'chalk';

export class JsonFormatCommand {
    constructor(private program: Command) { }

    register() {
        this.program
            .command('jsonformat <jsonString>')
            .description('Format and pretty print a JSON string.')
            .action((jsonString) => {
                try {
                    const parsed = JSON.parse(jsonString);
                    const formatted = JSON.stringify(parsed, null, 2);
                    console.log(chalk.green('Formatted JSON:\n') + chalk.cyan(formatted));
                } catch (error: any) {
                    console.error(chalk.red('Invalid JSON string: ') + error.message);
                    process.exit(1);
                }
            });
    }
}
