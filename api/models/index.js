
const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

const { AuthUser } = require('./AuthUser');
const { Person } = require('./Person');
const { Monitoring } = require('./Monitoring');
const { Location } = require('./Location');


const models = {
  AuthUser,
  Person,
  Location,
  Monitoring,
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.Sequelize = Sequelize;
models.sequelize = sequelize;

module.exports = { models };
