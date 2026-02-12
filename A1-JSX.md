1. What is JSX? How is it different from HTML? Include a tiny code example. 
- JSX is JavaScript Extension Syntax. When one wantes to use HTML and JS both in one place JSX is used there.

- One has to continuously use React.createElement() if one wants to create new HTML tags in plain JS but it becomes redundant and tedious to write same stuff again even for adding a div tag

``` javascript
// Plain Js Code

function App(){
    return React.createElement(
        "div",
        {className:"container"},
        React.createElement("p",null,"Hello World!")
    );
}
```
- So JSX make it easier to write code which is not redundant and easy to understand.
- JSX can't be dorectly read by the browser
- Internally Babel-a tranpiler  converts JSX code into plain JS containing React.createElement() function calls and then into object representation, which is read easily by browser.

``` jsx
// JSX code
function App(){
    return(
        <div className="container">
            <p>Hello World!</p>
        </div>
    );
}

```

2. What is the role of Babel in React applications? Explain what would break without it.  
- Babel is a transpiler which converts JSX code into plain JS codes which can be read by the browser.
- If one uses JSX code into the browser the browser would break and give error as browser can only read HTMl,CSS,JS codes.


3. What is the Virtual DOM and how does JSX relate to it? Use a real-world analogy.  
- When changes in components are made React creates a replica of the Real DOM called the virtual DOM.
- JSX initally renders a new Virtual DOM when component changes happen. Tbis DOM contains keys for different list items used while creating the actual DOM
- With the help of Diffing algorithm, comparison matches are made to quickly pinpoint modifications
- Then Patching is done where a set of minimal update intructions are generated and applied these changes into the actual DOM.
- Analogy 
- -  Consider changing the door color of a door of a building, Here we put the new blueprint onto the old blueprint and check what changes are done like put a light from the top 
- -  Here instead of changing the window size, rooftop of the building, we only change the door color as it was different in both of the blueprints.
- With this React save a lot of performance overhead.

4. Why do we use className instead of class in JSX? Show a small example. 

- In React, while object representation React has a props object with a class property with a value active
- Now in JS class is a reserved word so if tried to access props.class it will give error 
- So for this reason className is used instead of class
5. Why must JSX have a single parent element? Show both an incorrect and corrected 
version.  
- Just like in C code or any compiled or interpretable code when writing a function it returns a single entity not multiple entities, similarly that logic happens here as well, JSX returns a single parent element
- JSX wraps every chil elements into a single element and returns it

```jsx
// Incorrect version
export default function Bio(){
    return(
        <div>
            <h1>Hello World!</h1>
        </div>
        <div>
            <h1> Today is Wednesday</h1>
        </div>
    )
} 
```
```jsx
// Correct version
export default function Hello(){
    return(
        <div>
            <div>
                <h1>Hello World!</h1>
            </div>
            <div>
                <h1> Today is Wednesday</h1>
            </div>
        </div>
    )
} 
```
6. What are fragments and why are they useful? Provide a sample component using 
fragments.  
- `<></>` these tags are called fragments.
- Fragments are empty tags when create a component one uses multiple div statements making code-readability poor so to understand which is the parent element fragments are used for it. 
- Without leaving any trace in the browser tree one can create multiple groups from fragments.
```jsx
export default function Hello(){
    return(
        <>
            <div>
                <h1>Hello World!</h1>
            </div>
            <div>
                <h1> Today is Wednesday</h1>
            </div>
        </>
    )
} 
```

7. What is the difference between: 
 <> </> 
 `<Fragment> </Fragment>` 
 Explain when you might prefer each. 

- `<></>` are called empty tags called Fragments. They are mainly used to denote parent tag. These are used to group multiple tags into a single tag without any trace in the browser tree.
- `<Fragment></Fragment>` is used when one wants to pass a key as a prop then it is used.

- When one just wants multiple tags to be present into a single parent wrapper then the short hand `<></>` method should be used
- But when one is passing a key inside the prop. Then `<Fragment></Fragment>` is used there.