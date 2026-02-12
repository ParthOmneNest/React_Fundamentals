16. What is component composition? Explain using a “page layout” example.  
- Component composition is when one combines small components to create a bigger complex interface.
- For example the basic layout of a web page goes like navbar,Main content, footer
- If suppose a PageLayout.jsx file takes children as props and uses the children to write the Main Content
```jsx
const PageLayout = ({ children }) => {
  return (
    <div className="container">
      <nav>Navbar (Always Here)</nav>
      
      <main className="content">
        {/* This is the "hole" where our page content will go */}
        {children}
      </main>
      
      <footer>Footer (Always Here)</footer>
    </div>
  );
};
```
- Now one can use PageLayoput.jsx inside other jsx files like the HomePage.jsx or inside Footer as well.

```jsx
import { PageLayout } from './PageLayout';

const HomePage = () => {
  return (
    <PageLayout>
      {/* Everything inside here becomes the 'children' prop */}
      <h1>Welcome to our Store!</h1>
      <p>Check out our latest products below.</p>
      <button>Shop Now</button>
    </PageLayout>
  );
};
```
17. Why is composition preferred over inheritance in React? Give a practical example. 
- With Composition code reusability becomes easier 
- If a parent class method is changed then code might break for all children but that's not case for composition as components are independent
- One can understand from where the data is coming with props but in inheritance it is often tougher to identify the source of the data.

18. What is the benefit of breaking UI into small components? Mention at least three benefits.  
- Often Breaking files into components grants many uses to the user Some of them are:-
- - Code Reusability:- DRY(Don't Repeat Yourself) concept- one can re-reuse components again and again wherever it is required.
- - Easy To Debug:- If a bug occurs then it is easy to identify the source of the bug because to file readability increases with help of props as they make data flow explicit.
- - Minimum Changes(Maintanability):- If one wants to just replace the name of the title as per the user then a simple prop will be able to do for the users instead of manually doing for all users

19. Propose a recommended folder structure for a small React app (5–10 components). 
- If my src folder is the actual folder containing the App.jsx file then the folder structure I recommend would be this:-
- - src/components/ :- for reusable UI components
- - src/assets/ :- for images,fonts
- - src/pages/ :- Contains components that represent entire page will contain component composition here
- - src/layout/ :- if wants to shared layout like header,footer or navbar 
20. What is meant by a reusable component? Give two examples from typical web apps.  
- When one set of code is used again and again we can create a component for that called the reusable component
- For Example:-
- - The navbar footer,sidebar might be same for many pages in an application so instead of creating them again in specific pages why not use create a component and use that component again in the specific pages.
- - When a specific form of styling is to be used again say in a Card Component the border and font-color is same for all then inside the Card component we can pass children as a prop embedded inside the styling which is required. Sop whatever the content inside Card might be it will be kept with same styling everywhere.