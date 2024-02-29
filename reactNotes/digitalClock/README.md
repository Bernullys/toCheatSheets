This is a great exercice. We use a state to initialize a Date object in a variable time.
Then we useEffect we define a function that uses setInterval callback to set state of the time. Right away we clearInterval to better performance.
Then we define the function formatTime that will return the clock in the component.