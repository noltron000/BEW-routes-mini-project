const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
    extended: false
}))


app.use(bodyParser.json())

//const venue = require('./models/venue');



//console.log(venue)

const venues = [{
    name: 'AT&T Park',
    events: []

}, {
    name: 'Dolores Park',
    events: []

}]


app.get('/venues', (req, res) => {
    res.json(venues)
})


app.post('/venues/events', (req, res) => {
    venues.push(req.body.events);
    console.log(venues);
})


app.listen(3000, () => {
    console.log('working');
})