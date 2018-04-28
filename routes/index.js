var express = require('express');
var router = express.Router();
const {models} = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Quiz'});
});

/* GET credits page */
router.get('/credits', function (req, res, next) {
  res.render('credits');
});

/* GET quizzes page */
router.get('/quizzes', function (req, res, next) {
    res.render('quizzes');
});

module.exports = router;
