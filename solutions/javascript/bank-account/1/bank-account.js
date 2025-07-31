export class BankAccount {
  constructor() {
    this._balance = null;
    this._activeAccount = false;
  }

  open() {
    if (!this._activeAccount) {
      this._activeAccount = true;
      this._balance = 0;
    } else {
      throw new ValueError();
    }
  }

  close() {
    if (!this._activeAccount) {
      throw new ValueError();
    } else {
      this._activeAccount = false;
    }
  }

  deposit(amount) {
    if (this._activeAccount && amount > 0) {
      this._balance += amount;
    } else {
      throw new ValueError();
    }
  }

  withdraw(amount) {
    if (this._activeAccount && amount <= this._balance && amount > 0) {
      this._balance -= amount;
    } else {
      throw new ValueError();
    }
  }

  get balance() {
    if (this._activeAccount) {
      return this._balance;
    } else {
      throw new ValueError();
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
