const loginService = require('./login')

function verificarAcesso(req: any, res: any, next: any) {
    try{
        const token = req.get('token');
        loginService.verificarToken(token);
        next();
    }
    catch (err:any) {
        res.status(401).json(err);
    }
}

module.exports = {
    verificarAcesso
}