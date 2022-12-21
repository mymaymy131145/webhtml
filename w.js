const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send('Hello ka')
})

app.get("/about", function(req, res){
    res.sendFile(__dirname + '/may/H.html')
})

app.get('*', function(req, res){
    res.sendFile(__dirname + '/may/E.html')
})

app.listen(3000,() => {
    console.log("port [3000")
})

