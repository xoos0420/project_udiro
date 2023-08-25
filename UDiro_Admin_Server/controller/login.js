import * as userRepository from "../data/user/user.js";
import {config} from "../config.js";
import * as adminRepository from "../data/admin/admin.js"

export async function getAll(req, res) {
    const users = userRepository.getAll();

    res.status(200).json(users);
}

export async function get(req, res) {
    const user_idx = req.params.user_idx;
    const user = userRepository.searchByIdx(user_idx);

    res.status(200).json(users);
}

export async function login(req, res) {
    const {admin_id, admin_pw} = req.body;
    const admin = await(adminRepository.login(admin_id, admin_pw));

    if (!admin) {
        return res.status(400).json({message:"로그인 실패!"})
    }
    res.status(200).json({admin_id});
}