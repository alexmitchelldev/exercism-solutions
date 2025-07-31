export class RestAPI {
  constructor(seedUsers) {
    this.db = seedUsers || { users: [] },
    this.errorMessages = {
      endpoint: 'Incorrect endpoint. The supported endpoints are: /add, /iou.\n Please check and try again.',
      payload: 'Incorrect payload. Please check and try again.',
      userExists: 'User already exists!',
    }
  }

  get(url) {
    if (/^\/users/.test(url)) {
      const userName = url.split('=')[1];
      const newAPI = new RestAPI(this.db);

      if (userName) {
        const filterdUsers = newAPI.db.users.filter((user) => { return user.name === userName});
        if (filterdUsers.length === 1) {
          return { users: [ filterdUsers[0] ]};
        }
      } else {
        return newAPI.db;
      }
    }
  }

  post(url, payload) {
    if (/^\/add/.test(url)) {
      if (typeof payload !== 'object' || Object.keys(payload).length !== 1 ||  !payload.user) {
        throw new Error(this.errorMessages.payload);
      }

      return this.addUser(payload);

    } else if (/^\/iou/.test(url)) {
      if (typeof payload !== 'object' || Object.keys(payload).length !== 3 || !payload.lender || !payload.borrower || !payload.amount ) {
        throw new Error(this.errorMessages.payload);
      }

      return this.iou(payload);

    } else {
      throw new Error(this.errorMessages.endpoint);
    }
  }

  addUser(payload) {
    let newUser = null;

    if (payload && payload.user) {
      const userAlreadyExists = this.db.users.filter((user) => { return user.name === payload.user }).length > 0;

      if (userAlreadyExists) {
        throw new Error(this.errorMessages.userExists);
      } else {
        const newUserObject = {
          name: null,
          owes: {},
          owed_by: {},
          balance: 0
        }

        newUser = newUserObject;
        newUser.name = payload.user;
        this.db.users.push(newUser);
      }
    }

    if (newUser) {
      return newUser;
    }
  }

  iou(payload) {
    const {lender, borrower, amount} = payload;
    const lenderIndex = this.getUserIndex(lender);
    const borrowerIndex = this.getUserIndex(borrower);
    const users = this.db.users;

    if (lenderIndex >= 0 && borrowerIndex >= 0) {
      if (users[lenderIndex].owes[borrower]) {
        if (users[lenderIndex].owes[borrower] - amount < 0) {
          const remainder = Math.abs(users[lenderIndex].owes[borrower] - amount);
          users[lenderIndex].owed_by[borrower] = remainder;
          delete users[lenderIndex].owes[borrower];
        } else if (users[lenderIndex].owes[borrower] - amount === 0) {
          delete users[lenderIndex].owes[borrower];
        } else {
          users[lenderIndex].owes[borrower] = users[lenderIndex].owes[borrower] - amount;
        }
      } else if (users[lenderIndex].owed_by[borrower]) {
        users[lenderIndex].owed_by[borrower] += amount;
      } else {
        users[lenderIndex].owed_by[borrower] = amount;
      }

      users[lenderIndex].balance += amount;

      if (users[borrowerIndex].owed_by[lender]) {
        if (users[borrowerIndex].owed_by[lender] - amount < 0) {
          const remainder = Math.abs(users[borrowerIndex].owed_by[lender] - amount);
          users[borrowerIndex].owes[lender] = remainder;
          delete users[borrowerIndex].owed_by[lender];
        } else if (users[borrowerIndex].owed_by[lender] - amount === 0) {
          delete users[borrowerIndex].owed_by[lender];
        } else {
          users[borrowerIndex].owed_by[lender] = users[borrowerIndex].owed_by[lender] - amount;
        }
      } else if (users[borrowerIndex].owes[lender]) {
        users[borrowerIndex].owes[lender] += amount;
      } else {
        users[borrowerIndex].owes[lender] = amount;
      }

      users[borrowerIndex].balance -= amount;

      let updatedUsers = [];
      updatedUsers.push(users[lenderIndex < borrowerIndex ? lenderIndex : borrowerIndex]);
      updatedUsers.push(users[lenderIndex < borrowerIndex ? borrowerIndex: lenderIndex ]);

      return { users: updatedUsers };
    }
  }

  getUserIndex(name) {
    let i = 0;

    for (i; i < this.db.users.length; i++) {
      if (this.db.users[i].name === name) {
        return i;
      }
    }

    return null;
  }
}
