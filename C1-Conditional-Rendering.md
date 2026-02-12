1. What is conditional rendering in React? Provide a simple example.  
- A process when one to change or display different UI or componenets based on specific task or conditions 

```jsx
export default function Welcome({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Succesfully Logged In!</h1>;
  }
  return <h1>Please Sign in.</h1>;
}
```
2. Why cant we use if statements directly inside JSX? Show an alternative.  
- JS functions expects arguments to be values or expressions that contains a value now as if statement is actually a statement not an expression
- if one wants to use if statement one can use ternary operator or use an helper function if needed
3. When should you use: 
o Ternary operator 
o Logical AND (&&) 
- If one has 2 outcomes then or want for toggling purposes then use ternaary operator
- If there is only one outcome, if condition true show element if false do nothing, then use logical AND operator
4. What is an early return in a React component? Show a code sample.
- If one wants to check for specific condition at the beginning of component and return JSX immediately then use it
- Further code is prevented from running which is good if data is missing for rest of logic

```jsx
export default function UserProfile({ user }) {
  // Early return if user data hasnnot yett loaded yet
  if (!user) {
    return <p>Loading user profile...</p>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
    </div>
  )
}
```
5. What happens if a component returns: 
o null 
o undefined
- null:- React will render absolutely nothing on the screen. It is often used to hide a component and is a valid return type
- undefined:- Error will be thrown here as it is not a valid return type 
6. When is a switch statement better than a ternary? Provide a scenario.  
- When one has more than 2 or 3 exclusive conditions then use switch case
- Say for a notification returning success,warning and error then here use the switch case