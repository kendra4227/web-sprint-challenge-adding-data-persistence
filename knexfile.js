// do not make changes to this file
const sharedConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: { directory: './data/migrations' },
  pool: { afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done) },
}

module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
  
      filename: './data/lambda.db3'
    }
  }
}

