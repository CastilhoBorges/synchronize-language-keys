import 'dotenv/config';

const DEEPL_API_KEY = process.env.DEEPL_API_KEY;
const DEEPL_API_URL = 'https://api-free.deepl.com/v2/translate';

export async function translate(text, targetLanguage) {
  const params = new URLSearchParams({
    auth_key: DEEPL_API_KEY,
    text,
    target_lang: targetLanguage.toUpperCase(),
  });
  console.log(text, targetLanguage, 'TESTE');
  const response = await fetch(DEEPL_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Erro na tradução: ${errorText}`);
  }

  const textTranslated = await response.json();
  return textTranslated.translations[0].text;
}
