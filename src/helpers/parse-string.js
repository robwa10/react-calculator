const parseString = (s) => {
  let myArray = []
  let tempString = '' // Place to hold numbers in case more than one digit
  for (var i = 0; i < s.length; i++) {
    if (isNaN(s[i])) { // Check if s[i] is not a number
      if (tempString.length !== 0) { // Check if a number has already been added
        myArray.push(tempString) // Push number
        tempString = '' // Reset tempString for new number
        myArray.push(s[i]) // Push operator
      } else {
        myArray.push(s[i])
      }
    } else {
      if (i === s.length - 1) { //  Check if it's last item in string
        myArray.push(s[i])
      } else {
        tempString = tempString + s[i]
      }
    }
  }
  return myArray
}

export default parseString
