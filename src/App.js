import "./App.css";
import "./Componentes/ItemCount/ItemCount";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Componentes/NavBar/NavBar";
import ItemListContiner from "./Contenedores/ItemListContiner";

//MIS NOTAS: rfce o rce export component o rafce arrow funtion

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContiner saludo="ItemListContiner" />
    </div>
  );
}

export default App;
