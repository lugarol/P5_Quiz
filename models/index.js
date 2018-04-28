var quiz = require('./quiz');

exports.quiz = quiz;

const path = require('path');

// cargar ORM
const Sequelize = require('sequelize');

// para usar SQLite
const sequelize = new Sequelize('sqlite:quizzes.sqlite');

// importar los quizzes
sequelize.import(path.join(__dirname, 'quiz'));

// crear tablas
sequelize.sync()
.then(() => {console.log('BBDD creada correctamente')})
.catch(error => {
    console.log('Error al crear la BBDD:', error);
    process.exit(1);
});

module.exports = sequelize;