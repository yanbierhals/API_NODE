import { verificarLogin, verificarToken } from '../auth/loginService'; // Ajuste o caminho conforme necessário


function verificarAcesso(req: any, res: any, next: any) {
    try{
        const token = req.header('X-Auth-Token');
        verificarToken(token);
        next();
    }
    catch (err:any) {
        res.status(401).json(err.message);
    }
}

module.exports = {
    verificarAcesso
}