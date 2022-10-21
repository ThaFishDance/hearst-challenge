import * as p from 'path'

// The function should accept two arguments: the file path to crawl, and the XPath within a given XML file to retrieve a value from.
export function crawler(path: string, value: string): any[] {
  let results: any[] = []
  // First, need to determine whether or not, the path is a file or directory
  // if no extension, assume its a directory...
  const extension = p.extname(path)

  // Does that file or directory exist?

  // If the file path argument points to an actual file, only that file needs to be considered; 
  // but if it's a directory, that dir needs to be crawled recursively, i.e. assume the folders are included in that recursive crawl...

  return results
}

console.log(crawler('../files/file1', 'randomValue'));


// Only XML files need to be read and parsed; all other files can be ignored.
// A file's extension can be considered trustworthy, though it may be any case.
// The contents of an XML file should be read and parsed to retrieve the value at the specified XPath.
// This value should be converted into a native JavaScript type if possible,
// so that numbers are numbers, booleans are boolean, etc.
// If the value cannot parse as any other valid type, however,
// it should be considered a string.
// If no XPath match can be found in a file's contents, ignore it and move on.
// The function should return an array of objects structured as follows: [ { "path": "some/path/to.xml", "value": true }, ... ]