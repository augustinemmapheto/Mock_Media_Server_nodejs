import { promises as fs } from 'fs';
import path from 'path';

const DATA_DIR = path.resolve('data');

async function ensureFile(resource) {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    const file = path.join(DATA_DIR, `${resource}.json`);
    await fs.access(file).catch(async () => {
      await fs.writeFile(file, '[]');            // create empty array JSON
    });
    return file;
  } catch (err) {
    throw new Error('Could not ensure data file', { cause: err });
  }
}

export async function readAll(resource) {
  const file = await ensureFile(resource);
  const buf = await fs.readFile(file, 'utf‑8');
  return JSON.parse(buf);
}

export async function writeAll(resource, data) {
  const file = await ensureFile(resource);
  await fs.writeFile(file, JSON.stringify(data, null, 2));
  return data;
}