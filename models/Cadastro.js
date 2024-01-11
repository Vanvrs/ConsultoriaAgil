const db = require("./db")

const Cadastro = db.sequelize.define('cadastro',{
	nome: {
		type:db.Sequelize.STRING
	},
	telefone: {
		type:db.Sequelize.CHAR
	},
	especialidade: {
		type:db.Sequelize.STRING
	},
	data: {
		type:db.Sequelize.CHAR
	},
})

//Criar a tabela
//Cadastro.sync({force:true})

module.exports = Cadastro