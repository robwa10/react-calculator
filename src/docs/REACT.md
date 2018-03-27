# React Containers and Components  
Documentation relating to all React Containers and Components including props and any component based handling of state. For documentation of Redux state please see [REDUCERS.md](REDUCERS.md).  

## Containers    

### input-container.js  
Used to render all input buttons in appropriate containers.  

#### Properties  
|Name|Type|Description|
|-|-|-|
|operators|array|Array of operators to be displayed as individual buttons.|
|numberPad|array of arrays|Each array contains 3 elements to be rendered in a single row of the number pad.|

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
    let operators = ['DEL', '÷', 'x', '-', '+']
    let numberPad = [
      ['(', ')', 'CLR'],
      ['7', '8', '9'],
      ['4', '5', '6'],
      ['1', '2', '3'],
      ['.', '0', '=']
    ]

    return (
      <div className='input-container'>
        <div className='numberpad-container'>
          {numberPad.map(element => {
            return (
              <div className='number-row'>
                {element.map(item => (
                  <Button
                    key={item}
                    buttonText={item}
                    onClick={() => this.buttonClick(item)}
                  />
                ))}
              </div>
            )
          })}
        </div>
        <div className='operators-container'>
          {operators.map(item => (
            <Button
              key={item}
              buttonText={item}
              onClick={() => this.buttonClick(item)}
            />
          ))}
        </div>
      </div>
    )

___  

### expression-result-container.js  
Container for components used to display input and result.  

#### Properties  
|Name|Type|Description|
|-|-|-|
|input|string|String representation of the user input.|
|result|string|String representation of the result of input.|
|inputTextStyle|object|Object containing styles for expression-container. fontSize changes based on props.input.length.|

#### Render  
    <div className='expression-result-container'>
      <DisplayBox
        divClassName='expression-container'
        spanClassName='expression-text'
        divStyle={inputTextStyle}
        text={props.input}
      />
      <DisplayBox
        divClassName='result-container'
        spanClassName='result-text'
        text={props.result}
      />
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

### display-box.js  
Used to display user input/mathematical expression or expression evaluation.  

#### Properties  
|Name|Type|Description|
|-|-|-|
|text|string|Text to be displayed in the container.|
|divClassName|string|className for div.|
|spanClassName|string|className for span.|
|divStyle|object|(optional) Object containing styling for div.|
|spanStyle|object|(optional) Object containing styling for span within div.|

#### Render  
    <div className={divClassName} style={divStyle}>
      <span className={spanClassName} style={spanStyle}>{text}</span>
    </div>
___  

### header.js  
A simple header.  

#### Properties  
none

#### Render  
`<header><h1>React-Redux Calculator</h1></header>`  

___  
