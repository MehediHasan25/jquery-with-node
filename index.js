const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,'index.html'));
})

app.post('/check', function(req,res) {
    console.log(req.body.accNum);
    if(req.body.accNum == "123456"){
        res.status(200).send("ok");
    }
    else{
        res.status(200).send("bad");
    }
});


app.listen(3000, (err, res) => {
    console.log("Server is up!!");
})