import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./Componentes/Cart/Cart";
import NavBar from "./Componentes/NavBar/NavBar";
import ItemListContiner from "./Contenedores/ItemListContiner";
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//MIS NOTAS: rfce o rce export component o rafce arrow funtion

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContiner saludo="Bienvenidos!" />} />
        <Route path="/detail /: id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <ItemListContiner saludo="Bienvenidos a la pagina" />
      <ItemDetailContainer />
    </BrowserRouter>
  );
}

export default App;
