
const cool = require('cool-ascii-faces');
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const Testtable = require('./models/testtable');



const app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('pages/index'))
app.get('/cool', (req, res) => res.send(cool()))
app.get('/times', (req,res) => res.send(showTime()))
//Fetch data from database
app.get('/db', (req, res , next) => {     
       Testtable.findAll()
       .then(results =>{
        res.render('/pages/db', results);
       })
       .catch(err =>{
         console.error(err);
       })
  })

 app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

  showTime = () =>{
    let result ='';
    const times = process.env.TIMES || 5;   
    for(i =0; i < times; i++){
      result += i + '';
    }
    return result;
  }
