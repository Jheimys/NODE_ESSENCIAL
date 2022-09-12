//Carrega o módulo MySQL
var mysql = require('mysql')

//Cria conexão com MySQL
var connection = mysql.createConnection({
    host:'localhost',
    user:'livro',
    password:'livro123',
    database:'livro'
})

//Conecta no BD
connection.connect()

//SQL para inserir carro
let sql = "insert into carro set ?"

//Objeto carro em JSON
var carro = {nome:'Meu Carro', tipo:'esportivo'}

connection.query(sql, carro, function(error, results, fields){
    if(error) throw error
    console.log('Carro salvo com sucesso, id:' + results.insertId)
})

//Encerra conexão
connection.end()