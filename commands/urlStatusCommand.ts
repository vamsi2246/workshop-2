import { Command } from 'commander';
import chalk from 'chalk';
import axios from 'axios';

export class UrlStatusCommand {
    constructor(private program: Command) { }

    register() {
        this.program
            .command('urlstatus <url>')
            .description('Check HTTP status of a given URL using axios.')
            .action(async (url) => {
                try {
                    // Add http:// prefix if missing
                    const urlToFetch = !/^https?:\/\//i.test(url) ? `http://${url}` : url;
                    console.log(chalk.blue(`Checking status for ${urlToFetch}...`));

                    const response = await axios.get(urlToFetch, { validateStatus: () => true });
                    const status = response.status;

                    if (status >= 200 && status < 300) {
                        console.log(chalk.green(`Status: ${status} OK`));
                    } else if (status >= 300 && status < 400) {
                        console.log(chalk.yellow(`Status: ${status} Redirect`));
                    } else if (status >= 400 && status < 500) {
                        console.log(chalk.red(`Status: ${status} Client Error`));
                    } else {
                        console.log(chalk.red.bold(`Status: ${status} Server Error`));
                    }
                } catch (error: any) {
                    console.error(chalk.red(`Error checking URL: ${error.message}`));
                    process.exit(1);
                }
            });
    }
}
