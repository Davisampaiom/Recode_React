import { Container, Row, Col } from "react-bootstrap";

function Lojas() {
  return (
    <Container fuild ><br/><br/><br/><br/>
      <Row>
        <Col>
          <h3 className="text-uppercase">Rio de Janeiro</h3><br/>
          <p className="text-uppercase">Av Presidente Vargas,500</p>
          <p className="text-uppercase">10 &ordm; andar</p>
          <p className="text-uppercase">Centro</p>
          <p className="text-uppercase">(21) 3333-3333</p>
        </Col>
        
        <Col>
          <h3 className="text-uppercase">São Paulo</h3><br/>
          <p className="text-uppercase">Av Paulista, 985</p>
          <p className="text-uppercase">3 &ordm; andar</p>
          <p className="text-uppercase">Jardins</p>
          <p className="text-uppercase">(11) 4444-4444</p>
        </Col>
       
        <Col>
          <h3 className="text-uppercase">Santa Catarina</h3><br/>
          <p className="text-uppercase">Rua Major &aacute;villa, 370</p>
          <p className="text-uppercase">Vila Mariana</p>
          <p className="text-uppercase">(47) 5555-5555</p>
        </Col>
      </Row><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </Container>
    
  );
}

export default Lojas;
