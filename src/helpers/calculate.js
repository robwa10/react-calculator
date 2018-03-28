import operators from '../helpers/operators'

const operatorsArray = ['*', '+', '-', '/']

const badExpression = () => ('Bad Expression')

// Evaluate which mathamtical function should be perfomed based on operator passed
const callOperator = (operator, a, b) => {
  switch (operator) {
    case '+':
      return operators.add(Number(a), Number(b))
    case '-':
      return operators.subtract(Number(a), Number(b))
    case '*':
      return operators.multiply(Number(a), Number(b))
    case '/':
      return operators.divide(Number(a), Number(b))
    default:
      return null
  }
}

// Loop through array, calling mathmatical operations and passing appropriate values
const getTotal = (anArray) => {
  let total = anArray[0] // Initially set total as first element in array
  for (var i = 0; i < anArray.length; i++) {
    if (isNaN(Number(anArray[i]))) {
      if (operatorsArray.includes(anArray[i])) {
        total = callOperator(anArray[i], total, anArray[i + 1])
      }
    }
  }
  return total
}

// Recreate the array, calculating precedence first
const calculatePrecedence = (anArray) => {
  let arrayCopy = anArray
  let length = anArray.length

  for (var i = 0; i < length; i++) {
    let element = anArray[i]
    if (element === '*' || element === '/') {
      let total = callOperator(
        element, anArray[i - 1], anArray[i + 1]
      ).toString()
      arrayCopy.splice(i - 1, 3, total)
      calculatePrecedence(arrayCopy)
    }
  }
  return getTotal(arrayCopy)
}

// Determine if * or / operators present to save uneeded function call
const checkOperators = (anArray) => {
  if (anArray.includes('*') || anArray.includes('/')) {
    return calculatePrecedence(anArray)
  } else {
    return getTotal(anArray)
  }
}

// Calculate the amount in parens
const calculateParens = (anArray, op, cp) => {
  let arrayCopy = anArray
  let end = cp

  if (cp === -1) {
    end = undefined
  }

  const parenElements = anArray.slice(op + 1, end)
  const parenTotal = checkOperators(parenElements).toString()

  if (cp === -1) {
    let arrayStart = anArray.slice(0, op)
    arrayStart.push(parenTotal)
    arrayCopy = arrayStart
  } else {
    let totalElements = (cp - op) + 1 // Get # of elements to splice
    arrayCopy.splice(op, totalElements, parenTotal) // Swap paren elements with their total
  }

  return arrayCopy
}

// If there are parens inside of parens then the innermost parens must be calculated first
// and then the function should recursively back out, calculating innermost parens as it goes.
const findParens = (anArray, i) => {
  const openParen = anArray.indexOf('(', i)
  const closeParen = anArray.indexOf(')')

  if (anArray.includes('(') === false) { // Escape and endless loop once all parens calculated
    return checkOperators(anArray)
  // If nothing between two parens perform calculation and check for more
  } else if (anArray.indexOf('(', openParen + 1) > closeParen || anArray.indexOf('(', openParen + 1) === -1) {
    let newArray = calculateParens(anArray, openParen, closeParen)
    return findParens(newArray)
  } else { // Find parens inside parens
    return findParens(anArray, openParen + 1)
  }
}

// Exported function
const calculate = (anArray) => {
  let arrayCopy = anArray
  let lastElement = arrayCopy[arrayCopy.length - 1]
  let total

  // Trailing operator should be removed
  if (isNaN(Number(lastElement)) && lastElement !== ')') {
    arrayCopy.pop()
  }

  // Cannot calculate with more closing paren than opening
  if (arrayCopy.filter(x => x === ')').length > arrayCopy.filter(x => x === '(').length) {
    return badExpression()
  } else if (arrayCopy.length < 3) {
    return null
  } else if (arrayCopy.includes('(')) {
    total = findParens(arrayCopy).toString()
  } else {
    total = checkOperators(anArray).toString()
  }

  if (isNaN(total)) { // Final check for valid total
    return badExpression()
  }

  return total
}

export default calculate
