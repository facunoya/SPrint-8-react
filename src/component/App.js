import TodosLosProductos from "./TodosLosProductos";
import TodosLosUsuarios from "./TodosLosUsuarios";
import CantidadDeProductos from "./CantidadDeProductos";
import CantidadVentas from "./TotalVentas";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";
import TotalVentas from "./TotalVentas";
import MejoresTres from "./MejoresTres";
import Header from "./Header";


function App() {
  return (
    <>
      <div>
        <Header />
        <TodosLosProductos></TodosLosProductos>
        <MejoresTres></MejoresTres>
      </div>

    </>
  );
}

export default App;





