import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Index from "./components/pages/Index";
import Administrador from "./components/pages/Administrador";
import FormularioProducto from "./components/pages/product/FormularioProducto";
import Error404 from "./components/pages/Error404";
import DetalleProducto from "./components/pages/DetalleProducto";
import CardProducto from "./components/pages/product/CardProducto";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
   <BrowserRouter> 
    <Routes>
      <Route path="/" element={<Index></Index>}></Route>
      <Route path="/administrador" element={<Administrador></Administrador>}></Route>
      <Route path="/administrador/crear" element={<FormularioProducto></FormularioProducto>}></Route>
      <Route path="/administrador/editar" element={<FormularioProducto></FormularioProducto>}></Route>
      <Route path="*" element={<Error404></Error404>}></Route>
    </Routes> 
   </BrowserRouter>
  );
}

export default App;
