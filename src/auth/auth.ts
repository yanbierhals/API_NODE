const loginService = require('../service/login_service')

function verificarAcesso(req: any, res: any, next: any) {
    try{
        const token = req.get('token');
        loginService.verificarToken(token);
        next();
    }
    catch (err:any) {
        res.status(err.id).json(err);
    }
}

module.exports = {
    verificarAcesso
}