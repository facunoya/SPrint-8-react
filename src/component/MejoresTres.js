import { useState, useEffect, useRef } from "react" /*NO FUNCIONA */
import "../css/mejoresTres.css"

function MejoresTres() {
    const [productos, setProductos] = useState([])
    useEffect(() => {

        fetch('http://localhost:3007/totalventas')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setProductos(data)
            })
            .catch(error => console.log(error))
    }, [])


    return (
        <div id="mejoresTres">
            <h1>3 mas vendidos</h1>

            {productos.map((producto, i) => {
                return (
                    <div>
                        <p key={i}>nombre del producto :{producto.id}</p>
                        <p key={"7" + i}>cantidad de ventas:{producto.cuantity}</p>
                    </div>
                )
            })}

        </div>

    )
}


export default MejoresTres;