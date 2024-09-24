import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Index from "./components/pages/Index";
import Administrador from "./components/pages/Administrador";
import FormularioProducto from "./components/pages/product/FormularioProducto";
import Error404 from "./components/pages/Error404";
import DetalleProducto from "./components/pages/DetalleProducto";
import CardProducto from "./components/pages/product/CardProducto";
import Login from "./components/pages/Login";
import "bootswatch/dist/journal/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

function App() {
  return (
   <BrowserRouter> 
   <Menu></Menu>
    <Routes>
      <Route path="/" element={<Index></Index>}></Route>
      <Route path="/administrador" element={<Administrador></Administrador>}></Route>
      <Route path="/administrador/crear" element={<FormularioProducto titulo={'Nuevo producto'} estoyCreando={true}></FormularioProducto>}></Route>
      <Route path="/administrador/editar/:id" element={<FormularioProducto titulo={'Editar producto'} estoyCreando={false}></FormularioProducto>}></Route>
      <Route
        exact path="/login"
          element={<Login></Login>}
        ></Route>
      <Route path="*" element={<Error404></Error404>}></Route>
    </Routes> 
    <Footer></Footer>
   </BrowserRouter>
  );
}

export default App;
