var http = require('http')
var url = require('url')

function cb(req, res){
    var parts = url.parse(req.url)
    var path = parts.path

   res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"})

    if(path == '/teste'){
       
        //Cria um objeto em JS
        var pessoa = {'nome': 'Ricardo', 'sobrenome': 'Lecheta'}

        //Converte o obj para string no formato json
        var json = JSON.stringify(pessoa)

        //Escreve o JSON na resposta da requisição HTTP
        res.end(json)
     
    } else {
        res.end('Not found:' +path)
    }
}

var server = http.createServer(cb)

server.listen(3000)

console.log('Servidor iniciado na porta 3000')