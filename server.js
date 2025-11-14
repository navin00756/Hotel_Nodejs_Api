
const express = require("express")

const app = express();

const db = require('./db');



const bodyParser = require("body-parser");//req body

app.use(bodyParser.json());

 
const Menu=require('./models/Menu')



app.get('/', function (req, res) {
    res.send("HIII wel come!! How can i help you mam!!!!")
});





app.get('/chicken', (req, res) => {
    res.send("Hello sir how can i help u")
});





app.get('/idli', (req, res) => {
    var customized_idli = {
        "name": "reva idli",
        "size": "10 cm",
        "is_Sambar": "true",
        "is_chutney": "false"
    };
    res.send(customized_idli)
});

 







//import routes file


const personRoutes=require('./routes/personRoutes')
app.use('/person',personRoutes);


const MenuRoutes=require('./routes/MenuRoutes');
app.use('/menu',MenuRoutes);


app.listen(3000, () => {
    console.log(`Listning on PORT 3000`)
});