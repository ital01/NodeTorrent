import readline from 'readline';
import chalk from 'chalk';

/**
 * Show a loading animation while the torrent is being prepared.
 * @returns {NodeJS.Timeout} The interval ID for the loading animation.
 */
export const loadingAnimation = (): NodeJS.Timeout => {
  const loadingSigns = ['|', '/', '-', '\\'];
  let i = 0;

  const interval = setInterval(() => {
    readline.clearLine(process.stdout, 0);
    readline.cursorTo(process.stdout, 0);
    process.stdout.write(chalk.blue(`Iniciando download... ${loadingSigns[i]}`));
    i = (i + 1) % loadingSigns.length;
  }, 200);

  return interval;
};
