import "dotenv/config";
import Jwt from "jsonwebtoken";

const verificarToken = (req, res, next) => {
    let token = req.get('auth');
    jwf.verify(token, process.env.SEED, (err, decoded) => {
        if(err){
            res.status(400).json({
                err
            })
        }
        req.usuario = decoded.usuario;
        next()
    })
};

export default verificarToken;