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