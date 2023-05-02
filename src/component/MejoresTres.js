import { useState, useEffect, useRef } from "react" /*NO FUNCIONA */
import "../css/mejoresTres.css"
import { Table } from "react-bootstrap"


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
            <h2 className="subtitulo">Màs vendidos</h2>

            {productos.map((producto, i) => {
                return (
                    <div className="tableContainer">
                        <Table>
                            <tbody>
                                <tr key={producto + i}>
                                    <td>
                                        <p key={i}>Producto :{producto.id}</p>
                                    </td>
                                    <td>
                                        <p key={"7" + i}>Ventas:{producto.cuantity}</p>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                )
            })}

        </div>

    )
}


export default MejoresTres;