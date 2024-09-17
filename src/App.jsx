import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Index from "./components/pages/Index";
import Administrador from "./components/pages/Administrador";
import FormularioProducto from "./components/pages/product/FormularioProducto";
import Error404 from "./components/pages/Error404";
import DetalleProducto from "./components/pages/DetalleProducto";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import CardProducto from "./components/pages/product/CardProducto";

function App() {
  return (
    <>
      <Menu></Menu>
      <Index></Index>
      {/* <Administrador></Administrador> */}
      {/* <FormularioProducto></FormularioProducto> */}
      <Footer></Footer>
    </>
  );
}

export default App;
