# Calculator Logic  
Documentation relating the files found within `../src/helpers/`.  

### Table of Contents
[calculate.js](https://github.com/robwa10/react-calculator/blob/master/src/documentation/HELPERS.md#calculatejs)  
[operators.js](#operatorsjs)  
[parse-string.js](#parse-string)  

## calculate.js  

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

## operators.js

### `operator.add(a, b)`
Adds the two values passed.

#### Import
`import operators from '../helpers/operators'`

#### Arguments  
a (number): number to use for calculation  
b (number): number to use for calculation  

#### Returns  
(number): The resulting value.
___

### `operator.subtract(a, b)`
Subtracts the b from a.

#### Import
`import operators from '../helpers/operators'`


#### Arguments  
a (number): number to use for calculation  
b (number): number to use for calculation  

#### Returns  
(number): The resulting value.
___

### `operator.multiply(a, b)`
Multiplies the two values passed.

#### Import
`import operators from '../helpers/operators'`


#### Arguments  
a (number): number to use for calculation  
b (number): number to use for calculation  

#### Returns  
(number): The resulting value.
___

### `operator.divide(a, b)`
Divides a by b.

#### Import
`import operators from '../helpers/operators'`


#### Arguments  
a (number): number to use for calculation  
b (number): number to use for calculation  

#### Returns  
(number): The resulting value.
___
