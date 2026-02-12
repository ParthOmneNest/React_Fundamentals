10. Why do we use map() to render lists in React?  
- When we have an array of information and want to show that info in UI we can do that using map() method
- this method return an array and that array can be taken by React and place it in the DOM directly.
11. What is a key in React?  
- When creating a map this key acts as an unique identifier and tells React which item it belongs.
12. Why must keys be unique?  
- For React to distinguish between elements in UI the keys should be unique if they are not unique then UI which was not supposed to be updated will be updated which is not correct.
- It is similar to folder names in windows Explorer.
13. Why is using an array index as a key considered a bad practice?  
- If one sorts or deletes an item from middle of a list then indexes of remaining items will change
- here React will think the initialy which was index 1 is now index 0 which will cause it to re-use wrong state for wrong component.
- Order of rendering items will change if one randomly generates key as well.
14. What problems can occur if keys change between renders?  
- If keys changes then React will think this is a completely new Component and will delete the old one in DOM and create a new DOM doing unnecessary task and decreasing performance efficiency
15. What is component extraction in list rendering? Provide a brief example.  
- Taking the elements inside the map() and moving into another separate component means component extraction.
```jsx

export const FeaturesSection =()=>{
    const features = [
      { id: 'feat-01', text: 'Fast' },
      { id: 'feat-02', text: 'Secure' }
    ];
    return(
        <div>
            {features.map((feature)=>(
                <FeatureCard
                    key={feature.id}
                    text={feature.text}
                />
            ))}
        </div>
    )
}
```
