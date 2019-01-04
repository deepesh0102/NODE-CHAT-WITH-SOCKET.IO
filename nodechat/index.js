/*
 * *********************************
 *  *
 *  * Node Chat : The Online Auction Selling Marketplace
 *  *
 *  * Copyright 2019, IdeaBuyer, LLC
 *  * All Rights Reserved
 *  *
 *  * Laravel Version:			5.7.19
 *  *
 *  * created by:		Deepesh Patel
 *  * created on:		January 3, 2019
 *  *
 *  * last modified by:	 Deepesh Patel
 *  * last modified on:	January 3, 2019 17:40:17, India Standard Time
 *  ***********************************
 */


var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000, function () {
    console.log('Listening on Port 3000');
});

app.get('/', function (request, response) {

    // response.send('Hello World')

    response.sendFile(__dirname + '/index.html');

});


io.on('connection',function (socket) {
    console.log('A connection is made');
    //recive message from client side random user
    socket.on('chat.message',function (message) { //listening

        // console.log('New Message:' + message); //print message on server


        io.emit('chat.message',message);
    });

    socket.on('disconnect',function () {

        io.emit('chat.message','User has disconnected.');

    });

});






