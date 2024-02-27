useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one): // it's like a SIDE CODE
    This component re-renders 
    This component mounts   // this is when we create and append an element to the DOM
    The state of a value changes 

useEffect(function, [dependencies])  // The side code is written in this function, and as option we can pass it an array of dependencies

1. useEffect(() => {})              // Runs after avery re-render
2. useEffect(() => {}, [])          // Runs only on mount. Will perform only once 
3. useEffect(() => {}, [value])     // Runs on mount + when value changes

USES
#1 Event Listeners
#2 DOM manipulation
#3 Subscriptions (real-time updates)
#4 Fetching Data from an API
#5 Clean up when a component unmounts
