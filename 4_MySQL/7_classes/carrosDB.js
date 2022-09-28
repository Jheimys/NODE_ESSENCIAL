//Importa o módulo MySQL
var mysql = require('mysql')

//Classe CarroDB
class CarroDB {
    //Função para conectar ao BD
    static connect(){
        //Cria conexão com Mysql
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'livro',
            password: 'livro123',
            database: 'livro'
        })

        //Conecta com BD
        connection.connect()
        return connection()
    }

    //Retorna a lista de carros
    static getCarros(callback){
        let connection = CarroDB.connect()

        //Cria uma consulta
        let sql = "select * from carro"
        let query = connection.query(sql, function(error, results, fields){
            if(error) throw error

            //Retorna os dados pela função de callback
            callback(results)
        })

        console.log(query.sql)

        connection.end()
    }

    //Retorna a lista de carros por tipo do banco de dados
    static getCarrosByTipo(tipo, callback){
        let connection = CarroDB.connect()

        //Cria consulta
        let sql = "select id, nome, tipo from carro where tipo '"+ tipo +"' "
        let query = connection.query(sql, function(error, results, fields){
            if(error) throw error

            //Retorna os dados pela função callback
            callback(results)
        })

        console.log(query.sql)

        connection.end()
    }

    //Retorna a lista de carros
    static getCarrosById(id, callback){
        let connection = CarroDB.connect()

        //Cria consulta
        let sql = "select * from carro where id =?"
        let query = connection.query(sql, id, function(error, results, fields){
            if(error) throw error

            if(results.length == 0){
                console.log('Nenhum carro foi encontrado!')
                return
            }

            let carro =  results[0]

            //Retorna carro pela função de callback
            callback(carro)
        })

        console.log(query.sql)
        connection.end()
    }

    //Salva um carro no BD
    //Recebe um JSON com dados do carro como parâmetro
    static save(carro, callback){
        let connection = CarroDB.connect()

        //Insere o carro
        let sql = "insert into carro set"
        let query = connection.query(sql, carro, function(error, results, fields){
            if(error) throw error

            //Atualiza o objeto carro do parâmetro com id inserido
            carro.id = results.insertId 
            callback(carro)
        })

        console.log(query.sql)
        connection.end()
    }

    //Atualiza carro no BD
    static update(carro, callback){
        let connection = CarroDB.connect()

        //SQL para atualizar carro
        let sql = "updade carro set ? where id = ?"

        //Id do carro para atualizar 
        let id = carro.id

        let query = connection.query(sql, [carro, id], function(error, results, fields){
            if(error) throw error
            callback(carro)
        })

        console.log(query.sql)
        connection.end()
    }

    //Deleta um carro no BD
    static deleteById(carro, callback){
        let connection = CarroDB.connect()

        //SQL para deletar carro
        let sql = "delete from carro where id = ?"

        //Id do carro para deletar
        let id = carro.id
        let query = connection.query(sql, id, function(error, results, fields){
            if(error) throw error
            callback(carro)
        })

        console.log(query.sql)

        connection.end()

    }

     //Deleta um carro pelo ID
     static deleteById(id, callback){
        let connection = CarroDB.connect()

        //SQL para deletar carro
        let sql = "delete from carro where id = ?"
        let query = connection.query(sql, id, function(error, results, fields){
            if(error) throw error
            callback(results.affectedRows)
        })

        console.log(query.sql)

        connection.end()

    }
}

//