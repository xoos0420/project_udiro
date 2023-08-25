import jwt from "jsonwebtoken";
import * as userRepository from "../data/user/user.js";
import {config} from "../config.js";

const Auth_Error = {message : "인증 에러!"};

export const isAuth = async (req, res, next) => {
    const authHeader = req.get("Authorization");

    if (!(authHeader && authHeader.startsWith("Bearer "))) {
        return res.status(401).json(Auth_Error);
    }
    const token = authHeader.split(" ")[1];
    jwt.verify(
        token,
        config.jwt.secretKey,
        async (error, decoded) =>{
            if (error) {
                return res.status(401).json(error);
            }
            const user = await userRepository.searchByIdx(decoded.idx);
            if(!user){
                return res.status(401).json(Auth_Error);
            }
            req.user_idx = user.user_idx;
            next();
        }
    )
}