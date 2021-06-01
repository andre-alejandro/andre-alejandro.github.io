const express = require('express')
const app = express()

//le dices al modulo de express que public tiene todo lo assets del sitio
app.use(express.static(__dirname + '/public'))

app.use('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

//app.use('/nuevo-sitio', (req, res)=> {
    //res.sendFile(__dirname + "/src/directorio")
  //})
  
app.listen(process.env.PORT || 3000)