updater function = A function passed as an argument to setState() usually an arrow function.
                    Allow for safe updates based on the previous state.
                    Used with multiple state updates and asynchronous functions.
                    Good practice to use updater functions.


Updating objects = with inputs, where we set the initial value of each input as a property of the object. Then we need to use the 
                    onChange event handler.
                    To update each property by input but when we update one don't change the others we need to spread the object first and then change the property we want to change.
                    Note: when we want to create an object using an arrow function, we need to put the object inside parenthesis because with the curly brases of the object in front of an arrow, the arrow function will think that is a multi line function.


Updating arrays = with an input to type the element and a button to add the element to the array.
                    And then aplaying a function and filtering the index of the element to delete it.