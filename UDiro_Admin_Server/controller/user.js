import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import * as userRepository from "../data/user/user.js";
import {config} from "../config.js";

export async function getAll(req, res) {
    const users = await userRepository.getAll();

    res.status(200).json(users);
}

export async function getUser(req, res) {
    const user_idx = req.params.user_idx;
    const user = userRepository.searchByIdx(user_idx);

    res.status(200).json(user);
}

export async function createUser(req, res) {
    const {user_name, user_id, user_pw, user_email, user_phone}  = req.body;
    const hashed = await(bcrypt.hash(user_pw, config.bcrypt.saltRound));
    const user = await(userRepository.createUser({
        user_name,
        user_id,
        user_pw: hashed,
        user_email,
        user_phone
    }));
    
    return res.status(201).json("회원 추가 성공!");
}
export async function deleteUser(req, res) {
    const user_idx = req.params.user_idx;

    await userRepository.deleteUser(user_idx);
    
    return res.status(201).json('회원 삭제 성공!');
}

export async function updateUser(req, res) {
    const user_idx = req.params.user_idx;
    const {user_name, user_id, user_pw, user_email, user_phone}  = req.body;

    if (user_pw === '********') {
        await userRepository.updateUserNotPw(user_idx, user_name, user_id, user_email, user_phone);
        return res.status(201).json("회원정보 수정 성공!");
    }

    // const hashed = await(bcrypt.hash(user_pw, config.bcrypt.saltRound));
    // const user = await userRepository.updateUser(user_idx, user_name, user_id, hashed, user_email, user_phone);
    
    return res.status(201).json("회원정보 수정 성공!");
}