import { Command } from 'commander';
import chalk from 'chalk';
import { v4 as uuidv4 } from 'uuid';

export class UuidCommand {
    constructor(private program: Command) { }

    register() {
        this.program
            .command('uuid')
            .description('Generate a random UUID.')
            .action(() => {
                const newUuid = uuidv4();
                console.log(chalk.green(`Generated UUID: `) + chalk.bold.magenta(newUuid));
            });
    }
}
