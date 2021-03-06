const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
	extended: false
}))

app.use(bodyParser.json())

// use postman to test routes
// our models
const venues = [
	{
		id: "0",
		name: 'AT&T Park',
		events: []
	},
	{
		id: "1",
		name: 'Dolores Park',
		events: []
	}
];

app.get('/venues', (req, res) => {
	// returns events in json
	res.json(venues)
})

app.get('/venues/:id', (req, res) => {
	// returns specific venue by id
	res.send(venues[req.params.id])
})

app.post('/venues/events', (req, res) => {
	// allow user to submit events
	venues.push(req.body.events);
	console.log(venues);
})

app.listen(3000, () => {
	console.log('working');
})