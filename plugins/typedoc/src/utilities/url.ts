/**
 * Creates a URL with a slash between each segment.
 *
 * @param segments the url segments.
 * @returns the url with slashes.
 * @category utilities
 */
export function createURL(...segments: string[]): string {
  return segments
    .reduce((url, segment) => (url += `${segment}/`), '')
    .slice(0, -1);
}

/**
 * Extracts the file name from its url, {path}/_${folder}_${file}.
 *
 * For example, modules/_packages_my_module.svg => my_module.svg
 *
 * @param url the file url.
 * @param path the url path.
 * @returns the file name.
 * @category utilities
 */
export function extractFileName(url: string, path: string): string {
  return url.substring(url.indexOf('_', path.length) + 1, url.lastIndexOf('.'));
}

/**
 * Extracts the folder name from its url, {path}/_${folder}_${file}.
 *
 * For example, modules/_packages_my_module.svg => packages
 *
 * @param url the file url.
 * @param path the url path.
 * @returns the folder name.
 * @category utilities
 */
export function extractFolderName(url: string, path: string): string {
  return url.substring(path.length, url.indexOf('_', path.length));
}

/**
 * Formats a file extension.
 *
 * If the file ends with the format, returns the file.
 *
 * Otherwise, adds or replace the file format.
 *
 * @param file the file name or url.
 * @param format the file format.
 * @returns the formatted file.
 * @category utilities
 */
export function formatFileExtension(file: string, format: string): string {
  if (file.endsWith(format)) return file;

  return /\.[a-z]+$/.test(file)
    ? `${file.substring(0, file.lastIndexOf('.') + 1)}${format}`
    : `${file}.${format}`;
}
