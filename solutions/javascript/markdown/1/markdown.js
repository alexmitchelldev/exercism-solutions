import * as helpers from './helpers.js';
import * as parsers from './parsers.js';

export const MARKDOWN_LINE_ITEM = '*';
export const FontEmphasisMap = new Map([
  ['__', 'strong'],
  ['_', 'em']
]);

class MarkdownParser {
  constructor(markdown) {
    this.markdown = markdown;
  }
  
  parse() {
    const lines = helpers.getLines(this.markdown);
    let html = '';
    let listNodeInitialized = false;
  
    for (const line of lines) {
      let lineHtml = parsers.line(line);
      [lineHtml, listNodeInitialized] = helpers.handleList(line, lines, lineHtml, listNodeInitialized);
      html += lineHtml;
    }
  
    return html;
  }
}

export function parse(markdown) {
  return new MarkdownParser(markdown).parse();
}
