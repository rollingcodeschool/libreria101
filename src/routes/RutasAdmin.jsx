import { Routes, Route } from "react-router-dom";
import Administrador from "../components/pages/Administrador";
import FormularioProducto from "../components/pages/product/FormularioProducto";


const RutasAdmin = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Administrador></Administrador>}
      ></Route>
      <Route
        path="/crear"
        element={
          <FormularioProducto
            titulo={"Nuevo producto"}
            estoyCreando={true}
          ></FormularioProducto>
        }
      ></Route>
      <Route
        path="/editar/:id"
        element={
          <FormularioProducto
            titulo={"Editar producto"}
            estoyCreando={false}
          ></FormularioProducto>
        }
      ></Route>
    </Routes>
  );
};

export default RutasAdmin;
