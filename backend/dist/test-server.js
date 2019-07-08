"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var users = [
    { id: 111, name: 'Julie' },
    { id: 222, name: 'Hank' },
    { id: 333, name: 'Al' }
];
var lastId = 1;
var tickets = [
    {
        id: 0,
        description: 'Install a monitor arm',
        assigneeId: 111,
        completed: false
    },
    {
        id: 1,
        description: 'Move the desk to the new location',
        assigneeId: 111,
        completed: false
    }
];
app.get('/api/tickets', function (req, res) {
    setTimeout(function () {
        res.send(tickets);
    }, randomDelay());
});
app.get('/api/users', function (req, res) {
    setTimeout(function () {
        res.send(users);
    }, randomDelay());
});
app.get('/api/users/:id', function (req, res) {
    setTimeout(function () {
        var matching = users.filter(function (t) { return t.id === +req.params.id; })[0];
        if (matching) {
            res.send(matching);
        }
        else {
            res.status(404).send({ error: "Cannot find user " + +req.params.id });
        }
    }, randomDelay());
});
app.post('/api/tickets', function (req, res) {
    setTimeout(function () {
        var t = req.body;
        if (!t.description) {
            res.status(500).send({ error: "Description is a required field" });
        }
        else {
            var newTicket = { id: ++lastId, description: t.description, assigneeId: null, completed: false };
            tickets.push(newTicket);
            res.send(newTicket);
        }
    }, randomDelay());
});
app.post('/api/assign', function (req, res) {
    setTimeout(function () {
        var ticketId = req.body.ticketId;
        var assigneeId = req.body.assigneeId;
        var matchingTicket = tickets.filter(function (t) { return t.id === ticketId; })[0];
        var matchingUser = users.filter(function (u) { return u.id === assigneeId; })[0];
        if (!matchingTicket) {
            res.status(404).send({ error: "Cannot find ticket " + ticketId });
        }
        else if (!matchingUser) {
            res.status(404).send({ error: "Cannot find user " + assigneeId });
        }
        else {
            matchingTicket.assigneeId = assigneeId;
            res.send(matchingTicket);
        }
    }, randomDelay());
});
app.post('/api/complete', function (req, res) {
    setTimeout(function () {
        var ticketId = req.body.ticketId;
        var completed = req.body.completed;
        var matchingTicket = tickets.filter(function (t) { return t.id === ticketId; })[0];
        if (!matchingTicket) {
            res.status(404).send({ error: "Cannot find ticket " + ticketId });
        }
        else {
            matchingTicket.completed = completed;
            res.send(matchingTicket);
        }
    }, randomDelay());
});
app.listen(3000, function () { return console.log('Example app listening on port 3000!'); });
function randomDelay() {
    return Math.random() * 4000;
}
//# sourceMappingURL=test-server.js.map