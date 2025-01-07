import chalk from 'chalk';
import WebTorrent, { Instance as WebTorrentInstance } from 'webtorrent';
import { loadingAnimation } from './utils/loadingAnimation.js';
import { startTorrentDownload } from './services/torrentService.js';
import { ApplicationInputs, getApplicationInputs } from './utils/getDownloadOptions.js';

const torrentClient: WebTorrentInstance = new WebTorrent();

async function App (): Promise<void> {
  try {
    console.clear();
    const { downloadPath, magnetURI }: ApplicationInputs = await getApplicationInputs();

    if (!magnetURI) {
      console.error(chalk.red('Erro: Magnet URI não fornecido.'));
      process.exit(1);
    }

    startTorrentDownload(torrentClient, magnetURI, downloadPath);

    setTimeout(() => {
      clearInterval(loadingAnimation());
      console.clear();
    }, 1000);
  } catch (error) {
    console.error(chalk.red('Erro durante o download:'), error);
    process.exit(1);
  }
}

App();
