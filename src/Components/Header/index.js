
import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Nav, Navbar} from 'react-bootstrap';
import './style.css'

import Home from '../../Pages/Home';
import Contato from '../../Pages/Contato';
import Lojas from '../../Pages/Lojas';
import Pedido from '../../Pages/Pedido';
import Produtos from '../../Pages/Produtos'


export default function Header() {
    return (
      <Router>
        <div >
        <Navbar  collapseOnSelect expand="sm" bg="danger" variant="dark">
        <Navbar.Brand  as={Link} href="/home" to="/home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav  className="mr-auto">
        <Nav.Link  as={Link} href="/home" to="home">Full Stack <p>Eletro</p></Nav.Link>
        <Nav.Link  as={Link} href="/produtos" to="produtos">Produtos</Nav.Link>        
        <Nav.Link  as={Link} href="/lojas" to="lojas">Nossa Lojas</Nav.Link>
        <Nav.Link  as={Link} href="/pedido" to="pedido">Pedido</Nav.Link>
        <Nav.Link  as={Link} href="/contato" to="contato">Contato</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
        <br></br>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/lojas">
              <Lojas />
            </Route>
            <Route exact path="/produtos">
              <Produtos />
            </Route>
            <Route exact path="/contato">
              <Contato />
            </Route>
            <Route exact path="/pedido">
              <Pedido />
            </Route>
            
            
          </Switch>
        </div>
      </Router>
    );
  }
  

