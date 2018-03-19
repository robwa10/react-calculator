# Helpers  
Documentation relating the files found within `../src/helpers/`.  

### Table of Contents
[calculate.js](#calculatejs)  
 - Logic for making calculations.    

[operators.js](#operatorsjs)  
 - Object containing methods for computing sums with operators.  

[parse-string.js](#parse-stringjs)  
 - Used to parse user input string into array for calculation.  

## calculate.js  

### Exported function `calculate(array)`  

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
</br>
</br>
</br>
## operators.js

### Exported object `operators`  
Available object methods are as follows.  

### `operators.add(a, b)`
Adds the two values passed.

#### Import
`import operators from '../helpers/operators'`

#### Arguments  
a (number): number to use for calculation  
b (number): number to use for calculation  

#### Returns  
(number): The resulting value.

### `operators.subtract(a, b)`
Subtracts b from a.

#### Import
`import operators from '../helpers/operators'`

#### Arguments  
a (number): number to use for calculation  
b (number): number to use for calculation  

#### Returns  
(number): The resulting value.

### `operators.multiply(a, b)`
Multiplies the two values passed.

#### Import
`import operators from '../helpers/operators'`

#### Arguments  
a (number): number to use for calculation  
b (number): number to use for calculation  

#### Returns  
(number): The resulting value.

### `operators.divide(a, b)`
Divides a by b.

#### Import
`import operators from '../helpers/operators'`

#### Arguments  
a (number): number to use for calculation  
b (number): number to use for calculation  

#### Returns  
(number): The resulting value.
</br>
</br>
</br>
## parse-string.js  

### Exported function `parseString(s)`  

Parses a string into an array. Numbers of more than one digit are considered one array item.

#### Import
`import parse-string from '../helpers/parse-string'`

#### Arguments
s (string): A string representing numbers, operators and parens to be parsed.

#### Returns  
(array): An array of items.
