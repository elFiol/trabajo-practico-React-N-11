import { Button, Container, Form } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";

const FormNoticia = () => {
    return (
        <Container className="my-4">
            <div className="d-lg-flex w-100 border">
                <p className="mx-3 my-4">Buscar por categoria:</p>
                <Form className="w-100 my-4 px-3">
                    <Form.Group>
                        <Form.Select>
                            <option value="business">Negocios</option>
                            <option value="entertainment">Entretenimiento</option>
                            <option value="general">General</option>
                            <option value="health">Salud</option>
                            <option value="science">Ciencia</option>
                            <option value="sports">Deportes</option>
                            <option value="technology">Tecnología</option>
                        </Form.Select>
                    </Form.Group>
                    <Button className="mt-4" type="submit">Buscar</Button>
                </Form>
            </div>
            <ListaNoticias></ListaNoticias>
        </Container>
    );
};

export default FormNoticia;