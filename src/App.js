import "./App.css";
import "./Componentes/ItemCount/ItemCount";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Componentes/NavBar/NavBar";
import ItemListContiner from "./Contenedores/ItemListContiner";
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer";

//MIS NOTAS: rfce o rce export component o rafce arrow funtion

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContiner saludo="Bienvenidos a la pagina" />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
