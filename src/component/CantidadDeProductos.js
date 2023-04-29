import { useState, useEffect, useRef } from "react"


function CantidadDeProductos() {
    const [productos, setProductos] = useState([])
    useEffect(() => {

        fetch('http://localhost:3007/mostrarproductos')
            .then(response => response.json())
            .then(data => {

                setProductos(data)
            })
            .catch(error => console.log(error))
    }, [])


    return (
        <div>
            <h1>Cantidad de productos</h1>
            {productos.length}
        </div>

    )
}


export default CantidadDeProductos;