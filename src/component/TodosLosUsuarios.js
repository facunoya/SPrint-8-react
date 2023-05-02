import React from "react";


function TodosLosUsuarios(props) {
    return (
        <>
                <tr>
                    <td>{props.user_id}</td>
                    <td>{props.name}</td>
                    <td>{props.email}</td>
                    <td>{props.country}</td>
                    
                </tr>
        </>
    )
}

export default TodosLosUsuarios;