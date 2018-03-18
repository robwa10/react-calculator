import operators from '../helpers/operators'

const operatorsArray = ['*', '+', '-', '/']

const badExpression = () => ('Bad Expression')

// Evaluate which mathamtical function should be perfomed based on operator passed
const callOperator = (op, a, b) => {
  switch (op) {
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
const getTotal = (v) => {
  let total = v[0] // Initially set total as first element in array
  for (var i = 0; i < v.length; i++) {
    if (isNaN(Number(v[i]))) {
      if (operatorsArray.includes(v[i])) {
        total = callOperator(v[i], total, v[i + 1])
      }
    }
  }
  return total
}

// Recreate the array, calculating precedence first
const calculatePrecedence = (v) => {
  // let isOdd = (num) => (num % 2)
  let myArray = v // Create a copy to mutate
  for (var i = 0; i < v.length; i++) {
    if (isNaN(Number(v[i]))) { // Check for operator
      if (v[i] === '*' || v[i] === '/') {
        // Calculate total of operation on values
        let t = getTotal([v[i - 1], v[i], v[i + 1]]).toString()
        // Replace original operator and values in array copy
        myArray.splice(i - 1, 3, t)
        return calculatePrecedence(myArray) // Call function again, passing mutated array
      }
    }
  }
  return getTotal(myArray)
}

// Determine if * or / operators present
const checkOperators = (v) => {
  if (v.includes('*') || v.includes('/')) {
    return calculatePrecedence(v)
  } else {
    return getTotal(v)
  }
}

// Calculate amount in parens first
const calculateParens = (v, op, cp) => {
  let arrayCopy = v // Copy of array to mutate
  let end = cp

  if (cp === -1) {
    end = undefined
  }

  const parenElements = v.slice(op + 1, end) // Get elements in parens to sum
  const parenTotal = checkOperators(parenElements).toString() // Calculate amount in parens

  if (cp === -1) {
    let arrayStart = v.slice(0, op)
    arrayStart.push(parenTotal)
    arrayCopy = arrayStart
  } else {
    let totalElements = (cp - op) + 1 // Get # of elements to splice
    arrayCopy.splice(op, totalElements, parenTotal) // Swap paren elements with their total
  }

  return arrayCopy
}

const findParens = (v, i) => {
  const ac = v // Copy of array
  const op = ac.indexOf('(', i) // Get index of opening paren
  const cp = ac.indexOf(')') // Get index of first closing paren

  // If no parens return array
  if (ac.includes('(') === false) {
    return checkOperators(ac)
  // If nothing between two parens perform calculation and check for more
  } else if (ac.indexOf('(', op + 1) > cp || ac.indexOf('(', op + 1) === -1) {
    let newArray = calculateParens(ac, op, cp)
    return findParens(newArray)
  } else { // Search again for parens without parens between
    return findParens(ac, op + 1)
  }
}

// Exported function
const calculate = (array) => {
  // Set some initial variables
  let ac = array // Copy of array to mutate
  const le = ac[ac.length - 1] // Last element in the array
  const opt = ac.filter(x => x === '(').length // Number of opening parens
  const cpt = ac.filter(x => x === ')').length // Number of closing parens

  // Check if array ends in unused operator
  if (isNaN(Number(le)) && le !== ')') {
    ac.pop()
  }

  // Check for more closing paren than opening
  if (cpt > opt) {
    return badExpression()
  } else if (ac.length < 3) {
    return null
  }

  let total = findParens(ac).toString()

  if (isNaN(total)) {
    return badExpression()
  }

  return total
}

export default calculate
