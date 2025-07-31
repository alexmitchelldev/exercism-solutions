export const saddlePoints = (matrix) => {
  const isEmptyMatrix = matrix[0].length === 0;

  if (isEmptyMatrix) {
    return [];
  }

  let saddlePoints = [];

  for (let currentRow = 0; currentRow < matrix.length; currentRow++) {
    
    const highestRowElement = getHighestRowElement(matrix[currentRow]);
    const indexesOfHighestRowElement = getIndexes(matrix[currentRow], highestRowElement);
    
    for (let j = 0; j < indexesOfHighestRowElement.length; j++) {

      const currentElementIndex = indexesOfHighestRowElement[j];
      const columnAsArray = getColumnAsArray(matrix, currentElementIndex);
      const lowestColumnElement = getLowestColumnElement(columnAsArray);

      const isSaddlePoint = highestRowElement <= lowestColumnElement;

      if (isSaddlePoint) {
        saddlePoints.push({ column: currentElementIndex + 1, row: currentRow + 1 });
      }
    }

  }

  return saddlePoints;
};

const getHighestRowElement = (row) => {
  const getMax = (a, b) => Math.max(a, b);

  return row.reduce(getMax);
};

const getLowestColumnElement = (column) => {
  const getMin = (a, b) => Math.min(a, b);

  return column.reduce(getMin);
};

const getIndexes = (array, value) => {
  return array.reduce((array, element, index) => {
    if (element === value) array.push(index);
    return array;
  }, []);
};

const getColumnAsArray = (matrix, index) => {
  let columnAsArray = [];

  for (let i = 0; i < matrix.length; i++) {
      if (matrix[i].length > index) {
          columnAsArray.push(matrix[i][index]);
      }
  }

  return columnAsArray;
}