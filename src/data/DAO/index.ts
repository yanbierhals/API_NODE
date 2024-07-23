import "reflect-metadata"
import { DataSource } from "typeorm"
import { CategoriaMap } from "./entitys/categoria.map"
import { ProdutoMap } from "./entitys/produto.map"

export const AppDataSource = new DataSource({
    type: "postgres",
    password: '123456',
    username:'postgres',
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    entities: [ProdutoMap, CategoriaMap],
    synchronize: true,
})

// to initialize the initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))