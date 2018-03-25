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
Container for components used to display input and result.  

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

## Components

### button.js  
A simple button.

#### Properties  

|Name|Type|Description|
|-|-|-|
|buttonText|string|String to be displayed in the button.|
|onClick|function|Function to be executed on button press.|

#### Render  
`<button onClick={onClick}>{buttonText}</button>`  

___  

### expression.js  
Used to display user input/mathematical expression.  

#### Properties  

|Name|Type|Description|
|-|-|-|
|expression|string|Text to be displayed as current mathematical expression.|
|style|object|(optional) Object containing styling for expression.|

#### Render  
    <div className='expression-container' style={style}>
      <span className='expression-text'>{expression}</span>
    </div>

___  

### header.js  
A simple header.  

#### Properties  
none

#### Render  
`<header><h1>React-Redux Calculator</h1></header>`  

___  

### input-container.js  
Used to hold all input buttons.  

#### Properties  

|Name|Type|Description|
|-|-|-|
|operators|array|Array of operators to be displayed as individual buttons.|

#### Render  
    <div className='input-container'>
      <div className='numberpad-container'>
        <ButtonContainer
          buttonArray={numberRowOne}
          myClass='number-row'
        />
        <ButtonContainer
          buttonArray={numberRowTwo}
          myClass='number-row'
        />
        <ButtonContainer
          buttonArray={numberRowThree}
          myClass='number-row'
        />
        <ButtonContainer
          buttonArray={numberRowFour}
          myClass='number-row'
        />
        <ButtonContainer
          buttonArray={numberRowFive}
          myClass='number-row'
        />
      </div>
      <ButtonContainer
        buttonArray={operators}
        myClass='operators-container'
      />
    </div>

___  

### result.js  
Used to display evaluation of current mathematical expression.  

#### Properties  

|Name|Type|Description|
|-|-|-|
|result|string|Text to be displayed as evaluation of the mathematical expression.|

#### Render  
    <div className='result-container'>
      <span className='result-text'>{result}</span>
    </div>

___
