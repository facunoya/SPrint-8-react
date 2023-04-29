import TodosLosProductos from "./TodosLosProductos";
import TodosLosUsuarios from "./TodosLosUsuarios";
import CantidadDeProductos from "./CantidadDeProductos";
import CantidadVentas from "./TotalVentas";
import "../css/style.css"
import TotalVentas from "./TotalVentas";
import MejoresTres from "./MejoresTres";
import Header from "./Header";


function App() {
  return (
    <>
      <Header />

      <MejoresTres></MejoresTres>
      <TodosLosProductos></TodosLosProductos>
      <CantidadDeProductos></CantidadDeProductos>
      <TodosLosUsuarios></TodosLosUsuarios>
      <CantidadVentas></CantidadVentas>
      <TotalVentas></TotalVentas>

    </>
  );
}

export default App;





