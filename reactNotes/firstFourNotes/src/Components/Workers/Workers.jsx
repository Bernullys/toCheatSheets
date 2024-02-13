import PropTypes from "prop-types"
import styles from "./Workers.module.css"

function Workers (props) {

    const cardName = {
        color: "darkBlue",
        fontSize: "16px",
        cursor: "pointer",
    }

    return (
        <>
            <section className={styles.workers_main_container}>
                <img src={props.image} alt={props.name} className="avatar_image"/>
                <h3 style={cardName}>Name: {props.name}</h3>
                <h3>Age: {props.age}</h3>
                <h3>Gender: {props.gender}</h3>
                <h3>Description: {props.charge}</h3>
            </section>
        </>
    )
}

Workers.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    gender: PropTypes.string,
    charge: PropTypes.string
}
Workers.defaultProps = {
    name: "Worker",
    age: 0,
    gender: "ele",
    charge: "slave"
}

export default Workers