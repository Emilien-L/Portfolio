-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 08 avr. 2025 à 08:56
-- Version du serveur : 11.1.0-MariaDB
-- Version de PHP : 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `congres`
--

-- --------------------------------------------------------

--
-- Structure de la table `activite_culturelle`
--

DROP TABLE IF EXISTS `activite_culturelle`;
CREATE TABLE IF NOT EXISTS `activite_culturelle` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prix` decimal(10,2) NOT NULL,
  `date` date DEFAULT NULL,
  `heure` time DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `activite_culturelle`
--

INSERT INTO `activite_culturelle` (`id`, `nom`, `prix`, `date`, `heure`) VALUES
(1, 'Foot', 10.00, '2024-10-15', '14:42:51'),
(2, 'Tennis', 20.00, '2024-11-14', '08:43:14'),
(3, 'Golf', 1000.00, '2024-11-19', '10:01:20');

-- --------------------------------------------------------

--
-- Structure de la table `congressiste`
--

DROP TABLE IF EXISTS `congressiste`;
CREATE TABLE IF NOT EXISTS `congressiste` (
  `id` int(11) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `adresse` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `acompte` decimal(10,2) DEFAULT NULL,
  `date_inscription` date DEFAULT NULL,
  `preference_hotel` varchar(50) DEFAULT NULL,
  `petitdej` tinyint(1) DEFAULT NULL,
  `id_organisme_payeur` int(11) DEFAULT NULL,
  `id_hotel` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_1` (`id_organisme_payeur`),
  KEY `id_2` (`id_hotel`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `congressiste`
--

INSERT INTO `congressiste` (`id`, `nom`, `prenom`, `adresse`, `email`, `acompte`, `date_inscription`, `preference_hotel`, `petitdej`, `id_organisme_payeur`, `id_hotel`) VALUES
(1, 'Jenny', 'Pierre', '11 residence arliquet', 'pierre@gmail.com', 100.00, '2024-10-02', '**', 1, 1, 1),
(2, 'Emilien', 'Lecompte', 'la rue de Glandon', 'emilien@email.com', 60.00, '2024-11-05', '*', 1, 1, 1),
(3, 'Segalat', 'AD', 'Allée des clots', 'adsegalat@gmail.com', 100.00, '2024-11-19', '***', 1, 1, 2),
(4, 'Desbordes', 'Jordan', 'Allée des buits', 'jordandesbordes@gmail.com', 200.00, '2024-11-19', '****', 1, 2, 2);

-- --------------------------------------------------------

--
-- Structure de la table `facture`
--

DROP TABLE IF EXISTS `facture`;
CREATE TABLE IF NOT EXISTS `facture` (
  `id_facture` int(11) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `reglee` tinyint(1) DEFAULT NULL,
  `id_congressiste` int(11) NOT NULL,
  PRIMARY KEY (`id_facture`),
  KEY `id` (`id_congressiste`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `facture`
--

INSERT INTO `facture` (`id_facture`, `date`, `reglee`, `id_congressiste`) VALUES
(28, '2024-11-28', 0, 3),
(31, '2024-11-08', 1, 4),
(34, '2025-04-01', 1, 2);

-- --------------------------------------------------------

--
-- Structure de la table `hotel`
--

DROP TABLE IF EXISTS `hotel`;
CREATE TABLE IF NOT EXISTS `hotel` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prix_par_participant` decimal(10,2) NOT NULL,
  `prix_petitdej` decimal(10,2) DEFAULT NULL,
  `nbchambres_dispo` int(11) DEFAULT NULL,
  `nb_etoile` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `hotel`
--

INSERT INTO `hotel` (`id`, `nom`, `prix_par_participant`, `prix_petitdej`, `nbchambres_dispo`, `nb_etoile`) VALUES
(1, 'L hotel beaugosse', 250.00, 25.00, 43, '**'),
(2, 'Apagnan', 5000.00, 500.00, 400, '****');

-- --------------------------------------------------------

--
-- Structure de la table `organisme_payeur`
--

DROP TABLE IF EXISTS `organisme_payeur`;
CREATE TABLE IF NOT EXISTS `organisme_payeur` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `organisme_payeur`
--

INSERT INTO `organisme_payeur` (`id`, `nom`, `adresse`) VALUES
(1, 'Banque', 'allee de la Banque'),
(2, 'SocieteGeneral', 'allee des banques');

-- --------------------------------------------------------

--
-- Structure de la table `participer_activite`
--

DROP TABLE IF EXISTS `participer_activite`;
CREATE TABLE IF NOT EXISTS `participer_activite` (
  `id_congressiste` int(11) NOT NULL,
  `id_activite` int(11) NOT NULL,
  PRIMARY KEY (`id_congressiste`,`id_activite`),
  KEY `id_1` (`id_activite`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `participer_activite`
--

INSERT INTO `participer_activite` (`id_congressiste`, `id_activite`) VALUES
(1, 1),
(2, 1),
(4, 1),
(1, 2),
(3, 3),
(4, 3);

-- --------------------------------------------------------

--
-- Structure de la table `participer_session`
--

DROP TABLE IF EXISTS `participer_session`;
CREATE TABLE IF NOT EXISTS `participer_session` (
  `id_congressiste` int(11) NOT NULL,
  `id_session` int(11) NOT NULL,
  PRIMARY KEY (`id_congressiste`,`id_session`),
  KEY `id_1` (`id_session`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `participer_session`
--

INSERT INTO `participer_session` (`id_congressiste`, `id_session`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4);

-- --------------------------------------------------------

--
-- Structure de la table `session`
--

DROP TABLE IF EXISTS `session`;
CREATE TABLE IF NOT EXISTS `session` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prix` decimal(10,2) NOT NULL,
  `heure` time DEFAULT NULL,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `session`
--

INSERT INTO `session` (`id`, `nom`, `prix`, `heure`, `date`) VALUES
(1, 'Jour1_Matin', 40.00, '08:43:14', '2024-10-16'),
(2, 'Jour1_Aprem', 17.00, '08:43:14', '2024-11-06'),
(3, 'Jour2_Aprem', 100.00, '10:00:19', '2024-11-19'),
(4, 'Jour2_Matin', 200.00, '10:00:19', '2024-11-19');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login` text NOT NULL,
  `mdp` text NOT NULL,
  `id_congressiste` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_congressiste` (`id_congressiste`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `login`, `mdp`, `id_congressiste`) VALUES
(1, 'pierre.jenny', 'pierrejenny', 1),
(2, 'emilien.lecompte', 'emilienlecompte', 2),
(3, 'adrien.segalat', 'adriensegalat', 3),
(4, 'jordan.desbordes', 'jordandesbordes', 4),
(5, 'admin', 'admin', NULL);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `congressiste`
--
ALTER TABLE `congressiste`
  ADD CONSTRAINT `congressiste_ibfk_1` FOREIGN KEY (`id_organisme_payeur`) REFERENCES `organisme_payeur` (`id`),
  ADD CONSTRAINT `congressiste_ibfk_2` FOREIGN KEY (`id_hotel`) REFERENCES `hotel` (`id`);

--
-- Contraintes pour la table `facture`
--
ALTER TABLE `facture`
  ADD CONSTRAINT `facture_ibfk_1` FOREIGN KEY (`id_congressiste`) REFERENCES `congressiste` (`id`);

--
-- Contraintes pour la table `participer_activite`
--
ALTER TABLE `participer_activite`
  ADD CONSTRAINT `participer_activite_ibfk_1` FOREIGN KEY (`id_congressiste`) REFERENCES `congressiste` (`id`),
  ADD CONSTRAINT `participer_activite_ibfk_2` FOREIGN KEY (`id_activite`) REFERENCES `activite_culturelle` (`id`);

--
-- Contraintes pour la table `participer_session`
--
ALTER TABLE `participer_session`
  ADD CONSTRAINT `participer_session_ibfk_1` FOREIGN KEY (`id_congressiste`) REFERENCES `congressiste` (`id`),
  ADD CONSTRAINT `participer_session_ibfk_2` FOREIGN KEY (`id_session`) REFERENCES `session` (`id`);

--
-- Contraintes pour la table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_congressiste`) REFERENCES `congressiste` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
