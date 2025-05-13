const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const register = async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    await User.createUser({ email, password: hashedPassword });
    res.status(201).json({ message: 'Usuário criado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao registrar usuário' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findUserByEmail(email);
  if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ error: 'Senha inválida' });

  const token = jwt.sign({ id: user.id }, 'segredo_secreto', { expiresIn: '1d' });
  res.json({ token });
};

module.exports = {
  register,
  login,
};
