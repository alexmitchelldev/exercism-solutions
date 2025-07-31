export class CustomSet {
  constructor(values = []) {
    this.values = values;
  }

  empty() {
    return this.values.length === 0;
  }

  contains(value) {
    return this.values.indexOf(value) > - 1;
  }

  add(value) {
    if (this.values.indexOf(value) === -1) {
      this.values.push(value);
    }

    return new CustomSet(this.values);
  }

  subset(set) {
    if (this.empty()) {
      return true;
    }

    return this.values.every((value) => {
      return set.values.indexOf(value) > -1;
    });
  }

  disjoint(set) {
    if (this.empty() || set.empty()) {
      return true;
    }

    return !this.values.some((value) => {
      return set.values.indexOf(value) > -1;
    });
  }

  eql(set) {
    return this.values.sort().toString() === set.values.sort().toString(); 
  }

  union(set) {
    let values = set.values.filter((value) => {
      return this.values.indexOf(value) === -1;
    })
  
    return new CustomSet(this.values.concat(values));
  }

  intersection(set) {
    let values = this.values.filter((value) => {
      return set.values.indexOf(value) > -1;
    })

    return new CustomSet(values);
  }

  difference(set) {
    let values = this.values.filter((value) => {
      return set.values.indexOf(value) === -1;
    });

    return new CustomSet(values);
  }
}