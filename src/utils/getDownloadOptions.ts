import inquirer from 'inquirer';
import type { UnnamedDistinctQuestion } from '../../node_modules/inquirer/dist/esm/types.d.ts';

export interface ApplicationInputs {
  downloadPath: string;
  magnetURI: string;
}

type Question = UnnamedDistinctQuestion<ApplicationInputs> & { name: keyof ApplicationInputs };

const downloadPathQuestion: Question = {
  type: 'input',
  name: 'downloadPath',
  message: 'Informe o caminho para salvar o arquivo:',
  default: 'Downloads',
};

const magnetURIQuestion: Question = {
  type: 'input',
  name: 'magnetURI',
  message: 'Informe o magnet:',
  default: '',
};

/**
 * Prompts the user for the download path and magnet URI.
 * @returns {Object} An object containing the download path and magnet URI.
 */
export const getApplicationInputs = async (): Promise<ApplicationInputs> => 
  await inquirer.prompt<ApplicationInputs>([downloadPathQuestion, magnetURIQuestion]);
