var cp = require('child_process');
var express = require("express");

var app = express();

var jobsCMD = 'sudo bconsole << EOF \n .api 2 \n llist jobs ';
var clientsCMD = 'sudo bconsole << EOF \n .api 2 \n .clients';

app.use(express.static('static'));

app.get("/api/clients", function(req, res) {
  cp.exec(clientsCMD, (err, stdout, stderr) => {
  var arr=stdout.split(".clients");
    var clients=JSON.parse(arr[1]).result.clients;
    res.send(clients);
  })
});

app.get("/api/jobs", function(req, res) {
  cp.exec(jobsCMD, (err, stdout, stderr) => {
    var arr=stdout.split("llist jobs");
    var jobs=JSON.parse(arr[1]).result.jobs;
    res.send(jobs);
  })
});


var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});



