import { useState, useEffect, useRef } from "react"

function TodosLosUsuarios() {
    const [usuarios, setUsuarios] = useState([])
    useEffect(() => {

        fetch('http://localhost:3007/allusers')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setUsuarios(data)
            })
            .catch(error => console.log(error))
    }, [usuarios])

    return (
        <ul>
            {usuarios.length === 0 && <p>Cargando...</p>}
            {
                usuarios.map((usuario, i) => {
                    return (
                        <li key={i}>
                            <h3>{usuario.name}</h3>
                            <img src={usuario.avatar} alt="avatar" width="150" />
                        </li>
                    )
                })
            }
        </ul>
    )
}


export default TodosLosUsuarios