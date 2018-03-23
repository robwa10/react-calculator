# React Containers and Components  
Documentation relating to all React Containers and Components including props and any component based handling of state. For documentation of Redux state please see [REDUCERS.md](REDUCERS.md).  

## Containers    

### button-container.js  
Used to hold multiple `<Button />`, i.e. a number pad.  

#### Properties  

|Name|Type|Description|
|-|-|-|
|buttonArray|array|An array of strings to be used as button text.|
|item|string|Each item mapped from buttonArray|
|myClass|string|className to be passed to button-container|

#### Methods
`buttonClick(button)`  
Uses a switch statement to validate which value was passed when onClick is called by `<Button />`.  

|Case|Invokes|
|----|-------|
|'DEL'|this.props.deleteElement(this.props.input)|
|'='|this.validateEquals()|
|'CLR'|this.props.clearAll()|
|default|this.props.inputString(this.props.input, button)|

`validateEquals()`  
Checks if `this.props.result` is not null. If true invokes `this.props.calculateResult(this.props.result)`  

#### Render  
    <div className={this.props.myClass}>
      {this.props.buttonArray.map(item => (
        <Button
          key={item}
          buttonText={item}
          onClick={() => this.buttonClick(item)}
        />
      ))}
    </div>

___  
### expression-result-container.js  
Container for components used to display input string and result.  

#### Properties  

|Name|Type|Description|
|-|-|-|
|input|string|string representation of the user input|
|result|string|string representation of the result of input|

#### Render  
    <div className='expression-result-container'>
      <Expression
        expression={props.input}
        style={textStyle} />
      <Result result={props.result} />
    </div>
