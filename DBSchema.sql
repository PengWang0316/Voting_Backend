CREATE TABLE `Kevin`.`candidates` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` MEDIUMTEXT NULL,
  `photo` VARCHAR(255) NOT NULL,
  `isDemocray` TINYINT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;
