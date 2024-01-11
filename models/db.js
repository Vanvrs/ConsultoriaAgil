const Sequelize = require("sequelize")

const sequelize = new Sequelize('postapp', 'VanR', '123456', {
    host: 'localhost',
    dialect: 'mysql' //mariadb, postgres...outros
});

module.exports={
	Sequelize: Sequelize,
	sequelize: sequelize
}