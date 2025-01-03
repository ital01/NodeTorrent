import inquirer from 'inquirer';

/**
 * Prompts the user for the download path and magnet URI.
 * @returns {Object} An object containing the download path and magnet URI.
 */
export const getDownloadOptions = async (): Promise<{ downloadPath: string; magnetURI: string }> => await inquirer.prompt(
  [
    {
      type: 'input',
      name: 'downloadPath',
      message: 'Informe o caminho para salvar o arquivo:',
      default: './downloads',
    },
    {
      type: 'input',
      name: 'magnetURI',
      message: 'Informe o magnet:',
      default: '',
    },
  ]
);
