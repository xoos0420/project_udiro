import SQ from "sequelize";
import { sequelize } from "../../db/database.js";
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
        },
    },
    { timestamps: false } // true면 createdAt, updatedAt 컬럼이 자동으로 생김
);

await sequelize.sync();
// user_idx user_name user_id user_pw user_email user_phone user_area

export async function createUser(user) {
    return User.create(user).then((data) => data.dataValues.user_idx);
}

export async function searchById(user_id) {
    const user = await User.findOne({ where: { user_id: user_id } });
    try {
        return user
    } catch (e) {
        console.log('이미 삭제되었거나 존재하지 않는 회원입니다.', e)
    }
    // user아이디 넘어오는것 확인
}

export async function searchByIdx(user_idx) {
    return User.findByPk(user_idx);
}

export async function searchByNameEmail(user_name, user_email) {
    return User.findOne({ where: { user_name, user_email } });
}

export async function searchByIdHP(user_id, user_phone) {
    return User.findOne({ where: { user_id, user_phone } });
}


export async function updateMypage(user_id, user_phone, user_email, user_area) {
    return User.findByPk(user_id).then((user) => {
        console.log(`user.js${user}`)
        user.user_phone = user_phone;
        user.user_email = user_email;
        user.user_area = user_area;
        return user.save(); // user의 변경 내용을 DB에 저장
    });
}

export async function deleteUser(user) {
    // console.log(user) user아이디 넘어오는것 확인
    return User.destroy({
        where: { user_id: user }
    });
}

export async function updatePassword(user_idx, user_pw) {
    return User.findByPk(user_idx).then((user) => {
        user.user_pw = user_pw;
        user.save();
    })
}