11. What is a functional component? Provide a simple example.  
- Functional Component is a JS function which allows us to combine multiple UI styles, markups Javascript and more into a single reusable component.
- It is used as a resuable tool for interactivity in React.
12. What is the difference between: - Function declaration component - Arrow function component 
Show one example of each.
- Arrow Functions are used as a one-liner syntax version of a functional component version
- It is used as a readble format for devs and is precisely used in places where one is too lazy to write the whole general function syntax
```javascipr


```
```jsx
// Functional declaration component
export  function Hello(){
    return <h1>Hello World!</h1>
}
```
```jsx
// Arrow Function component
export const Hello = ()=>{
    return <h1>Hello World!</h1>
}
```

  
13. Why should component names start with PascalCase? Explain any issues that may arise 
otherwise.  
- In order to tell the difference between tags and components the casing is required.
- `<header>` :- uses lowercase to indicate header is a tag
- `<Header>` :- uses uppercase to indicate it might be a component or a function name

- Standard JS doesn't uses the kebab cae(uses dashes in naming) instead uses camelCase which is mainly used for attributes,props and variables
Css:- background-color -> JSX:- backgroundColor.

- If the lowercase and uppercase tags re not properly assigned then to identify whether the term is used as an attribute or an function would be difficult so for that the casing is important
14. What is the difference between: - Default export - Named export. show how to import both types.
- while using default export one can use any name to import that function
- but while using named export one has to use the same name as used while exportning exnclosed in curly brackets

```jsx
// default export
export default function Bio(){
    return <h1>My name is Parth</h1>
}

// Inside the App.jsx
import MyBio from './Bio.js'
```

```jsx
// named export
export  function Bio(){
    return <h1>My name is Parth</h1>
}

// Inside the App.jsx
import {Bio} from './Bio.js'
```
  
15. What is an implicit return in arrow functions? Provide an example within a React 
component.  
- When one component doens't have any logic inbound to it just a return statement will work then the implicit return in arrow functions is used
- here the return keyword is hidden inside the parentheses
- here only expression can be returned can't declare variables here.

```jsx
// Implicit return
export const Hello= ()=>(
    <h1>Hello World</h1>
)
```
- when ones code contains some logic within the component then the explicit return is used
- here curly braces are used

```jsx
// Explicit return
export const Hello= ()=>(
    const names= "Parth"
    return {
        <h1>Hello {name}</h1>
    }
)
```
