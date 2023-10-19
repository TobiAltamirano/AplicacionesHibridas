import "dotenv/config";
import Jwt from "jsonwebtoken";

const verificarToken = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Token no proporcionado' });
    }

    Jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({ err });
        }
        req.usuario = decoded.usuario;
        next();
    });
};

export default verificarToken;