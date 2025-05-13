const User = require('../models/user');

module.exports = {
  async index(req, res) {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar usuários', error });
    }
  },

  async show(req, res) {
    try {
      const user = await User.findById(req.params.id);
      if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar usuário', error });
    }
  },

  async store(req, res) {
    const { name, email } = req.body;
    try {
      await User.create({ name, email });
      res.status(201).json({ message: 'Usuário criado' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar usuário', error });
    }
  },

  async update(req, res) {
    const { name, email } = req.body;
    try {
      await User.update(req.params.id, { name, email });
      res.json({ message: 'Usuário atualizado' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar usuário', error });
    }
  },

  async destroy(req, res) {
    try {
      await User.delete(req.params.id);
      res.json({ message: 'Usuário deletado' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao deletar usuário', error });
    }
  }
};
