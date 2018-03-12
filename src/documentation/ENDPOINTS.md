# API Endpoints  
Information regarding all available endpoints can be found below. For more detailed explanations regarding functionality and logic please see appropriate documentation.   



## Calculation  

### Calculate  

Calculations are made using the exported `calculate` function.  

`import calculate from '../helpers/calculate'`

#### Invoke
&nbsp;&nbsp; `calculate(array)`

#### Arguments
&nbsp;&nbsp; array (array): An array containing the values and operators to be summed.

#### Returns
If array contains more closing parens than opening parens.   
&nbsp;&nbsp; (string): Bad Expression.  
If array is less than 3 items long.  
&nbsp;&nbsp; (null): null  
If array meets preceding criteria.  
&nbsp;&nbsp; (string): A string representation of the total.


### Operators
All operator functions are contained within an object.

`import operators from '../helpers/operators'`

#### Invoke
&nbsp;&nbsp; Addition - `operators.add(a, b)`  
&nbsp;&nbsp; Subtraction - `operators.subtract(a, b)`  
&nbsp;&nbsp; Multiplication - `operators.multiply(a, b)`  
&nbsp;&nbsp; Division - `operators.divide(a, b)`  


#### Arguments  
&nbsp;&nbsp; a (number): number to use for calculation  
&nbsp;&nbsp; b (number): number to use for calculation  

#### Returns  
&nbsp;&nbsp; (number): A new number resulting from summing the arguments.
