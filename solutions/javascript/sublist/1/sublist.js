export class List {
  constructor(list) {
    this.list = list || [];
  }

  compare(input) {
    const list1String = this.list.toString();
    const list2String = input.list.toString();
    const l1RegExp = new RegExp(list1String);
    const l2RegExp = new RegExp(list2String);
    let result = null;

    if (l1RegExp.test(list2String) || l2RegExp.test(list1String)) {
      if (list1String.length === list2String.length) {
        result = 'EQUAL';
      } else {
        result = list1String.length > list2String.length ? 'SUPERLIST' : 'SUBLIST';
      }
    } else {
      result = 'UNEQUAL';
    }

    return result;
  }
}
