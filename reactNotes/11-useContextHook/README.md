Prop driling: passing props down into nested components.

I'm not quite sure why in ComponentA when we use ComponentB we asigned directly user and not props.user as in the Components C and D.


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

useContext() = React Hook that allows you to share values
                between multiple levels of components
                without passing props through each level.

PROVIDER COMPONENT (set a provider component)
    1. import {createContext} from "react"
    2. export const MyContext = createContext() // the name have to be in camel case and also start with the name of the variable.
    3. <MyContext.Provider value={variable}>
            <Child />
        <MyContext.Provider>

CONSUMER COMPONENTS (this is the component that consumes)
    1. import React, {useContext} from "react"
        import {MyContext} from "itsLocation"  // we can have more than one
    2. const value = useContext(MyContext)