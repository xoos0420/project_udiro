import SQ from "sequelize";
import {sequelize} from "../../db/database.js";
const DataTypes = SQ.DataTypes;

// 기존의 테이블이 없으면 테이블을 생성하고, 있으면 생성하지 않음
// 뒤에 s가 붙음
export const Admin = sequelize.define(
    "admin",
    {
        // 인덱스
        admin_idx:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        // 관리자 아이디
        admin_id:{
            type:DataTypes.STRING(128),
            allowNull:false
        },
        // 관리자 비밀번호
        admin_pw:{
            type:DataTypes.STRING(128),
            allowNull:false,
            unique: true
        }
    },
    {timestamps: false}
);

// 회원 번호로 검색
export async function login(admin_id, admin_pw) {
    return Admin.findOne({where:{admin_id, admin_pw}})
}