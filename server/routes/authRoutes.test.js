const request = require('supertest');
const app = require('../server/server.js'); // Ajuste o caminho para o seu app, se necessário

describe('POST /register', () => {
    it('should return status 200 when user is created', async () => {
      const response = await request(app).post('/register').send({
        username: 'newuser',
        password: 'password123',
      });
  
      expect(response.status).toBe(200); // Ajuste conforme o que você espera
    });
  });
  