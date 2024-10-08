import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { borrarProductoAPI, leerProductosAPI } from "../../../helpers/queries";
import Swal from "sweetalert2";

const ItemProducto = ({producto, fila, setProductos}) => {
    
    const borrarProducto = async()=>{
      //agregar la ventana de confirmacion
      const respuesta = await borrarProductoAPI(producto._id)
      if(respuesta.status === 200){
        Swal.fire({
          title: "Producto eliminado",
          text: `El producto ${producto.nombreProducto}, fue eliminado correctamente`,
          icon: "success",
        });
        //actualizar la tabla del administrador
        const respuestaProductos = await leerProductosAPI();
        if(respuestaProductos.status === 200){
          const productosActualizados = await respuestaProductos.json()
          setProductos(productosActualizados)
        }
      }else{
        Swal.fire({
          title: "Ocurrio un error",
          text: `El producto ${producto.nombreProducto} no pudo ser eliminado, intente esta operación en unos minutos.`,
          icon: "error",
        });
      }
    }

    return (
        <tr>
        <td className="text-center">{fila}</td>
        <td>{producto.nombreProducto}</td>
        <td className="text-end">${producto.precio}</td>
        <td className="text-center">
          <img
            src={producto.imagen}
            className="img-thumbnail"
            alt={producto.nombreProducto}
          ></img>
        </td>
        <td>{producto.categoria}</td>
        <td className="text-center">
          <Link className="btn btn-warning me-lg-2" to={`/administrador/editar/${producto._id}`}>
            <i className="bi bi-pencil-square"></i>
          </Link>
          <Button variant="danger" onClick={borrarProducto} >
            <i className="bi bi-trash"></i>
          </Button>
        </td>
      </tr>
    );
};

export default ItemProducto;