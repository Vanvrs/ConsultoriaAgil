const express = require("express");
const app = express();
const {engine} = require ("express-handlebars");
const bodyParser = require("body-parser");
const moment = require('moment')
const Cadastro = require ("./models/Cadastro");
app.engine('handlebars', engine({
	defaultLayout: 'main',
	helpers:{
		formatDate:(date) =>{
			return moment(date).format('DD/MM/YYYY')
		}
	}
}))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/cadastro", function(req, res){
	Cadastro.findAll({order: [['id', 'Asc']]}).then(function(cadastros){
		res.render('cadastro', {cadastros: cadastros});
	})	
});
app.get("/cad-cliente", function(req, res){
	res.render("cad_cliente");
});
app.post("/add-cliente", function(req, res){
	Cadastro.create({
		nome: req.body.nome,
		telefone: req.body.telefone,
		especialidade:req.body.especialidade,
		data:req.body.data
	}).then(function(){
		res.redirect('/cadastro')
		
	}).catch(function(erro){
		res.send("Erro ao realizar o cadastramento do cliente!" + erro)
	})
});
app.get('/del-cliente/:id', function(req, res){
	Cadastro.destroy({
		where: {'id': req.params.id}
	}).then(function(){
		res.redirect('/cadastro')
		//res.send("Cliente excluído com sucesso!")
	}).catch(function(erro){
		res.send("Erro ao realizar a exclusão do cliente")
	})
})
app.listen(8081);
console.log("Servidor rodando em localhost:8081")