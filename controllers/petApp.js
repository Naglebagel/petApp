const express = require('express');
const router = express.Router();
const pet = require('../models/petApp');

// main page route
router.get('/', (req, res) => {

	pet.find((err, pet) => {
		if(err){
			res.send('there was an error with database')
		} else {
			console.log(pet);
			res.render('index', {pet: pet});

		}// end of if else
	}) // end of mongo query
}); // end of route


router.get('/new', (req, res) => {
	res.render('new', {})
}); // end of route

router.get('/:id/edit', (req, res) => {
	pet.findById(req.params.id,(err, pet) => {
		if(err){
			res.send('there was an error with database')
		} else {
			res.render('edit', {pet: pet});

		}// end of if else
	})// end of mongo query
}); // end of route

router.post('/create', (req, res) => {

	pet.create(req.body, (err, fruit) => {
		if(err){
			res.send('there was an error creating the pet')
		} else{
			console.log(pet);
			res.redirect('/pet');
		} // end of if else
	}) // end of mongo query
}); // end of route


router.put('/:id/edit', (req, res) => {
	console.log(req.params.id)
pet.findByIdAndUpdate(req.params.id, {name: req.body.name, type: req.body.type, color: req.body.color, age: req.body.age}, (err, pet) => {
	if(err){
			res.send('error updating pet');
		} else{
			res.redirect('/pet');
		};
	}); // end of mongo query
}); // end of route


router.delete('/:id', (req, res) => {
	pet.findByIdAndRemove(req.params.id, (err, pet) => {
		if(err){
			res.send('error deleting');
		} else{
			res.redirect('/pet');
		}; //end of if else
	}); // end of mongo query
}); // end of route

module.exports = router;





