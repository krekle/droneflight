var express = require('express');
var fs = require('fs');
var app = express();
var port = 1337;
var arDrone = require('ar-drone');
var client  = arDrone.createClient();
var autonomy = require('ardrone-autonomy');

app.use('/controlls', express.static(__dirname + '/controlls/'));

app.get('/', function(request, response){
    response.send("Hello, go to /controlls to controll!");
});

app.get('/takeoff', function(request, response){
    console.log("Taking off...");
    client.takeoff();
    response.send("Done!");
});

app.get('/turnleft', function(request, response){
    console.log("Turning left...");
    client.after(10, function(){
        console.log("Turning now...");
        this.counterClockwise(1);
    }).after(500, function(){
	this.stop();
    });
    response.send("Done!");
});

app.get('/flipleft', function(request, response){
    console.log("Turning left...");
    client.after(10, function(){
        console.log("Turning now...");
        this.animate('flipLeft', 1000);
    }).after(500, function(){
	this.stop();
    });
    response.send("Done!");
});

app.get('/flipright', function(request, response){
    console.log("Turning left...");
    client.after(10, function(){
        console.log("Turning now...");
        this.animate('flipRight', 1000);
    }).after(500, function(){
	this.stop();
    });
    response.send("Done!");
});


app.get('/turnright', function(request, response){
    console.log("Turning right...");
    client.after(10, function(){
        console.log("Turning now...");
        this.clockwise(1);
    }).after(500, function(){
	this.stop();
    });
    response.send("Done!");
});

app.get('/left', function(request, response){
    console.log("Turning right...");
    client.after(10, function(){
        console.log("Turning now...");
        this.left(1);
    }).after(500, function(){
		this.stop();
    });
    response.send("Done!");
});

app.get('/right', function(request, response){
    console.log("Turning right...");
    client.after(10, function(){
        console.log("Turning now...");
        this.right(1);
    }).after(500, function(){
		this.stop();
    });
    response.send("Done!");
});

app.get('/up', function(request, response){
    console.log("Going up...");
    client.after(10, function(){
        console.log("up now...");
        this.up(1);
    }).after(500, function(){
	this.stop();
    });
    response.send("Done!");
});

app.get('/down', function(request, response){
    console.log("Going down...");
    client.after(10, function(){
        console.log("down now...");
        this.down(1);
    }).after(500, function(){
	this.stop();
    });
    response.send("Done!");
});

app.get('/front', function(request, response){
    console.log("Going forward...");
    client.after(10, function(){
        console.log("forward now...");
        this.front(1);
    }).after(500, function(){
	this.stop();
    });
    response.send("Done!");
});

app.get('/back', function(request, response){
    console.log("Going back...");
    client.after(10, function(){
        console.log("back now...");
        this.back(0.5);
    }).after(500, function(){
	this.stop();
    });
    response.send("Done!");
});

app.get('/land', function(request, response){
    console.log("Stopping activities and landing...");
    client.stop();
    client.land();
    response.send("Done!");
});

app.listen(port);
console.log('Node.js express server started on port %s', port);
