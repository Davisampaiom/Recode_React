-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: sql106.byetcluster.com
-- Tempo de geração: 26/11/2020 às 09:56
-- Versão do servidor: 5.6.48-88.0
-- Versão do PHP: 7.2.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `epiz_27283337_fullstack`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `pedido`
--

CREATE TABLE `pedido` (
  `id_nome` varchar(200) NOT NULL,
  `email` varchar(200) DEFAULT NULL,
  `endereco` varchar(200) DEFAULT NULL,
  `numero` int(11) NOT NULL,
  `municipio` varchar(45) DEFAULT NULL,
  `estado` varchar(200) DEFAULT NULL,
  `telefone` varchar(45) DEFAULT NULL,
  `codigo_produto` varchar(45) DEFAULT NULL,
  `quantidade` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura para tabela `produtos`
--

CREATE TABLE `produtos` (
  `id` int(11) NOT NULL,
  `categoria` varchar(150) NOT NULL,
  `imagem` varchar(300) NOT NULL,
  `descricao` varchar(200) NOT NULL,
  `preco` varchar(100) NOT NULL,
  `preco_venda` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Despejando dados para a tabela `produtos`
--

INSERT INTO `produtos` (`id`, `categoria`, `imagem`, `descricao`, `preco`, `preco_venda`) VALUES
(1, 'Geladeira', './img/geladeira1.jpg', ' Geladeira Brastemp Frost Free Inverse 573 litros cor Inox com Smart Bar ', ' 4514.90 ', ' 3869,\r\n    10 '),
(2, ' Geladeira ', './ img / geladeira2.jpg ', ' Geladeira Electrolux TF56 Frost Free Duplex 474 Litrosr ', ' 3398.00 ', ' 2659.05 '),
(3, ' Geladeira ', './ img / geladeira3.jpg ', ' Geladeira Consul CRM43HK Frost Free Duplex 386 Litros Inox ', ' 2968.90 ', ' 2849,\r\n    90 '),
(4, ' Fogão ', './ img / fogao1.jpg ', ' Fogão Consul Glass 4 Bocas CFO4VARUNA Acendimento Automático Inox ', ' 1359.00 ', ' 1199.90 '),
(5, ' Fogão ', './ img / fogao2.jpg ', ' Fogão de Piso Atlas Mônaco Glass 4 Bocas Acendimento Automático ', ' 522.00 ', ' 419.90 '),
(6, ' Microondas ', './ img / microondas1.jpg ', ' Microondas Consul 32 Litros cor Inox Espelhado com Função Descongelar ', ' 839.00 ', ' 689.00 '),
(7, ' Microondas ', './ img / microondas2.jpg ', ' Microondas 25 L Espelhado Pme25 Philco ', ' 847.00 ', ' 579.99 '),
(8, ' Microondas ', './ img / microondas3.jpg ', ' Micro - ondas Electrolux 20 Litros MTO30 ', ' 529.00 ', ' 426.99 '),
(12, 'Lavadora de Roupas', './img/lava_roupas2.jpg', ' Lavadora de Roupas Philco Inverter 12KG PLR12B', ' 3229.00 ', ' 2899.90'),
(9, 'Lava-louças', './img/lava_loucas1.jpg', 'Lava-Louças Electrolux, 10 Serviços, Painel Blue Touch, Inox - LV10X', ' 4529.00', ' 3649.00'),
(10, 'Lava-louças', './img/lava_loucas2.jpg', 'Lava-Louças Brastemp Ative 8 Serviços Branca - BLF08', ' 1929.00', ' 1749.00'),
(11, 'Lavadora de Roupas', './img/lava_roupas1.jpg', 'Lavadora de Roupas Brastemp 9kg Branca com 08 Programas de Lavagem', ' 1929.00', ' 1549.00');

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `pedido`
--
ALTER TABLE `pedido`
  ADD PRIMARY KEY (`id_nome`,`numero`);

--
-- Índices de tabela `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `produtos`
--
ALTER TABLE `produtos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
