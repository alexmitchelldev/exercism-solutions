
export const rows = number => {
  let pascalsTriangle  = new Array;

  for (let i = 0; i < number; i++) {
    let row = new Array;

    switch (i) {
      case 0:
        row.push(1);
        pascalsTriangle.push(row);
        break;
      case 1:
        row.push(1);
        row.push(1);
        pascalsTriangle.push(row);
        break;
      default:
        row.push(1);
        for (let j = 1; j < pascalsTriangle[i - 1].length; j++) {
          row.push(pascalsTriangle[i - 1][j - 1] + pascalsTriangle[i - 1][j]);
        }
        row.push(1);
        pascalsTriangle.push(row);
    }
  }

  return pascalsTriangle;
};
