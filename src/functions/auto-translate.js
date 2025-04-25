import { translate } from '../api/translate.js';

export async function autoTranslate(unifiedTranslations) {
  const { PT, EN, ES } = unifiedTranslations;

  for (const key of Object.keys(PT)) {
    if (PT[key].startsWith('[Tradução pendente')) {
      const sourceText = EN[key].startsWith('[Missing') ? ES[key] : EN[key];
      if (!sourceText.startsWith('[')) {
        PT[key] = await translate(sourceText, 'pt');
      }
    }

    if (EN[key].startsWith('[Missing')) {
      const sourceText = PT[key].startsWith('[Tradução') ? ES[key] : PT[key];
      if (!sourceText.startsWith('[')) {
        EN[key] = await translate(sourceText, 'en');
      }
    }

    if (ES[key].startsWith('[Traducción')) {
      const sourceText = PT[key].startsWith('[Tradução') ? EN[key] : PT[key];
      if (!sourceText.startsWith('[')) {
        ES[key] = await translate(sourceText, 'es');
      }
    }
  }

  return { PT, EN, ES };
}
