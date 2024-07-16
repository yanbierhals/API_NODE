const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');

// Routers require
const produtoRouter = require('./router/produto_router.ts');

dotenv.config()

if (!process.env.PORT) {
    console.log(`No port value specified...`);
    process.exit(1);  // Exit the process if no port is specified
}

const PORT = parseInt(process.env.PORT, 10);

const app = express();
const middlewareAcesso = require('./middleware/acesso_middleware');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

app.use('/api/produtos', middlewareAcesso.verificarAcesso, produtoRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
