import PropTypes from "prop-types"

function Login (props) {

    const loged = <h4>You are logged {props.name}</h4>
    const outSide = <h4>Please log in</h4>

    return (
        <section className="login_main_container">
            {
                props.logied ? loged :
                outSide
            }
        </section>
    )
}

Login.propTypes = {
    logied: PropTypes.boll,
    name: PropTypes.string
}

Login.defaultProps = {
    logied: false,
    name: "SomeOne"
}

export default Login