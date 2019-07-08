"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var posts_list_1 = require("./mocked-data/posts-list");
var contacts_list_1 = require("./mocked-data/contacts-list");
var home_data_1 = require("./mocked-data/home-data");
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/api/posts', function (req, res) {
    res.send(posts_list_1.postsList);
});
app.get('/api/posts/:id', function (req, res) {
    var matching = posts_list_1.postsList.filter(function (t) { return t.id === +req.params.id; })[0];
    if (matching) {
        res.send(matching);
    }
    else {
        res.status(404).send({ error: "Cannot find contact " + +req.params.id });
    }
});
app.get('/api/contacts', function (req, res) {
    res.send(contacts_list_1.contactsList);
});
app.get('/api/contacts/:id', function (req, res) {
    var matching = contacts_list_1.contactsList.filter(function (t) { return t.id === +req.params.id; })[0];
    if (matching) {
        res.send(matching);
    }
    else {
        res.status(404).send({ error: "Cannot find contact " + +req.params.id });
    }
});
app.post('/api/contacts', function (req, res) {
    var contact = req.body;
    var lastItem = contacts_list_1.contactsList[contacts_list_1.contactsList.length - 1].id + 1;
    var newContact = {
        id: lastItem,
        birthDate: contact.birthDate,
        email: contact.email,
        firstName: contact.firstName,
        lastName: contact.lastName,
        office: contact.office,
        personalEmail: contact.personalEmail,
        phoneOne: contact.phoneOne,
        phoneTwo: contact.phoneTwo,
        position: contact.position,
        skype: contact.skype,
    };
    contacts_list_1.contactsList.push(newContact);
    res.send(contacts_list_1.contactsList);
});
app.get('/api/person-info', function (req, res) {
    res.send(home_data_1.homeData);
});
app.post('/api/person-technologies', function (req, res) {
    var contact = req.body;
    var lastItem = home_data_1.technologiesListMock[home_data_1.technologiesListMock.length - 1].id + 1;
    var newTechnology = {
        id: lastItem,
        name: contact.name,
    };
    home_data_1.technologiesListMock.push(newTechnology);
    res.send(home_data_1.technologiesListMock);
});
app.get('/api/person-technologies', function (req, res) {
    res.send(home_data_1.technologiesListMock);
});
app.listen(3100, function () { return console.log('Example app listening on port 3100!'); });
//# sourceMappingURL=server.js.map