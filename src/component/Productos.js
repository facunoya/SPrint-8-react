import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import CantidadDeProductos from "./CantidadDeProductos";
import "../css/todosLosUsuarios.css"

function Productos() {

    const [productos, setProductos] = useState([])
    useEffect(() => {

        fetch('http://localhost:3007/mostrardestinos')
            .then(response => response.json())
            .then(data => {
                setProductos(data)
            })
            .catch(error => console.log(error))
    }, [])

    return (

        <>
         
           
           <h2 className="tituloUsuarios">Cantidad de Productos</h2>
           
                <div className="col-md-6 m-auto">
               
                    <Table className="tablaUsuarios"striped bordered hover variant="light">
                    
                        <thead>
                            <tr>
                            
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Ranking</th>
                                <th>Temporada</th>
                              
                                
                               
                            </tr>
                        </thead>
                        <tbody>
                        
                            {
                                productos.map((producto, index) => {
                                    return <CantidadDeProductos {...producto} key={producto + index}/>
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            
        </>
    )
}

export default Productos;