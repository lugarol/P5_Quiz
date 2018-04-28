const models = require('../models');

// GET /quizzes
exports.index = (req, res, next) => {
    const quizzes = models.quiz.findAll();
    res.render('quizzes/index.ejs', {quizzes});
};