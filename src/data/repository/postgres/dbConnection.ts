const { Client } = require('pg')
const client = new Client({
    user: 'postgres',
    password: '123456',
    host: 'localhost',
    port: 5433,
    database: 'API2024'
})
client.connect(function(err: any) {
  if (err) throw err;
  console.log("Connected!");
});