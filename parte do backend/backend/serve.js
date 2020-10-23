//const express = require('express')
//const app = express()
//const port = 3000

//const cors = require('cors')
//app.use(cors())

//app.get('/', (req, res) => {
 // const json = '[{"data":"01/01/1990","valor":"3554"}]';
  //const obj = JSON.parse(json);
  //res.json(obj)
//})
//const json = ['{"data":"01/01/1990","valor":"3554"}'];
//const obj = JSON.parse(json);
//console.log(obj.data)
//console.log(obj.valor)

//app.listen(port, () => {
 // console.log(`Example app listening at http://localhost:${port}`)

//})


const fs = require('fs');
const express = require('express')
const app = express()
const port = 3000

const cors = require('cors')
app.use(cors())

fs.readFile('teste.json', (err, data) => {
  if (err) throw err;
  student = JSON.parse(data);
  console.log(student);
  
});




app.get('/', (req, res) => {

  res.send(student)

})
app.listen(port, () => {
console.log('O Servidor Esta Ativo')
});