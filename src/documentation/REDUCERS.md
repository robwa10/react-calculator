# Reducers  
A full listing of reducers including their default state, returned values and `switch` statements with `case` and return value for each.

## `inputString(state = '', action)`

### `case INPUT_STRING`:
Concatenates the current state with user input.  
#### Arguments  
state (string): default state is an empty string  
action.data (string): String representation of user input  
#### Returns  
(string): The new state.  

### `case DELETE_ELEMENT`:  
Deletes the last element of the input string.  
### Arguments  
state(string): Uses current state as argument.  
### Returns  
(string): String representation of the new input state.  

### `case CALCULATE_RESULT`:
Takes the passed data and calculates a result that becomes the new state.  
#### Arguments  
action.data (string): String representation of user input  
#### Returns  
(string): A string representation of the calculated result.  

### `case CLEAR_ALL`:
Resets the state to default.  
#### Arguments  
none  
#### Returns  
(string): An empty string.  
___

## `calculateResult(state = null, action)`

### `case INPUT_STRING`:
Calculates a total by concating a string, then parsing it into an array of string items and finally applying mathematical calculations to the array items.  
#### Arguments  
state (string): default state is an empty string  
action.inputState (string): The last state of the user input
action.data (string): String representation of the current user input  
#### Returns  
If array contains more closing parens than opening parens.   
(string): Bad Expression.  
If array is less than 3 items long.  
(null): null  
If array meets criteria and is mathematically computable.  
(string): A string representation of the total.  

### `case DELETE_ELEMENT`:  
Deletes the last element and recalculates result.  
### Arguments  
action.inputState(string): Previous input state.  
### Returns  
(string): String representation of the new result.

### `case CALCULATE_RESULT`:
Clears the state of calculated result.  
#### Arguments  
none
#### Returns  
(null): null  

### `case CLEAR_ALL`:
Resets the state to default.  
#### Arguments  
none
#### Returns  
(null): null
___
