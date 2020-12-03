import './style.css'

export default function Produto(props){

    return(
       <div id="box_produtos">
           
            <img src={require(`${props.imagem}`).default} alt="Imagem de Produtos" />
            <br />
            <p>{props.descricao} </p>
            <p>R$ <strike>{props.preco} </strike></p>
            <p>R${props.preco_venda} </p>
            <p>Cod. {props.id} </p>
            <p>Disponivel {props.estoque}</p>
            <br />
       </div>

    );
}