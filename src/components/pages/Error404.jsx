import { Button } from "react-bootstrap";
import error from '../../assets/error.png'

const Error404 = () => {
    return (
        <section className="text-center">
            <img src={error} alt="Error 404" />
            <Button variant='warning'>Volver al inicio</Button>
        </section>
    );
};

export default Error404;