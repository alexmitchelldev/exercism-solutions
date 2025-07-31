#!/usr/bin/env node

// The above line is a shebang. On Unix-like operating systems, or environments,
// this will allow the script to be run by node, and thus turn this JavaScript
// file into an executable. In other words, to execute this file, you may run
// the following from your terminal:
//
// ./grep.js args
//
// If you don't have a Unix-like operating system or environment, for example
// Windows without WSL, you can use the following inside a window terminal,
// such as cmd.exe:
//
// node grep.js args
//
// Read more about shebangs here: https://en.wikipedia.org/wiki/Shebang_(Unix)

const fs = require('fs');
const path = require('path');

/**
 * Reads the given file and returns lines.
 *
 * This function works regardless of POSIX (LF) or windows (CRLF) encoding.
 *
 * @param {string} file path to file
 * @returns {string[]} the lines
 */
function readLines(file) {
  const data = fs.readFileSync(path.resolve(file), { encoding: 'utf-8' });
  return data.split(/\r?\n/);
}

const VALID_OPTIONS = [
  'n', // add line numbers
  'l', // print file names where pattern is found
  'i', // ignore case
  'v', // reverse files results
  'x', // match entire line
];

const ARGS = process.argv;

class Grep {
  constructor(args) {
    this.args = this.getArguments(args);
  }

  getArguments (args) {
    const relevantArgs = args.slice(2);
    const files = relevantArgs.filter((arg) => { return /.txt/.test(arg) });
    const flags = relevantArgs.filter((arg) => { return VALID_OPTIONS.indexOf(arg.replace(/-/, '')) > -1 });
    const pattern = relevantArgs.filter((arg) => { return files.indexOf(arg) === -1 && flags.indexOf(arg) === - 1})[0];
    return {
      files: files,
      flags: flags,
      pattern: pattern
    }
  }

  buildRegularExpression (pattern, flags) {
    if (flags.indexOf('-x') > -1) {
      pattern = `^${pattern}$`;
    }
    if (flags.indexOf('-v') > -1) {
      pattern = `^(?!.*${pattern}).*`;
    }
  
    let regOptions = [];
  
  
    if (flags.indexOf('-i') > -1) {
      regOptions.push('i');
    }
  
    return new RegExp(pattern, regOptions.join(''));
  }

  getMatchedLines () {
    const regExp = this.buildRegularExpression(this.args.pattern, this.args.flags);
    let matched = [];
    let lines = null;
    

    for (const file of this.args.files) {
      lines = readLines(file);
      if (this.args.flags.indexOf('-l') > -1 && regExp.test(lines.join(''))) {
          matched.push(file);
      } else {
        for (const line of lines) {
          if (regExp.test(line)) {
            matched.push(this.buildMatchedLine(file, lines, line));
          }
        }
      }
    }

    return matched.join('\n');
  }

  buildMatchedLine(file, lines, line) {
    let matchedLine = '';
    if (this.args.files.length > 1) {
      matchedLine += `${file}:`;
    }
    matchedLine += this.args.flags.indexOf('-n') > -1 ? `${lines.indexOf(line) + 1}:${line}` : `${line}`;
    return matchedLine;
  }
}

const grep = new Grep(ARGS);
const matched = grep.getMatchedLines();
console.log(matched);