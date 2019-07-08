import * as express from 'express';
import * as bodyParser from 'body-parser';
import { postsList } from './mocked-data/posts-list';
import { contactsList } from './mocked-data/contacts-list';
import { homeData, technologiesListMock } from './mocked-data/home-data';
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/api/posts', (req, res) => {
  res.send(postsList);
});

app.get('/api/posts/:id', (req, res) => {
  const matching = postsList.filter(t => t.id === +req.params.id)[0];
  if (matching) {
    res.send(matching);
  } else {
    res.status(404).send({error: `Cannot find contact ${+req.params.id}`});
  }
});

app.get('/api/contacts', (req, res) => {
  res.send(contactsList);
});

app.get('/api/contacts/:id', (req, res) => {
  const matching = contactsList.filter(t => t.id === +req.params.id)[0];
  if (matching) {
    res.send(matching);
  } else {
    res.status(404).send({error: `Cannot find contact ${+req.params.id}`});
  }
});

app.post('/api/contacts', (req, res) => {
  const contact = req.body;
  const lastItem = contactsList[contactsList.length - 1].id + 1;
  const newContact = {
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

  contactsList.push(newContact);
  res.send(contactsList);
});

app.get('/api/person-info', (req, res) => {
  res.send(homeData);
});

app.post('/api/person-technologies', (req, res) => {
  const contact = req.body;
  const lastItem = technologiesListMock[technologiesListMock.length - 1].id + 1;
  const newTechnology = {
    id: lastItem,
    name: contact.name,
  };

  technologiesListMock.push(newTechnology);
  res.send(technologiesListMock);
});

app.get('/api/person-technologies', (req, res) => {
  res.send(technologiesListMock);
});

app.listen(3100, () => console.log('Example app listening on port 3100!'));

