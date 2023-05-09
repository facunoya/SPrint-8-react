import TodosLosProductos from "./TodosLosProductos";



import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";

import MejoresTres from "./MejoresTres";
import Header from "./Header";
import Usuarios from "./Usuarios";
import Destinos from "./Destinos"
import Productos from "./Productos";
import Ventas from "./Ventas"


function App() {
  return (
    <>
      <div>
        <Header />
        <Destinos></Destinos>
        <TodosLosProductos></TodosLosProductos>
        <MejoresTres></MejoresTres>
        <Usuarios></Usuarios>
        <Productos></Productos>
       
        
        
      </div>

    </>
  );
}

export default App;





