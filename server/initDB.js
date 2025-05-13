const db = require('./config/database');

async function init() {
  await db.schema.hasTable('users').then(async (exists) => {
    if (!exists) {
      await db.schema.createTable('users', (table) => {
        table.increments('id').primary();
        table.string('email').notNullable().unique();
        table.string('password').notNullable();
      });
      console.log('Tabela "users" criada');
    }
  });

  await db.schema.hasTable('trails').then(async (exists) => {
    if (!exists) {
      await db.schema.createTable('trails', (table) => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.text('description');
      });
      console.log('Tabela "trails" criada');
    }
  });

  process.exit();
}

init();
