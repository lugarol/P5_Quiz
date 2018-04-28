const Sequelize = require('sequelize');
const {models} = require('../models');

// GET /quizzes
exports.index = (req, res, next) => {
    models.quiz.findAll()
    .then(quizzes => {
        console.log(quizzes);
        res.render('quizzes/index.ejs', {quizzes});
    })
    .catch(error => next(error));
};

// load
exports.load = (req, res, next, quizId) => {
    models.quiz.findById(quizId)
    .then((quiz) => {
        if (quiz) {
            req.quiz = quiz;
            next();
        } else {
            throw new Error(`No hay un quiz con id=${quizId}`);
        }
    })
    .catch(error => next(error));
};