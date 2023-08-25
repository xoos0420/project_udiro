import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import * as placeRepository from "../data/places/place.js";
import * as dataRepository from "../data/data.js";
import { config } from "../config.js";
// import db from '../db/database.js'


export async function getAll(req, res, next) {
    try {
        const datas = await dataRepository.Data.findAll()
        return res.status(200).json(datas)
    } catch (err) {
        console.error('DB 업데이트 중 오류가 발생하였습니다.', err);
        return res.status(500).send('오류야')
    }
}


// 바꿀려면 변수 값만 수정하면 됩니다
export async function getByidx(idx) {
    return Data.findByPk(idx);
}
// 바꿀려면 변수 값만 수정하면 됩니다
export async function getByPlace(AREA_NM) {
    return Data.findByOne(AREA_NM);
}






export async function noLoginme(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401), next();
    }
    const decoded = verify(token);
    if (!decoded || !decoded.user_id) {
        return res.status(401).json({ message: '유효한 로그인정보가 아닙니다. failed.' }), next();
    }
    const user = await userRepository.searchByIdx(decoded.user_id);
    if (!user) {
        return res.status(404).json({ message: 'User not found.' }), next();
    }
    res.status(200).json({ token: token, user_id: user.user_id });
}

// export async function search(req, res, next) {
//     const category = req.body.category
//     const keyword = req.body.keyword

//     category
// }



function createJwtToken(idx) {
    return jwt.sign({ idx }, config.jwt.secretKey, { expiresIn: config.jwt.expiresInSec });
}

