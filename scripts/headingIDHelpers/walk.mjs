// @ts-check

import fs from 'fs';

/**
 * Walk throw all directories and return relative paths for all *.md files
 * @param {string} dir
 * @returns {Array<string>}
 */
export function walk(dir) {
  /**
   * Array of file names
   * @type {Array<string>} relative paths for all *.md files
   */
  let results = [];
  /**
   * If the param is a directory we can return the file
   */
  if (dir.includes('md')) {
    return [dir];
  }
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      /* Recurse into a subdirectory */
      results = results.concat(walk(file));
    } else {
      /* Is a file */
      results.push(file);
    }
  });
  return results;
}
