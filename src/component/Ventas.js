import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import TotalVentas from "./TotalVentas";


function Ventas() {

    const [ventas, setVentas] = useState([])
    useEffect(() => {

        fetch('http://localhost:3007/soldproducts')
            .then(response => response.json())
            .then(data => {
                setVentas(data)
            })
            .catch(error => console.log(error))
    }, [])

    return (

        <>
         
           
           <h2 className="tituloUsuarios">Total de Ventas</h2>
           
                <div className="col-md-6 m-auto">
               
                    <Table className="tablaUsuarios"striped bordered hover variant="light">
                    
                        <thead>
                            <tr>
                            
                                <th>Id venta</th>
                                <th>Producto id</th>
                                <th>Usuario id</th>
                               
                              
                                
                               
                            </tr>
                        </thead>
                        <tbody>
                        
                            {
                                ventas.map((venta, index) => {
                                    return <TotalVentas {...venta} key={venta + index}/>
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            
        </>
    )
}

export default Ventas;