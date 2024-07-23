import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';

// Routers require
const produtoRouter = require('./router/produto_router');
const authRouter = require('./router/auth_router');
const categoriaRouter = require('./router/categoria_router');

dotenv.config()

if (!process.env.PORT) {
    console.log(`No port value specified...`);
    process.exit(1);  // Exit the process if no port is specified
}

const PORT = parseInt(process.env.PORT, 10);

const app = express();
const auth = require('./auth/auth');// auth

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

app.use('/api/produtos',auth.verificarAcesso, produtoRouter); //auth: colocar como segundo parametro = 'middlewareAcesso.verificarAcesso'
app.use('/api/categorias',auth.verificarAcesso, categoriaRouter); //auth: colocar como segundo parametro = 'middlewareAcesso.verificarAcesso'
app.use('/api/login', authRouter); //auth: colocar como segundo parametro = 'middlewareAcesso.verificarAcesso'

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
