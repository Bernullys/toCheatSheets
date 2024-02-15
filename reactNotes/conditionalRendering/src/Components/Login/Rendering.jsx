function Rendering (props) {

    const num = [1]

    return (
        <section>
            {num.length > 0 && <h6> There are at least a number</h6>}
        </section>
    )
}

export default Rendering