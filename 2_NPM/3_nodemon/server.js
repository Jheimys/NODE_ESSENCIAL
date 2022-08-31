//Carrega os módulos
var http = require('http')
var url = require('url')
var fs = require('fs')


//Função para ler um arquivo e escreve-lo na response
function readFile(response, file){

    //Faz leitura do arquivo de forma assícrona
    fs.readFile(file, function(err, data){
        //Quando ler, escreve na response o conteúdo do arquivo JSON
        response.end(data)
    })
}

//Função callback para o servidor
function callback(request, response){

    //Cabeçalho do header com tipo da ponseposta + UTF-8 como charset
    response.writeHead(200, {'Content-Type': "application/json; charset=utf-8"}) 

    //Faz o parse  da URL separando o caminho (rota)
    var parts = url.parse(request.url)
    var path = parts.path

    //Verifica a rota
    if(path == '/carros/classicos'){
        //Retorna o json dos carros classicos
        readFile(response, "carros_classicos.json")

    } else if(path == '/carros/esportivos'){
        //Retorna o json dos carros esportivos
        readFile(response, 'carros_esportivos.json')

    } else if(path == '/carros/luxo'){
        //Retorna o json dos carros luxo
        readFile(response, 'carros_luxo.json')
    } else {
        response.end('Path não mapeado:' +path)
    }
}

//Servidor HTTP
var server = http.createServer(callback)

//Porta que o servidor vai escultar
server.listen(3000)

//Messagem ao iniciar o servidor
console.log('Servidor iniciado na porta 3000')