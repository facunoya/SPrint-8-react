import React from "react";


function CantidadDeProductos(props) {
    return (
        <>
                <tr>
                    <td>{props.destination_id}</td>
                    <td>{props.name}</td>
                    <td>{props.ranking}</td>
                    <td>{props.season}</td>
                    
                    
                </tr>
        </>
    )
}

export default CantidadDeProductos;