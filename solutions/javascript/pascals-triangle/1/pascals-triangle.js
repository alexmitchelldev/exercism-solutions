
export const rows = number => {
  let pascalsTrianle  = new Array;

  for (let i = 0; i < number; i++) {
    let row = new Array;

    if (i === 0) {
      row.push(1);
      pascalsTrianle.push(row);
    } else if (i === 1) {
      row.push(1);
      row.push(1);
      pascalsTrianle.push(row);
    } else {
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
