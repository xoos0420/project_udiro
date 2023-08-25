import SQ from "sequelize";
import { sequelize } from "../../db/database.js";
import { User } from './user.js'
import { culture_place } from '../culture/place.js'
import { culture_festa } from '../culture/festa.js'

const DataTypes = SQ.DataTypes;
// 기존의 테이블이 없으면 테이블을 생성하고, 있으면 생성하지 않음
// 뒤에 s가 붙음
export const Like = sequelize.define(
    'like',
    {
        // 인덱스
        like_idx: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        // 아이디
        user_id: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        // festa
        festa_num: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        // place
        place_num: {
            type: DataTypes.TEXT,
            allowNull: true
        },
    },
    { timestamps: true }, // true면 createdAt, updatedAt 컬럼이 자동으로 생김
);

Like.sync({ force: false })
    .then(() => {
        console.log('Like 모델과 연결된 데이터베이스 테이블이 성공적으로 생성되었습니다.');
    })
    .catch((error) => {
        console.error('Like 모델과 연결된 데이터베이스 테이블 생성 중 에러 발생: ', error);
    });


export async function createLike(element) {
    return Like.create(element).then((data) => data);
}

export async function searchById(user_id) {
    return Like.findOne({ where: { user_id: user_id } });
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