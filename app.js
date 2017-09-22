var cp = require('child_process');
var express = require("express");

var app = express();

var jobsCMD = '(echo .api 2 & echo llist jobs) | bconsole';
var clientsCMD = '(echo .api 2 & echo .clients) | bconsole';

app.use(express.static('static'));

app.get("/api/clients", function(req, res) {
  cp.exec(clientsCMD, (err, stdout, stderr) => {
    var arr=stdout.split(".clients");
    var json=arr[1];
    if (json[json.length]='*') json = json.slice(0,-1); /*trim trailing star if needed*/
    var clients=JSON.parse(json).result.clients;
    res.send(clients);
  })
});

app.get("/api/jobs", function(req, res) {
  cp.exec(jobsCMD, (err, stdout, stderr) => {
    var arr=stdout.split("llist jobs");
    var json=arr[1];
    if (json[json.length]='*') json = json.slice(0,-1); /*trim trailing star if needed*/
    var jobs=JSON.parse(json).result.jobs;
    res.send(jobs);
  })
});


var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});



