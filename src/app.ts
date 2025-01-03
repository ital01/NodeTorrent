import chalk from 'chalk';
import WebTorrent from 'webtorrent';
import { loadingAnimation } from './utils/loadingAnimation.js';
import { startTorrentDownload } from './services/torrentService.js';
import { getApplicationInputs } from './utils/getDownloadOptions.js';

const torrentClient = new WebTorrent();

async function App (): Promise<void> {
  try {
    console.clear();
    const { downloadPath, magnetURI } = await getApplicationInputs();

    if (!magnetURI) {
      console.error(chalk.red('Erro: Magnet URI não fornecido.'));
      process.exit(1);
    }

    const animationInterval = loadingAnimation();

    startTorrentDownload(torrentClient, magnetURI, downloadPath);

    setTimeout(() => {
      clearInterval(animationInterval);
      console.clear();
    }, 1000);
  } catch (error) {
    console.error(chalk.red('Erro durante o download:'), error);
    process.exit(1);
  }
};

App();
