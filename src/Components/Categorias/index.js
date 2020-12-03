import { Button, Nav } from "react-bootstrap";

export default function Categoria() {
  return (
    <div id="Categoria">
      <h3>Categorias</h3>

      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link eventKey="link-1" className="text-dark">Todos(12)</Nav.Link>
        <Nav.Link eventKey="link-1" className="text-dark">Gladeiras(3)</Nav.Link>
        <Nav.Link eventKey="link-1" className="text-dark">Fogões(2)</Nav.Link>
        <Nav.Link eventKey="link-1" className="text-dark">Microondas(3)</Nav.Link>
        <Nav.Link eventKey="link-1" className="text-dark">Lavadora de roupas(2)</Nav.Link>
        <Nav.Link eventKey="link-1" className="text-dark">Lava-louças(2</Nav.Link>
      </Nav>
    </div>
  );
}
