const badExpression = () => ('Bad Expression')

const add = (a, b) => (a + b)
const subtract = (a, b) => (a - b)
const multiply = (a, b) => (a * b)
const divide = (a, b) => (a / b)

const checkIfNumber = a => isNaN(Number(a))

// Evaluate which mathamtical function should be perfomed based on operator passed
const sum = (operator, a, b) => {
  switch (operator) {
    case '+':
      return add(Number(a), Number(b))
    case '-':
      return subtract(Number(a), Number(b))
    case '*':
      return multiply(Number(a), Number(b))
    case '/':
      return divide(Number(a), Number(b))
    default:
      return null
  }
}

// Operators must be identified and numbers either side summed
const getTotal = anArray => {
  let total = anArray[0]
  anArray.forEach((item, index) => {
    if (checkIfNumber(item)) {
      total = sum(item, total, anArray[index + 1])
    }
  })
  return total
}

// Sum precedence operators and recreate the array
const calculatePrecedence = (anArray) => {
  let arrayCopy = anArray

  arrayCopy.forEach((item, i) => {
    if (item === '*' || item === '/') {
      let total = sum(
        item, anArray[i - 1], anArray[i + 1]
      ).toString()
      arrayCopy.splice(i - 1, 3, total)
      calculatePrecedence(arrayCopy)
    }
  })
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

const calculateParens = (anArray, op, cp) => {
  let arrayCopy = anArray
  let parenTotal
  let totalSpliceElements

  if (cp === -1) {
    totalSpliceElements = arrayCopy.length - op
    parenTotal = checkOperators(arrayCopy.slice(op + 1)).toString()
  } else {
    totalSpliceElements = (cp - op) + 1
    parenTotal = checkOperators(arrayCopy.slice(op + 1, cp)).toString()
  }
  arrayCopy.splice(op, totalSpliceElements, parenTotal) // Swap paren elements with their total
  return arrayCopy
}

// If there are parens inside of parens then the innermost parens must be calculated first
// and then the function should recursively back out, calculating innermost parens as it goes.
const findParens = (anArray, i) => {
  let openParen = anArray.indexOf('(', i)
  let closeParen = anArray.indexOf(')', i)
  let nextParen = anArray.indexOf('(', openParen + 1)

  if (openParen !== -1) {
    if (nextParen !== -1) {
      return findParens(anArray, nextParen)
    }
    return findParens(
      calculateParens(anArray, openParen, closeParen)
    )
  }
  return checkOperators(anArray)
}

// Exported function
const calculate = (anArray) => {
  let arrayCopy = anArray
  let lastElement = arrayCopy[arrayCopy.length - 1]
  let total

  // Trailing operator or open paren needs to be removed to allow calculation
  if (checkIfNumber(lastElement) && lastElement !== ')') {
    arrayCopy.pop()
  }

  // Check for more closing paren than opening, less than 3 elements, or parens to be calculated first
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
