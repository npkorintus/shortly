import fs from 'fs';
import path from 'path';
// import fsPromises from 'fs/promises';
// import { promises as fs } from 'fs';
// import { readFile } from 'fs/promises';

const dataDirectory = path.join(process.cwd(), 'data');

export function getLocalData() {
  // Get the path of the json file
  const filePath = path.join(process.cwd(), `src/data/data.json`);
  // Read the json file
  const jsonData = fs.readFileSync(filePath);
  // Parse data as json
  const objectData = JSON.parse(jsonData);

  return objectData;
}
