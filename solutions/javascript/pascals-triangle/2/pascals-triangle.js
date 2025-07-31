
export const rows = number => {
  let pascalsTrianle  = new Array;

  for (let i = 0; i < number; i++) {
    let row = new Array;

    switch (i) {
      case 0:
        row.push(1);
        pascalsTrianle.push(row);
        break;
      case 1:
        row.push(1);
        row.push(1);
        pascalsTrianle.push(row);
        break;
      default:
        row.push(1);
        for (let j = 1; j < pascalsTrianle[i - 1].length; j++) {
          row.push(pascalsTrianle[i - 1][j - 1] + pascalsTrianle[i - 1][j]);
        }
        row.push(1);
        pascalsTrianle.push(row);
    }
  }

  return pascalsTrianle;
};
