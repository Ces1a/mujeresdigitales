import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import { Receta, Ingredintes, Descripcion, topin, Error404} from "./pages";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <BrowserRouter>
        <h1>INVENTARIO CULINARIO</h1>
        <Menu/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Descripcion" element={<Acerca />} />
          <Route path="/Ingredientes" element={<Productos />} />
          <Route path="/Recetas" element={<Servicios />} />
          <Route path="/Topin" element={<Servicios />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;