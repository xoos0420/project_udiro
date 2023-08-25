import SQ from "sequelize";
import {sequelize} from "../../db/database.js";
const DataTypes = SQ.DataTypes;

// 기존의 테이블이 없으면 테이블을 생성하고, 있으면 생성하지 않음
// 뒤에 s가 붙음
export const User = sequelize.define(
    "user",
    {
        // 인덱스
        user_idx: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        // 이름
        user_name: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        // 아이디
        user_id: {
            type: DataTypes.STRING(128),
            allowNull: false,
            unique: true
        },
        // 비밀번호
        user_pw: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        // 이메일
        user_email: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        // 핸드폰번호
        user_phone: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        // 자주가는 장소
        user_area: {
            type: DataTypes.STRING(128)
        },
        // 회원 스테이터스
        user_status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    },
    { timestamps: false } // true면 createdAt, updatedAt 컬럼이 자동으로 생김
);
// user_idx user_name user_id user_pw user_email user_phone user_area

// 모든 사용자 불러오기
export async function getAll() {
    return User.findAll({order: [['user_idx', 'DESC']]});
}

// 회원 추가
export async function createUser(user) {
    return User.create(user).then((data)=>data.dataValues.user_idx);
}

// 회원 번호로 검색
export async function searchByIdx(user_idx) {
    return User.findByPk(user_idx);
}

// 회원 정보 수정
export async function updateUser(user_idx, user_name, user_id, user_pw, user_email, user_phone) {
    return User.findByPk(user_idx).then((user) => {
        user.user_name = user_name;
        user.user_id = user_id;
        user.user_pw = user_pw;
        user.user_email = user_email;
        user.user_phone = user_phone;
        return user.save();
    });
}

export async function updateUserNotPw(user_idx, user_name, user_id, user_email, user_phone) {
    return User.findByPk(user_idx).then((user) => {
        user.user_name = user_name;
        user.user_id = user_id;
        user.user_email = user_email;
        user.user_phone = user_phone;
        return user.save();
    });
}

// 회원 삭제
export async function deleteUser(user_idx) {
    return User.findByPk(user_idx).then((user) => {
        user.destroy();
    });
}

