import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import * as restroomRepository from "../data/restroom.js";
import * as parkingRepository from "../data/parking.js";
import { config } from "../config.js";
// import db from '../db/database.js'


export async function restroomgetAll(req, res, next) {
    try {
        const datas = await restroomRepository.Restroom.findAll()
        return res.status(200).json(datas)
    } catch (err) {
        console.error('DB 업데이트 중 오류가 발생하였습니다.', err);
        return res.status(500).send('오류야')
    }
}

export async function parkinggetAll(req, res, next) {
    try {
        const datas = await parkingRepository.ParkingLots.findAll()
        return res.status(200).json(datas)
    } catch (err) {
        console.error('DB 업데이트 중 오류가 발생하였습니다.', err);
        return res.status(500).send('오류야')
    }
}


function createJwtToken(idx) {
    return jwt.sign({ idx }, config.jwt.secretKey, { expiresIn: config.jwt.expiresInSec });
}

