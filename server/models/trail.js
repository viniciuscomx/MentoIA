// Modelo da trilha de estudo no banco de dados
const db = require('../config/database');

const getAllTrails = () => db('trails');
const createTrail = (trail) => db('trails').insert(trail);

module.exports = {
  getAllTrails,
  createTrail,
};
