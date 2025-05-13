-- Este arquivo é para criar as tabelas principais do sistema no banco de dados.

-- criando tabela de usuário 
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    email VARCHAR(255) NOT NULL, 
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);