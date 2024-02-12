import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Noticia = () => {
    return (
        <Card className='my-3'>
          <Card.Body>
            <Card.Title>Noticia</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Ver mas</Button>
          </Card.Body>
        </Card>
    );
};

export default Noticia;