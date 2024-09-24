import { Navigate } from "react-router-dom";

const RutasProtegidas = ({children}) => {
//decidir su logica
const admin = JSON.parse(sessionStorage.getItem('libreria101')) || null;
//pregunto si NO estoy logueado
if(!admin){
 //no somos admin
 return <Navigate to={'/login'}></Navigate>
}else{
    //si soy admin
    return children
}
};

export default RutasProtegidas;