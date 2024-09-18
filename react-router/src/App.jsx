import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import { Acerca, Home, Productos,Servicios, Error404} from "./pages";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <BrowserRouter>
        <h1>HOLA MUNDO REACT ROUTER DOM</h1>
        <Menu/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Acerca" element={<Acerca />} />
          <Route path="/Productos" element={<Productos />} />
          /*ruta individual para los Productos */
          /*<Route path="/Productos/:id" element={<ProductosDetalle />}/>*/
          <Route path="/Servicios" element={<Servicios />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

