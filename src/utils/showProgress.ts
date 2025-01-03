import readline from 'readline';
import chalk from 'chalk';

/**
 * Show a progress bar in the terminal.
 * @param {number} percentage - The percentage of completion.
 */
export const showProgress = (percentage: number): void => {
  const barLength = 40;
  const filledLength = Math.round((percentage / 100) * barLength);
  const emptyLength = barLength - filledLength;
  const bar = '█'.repeat(filledLength) + ' '.repeat(emptyLength);

  readline.clearLine(process.stdout, 0);
  readline.cursorTo(process.stdout, 0);
  process.stdout.write(chalk.green(`[${bar}] ${percentage.toFixed(2)}%`));
};
