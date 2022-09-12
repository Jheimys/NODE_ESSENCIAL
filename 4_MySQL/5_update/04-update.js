//Módulo do MySQ
var mysql = require('mysql')

//Cria conexão com Mysql
var connection = mysql.createConnection({
    host:'localhost',
    user: 'livro',
    password: 'livro123',
    database: 'livro'
})

//Conexão com BD
connection.connect()

//Atualizar carro
let sql = "update carro set ? where id = ?"

//Objeto carro
var json = {id:31, nome: 'Meu Carro Update', tipo: 'esportivos'}
let id = json.id

connection.query(sql, [json, id], function(error, results, fields){
    if(error) throw error
    console.log('Carro atualizado coom suucesso!')
    console.log('Qtde de registros atualizados:' + results.affectedRows)
})

//Fim da conexão
connection.end()