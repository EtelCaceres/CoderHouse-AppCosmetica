import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer"; 

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route
          path="/category/:categoriaId"
          element={<ItemListContainer saludo="Productos por categoría" />}
        />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;











