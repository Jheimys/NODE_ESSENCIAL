var http = require('http')
var url = require('url')

function cb(req, res){
    var parts = url.parse(req.url)
    var path = parts.path

    if(path == '/teste'){
        res.end('Vamos estudar JSOM!')
    } else {
        res.end('Not found:' +path)
    }
}

var server = http.createServer(cb)

server.listen(3000)

console.log('Servidor iniciado na porta 3000')