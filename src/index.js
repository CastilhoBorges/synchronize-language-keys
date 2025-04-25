import { synchronizeLanguageKeys } from './functions/synchronize-language-keys.js';
import { saveToFiles } from './functions/save-to-files.js';
import { autoTranslate } from './functions/auto-translate.js';
import { enUs } from './locales/en-us.js';
import { ptBr } from './locales/pt-br.js';
import { esEs } from './locales/es-es.js';

const synchronizedLanguagesKeys = synchronizeLanguageKeys(ptBr, enUs, esEs);

(async () => {
  const languagesTranslated = await autoTranslate(synchronizedLanguagesKeys);

  saveToFiles(languagesTranslated);
})();
