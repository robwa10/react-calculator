# Endpoints  
Basic information needed for accessing all available endpoints can be found below. For more detailed explanations regarding functionality and logic please see appropriate documentation.   

## Action Creators
### `inputString(data)`  
Dispatches an action to add data to a string.  

#### Import  
`import inputString from '../actions'`  

#### Arguments  
data (string): An operator or number represented as a string to be concated to the current Input String.  

#### Returns  
(object): { type: INPUT_STRING, data }
___

### `calculateResult(data)`
Dispatches an action to calculate the final result.  

#### Import  
`import calculateResult from '../actions'`  

#### Arguments  
data (string): The final state of inputString before dispatching calculation action.  

#### Returns  
(object): { type: CALCULATE_RESULT, data }
___

## Maths

### `calculate(array)`  

Calculates a result from an array of string representations of numbers and operators.

#### Import
`import calculate from '../helpers/calculate'`

#### Arguments
array (array): An array containing the values and operators to be summed. Each item in the array should be `typeof` string.

#### Returns
If array contains more closing parens than opening parens.   
(string): Bad Expression.  
If array is less than 3 items long.  
(null): null  
If array meets criteria and is mathematically computable.  
(string): A string representation of the total.
