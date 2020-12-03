<?php
    header("Access-Control-Allow-Origin:*");

    $servername= "localhost";
    $username= "root";
    $password= "";
    $database= "fseletro";


    
//Criando conexao
    $conn = mysqli_connect($servername, $username, $password, $database);
//Verificando conexão
    if(!$conn){
        die("A conexão ao BD falhou:" .mysqli_connect_error());
    }

$sql = "SELECT * FROM produtos JOIN control_est ON produtos.id_produto = control_est.id";
$result  = $conn ->query($sql);

print_r( json_encode( $result->fetch_all(MYSQLI_ASSOC)) );
 
?>
