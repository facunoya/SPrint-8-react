import { useState, useEffect, useRef } from "react"

function TodosLosUsuarios() {

    useEffect(() => {

        fetch('http://localhost:3007/allusers')
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => console.log(error))
    }, [])

    return (

        <h1>Hola</h1>
    )
}


export default TodosLosUsuarios