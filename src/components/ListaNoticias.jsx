import { Col, Row } from "react-bootstrap";
import Noticia from "./Noticia";

const ListaNoticias = () => {
    return (
        <Row className="my-3">
            <Col sm={12} md={6} lg={4}>
                <Noticia></Noticia>
            </Col>
            <Col sm={12} md={6} lg={4}>
                <Noticia></Noticia>
            </Col>
            <Col sm={12} md={6} lg={4}>
                <Noticia></Noticia>
            </Col>
        </Row>
    );
};

export default ListaNoticias;