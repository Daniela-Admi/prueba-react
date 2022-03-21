import "./App.css";
import "./Componentes/ItemCount/ItemCount";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Componentes/NavBar/NavBar";
import ItemListContiner from "./Contenedores/ItemListContiner";
import ItemCount from "./Componentes/ItemCount/ItemCount";

//rfce o rce export component o rafce arrow funtion
function App() {
  // componente contenedor

  return (
    <div className="App">
      <NavBar />
      <ItemListContiner saludo="ItemListContiner - Vestido Mady" />
    </div>
  );
}

export default App;
