CREATE DATABASE IF NOT EXISTS `simple_board_directory` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE `simple_board_directory`;

DROP TABLE IF EXISTS `board`;

CREATE TABLE `board`
(
	`id` INT NOT NULL AUTO_INCREMENT,
    `board_title` varchar(100) DEFAULT NULL,
    `board_post` VARCHAR(2000) DEFAULT NULL,
    `board_done` BOOLEAN DEFAULT TRUE,
    PRIMARY KEY (`id`)
) CHARACTER SET utf8mb4;

INSERT INTO `board` VALUES
(1, '테스트1', '정당은 법률이 정하는 바에 의하여 국가의 보호를 받으며, 국가는 법률이 정하는 바에 의하여 정당운영에 필요한 자금을 보조할 수 있다.', true),
(2, '테스트2', '국회의원의 수는 법률로 정하되, 200인 이상으로 한다. 법관은 탄핵 또는 금고 이상의 형의 선고에 의하지 아니하고는 파면되지 아니하며.', true),
(3, '테스트3', '사법권은 법관으로 구성된 법원에 속한다. 대통령은 제1항과 제2항의 처분 또는 명령을 한 때에는 지체없이 국회에 보고하여 그 승인을 얻어야 한다.', true),
(4, '테스트4', '국회는 헌법개정안이 공고된 날로부터 60일 이내에 의결하여야 하며, 국회의 의결은 재적의원 3분의 2 이상의 찬성을 얻어야 한다.', false)


 