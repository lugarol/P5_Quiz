const express = require('express');
const router = express.Router();

const quizController = require('../controllers/quiz');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET credits page */
router.get('/credits', (req, res, next) => {
  res.render('credits');
});

router.param('quizId', quizController.load);

/* GET quizzes page */
router.get('/quizzes', quizController.index);

module.exports = router;
