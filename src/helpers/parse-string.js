const exchangeOperator = (op) => {
  let x = op
  if (x === 'x') {
    x = '*'
  } else if (x === '÷') {
    x = '/'
  }
  return x
}

const parseString = (s) => {
  let myArray = []
  let tempString = '' // Place to hold numbers in case they are more than one digit
  for (var i = 0; i < s.length; i++) {
    let el = exchangeOperator(s[i])
    if (isNaN(el) && el !== '.') { // Check if s[i] is an operator or parens
      if (el === '-' && (i === 0 || s[i - 1] === '(')) { // Check if it's a minus or negative number
        tempString = tempString + el // Add negative before adding number
      } else if (tempString.length !== 0) { // Check if a number has already been added
        myArray.push(tempString) // Push number
        tempString = '' // Reset tempString for new number
        myArray.push(el) // Push operator
      } else {
        myArray.push(el)
      }
    } else {
      if (i === s.length - 1) { //  Check if it's last item in string
        tempString = tempString + el
        myArray.push(tempString)
      } else {
        tempString = tempString + el
      }
    }
  }
  return myArray
}

export default parseString
