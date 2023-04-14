import { useState, useEffect, useRef } from "react"


function TodosLosProductos() {
    const [productos, setProductos] = useState([])
    useEffect(() => {

        fetch('http://localhost:3007/mostrarproductos')
            .then(response => response.json())
            .then(data => {

                setProductos(data)
            })
            .catch(error => console.log(error))
    }, [productos])


    return (
        <ul>
            {productos.length === 0 && <p>Cargando...</p>}
            {
                productos.map((producto, i) => {

                    return (
                        <li key={i}>
                            <h3>{producto.Destinations.name}</h3>
                            <img src={`http://localhost:3007/img/${producto.imgURL}`} width="150px" />
                        </li>
                    )
                })
            }
        </ul>
    )
}


export default TodosLosProductos