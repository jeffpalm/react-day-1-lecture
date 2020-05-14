# React Day 1

## What is React
- JavaScript library that was created and is maintained by Facebook
- Used to manage the DOM and create highly performant user interfaces
- Documentation: reactjs.org
- Makes front-end JS development easier.
- Allows us to make SPAs (Single Page Apps)
- Features
    - Component Based Architecture
    - Virtual DOM handling
    - JSX
    - Unidirectional Data Flow

## Component Based Architecture
- Code is split into chunks called components
- Makes code highly reusable and easy to debug
- *Separation of Concerns*
    - Coding concept
- Adam thinks of components like Legos

## The Virtual DOM
- Light-weight copy of the DOM
- Makes changes to the user-interface more performant
- When a change is made to the virtual DOM, a process known as reconciliation happens between the virtual DOM and the actual DOM
- Only necessary changes to the UI are made to the actual DOM, which increases performance


## create-react-app
- npm = Node Package Manager
- npx create-react-app name-of-app

## Components
1) Class Components
    - Aka. Stateful Components
```JS
import React, {Component} from "react";
 
class ClassComponent extends Component {
  // render method
  render() {
    return <h1>Hello, I'm a class component</h1>;
  }
}
```
2) Functional Components
    - Aka. Stateless components

```JS
import React from "react";
 
const FuncComponent = () => {
    return(
      <h1>Hello, I'm a functional component</h1>;
    )
}
 
export default FuncComponent;
```

## JSX
- It's actually known as JSX, which is a syntax extension for JavaScript that is structured similarly to HTML.
- When working with JSX, you have access to all the same elements that you would with HTML.
- An important difference between HTML and JSX is that events in JSX will be camelCased and the class attribute is called className, due to class being a reserved keyword in JavaScript.

**HTML**
```HTML
<div>
    <h1 class="heading">This is HTML</h1>
    <p onclick={this.handleClick}>It looks very similar to JSX.</p>
</div>
```

## Unidirectional Data Flow
- React is designed for data to flow unidirectionally. This means the data is intended to flow in one direction. More specifically, data should flow from the top of the component tree downward. The only way you should change data from the bottom up is by passing down a function that originates from the top.

# React Day 2
## Passing Props
- When passing props from component to component, we pass them directly into the components tag
```JSX
import React from 'react';
import ChildComponent from './ChildComponent';
 
class ParentComponent extends Component {
    constructor(){
        super();
 
        this.state = {
            name: 'Tayte'
        }
    }
 
    render(){
        return (
            <div>
                <ChildComponent myName={this.state.name}/>
            </div>
        )
    }
}
 
export default ParentComponent
```
## Receiving Props: Functional
- Receiving Props is different depending on whether the component receiving props is a class or functional component. Accessing props from a functional component looks like this:
```JSX
import React from 'react';
 
const ChildComponent = (props) => {
    return (
        <h1>My name is: {props.myName}</h1>
    )
};
 
export default ChildComponent;
```


## Receiving Props: Class
- When receiving props in a class component we need to utilize context. Note that the context of 'this' in a class component is the component itself.
```JSX
import React, {Component} from 'react';
 
class ChildComponent extends Component {
    render(){
        return (
            <h1>My name is: {this.props.myName}
        )
    }
}
 
export default ChildComponent;
```

## Passing Methods
- When passing methods as props, we need to bind the method to its component so it maintains the proper context. Once bound, the method an be passed like any other prop
```JSX
constructor(){
        super();
 
        this.state = {
            name: 'Matt'
        }
 
        this.changeName = this.changeName.bind(this);
    }
 
    changeName(){
        this.setState({
            name: 'Tayte V2'
        })
    }
	
render(){
  return (
    <div>
      <ChildComponent 
        myName={this.state.name} 
        changeName={this.changeName}/>
    </div>
  )
}
 
class ChildComponent extends Component {
  render(){
    return (
      <div>
        <h1>My name is: {this.props.myName}</h1>
          <button onClick={this.props.changeName}>Update Name</button>
      </div>
    )
  }
}
 
export default ChildComponent;

  ```

