var mysql = require('mysql')

//Cria conexão com MySQL
var connection = mysql.createConnection({
    host: 'localhost',
    user:'livro',
    password:'livro123',
    database:'livro'
})

//Conecta no BD
connection.connect()

let sql = "select id, nome, tipo from carro where tipo = '"+ tipo +"' "

connection.query(sql, function(error, results, fields ){

})

connection.end()