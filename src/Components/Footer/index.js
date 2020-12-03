import React from 'react';
import pagamento from'../img/pagamento.png';
import './style.css';




export default function Footer() {
    return (
        <footer >

      <center>  
        <img src={pagamento}   />
        <p >Formas de pagamento</p>
        <p>&copy; Recode Pro</p></center>
        
       </footer>

);
}