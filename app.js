const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
	extended: false
}))

app.use(bodyParser.json())

// use postman to test routes
// our models
const venues = [{
	name: 'AT&T Park',
	events: []

}, {
	name: 'Dolores Park',
	events: []
}]

app.get('/venues', (req, res) => {
	// returns events in json
	res.json(venues)
})

app.post('/venues/events', (req, res) => {
	// allow user to submit events
	venues.push(req.body.events);
	console.log(venues);
})

app.listen(3000, () => {
	console.log('working');
})