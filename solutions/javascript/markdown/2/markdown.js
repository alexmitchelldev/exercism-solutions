import * as helpers from './helpers.js';
import * as parsers from './parsers.js';

export const MARKDOWN_LINE_ITEM = '*';
export const FontEmphasisMap = new Map([
  ['__', 'strong'],
  ['_', 'em']
]);

class Parsers {
  fontEmphasis(markdown) {
    let parsedHtml = markdown;
    let pattern = null;
    let replacement = null;

    FontEmphasisMap.forEach((htmlTag, delimiter) => {
        pattern = new RegExp(`${delimiter}(.+)${delimiter}`);
        replacement = helpers.wrapTextInHtmlNode('$1', htmlTag);
        parsedHtml = parsedHtml.replace(pattern, replacement);
    });

    return parsedHtml;
}

text(markdown) {
    const parsedText = this.fontEmphasis(markdown);
    return helpers.wrapTextInHtmlNode(parsedText, 'p');
}

header(markdown) {
    let headerHtml = null;

    if (helpers.isValidHeader(markdown)) {
        const numHeaderHashes = helpers.countHeaderHashes(markdown);
        const headerTag = `h${numHeaderHashes}`;
        headerHtml = helpers.wrapTextInHtmlNode(markdown.substring(numHeaderHashes + 1), headerTag);
    }

    return headerHtml;
}

lineItem(markdown) {
    if (!helpers.lineStartsWith(MARKDOWN_LINE_ITEM, markdown)) {
        return null;
    }

    markdown = this.fontEmphasis(markdown.substring(1).trim());

    return helpers.wrapTextInHtmlNode(markdown, 'li');
}

line(markdown) {
    let parsedHtml = markdown;

    if (helpers.isValidHeader(markdown)) {
        parsedHtml = this.header(markdown);
    } else if (helpers.lineStartsWith(MARKDOWN_LINE_ITEM, markdown)) {
        parsedHtml = this.lineItem(markdown);
    } else {
        parsedHtml = this.text(markdown);
    }

    return parsedHtml ? parsedHtml : new Error('Invalid markdown');
}
}

class MarkdownParser {
  constructor(markdown) {
    this.markdown = markdown;
    this.parsers = new Parsers();
  }
  
  parse() {
    const lines = helpers.getLines(this.markdown);
    let html = '';
    let listNodeInitialized = false;
  
    for (const line of lines) {
      let lineHtml = this.parsers.line(line);
      [lineHtml, listNodeInitialized] = helpers.handleList(line, lines, lineHtml, listNodeInitialized);
      html += lineHtml;
    }
  
    return html;
  }
}

export function parse(markdown) {
  return new MarkdownParser(markdown).parse();
}
