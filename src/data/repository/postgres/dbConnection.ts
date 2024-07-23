import { Client } from 'pg';

const client = new Client({
    user: 'postgres',
    password: '123456',
    host: 'localhost',
    port: 5432,
    database: 'postgres'
});

client.connect((err: Error) => {
    if (err) {
        throw err;
    }
    console.log("Connected!");
});

export default client;
