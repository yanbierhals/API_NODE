const jwt = require('jsonwebtoken');

const CHAVE_SECRETA = "Sen@c2024";
const userAdmin = { 
    id: 1,
    nome: "Admin",
    usuario: "admin",
    senha: "12345"
}

function verificarLogin(user: Usuario) {
    if(user && user.usuario == userAdmin.usuario
        && user.senha == userAdmin.senha)
    {
        const token = jwt.sign({id:userAdmin.id, nome:userAdmin.nome},
            CHAVE_SECRETA, { expiresIn: '10m' })
        return token;
    }

    throw {id:401, message:"Usuario ou senha invalidos"}; 

}

function verificarToken(token: any) {
    try{
        const payload = jwt.verify(token, CHAVE_SECRETA);
        if(payload) {
            return(payload);
        }
        else {
            throw {id: 401, message: "Voce nao tem acesso ao recurso"};
        }
    } catch(error) {
        throw {id: 401, message: "Voce nao tem acesso ao recurso"};
    }
}


export { verificarLogin, verificarToken };
