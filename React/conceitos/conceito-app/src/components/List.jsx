import React from "react";

const List = (props) => {
    const { items } = props;

    return (
        <>
        <h3>Lista de bichinhos fofos</h3>
        <ul>
            {
                items.map(item => <li key={item}>{item}</li>)
            }
            
        </ul>
        </>
    )

}

List.defaultProps = {
    items: []
}

export default List;