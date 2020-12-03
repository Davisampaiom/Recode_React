import React from 'react';
import {  Form, Button, Row, Col } from 'react-bootstrap';

function Cliente() {



    const controleEnvio = (evento) => {
        evento.preventDefault();
        fetch("http://localhost/php/api/pedido.php", { method: "POST", body: new FormData(evento.target) });
        
    }
    return (
    <div className="Cliente Container" >
      <br/><br/><br/>
    <Form  onSubmit={controleEnvio}>
    <Form.Label className="ml-5">Nome</Form.Label><br/>
    <Form.Control name="nome" type="text" className="col-md-4 ml-5" placeholder="Nome" /><br/>    
    <Row>
      <Col>
    <Form.Label  className="ml-5">Endereco</Form.Label><br/>
    <Form.Control name="endereco" type="text" className="col-md-8 ml-5" placeholder="Endereco" /><br/>    
    </Col>
    <Col>
    <Form.Label className="">Número</Form.Label><br/>
    <Form.Control name="numero" type="text" className="col-md-4" placeholder="Número" /><br/>    
    </Col>
    </Row>
    <Row>
    <Col>
    <Form.Label className="ml-5">Municipio</Form.Label><br/>
    <Form.Control name="municipio" type="text" className="col-md-8 ml-5" placeholder="Municipio" /><br/>
    </Col>
    <Col>
    <Form.Label className="">Estado</Form.Label><br/>
    <Form.Control name="estado" type="text" className="col-md-4 " placeholder="Estado" /><br/>
    </Col>
    </Row>
    <Form.Label className="ml-5">Telefone</Form.Label><br/>
    <Form.Control name="telefone" type="text" className="col-md-4 ml-5" placeholder="Telefone" /><br/>
    
    <Form.Label className="ml-5">Email</Form.Label><br/>
    <Form.Control name="email" type="email" className="col-md-4 ml-5" placeholder="Email" /><br/>
    
    <Form.Label  className="ml-5">Codigo</Form.Label><br/>
    <Form.Control name="codigo" type="text" className="col-md-4 ml-5" placeholder="codigo" /><br/>  
    
    <Form.Label className="ml-5">Quantidade</Form.Label><br/>
    <Form.Control name="quantidade" type="text" className="col-md-4 ml-5" placeholder="quantidade" /><br/>
    
    <br />
   
    <Button  variant="danger" className="ml-5" type="submit"  >Fazer pedido</Button>
    </Form>
 <br /><br />
 <br />
 <br />
   
   
   </div>
    );
  }
  
  export default Cliente;