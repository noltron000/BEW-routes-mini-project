const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const venue = require('./models/venue');



console.log(venue)


app.get('/venues', (req, res) => {
    res.json(venue)
})


app.post('/venues/events', (req, res) => {
    venue.events.push('Blockchain Meetup')
})


app.listen(3000, () => {
    console.log('working');
})
