import express from "express"
import * as dotevnv from "dotenv"
import cors from "cors"
import helmet from "helmet"

// Routers require
const produtoRouter = require('./router/produto_router');

dotevnv.config()

if (!process.env.PORT) {
    console.log(`No port value specified...`)
}

const PORT = parseInt(process.env.PORT as string, 10)

const app = express()
const middlewareAcesso = require('./middleware/acesso_middleware');

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())
app.use(helmet())

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
  })


app.use('/api/produtos', middlewareAcesso.verificarAcesso, produtoRouter);


app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost:${PORT}`)
})