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
            <h2 className="text-center m-3">Listado de destinos</h2>
            <ul className="tarjeta">
                {productos.length === 0 && <p>Cargando...</p>}
                {console.log(productos)}
                {productos.map((producto, i) => {

                    return (

                        <li className="cartProduct" key={i}>

                            <h3>{producto.Destinations.name}</h3>
                            <p>{producto.descripcionImagen}</p>
                            <img src={`http://localhost:3007/img/${producto.imgURL}`} width="150px" />

                        </li>
                    )
                })
                }
            </ul>
        </div>
    )
}


export default CantidadDeProductos;