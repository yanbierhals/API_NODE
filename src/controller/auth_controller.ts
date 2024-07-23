
function realizarLogin(req: any, res: any) {
     const user = req.body;
     try{ 
        const token = loginService.verificarLogin(user);
        res.status(201).json({token:token});
     }
     catch(err) {
        res.status(401).json(err);
     }
}

module.exports = {
    realizarLogin
}