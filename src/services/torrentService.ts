import chalk from 'chalk';
import { Instance, Torrent } from 'webtorrent';
import { formatBytes } from '../utils/formatBytes.js';
import { showProgress } from '../utils/showProgress.js';

/**
 * Callback function to show the torrent download progress.
 * @param {number} bytes - The number of bytes downloaded.
 * @param {Object} torrent - The torrent object.
 */
const onTorrentDownloadCallback = (bytes: number, torrent: Torrent): void => {
  console.clear();
  console.log(chalk.dim('Nome do arquivo: ') + torrent.name);
  console.log(chalk.cyan('Bytes: ') + bytes);
  console.log(chalk.yellow('Baixando: ') + formatBytes(torrent.downloaded));
  console.log(chalk.magenta('Velocidade de download: ') + formatBytes(torrent.downloadSpeed) + '/s');
  showProgress(torrent.progress * 100);
};

/**
 * Callback function to show the torrent download completion.
 */
const onTorrentDoneCallback = () => {
  console.log(chalk.green('\nDownload concluído!'));
  process.exit(0);
};

/**
 * Handles the torrent download progress and completion.
 * @param {Object} torrent - The torrent object.
 */
const onTorrent = (torrent: Torrent): void => {
  torrent.on('download', (bytes: number) => onTorrentDownloadCallback(bytes, torrent));

  torrent.on('done', onTorrentDoneCallback);
};

/**
 * Start the torrent download process.
 * @param {Instance} client - The WebTorrent client instance.
 * @param {string} magnetURI - The magnet URI for the torrent.
 * @param {string} downloadPath - The path to save the downloaded file.
 */
export const startTorrentDownload = (
  client: Instance,
  magnetURI: string,
  downloadPath: string
): Torrent => client.add(
  magnetURI,
  { path: downloadPath },
  onTorrent
);

