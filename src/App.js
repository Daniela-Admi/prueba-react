import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Componentes/NavBar/NavBar";
import ItemListContiner from "./Contenedores/ItemListContiner";

function App() {
  // componente contenedor

  return (
    <div className="App">
      <NavBar />
      <ItemListContiner saludo="Hola soy ItemListContiner" />
    </div>
  );
}

export default App;
