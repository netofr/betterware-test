const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const envPath = path.join(projectRoot, '.env');
const outPath = path.join(projectRoot, 'src/config/env.ts');

const DEFAULT_PRODUCTS_API_URL = 'https://fakestoreapi.com/products';

function parseEnvFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return {};
  }

  return fs.readFileSync(filePath, 'utf8').split('\n').reduce((acc, line) => {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith('#')) {
      return acc;
    }

    const separatorIndex = trimmed.indexOf('=');

    if (separatorIndex === -1) {
      return acc;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim();

    acc[key] = value;
    return acc;
  }, {});
}

function escapeString(value) {
  return value.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

const env = parseEnvFile(envPath);
const productsApiUrl = env.PRODUCTS_API_URL || DEFAULT_PRODUCTS_API_URL;

const content = `// Auto-generated from .env by scripts/sync-env.js — do not edit manually

export const PRODUCTS_API_URL = '${escapeString(productsApiUrl)}';
`;

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, content);
