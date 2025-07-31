// Variable names key
// _s {string}
// _b {boolean}
// _n {number}
// _a {array}
// _regexp {regExp}

const OPERATORS = {
  plus: 'plus',
  minus: 'minus',
  multiplied: 'multiplied',
  divide: 'divide'
}

// Parsing functions
// http://www.neiland.net/blog/article/javascript-isnumeric/
const isNumeric = _sNumber => {
  return !isNaN(parseFloat(_sNumber)) && isFinite(_sNumber);
}

const detectOperator = (_sQuestion, _nIndex) => {
  let _sOperatorName = null;
  for (const operator in OPERATORS) {
    if (_sQuestion.substring(_nIndex, _nIndex + operator.length) === operator) {
      _sOperatorName = operator;
      return _sOperatorName;
    }
  }
  return _sOperatorName;
}

const parseNumbersAndOperators = _sQuestion => {
  let _aParsedNumbersAndOperators = [];
  let _sNumber = '';
  let _bNumberDetected = false;
  let _bNegativeNumber = false;

  for (let i = 0; i < _sQuestion.length; i++) {
    // Number Detection
    if (_sQuestion[i] === '-') {
      _bNegativeNumber = true;
    }

    if (isNumeric(_sQuestion[i])) {
      _bNumberDetected = true;
      _sNumber += _sQuestion[i];
    }

    if (_bNumberDetected) {
      if (!isNumeric(_sQuestion[i])) {
        _bNumberDetected = false;
        if (_bNegativeNumber) {
          _aParsedNumbersAndOperators.push(-Math.abs(Number(_sNumber)));
          _bNegativeNumber = false;
        } else {
          _aParsedNumbersAndOperators.push(Number(_sNumber));
        }
        _sNumber = '';
        _bNumberDetected = false;
      }
    }

    // Operator Detection
    if (detectOperator(_sQuestion, i) !== null) {
      let _sDetectedOperator = detectOperator(_sQuestion, i);
      _aParsedNumbersAndOperators.push(_sDetectedOperator);
    }
  }

  return _aParsedNumbersAndOperators;
};

//Error detection functions
const detectUnknownOperation = _sQuestion => {
  const _regexpUnknownOperations = /cubed|Who/g;
  let _bResult = false;

  _bResult = _sQuestion.match(_regexpUnknownOperations);

  return _bResult;
};

const detectSyntaxError = _sQuestion => {
  const _aParsedNumbersAndOperators = parseNumbersAndOperators(_sQuestion);
  const _nTotalNumbers = _aParsedNumbersAndOperators.filter(_nNumber => typeof (_nNumber) === 'number').length;
  const _nTotalOperators = _aParsedNumbersAndOperators.filter(_sOperator => typeof (_sOperator) === 'string').length;
  let _bResult = false;

  _bResult = (_nTotalNumbers === _nTotalOperators) || detectRepeatedNumberOrOperator(_aParsedNumbersAndOperators);

  return _bResult;
};

const detectRepeatedNumberOrOperator = _aParsedNumbersAndOperators => {
  let _bResult = false;

  for (let i = 0; i < _aParsedNumbersAndOperators.length; i++) {
    if (typeof (_aParsedNumbersAndOperators[i]) === 'number') {
      if (typeof (_aParsedNumbersAndOperators[i + 1]) === 'number') {
        _bResult = true;
        return _bResult;
      }
    }

    if (typeof (_aParsedNumbersAndOperators[i]) === 'string') {
      if (typeof (_aParsedNumbersAndOperators[i + 1]) === 'string') {
        _bResult = true;
        return _bResult;
      }
    }
  }

  return _bResult;
};

const calculate = _aParsedNumbersAndOperators => {
  let _nResult = _aParsedNumbersAndOperators[0];

  for (let i = 0; i < _aParsedNumbersAndOperators.length; i++) {
    if (typeof (_aParsedNumbersAndOperators[i]) === 'string') {
      switch (_aParsedNumbersAndOperators[i]) {
        case (OPERATORS.plus):
          _nResult += _aParsedNumbersAndOperators[i + 1];
          break;
        case (OPERATORS.minus):
          _nResult -= _aParsedNumbersAndOperators[i + 1];
          break;
        case (OPERATORS.multiplied):
          _nResult *= _aParsedNumbersAndOperators[i + 1];
          break;
        case (OPERATORS.divide):
          _nResult /= _aParsedNumbersAndOperators[i + 1];
          break;
      }
    }
  }

  return _nResult;
};

export const answer = _sQuestion => {
  // Check for errors first
  if (detectUnknownOperation(_sQuestion)) {
    throw 'Unknown operation';
  }

  if (detectSyntaxError(_sQuestion)) {
    throw 'Syntax error';
  }

  // If no errors, do calculation
  const _aParsedNumbersAndOperators = parseNumbersAndOperators(_sQuestion);
  const _nResult = calculate(_aParsedNumbersAndOperators);
  return _nResult;
};
