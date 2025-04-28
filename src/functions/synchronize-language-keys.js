export function synchronizeLanguageKeys(pt, en, es) {
  const allKeys = new Set([
    ...Object.keys(pt),
    ...Object.keys(en),
    ...Object.keys(es),
  ]);

  const sortedKeys = Array.from(allKeys).sort();

  const synchronizePT = {};
  const synchronizeEN = {};
  const synchronizeES = {};

  for (const key of sortedKeys) {
    synchronizePT[key] = pt[key] || `[Tradução pendente para PT: ${key}]`;
    synchronizeEN[key] = en[key] || `[Missing translation for EN: ${key}]`;
    synchronizeES[key] = es[key] || `[Traducción pendiente para ES: ${key}]`;
  }

  return {
    PT: synchronizePT,
    EN: synchronizeEN,
    ES: synchronizeES,
  };
}
