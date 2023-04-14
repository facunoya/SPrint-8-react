import { useState, useEffect, useRef } from "react"


function TodosLosProductos() {
    const [productos, setProductos] = useState([])
    useEffect(() => {

        fetch('http://localhost:3007/mostrarproductos')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setProductos(data)
            })
            .catch(error => console.log(error))
        console.log("esta linea ", productos)
    }, [productos])

    return (
        <h1>Hola</h1>
    )
}


export default TodosLosProductos