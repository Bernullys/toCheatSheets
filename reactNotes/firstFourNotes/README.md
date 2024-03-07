First four React tutorial videos from Bro Code React Tutorial for beginners (2024)

    Inicializing a React project using Vite.

    Making a component.

    Styling with three methods:
        External: naming the class in the element and styling in the index.css file.
        Modules: creating a directory for every component and css file. Named the css file as ComponentName.module.css. That create a hash style sheet. Then import the module like: import styles from "path". Finally we use the class in the element as: className={styles.theNameOfTheClassInTheStyleSheet}.
        Inline: in the same jsx file we can define a constant or object with the styles we need, using JS syntax (the same way as DOM manipulations) and then call the class in the element like style={nameOfTheClass}.

    Using props.

    PropTypes: a mechanism that ensures that the passed value is of the correct datatype. Example: age: PropTypes.number.

    DefaultProps: default values for props in case they are not passed from the parent component. Example: name: "Worker".