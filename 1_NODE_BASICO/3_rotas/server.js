//Carrega o módulo HTTP
var http = require('http')
var url = require('url')


//Função de callback para o servidorHTTP
var cb = function(req, res){
    //define o cabeçalho (header) com o tipo da resposta
    res.writeHead(200, {'Content-Type': 'text/plain'})

    //Faz o parser da URL separando o caminho (rota)
    var parts = url.parse(req.url)
    
    //Verifica rota
    if(parts.path == '/'){

        res.end('Site na raiz')

    } else if(parts.path == '/carros'){

        res.end('Você digitou a rota /carros')

    } else {
        
        res.end('Rota inválida:' + parts.path)
    }
}

//Servidor
var server = http.createServer(cb)

//Porta que o servidor vai escultar
server.listen(8000)

//Messagem ao iniciar o servidor
console.log('Servidor iniciado na porta 8000')