const CORNER = '+';
const VERITCAL_SIDE = '|';
const HORIZONTAL_SIDE = '-';

function getRowCornerIndexes (row) {
  let indexes = [];

  row.forEach((space, index) => {
    if (space === CORNER) {
      indexes.push(index);
    }
  })

  return indexes;
}

function getColumn (diagram, index, rowStart, rowEnd) {
  let column = [];

  diagram.forEach((row, y) => {
    if (rowStart !== null && rowEnd !== null) {
      if (y >= rowStart && y <= rowEnd) {
        column += row[index];
      }
    } else {
      column += row[index];
    }
    
  });

  return column;
}

function getCornerIndexes (diagram) {
  let cornerIndexes = [];
  let rowCornerIndexes = [];

  diagram.forEach((row) => {
    rowCornerIndexes = getRowCornerIndexes(row.split(''))
    cornerIndexes.push(rowCornerIndexes);
  });   

  return cornerIndexes;
}

function rowHasMatchingCornerIndexes (row, corner1, corner2) {
  return row.indexOf(corner1) > -1 && row.indexOf(corner2) > -1;
}

function isHorizontalSide (side) {
  return side.split('').every((el) => { return el === HORIZONTAL_SIDE || el === CORNER});
}

function isVerticalSide (side) {
  return side.split('').every((el) => { return el === VERITCAL_SIDE || el === CORNER});
}

function isValidRectangle(diagram, corner1, corner2, row1, row2) {
  const topSide = isHorizontalSide(diagram[row1].substring(corner1, corner2));
  const rightSide = isVerticalSide(getColumn(diagram, corner2, row1, row2));
  const bottomSide = isHorizontalSide(diagram[row2].substring(corner1, corner2));
  const leftSide = isVerticalSide(getColumn(diagram, corner1, row1, row2));

  return (topSide && rightSide && bottomSide && leftSide);
}

function countRectangles (corners, diagram) {
  let rectangles = 0;
  let topLeftCornerIndex = null;
  let topRightCornerIndex = null;

  corners.forEach((row1, row1Index) => {
    for (let i = 0; i < row1.length; i++) {
      topLeftCornerIndex = row1[i];
      for (let j = i + 1; j < row1.length; j++) {
        topRightCornerIndex = row1[j];

        corners.forEach((row2, row2Index) => {
          if (row2Index > row1Index && rowHasMatchingCornerIndexes(row2, topLeftCornerIndex, topRightCornerIndex)) {
            if (isValidRectangle(diagram, topLeftCornerIndex, topRightCornerIndex, row1Index, row2Index)) {
              rectangles++;
            }
          }
        })
      }
    }
  });

  return rectangles;
}

export function count(diagram) {
  const cornerIndexes = getCornerIndexes(diagram);

  return countRectangles(cornerIndexes, diagram)
}