import { useState, useEffect, useRef } from "react"
import "../css/todosLosProductos2.css"

function TodosLosProductos() {
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
        <div id="todosLosProductos">
            <h2 className="text-center segundo">Nuestros destinos</h2>
            <div className="tarjeta">
                {productos.length === 0 && <p>Cargando...</p>}
                {console.log(productos)}
                {productos.map((producto, i) => {

                    return (

                        <div className="cartProduct" key={i}>

                            <h5>{producto.Destinations.name}</h5>
                            {/* <p>{producto.descripcionImagen}</p> */}
                            <img src={`http://localhost:3007/img/${producto.imgURL}`} width="200px" height="200px" />

                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}


export default TodosLosProductos;