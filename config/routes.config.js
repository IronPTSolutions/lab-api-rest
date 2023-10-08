const express = require('express');
const router = express.Router();
const Author = require('../controllers/author.controller');

router.post('/authors', Author.create );
router.delete('/authors/:id', Author.delete);
router.get('/authors', Author.list);
router.put('/authors/:id', Author.edit)

module.exports = router;