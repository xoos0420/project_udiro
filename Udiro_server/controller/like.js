import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import * as userRepository from "../data/user/user.js";
import * as likeRepository from "../data/user/like.js"
import { config } from "../config.js";
import { transport } from "../db/email.js"

export async function createLike(req, res, next) {
    const { user_id, festa_num, place_num } = req.body;
    try {
        const like = await likeRepository.searchById(user_id)
        if (like) {
            like.festa_num = festa_num
            like.place_num = place_num
            // user_id가 이미 존재하는 경우 업데이트 수행
            const updatedLike = await like.save();
            res.status(201).json({ updatedLike });
        } else {
            // user_id가 존재하지 않는 경우 신규 생성 수행
            const newLike = await likeRepository.createLike({ user_id, festa_num, place_num });
            res.status(201).json({ newLike });
        }
    } catch (e) {
        next(e);
    }
}




// DELETE
export async function deleteById(req, res, next) {
    const id = req.body.user_id; // req.body.id 와 req.params.id 의 차이점 확인
    // console.log(id) 아이디 넘어오는거 확인됨

    const user = await userRepository.searchById(id);

    if (!user) {
        return res.status(404).json({ message: `유저 id(${id}) is not found` });
    }

    // if (user.user_id !== id) {
    //   return res.status(403).json({ message: '본인확인 먼저해!' });
    // }

    await userRepository.deleteUser(id); // deleteUser -> deleteById로 변경
    res.sendStatus(204);
};


export async function C_updateMypage(req, res, next) {
    try {
        const { user_id, user_phone, user_email, user_area } = req.body;
        const user = await userRepository.searchById(user_id);
        if (!user) {
            throw new Error('사용자가 존재하지 않습니다.')
        }

        user.user_id = user_id
        user.user_phone = user_phone;
        user.user_email = user_email;
        user.user_area = user_area;
        const updatedUser = await user.save();

        res.status(200).json()
        return updatedUser
    } catch (err) {
        console.error('DB 업데이트 중 오류가 발생하였습니다.', err);
        return res.status(500).send('오류야')
    }
}

export async function myaccount(req, res, next) {
    const user = await (userRepository.searchByIdx(req.user_idx));
    if (!user) {
        return res.status(404).json({ message: "사용자가 존재하지 않습니다." })
    }
    console.log(user)
    res.status(200).json({ user_name: user.user_name, user_id: user.user_id, user_email: user.user_email, user_phone: user.user_phone, user_area: user.user_area });
}

function createJwtToken(idx) {
    return jwt.sign({ idx }, config.jwt.secretKey, { expiresIn: config.jwt.expiresInSec });
}

function getRandomPW() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let password = '';
    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars.charAt(randomIndex);
    }
    return password;
}

export async function updatePW(req, res, next) {
    const { user_id, user_pw } = req.body;
    const user = await (userRepository.searchById(user_id));
    if (!user) {
        return res.status(404).json({ message: "사용자가 존재하지 않습니다." })
    }
    const password = user_pw;
    const hashed = await (bcrypt.hash(password, config.bcrypt.saltRound));

    await userRepository.updatePassword(user.user_idx, hashed);
    const message = `${user.user_name}님의 새롭게 설정한 비밀번호가 저장되었습니다!`;
    return res.status(200).json({ message });
}