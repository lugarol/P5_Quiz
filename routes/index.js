var express = require('express');
var router = express.Router();
const {models} = require('../models');
const quizController = require('../controllers/quiz');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET credits page */
router.get('/credits', (req, res, next) => {
  res.render('credits');
});

/* GET quizzes page */
router.get('/quizzes', quizController.index);

module.exports = router;
