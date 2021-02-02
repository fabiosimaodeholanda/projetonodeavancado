-- MariaDB dump 10.17  Distrib 10.4.14-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: fseletro
-- ------------------------------------------------------
-- Server version	10.4.14-MariaDB



--
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;

CREATE TABLE `produtos` (
  `id_produtos` int(11) NOT NULL AUTO_INCREMENT,
  `categoria` varchar(45) COLLATE utf8_bin NOT NULL,
  `img` varchar(100) COLLATE utf8_bin NOT NULL,
  `descricao` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id_produtos`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;


--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;

INSERT INTO `produtos` VALUES (1,'fogao', 'Fogão Brastemp Branco 6 Bocas', 'imagens/Produtos/fogao%20brastemp.jpg'),(2,'fogao', 'Fogão Consul Inox 5 Bocas', 'imagens/Produtos/fogao%20consul.png'),(3,'geladeira', 'Geladeira Frost Free Brastemp Side Inverse 540 litros', 'imagens/Produtos/geladeira brastemp.jpg'),(4,'geladeira', 'Geladeira Consul Frost Free Duplex Branco 340 litros', 'imagens/Produtos/geladeira consul.png'),(5,'geladeira', 'Geladeira Electrolux Top Free Branco 474 litros', 'imagens/Produtos/geladeira electrolux.png'),(6,'microondas', 'Micro-ondas Brastemp Inox 20 litros', 'imagens/Produtos/micro-ondas brastemp.png'),(7,'microondas', 'Micro-ondas Consul Puxador na Porta 20 litros', 'imagens/Produtos/micro-ondas consul.png'),(8,'microondas', 'Micro-ondas Electrolux 20 litros', 'imagens/Produtos/micro-ondas electrolux.jpg'),(9,'lavadoraderoupas', 'Lavadora de roupas Brastemp 9kg com Ciclo Tira Manchas e Enxágue Duplo', 'imagens/Produtos/lavadora brastemp.png'),(10,'lavadoraderoupas', 'Lavadora de roupas Consul 9kg Branca', 'imagens/Produtos/lavadora consul.jpg'),(11,'levaloucas', 'Lava-louças Brastemp 14 serviços Inox com Ciclo Pesado', 'imagens/Produtos/lava-louças brastemp.jpg'),(12,'lavaloucas', 'Lava-louças Electrolux 14 serviços Inox', 'imagens/Produtos/lava-louça electrolux.jpg');

UNLOCK TABLES;

--
-- Table structure for table `valores`
--

DROP TABLE IF EXISTS `valores`;

CREATE TABLE `valores` (
  `id_valores` int(11) NOT NULL AUTO_INCREMENT,
  `preco_inicial` float DEFAULT NULL,
  `preco_final` float DEFAULT NULL,
  PRIMARY KEY (`id_valores`),
  CONSTRAINT `id_valores` FOREIGN KEY (`id_valores`) REFERENCES `produtos` (`id_produtos`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;


--
-- Dumping data for table `valores`
--

LOCK TABLES `valores` WRITE;

INSERT INTO `valores` VALUES (2150.00),(1250.00),(5019.00),(2750.00),(2900.00),(1050.00),(600.00),(500.00),(1750.00),(1050.00),(3950.00),(5750.00);

UNLOCK TABLES;
