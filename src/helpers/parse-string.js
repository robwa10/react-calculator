const parseString = (s) => {
  let myArray = []
  let tempString = '' // Place to hold numbers in case they are more than one digit
  for (var i = 0; i < s.length; i++) {
    if (isNaN(s[i]) && s[i] !== '.') { // Check if s[i] is an operator or parens
      if (s[i] === '-' && (i === 0 || s[i - 1] === '(')) { // Check if it's a minus or negative number
        tempString = tempString + s[i] // Add negative before adding number
      } else if (tempString.length !== 0) { // Check if a number has already been added
        myArray.push(tempString) // Push number
        tempString = '' // Reset tempString for new number
        myArray.push(s[i]) // Push operator
      } else {
        myArray.push(s[i])
      }
    } else {
      if (i === s.length - 1) { //  Check if it's last item in string
        tempString = tempString + s[i]
        myArray.push(tempString)
      } else {
        tempString = tempString + s[i]
      }
    }
  }
  return myArray
}

export default parseString
