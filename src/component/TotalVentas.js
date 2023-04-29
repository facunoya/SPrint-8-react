import { useState, useEffect, useRef } from "react"


function TotalVentas() {
    const [productos, setProductos] = useState([])
    useEffect(() => {

        fetch('http://localhost:3007/soldproducts')
            .then(response => response.json())
            .then(data => {

                setProductos(data)
            })
            .catch(error => console.log(error))
    }, [])


    return (
        <div>
            <h1>Cantidad de ventas</h1>
            {productos.length}
        </div>

    )
}


export default TotalVentas;