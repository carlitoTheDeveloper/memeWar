const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;
var names = ['John','Bob','Rob','Todd','Billy','Jack','Elton','Carlos'];
var session = {
    name : "",
    players : []
}
app.use(cors());

app.listen(port);
app.use(bodyparser.json());

app.post('/host', (req,res) =>{
    console.log("hi")
    var i = Math.floor(Math.random() * 9);
    var n = names.splice(i,1); 
    var player = {
        name : n,
        image : '',
        elim : false,
        played : false
    }
    session.name = req.body.name;       
    session.players.push(player);
    res.json("success");
})

app.post('/join',(req,res)=> {
    

    if(req.body = session.name)
    {
        var i = Math.floor(Math.random() * 9);
        var n = names.splice(i,1); 
        var player = {
            name : n,
            image : '',
            elim : false,
            played : false
        }
        session.players.push(player);
    }
    
    console.log(req.body);
    res.send('done');
})

app.get('/lobby',(req,res) => {
    
})

console.log('server is running')