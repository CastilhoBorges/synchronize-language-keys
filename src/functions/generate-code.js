export function generateCode(obj, name) {
  const keys = Object.keys(obj);
  let code = `const ${name} = {\n`;

  for (const key of keys) {
    code += `  ${key}: "${obj[key]}",\n`;
  }

  code = code.slice(0, -2) + '\n};';
  return code;
}
