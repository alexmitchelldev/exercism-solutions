const MARKDOWN_LINE_ITEM = '*';
const FontEmphasisMap = new Map([
  ['__', 'strong'],
  ['_', 'em']
]);

class Helpers {
  wrapTextInHtmlNode(text, tag) {
    return `<${tag}>${text}</${tag}>`;
  }
  countHeaderHashes(markdown) {
    let count = 0;
    for (let i = 0; i < markdown.length; i++) {
      if (markdown[i] === '#') {
        count++;
      } else {
        break;
      }
    }
    return count;
  }
  isValidHeader(line) {
    const numHeaderHashes = this.countHeaderHashes(line);
    return numHeaderHashes > 0 && numHeaderHashes < 7;
  }
  lineStartsWith(char, line) {
    return line.startsWith(char);
  }
  handleList(line, lines, html, listNodeInitialized) {
    if (this.lineStartsWith(MARKDOWN_LINE_ITEM, line)) {
      if (!listNodeInitialized) {
        listNodeInitialized = true;
        html = `<ul>${html}`;
      }
    } else if (listNodeInitialized) {
      listNodeInitialized = false;
      html = `</ul>${html}`;
    }

    const isLastLine = lines.indexOf(line) === lines.length - 1;
    html = (isLastLine && listNodeInitialized) ? `${html}</ul>` : html;

    return [html, listNodeInitialized];
  }
  getLines(markdown) {
    return markdown.split('\n');
  }
}

class Parsers {
  constructor() {
    this.helpers = new Helpers();
  }
  parseFontEmphasis(markdown) {
    let parsedHtml = markdown;
    let pattern = null;
    let replacement = null;

    FontEmphasisMap.forEach((htmlTag, delimiter) => {
      pattern = new RegExp(`${delimiter}(.+)${delimiter}`);
      replacement = this.helpers.wrapTextInHtmlNode('$1', htmlTag);
      parsedHtml = parsedHtml.replace(pattern, replacement);
    });

    return parsedHtml;
  }

  parseParagraph(markdown) {
    const parsedFontEmphasis = this.parseFontEmphasis(markdown);
    return this.helpers.wrapTextInHtmlNode(parsedFontEmphasis, 'p');
  }

  parseHeader(markdown) {
    let headerHtml = null;

    if (this.helpers.isValidHeader(markdown)) {
      const numHeaderHashes = this.helpers.countHeaderHashes(markdown);
      const headerTag = `h${numHeaderHashes}`;
      headerHtml = this.helpers.wrapTextInHtmlNode(markdown.substring(numHeaderHashes + 1), headerTag);
    }

    return headerHtml;
  }

  parseLineItem(markdown) {
    if (!this.helpers.lineStartsWith(MARKDOWN_LINE_ITEM, markdown)) {
      return null;
    }

    markdown = this.parseFontEmphasis(markdown.substring(1).trim());

    return this.helpers.wrapTextInHtmlNode(markdown, 'li');
  }

  parseLine(markdown) {
    let parsedHtml = markdown;

    if (this.helpers.isValidHeader(markdown)) {
      parsedHtml = this.parseHeader(markdown);
    } else if (this.helpers.lineStartsWith(MARKDOWN_LINE_ITEM, markdown)) {
      parsedHtml = this.parseLineItem(markdown);
    } else {
      parsedHtml = this.parseParagraph(markdown);
    }

    return parsedHtml ? parsedHtml : new Error('Invalid markdown');
  }
}

class MarkdownParser {
  constructor(markdown) {
    this.markdown = markdown;
  }

  parse() {
    const parsers = new Parsers();
    const helpers = new Helpers();
    const lines = helpers.getLines(this.markdown);
    let html = '';
    let listNodeInitialized = false;

    for (const line of lines) {
      let lineHtml = parsers.parseLine(line);
      [lineHtml, listNodeInitialized] = helpers.handleList(line, lines, lineHtml, listNodeInitialized);
      html += lineHtml;
    }

    return html;
  }
}

export function parse(markdown) {
  return new MarkdownParser(markdown).parse();
}

// Refactoring notes
// move logic from parseHeader to counter markdown headers into helper function 'countHeaderHashes'
// rename variable 'result' inside of parse function to 'html'
// remove 'list' parameters from all parser functions
// create helper function 'handleList' to add ul nodes to html
// rename 'wrap' function to 'wrapTextInHtmlNode' 
// create helper functions 'isValidHeader' and 'lineStartsWith'
// replace 'result === null' logic inside of parseLine with calls to 'isValidHeader' and 'lineStartsWith'
// rename 'result' variable in 'parseLine' function to 'parsedHtml'
// add 'FontEmphasisMap' map object, replace 'parse_' and 'parse__' functions with 'parseFontEmphasis' function that iterates over 'FontEmphasisMap'
// remove redundant isTag function
// refactor class for loop inside of 'parse' function to 'for of' loop
// rename 'parseText' function to 'parseParagraph'
// refactor return statement logic in 'parseLine' to be a simple one-liner using a ternary operator
// create const 'MARKDOWN_LINE_ITEM'
// create 'MarkdownParser' class, move parser and helper functions into separate 'Parsers' and 'Helpers' classes
// refactor 'parse' function to simple return MarkdownParser(markdown).parse()