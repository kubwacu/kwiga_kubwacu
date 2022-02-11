--creation de la base de donnée
create database kubwacu_twige;

--creation de la table document

CREATE TABLE IF NOT EXISTS `documents` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `title` varchar(30),
    `type` varchar(30) NOT NULL,
    `year` int(11),
    `cours` varchar(30) NOT NULL,
    `section` varchar(50),
    `university` varchar(100),
    `departement` varchar(50),
    `faculty` varchar(50),
    `stage` int(11),
    `academic_year` int(11),
    `added_at` datetime NOT NULL,
    `path` varchar(255) NOT NULL,
    `downloads` int(11),
    `views` int(11),
    PRIMARY KEY (`id`)
)ENGINE=MyISAM  DEFAULT CHARSET=latin1;

--creation de la table document_issue

CREATE TABLE IF NOT EXISTS `documents_issue` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `user_id` int(11) NOT NULL,
    `document_id` int(11) NOT NULL,
    `comment` text NOT NULL,
    `added_at` datetime NOT NULL,
    `is_solved` boolean NOT NULL DEFAULT FALSE,
    PRIMARY KEY (`id`)
)ENGINE=MyISAM  DEFAULT CHARSET=latin1;

--creation de la table user

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` text NOT NULL,
  `email` varchar(50) NOT NULL,
  `created_at` datetime NOT NULL,
  `social_links` json NOT NULL,
  `type` varchar(30) NOT NULL,
  `is_confirm` boolean NOT NULL,
  `in_team` boolean NOT NULL,
  `is_contributor` boolean NOT NULL,
  PRIMARY KEY (`id`)
)ENGINE=MyISAM  DEFAULT CHARSET=latin1;




