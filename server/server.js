require('dotenv').config();
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const trailRoutes = require('./routes/trailRoutes');

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/trails', trailRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


module.exports = app;