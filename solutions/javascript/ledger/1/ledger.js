const LOCALES = {
  AMERICAN: 'en-US',
  DUTCH: 'nl-NL'
}

class LedgerEntry {
  constructor(date, description, change) {
    this.date = date;
    this.description = description;
    this.change = change;
  }
}

export function createEntry(date, description, change) {
  return new LedgerEntry(new Date(date), description, change);
}

class Ledger {
  constructor (entries, locale, currency) {
    this.table = null;
    this.entries = entries;
    this.locale = locale;
    this.currency = currency;
  }

  sortEntries() {
    this.entries.sort(
      (a, b) =>
        a.date - b.date ||
        a.change - b.change ||
        a.description.localeCompare(b.description),
    );
  }

  generateHeader () {
    const date = this.locale === LOCALES.AMERICAN ? 'Date' : 'Datum';
    const description = this.locale ===  LOCALES.AMERICAN ? 'Description' : 'Omschrijving';
    const change = this.locale === LOCALES.AMERICAN ? 'Change' : 'Verandering';
  
    this.table = `${date.padEnd(10, ' ')} | ${description.padEnd(25, ' ')} | ${change.padEnd(13, ' ')}\n`;
  }

  getDateString (date, locale) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
  
    return `${locale === LOCALES.AMERICAN ? [month, day, year].join('/') : [day, month, year].join('-')} | `;
  }

  getTruncatedDescription (description) {
    return `${description.length > 25 ? `${description.substring(0, 22)}...` : description.padEnd(25, ' ')} | `;
  }

  getChangeString (change, currency, locale) {
    const formattingOptions = {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }
  
    let changeString = '';
    let numChange = change < 0 && locale === LOCALES.AMERICAN ? Math.abs(change / 100) : (change / 100);
  
    if (locale === LOCALES.DUTCH) {
      formattingOptions.currencyDisplay = 'narrowSymbol';
    }
  
    changeString = `${numChange.toLocaleString(locale , formattingOptions)} `;
    if (locale === LOCALES.AMERICAN && change < 0) {
      changeString = `(${changeString.trim()})`;
    }
    
    changeString = `${changeString.padStart(13, ' ')}\n`;
  
    return changeString;
  }

  buildTable() {
    this.sortEntries();
    this.generateHeader();

    this.entries.forEach((entry) => {
      this.table += this.getDateString(entry.date, this.locale);
      this.table += this.getTruncatedDescription(entry.description);
      this.table += this.getChangeString(entry.change, this.currency, this.locale);
    })
  }

  toTable() {
    return this.table.replace(/\n$/, '');
  }
}

export function formatEntries(currency, locale, entries) {
  const ledger = new Ledger(entries, locale, currency);
  ledger.buildTable();
  return ledger.toTable();
}