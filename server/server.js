require('dotenv').config();
const express = require('express');
const RouterAuth = require('./routes/authRoutes');
const trailRoutes = require('./routes/trailRoutes');

const app = express();

app.use(express.json());

app.use('/api/auth', RouterAuth);
app.use('/api/trails', trailRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


module.exports = app;