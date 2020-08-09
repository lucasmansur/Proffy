//Servidor
const express = require('express')
const server = express()

//chamando as paginas
const {pageLanding,pageStudy,pageGiveClasses,saveClasses,pageSuccessInsert} = require('./pages')

//configurar nunjucks (template engine)
const nunjucks = require ('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})

//configuracao do servidor
server
//receber os dados do req.bory
.use(express.urlencoded({extended:true}))
//configurar arquivos estaticos (css,scrips,imagens)
.use(express.static("public"))

//rotas de aplicacao
.get("/", pageLanding)
.get("/study",pageStudy)
.get("/give-classes",pageGiveClasses)
.get("/success-insert", pageSuccessInsert)
.post("/save-classes",saveClasses)


//start do servidor
.listen(5500)
