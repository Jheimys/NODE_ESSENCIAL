//Carrega o módulo do MySQL
var mysql = require('mysql')

//Cria a conexão
var connection = mysql.createConnection({
    host:'localhost',
    user:'livro',
    password:'livro123',
    database:'livro'
})

//Conecta com BD
connection.connect()

//Cria uma consulta
let sql = "select id,nome,tipo from carro";
connection.query(sql, function(error, results, fields){
    if(error) throw error
    let carros = results
    for(let i = 0; carros.length > i; i++){
        console.log(carros[i].id + ":" + carros[i].nome)
    }
})

//Fecha conexão
connection.end()