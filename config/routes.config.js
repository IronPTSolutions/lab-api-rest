const express = require('express');
const router = express.Router();
const Author = require('../models/author.model')

router.post('/authors', (req, res, next) => {
    console.log('holi')
    Author.create(req.body)
    .then((author) => res.status(201).json(author))
    .catch((error) => next(error));}
);

module.exports = router;