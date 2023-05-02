import TodosLosProductos from "./TodosLosProductos";
import TodosLosUsuarios from "./TodosLosUsuarios";
import CantidadDeProductos from "./CantidadDeProductos";
import CantidadVentas from "./TotalVentas";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";
import TotalVentas from "./TotalVentas";
import MejoresTres from "./MejoresTres";
import Header from "./Header";
import Usuarios from "./Usuarios";
import Destinos from "./Destinos"


function App() {
  return (
    <>
      <div>
        <Header />
        <Destinos></Destinos>
        <TodosLosProductos></TodosLosProductos>
        <MejoresTres></MejoresTres>
        <Usuarios></Usuarios>
      </div>

    </>
  );
}

export default App;





