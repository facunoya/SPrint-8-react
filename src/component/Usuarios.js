import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodosLosUsuarios from "./TodosLosUsuarios";
import "../css/todosLosUsuarios.css"

function Usuarios() {

    const [usuarios, setUsuarios] = useState([])
    useEffect(() => {

        fetch('http://localhost:3007/allusers')
            .then(response => response.json())
            .then(data => {
                setUsuarios(data)
            })
            .catch(error => console.log(error))
    }, [])

    return (

        <>
         
           <div className="usuarios" id="tablaUsuarios">
           <h2 className="tituloUsuarios">Listado de Usuarios</h2>
           
                <div className="col-md-6 m-auto">
               
                    <Table className="tablaUsuarios"striped bordered hover variant="light">
                    
                        <thead>
                            <tr>
                            
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Pais</th>
                                
                               
                            </tr>
                        </thead>
                        <tbody>
                        
                            {
                                usuarios.map((usuario, index) => {
                                    return <TodosLosUsuarios {...usuario} key={usuario + index}/>
                                })
                            }
                        </tbody>
                    </Table>
                </div>
                </div>
        </>
    )
}

export default Usuarios;