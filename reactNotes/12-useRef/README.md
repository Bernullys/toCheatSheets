useRef is use Reference

Different between useState and useRef

    useState() = Re-renders the component when the state value changes. Triggers re-renders.

    useRef() = "use Reference" Does not cause re-renders when its value changes. Don't triggers re-renders.
            When you want a component to "remember" some information,
            but you don't want that information to trigger new renders.

        Good to:
            1. Accesing/Interacting with DOM elements.
            2. Handling Focus, Animations, and Transitions.
            3. Managing Timers and Intervals.

useRef returns an object that have a property of current.

