module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      user: 'root',
      password: 'Teatro@25',
      database: 'MentorIA'
    },
    migrations: {
      directory: './migrations'
    }
  }
};
