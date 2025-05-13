const Trail = require('../models/trail');

const getTrails = async (req, res) => {
  const trails = await Trail.getAllTrails();
  res.json(trails);
};

const createTrail = async (req, res) => {
  const { title, description } = req.body;
  await Trail.createTrail({ title, description });
  res.status(201).json({ message: 'Trilha criada com sucesso' });
};

module.exports = {
  getTrails,
  createTrail,
};
