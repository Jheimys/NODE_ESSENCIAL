//Carrega o módulo HTTP
var http = require('http')

//Cria um servidor HTTP que vai responser "Hello World" para todas as requisições
var sever = http.createServer(function(req, res){

    //Define o cabeçalho (header) com o tipo da resposta
    res.writeHead(200, {"Content-Type": "text/plain"})

    //Messagem de retorno
    res.end("Hello World!\n")
})

//Porta que o servidor vai escultar
sever.listen(3000)

//Mensagem ao iniciar o servidor
console.log("Servidor iniciado em http://localhost:3000/")