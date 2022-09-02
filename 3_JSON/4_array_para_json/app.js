var http = require('http')
var url = require('url')

function cb(req, res){
    var parts = url.parse(req.url)
    var path = parts.path

   res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"})

    if(path == '/teste'){
       
      //Cria um array
      var pessoas = []

      //Cria 2 pessoas
      var p1 = {'nome': 'Ricardo', 'sobrenome': 'Lecheta'}
      var p2 = {'nome': 'Steve', 'sobrenome': 'Jobs'}

      //Adiciona os objetos no array
      pessoas.push(p1)
      pessoas.push(p2)

      //Converte o array para JSON
      var json = JSON.stringify(pessoas)

      res.end(json)
     
    } else {
        res.end('Not found:' +path)
    }
}

var server = http.createServer(cb)

server.listen(3000)

console.log('Servidor iniciado na porta 3000')