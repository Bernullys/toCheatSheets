import PropTypes from "prop-types"
function ListReuseble (props) {

    const categorys = props.categorys
    const itemsList = props.items

    const listItems = itemsList.map(item => <li key={item.id}>{item.name}: {item.calories}</li>)


    return (
        <>
            <h4>This is a reusable component</h4>
            <h5>{categorys}</h5>
            <ul>{listItems}</ul>
        </>
    )
}

ListReuseble.propTypes = {
    categorys: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                                name: PropTypes.string,
                                                calories: PropTypes.number}))
}

ListReuseble.defaultProps = {
    categorys: "Category",
    items: []
}

export default ListReuseble