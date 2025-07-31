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

function getCornersData (diagram) {
  let cornersData = [];
  let rowData = {
    diagramRow: null,
    corners: []
  };

  diagram.forEach((row, i) => {
    rowData = {
      diagramRow: i,
      corners: getRowCornerIndexes(row.split(''))
    };
    
    if (rowData.corners.length > 0) {
      cornersData.push(rowData);
    }
  });   

  return cornersData;
}

function rowHasCornersAtIndexes (row, corner1, corner2) {
  return row.indexOf(corner1) > -1 && row.indexOf(corner2) > -1;
}

function isHorizontalSide (side) {
  return side.split('').every((el) => { return el === HORIZONTAL_SIDE || el === CORNER});
}

function isVerticalSide (side) {
  return side.split('').every((el) => { return el === VERITCAL_SIDE || el === CORNER});
}

function hasValidSides(diagram, corner1, corner2, row1, row2) {
  const topSide = isHorizontalSide(diagram[row1].substring(corner1, corner2));
  const rightSide = isVerticalSide(getColumn(diagram, corner2, row1, row2));
  const bottomSide = isHorizontalSide(diagram[row2].substring(corner1, corner2));
  const leftSide = isVerticalSide(getColumn(diagram, corner1, row1, row2));

  return (topSide && rightSide && bottomSide && leftSide);
}

function isAfterCurrentCorner (corner1Index, corner2Index) {
  return corner2Index > corner1Index;
}

function countRectangles (corners, diagram) {
  let rectangles = 0;

  corners.forEach((row1) => {
    row1.corners.forEach((corner1, corner1Index) => {
      row1.corners.forEach((corner2, corner2Index) => {
        if (isAfterCurrentCorner(corner1Index, corner2Index)) {
          corners.forEach((row2) => {
            if (row2.diagramRow > row1.diagramRow && rowHasCornersAtIndexes(row2.corners, corner1, corner2)) {
              if (hasValidSides(diagram, corner1, corner2, row1.diagramRow, row2.diagramRow)) {
                rectangles++;
              }
            }
          })
        }
      });
    });
  });

  return rectangles;
}

export function count(diagram) {
  const cornersData = getCornersData(diagram);

  return countRectangles(cornersData, diagram)
}