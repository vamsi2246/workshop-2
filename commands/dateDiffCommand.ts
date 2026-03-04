import { Command } from 'commander';
import chalk from 'chalk';

export class DateDiffCommand {
    constructor(private program: Command) { }

    register() {
        this.program
            .command('datediff <date1> <date2>')
            .description('Calculate the difference in days between two dates. Format: YYYY-MM-DD')
            .action((date1Str, date2Str) => {
                const date1 = new Date(date1Str);
                const date2 = new Date(date2Str);

                if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
                    console.error(chalk.red('Error: Invalid date format. Please use a valid format like YYYY-MM-DD.'));
                    process.exit(1);
                }

                const msPerDay = 1000 * 60 * 60 * 24;
                const diffTime = Math.abs(date2.getTime() - date1.getTime());
                const diffDays = Math.floor(diffTime / msPerDay);

                console.log(chalk.green(`Difference between ${date1Str} and ${date2Str}: `) + chalk.bold.cyan(`${diffDays} days`));
            });
    }
}
