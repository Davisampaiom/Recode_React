import React from 'react';
import {Form  } from 'react-bootstrap';



function Contato() {
    return (
    <div className="Contato" >
      <br/><br/><br/>
    <Form >
    <Form.Label className="ml-4">Nome</Form.Label><br/>
      <Form.Control type="text" className="col-md-5 ml-4" placeholder="Nome" /><br/>
      <Form.Label className="ml-4">Email</Form.Label><br/>
      <Form.Control  type="email" className="col-md-5 ml-4" placeholder="Email" /><br/>
      <Form.Label className="ml-4">Mensagem</Form.Label><br/>
      <Form.Control as="textarea" className="col-md-5 ml-4" rows={8} /><br/>
      
      <br/><br/><br/><br/><br/>

    </Form>
 
   
   </div>
    );
  }
  
  export default Contato;
  