//Carrega o módulo HTTP
var http = require('http')

//Função de callback para o servidorHTTP
var cb = function(req, res){
    //define o cabeçalho (header) com o tipo da resposta
    res.writeHead(200, {'Content-Type': 'text/plain'})

    //Mensagen de retorno
    res.end("Hello World node callback")
}

//Servidor
var server = http.createServer(cb)

//Porta que o servidor vai escultar
server.listen(3000)

//Messagem ao iniciar o servidor
console.log('Servidor iniciado na porta 3000!')