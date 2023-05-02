import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../css/header.css"
import { useState, useEffect, useRef } from "react"

function mostrar() {
    const hamburger = document.querySelector('.hamburger')
    const menu = document.querySelector('.menu-navegacion')

    console.log(menu)
    console.log(hamburger)

    hamburger.addEventListener('click', () => {
        menu.classList.toggle("spread") //Esto +     z-index: 10;(en css. .hamburger{}), hace el efecto de q el menu aparezca y desaparezca.
    })


    //Funcion abrir y cerrar menu

    window.addEventListener('click', e => {
        if (menu.classList.contains("spread") && e.target != menu && e.target != hamburger) {
            menu.classList.toggle("spread")
        }
    })
}

function Header() {
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


        <div id="headerContainer">
            <h1 id="title">Vuelta al mundo</h1>
            <Navbar id="navContainer" collapseOnSelect expand="lg" >
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse>
                    <Nav>
                        <a className="navButton" href="#tablaUsuarios">Usuarios</a>
                        <a className="navButton" href="#todosLosProductos">Productos</a>
                        <a className="navButton" href="#mejoresTres">Destacados</a>
                        <nav className="menu-navegacion">
                            {
                                usuarios.map((usuario, i) => {
                                    return (
                                        <a className="chat" key={i}>
                                            <img src={`http://localhost:3007/img/${usuario.avatar}`} width="150px" />
                                            <h5>{usuario.name}</h5>
                                        </a>
                                    )
                                })
                            }

                        </nav>
                        <a onClick={mostrar} className="navButton hamburger" href="#">Chat</a>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>


    );
}

export default Header;

