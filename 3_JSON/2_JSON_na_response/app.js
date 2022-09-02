var http = require('http')
var url = require('url')

function cb(req, res){
    var parts = url.parse(req.url)
    var path = parts.path

   res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"})

    if(path == '/teste'){
        res.end(" {\"nome\":\"Ricardo\", \"sobrenome\":\"Lecheta \"} ")
     
    } else {
        res.end('Not found:' +path)
    }
}

var server = http.createServer(cb)

server.listen(3000)

console.log('Servidor iniciado na porta 3000')