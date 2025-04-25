import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import { ensureDirectoryExists } from './ensure-directory-exists.js';
import { generateCode } from './generate-code.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export function saveToFiles(result) {
  const { PT, EN, ES } = result;
  const resultDir = join(`${__dirname}/../../result`);

  ensureDirectoryExists(resultDir);

  try {
    fs.writeFileSync(join(resultDir, 'pt.js'), generateCode(PT, 'PT'));

    fs.writeFileSync(join(resultDir, 'en.js'), generateCode(EN, 'EN'));

    fs.writeFileSync(join(resultDir, 'es.js'), generateCode(ES, 'ES'));

    console.log(`\nArquivos salvos com sucesso na pasta 'result':`);
    console.log(`- ${join(resultDir, 'pt.js')}`);
    console.log(`- ${join(resultDir, 'en.js')}`);
    console.log(`- ${join(resultDir, 'es.js')}`);
  } catch (err) {
    console.error('Erro ao salvar arquivos:', err);
    throw err;
  }
}
