import './style.css';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Produto from'../../Components/Produto';
import Categorias from '../../Components/Categorias'


function Produtos() {
  const [produtos , setProdutos] =useState([]);

  useEffect( ( ) =>{
    async function fetchData( ){
      const resposta = await fetch ("http://localhost/php/api/produtos.php")
      const dados = await resposta.json( )
      setProdutos(dados);
    }
    fetchData( );
  } ,[]);


  
    return (
      <div className="Produtos">
   
   
   <Container>
     <div>
     <Row>
       <Col className="col-2 categoria">
       <Categorias />
       </Col>
       <Col className="produtos">
       {produtos && produtos.map(item => <Produto key={item.codigo_produto} imagem={item.imagem} descricao={item.descricao}
       preco={item.preco} preco_venda={item.preco_venda} id={item.id} estoque={item.estoque}/> )}
       </Col>
     </Row>
     </div>
   </Container>
   

     
  
      </div>
    );
  }
  
  export default Produtos;
  