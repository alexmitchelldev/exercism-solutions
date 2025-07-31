function proverb () {
  const pieces = arguments;
  const maxPieces = 6;
  const iterations = pieces ? pieces.length < maxPieces ? pieces.length : maxPieces : 0;
  let qualifier = null;
  if (pieces && typeof pieces[pieces.length - 1] === 'object' && pieces[pieces.length - 1].qualifier) {
    qualifier = pieces[pieces.length - 1].qualifier;
  }
  let resultString = '';
  let i = 0;

  if (iterations > 1) {
    for (i; i < iterations; i++) {
      resultString += `For want of a ${pieces[i]} the ${pieces[i + 1]} was lost.\n`;
    }
  }

  if (pieces && pieces.length > 0) {
    resultString += `And all for the want of a ${qualifier ? `${qualifier} ` : ''}${pieces[0]}.`;
  }

  return resultString;
};

console.log(proverb('nail',
'shoe',
'horse',
'rider',
'message',
'battle',
'kingdom',
{ qualifier: 'horseshoe' },));