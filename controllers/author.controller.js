const Author = require('../models/author.model');
const createErrors = require('http-errors')

module.exports.create = (req, res, next) => {
    Author.create(req.body)
    .then((author) => res.status(201).json(author))
    .catch((error) => next(error));
};

module.exports.delete = (req, res, next ) => {
    Author.findByIdAndDelete(req.params.id)
    .then((author) => {
        if(!author){
            next(createErrors(404, 'Author not found'));
        }else {
            res.status(204).send()
        }
    })
    .catch((error) => next(error));
    
}

module.exports.list = (req, res, next) => {
    Author.find()
    .then((authors) => res.json(authors))
    .catch((error) => next(error));
}

module.exports.edit = (req, res, next) => {
    console.log(req.body)
    Author.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((author) => {
        if(!author){
            next(createErrors(404, 'Author not found'));
        } else if (Object.keys(req.body).length === 0){
           next(createErrors(404, 'Not changes requested'));
        } else if (Object.keys(req.body).some((key) => !(key === "name" || key ==='bio' || key === 'century' ||key === 'genres' ))) {
            next(createErrors(418, 'Incorrect changes requested'));
        } else {
            res.status(200).json(author);
        }
    })
    .catch((error) => next(error));
}


