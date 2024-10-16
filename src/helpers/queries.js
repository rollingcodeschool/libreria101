export const URLProductos = import.meta.env.VITE_API_PRODUCTOS;
const URL_Usuario = import.meta.env.VITE_API_USUARIO;
// Importante: recuerden agregar en el headers de put y delete el token para poder editar y borrar 
// solicitudes POST
export const crearProductoAPI = async(productoNuevo)=>{
    try {
        const respuesta = await fetch(URLProductos,{
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                "x-token": JSON.parse(sessionStorage.getItem('libreria101')).token
            },
            body: JSON.stringify(productoNuevo)
        })
        return respuesta
    } catch (error) {
        console.error(error)
        return false;
    }
}

//GET
export const leerProductosAPI = async()=>{
try {
    const respuesta = await fetch(URLProductos);
    return respuesta;
} catch (error) {
    console.error(error)
    return false;
}
}
//GET que devuelve un producto
export const obtenerProductoAPI = async(id)=>{
try {
    const respuesta = await fetch(URLProductos+'/'+id);
    return respuesta;
} catch (error) {
    console.error(error)
    return false;
}
}

//PUT o PATCH
export const editarProductoAPI = async(productoEditado, id)=>{
    try {
        const respuesta = await fetch(URLProductos+'/'+id,{
            method: "PUT",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(productoEditado)
        })
        return respuesta
    } catch (error) {
        console.error(error)
        return false;
    }
}
//DELETE
export const borrarProductoAPI = async(id)=>{
    try {
        const respuesta = await fetch(URLProductos+'/'+id,{
            method: "DELETE"
        })
        return respuesta
    } catch (error) {
        console.error(error)
        return false;
    }
}

//cuando tengamos el backend con un login enviar solicitud POST
const userAdmin = {
    email: "admin@libreria101.com",
    password: "123Aa123",
  };
  
//   export const login = (usuario) => {
//     if (
//       usuario.email === userAdmin.email &&
//       usuario.password === userAdmin.password
//     ) {
//       sessionStorage.setItem("libreria101", JSON.stringify(usuario.email));
//       return true;
//     } else {
//       return false;
//     }
//   };

//nuevo login usando el backend
export const login = async (usuario) =>{
    try {
      const respuesta = await fetch(URL_Usuario, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });
      return  respuesta
    } catch (error) {
      console.error(error);
      return { error: "Error en el login" };
    }
  }
  