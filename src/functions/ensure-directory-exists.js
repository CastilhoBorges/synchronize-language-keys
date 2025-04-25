import fs from 'fs';

export function ensureDirectoryExists(dir) {
  if (!fs.existsSync(dir)) {
    try {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`Pasta criada: ${dir}`);
    } catch (err) {
      console.error(`Erro ao criar pasta ${dir}:`, err);
      throw err;
    }
  }
}
