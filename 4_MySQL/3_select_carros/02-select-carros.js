//Carrega o módulo do MySQL
var mysql = require('mysql')

//Cria conexão
var connection = mysql.createConnection({
    host:'localhost',
    user:'livro',
    password:'livro123',
    database:'livro'
})

//Conecta no BD
connection.connect()

//Cria uma consulta
let sql = "select id, nome, tipo from carro where id = ?"
let id = 11

connection.query(sql, id, function(error, results, fields){
    if(error) throw error
    if(results.length == 0){
        console.log('Nenhum carro foi encontrado!')
        return
    }

    //O carro está na 1° posição do array
    let carro = results[0]
    console.log(carro.id + ":" + carro.nome)
})


//Fecha conexão
connection.end()