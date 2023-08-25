import SQ from "sequelize";
import { sequelize } from "../../db/database.js";
const DataTypes = SQ.DataTypes;

// 기존의 테이블이 없으면 테이블을 생성하고, 있으면 생성하지 않음
// 뒤에 s가 붙음
export const Place = sequelize.define(
    "place",
    {
        // 인덱스
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        // 장소명
        name: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        // 붐짐정도
        congest_level: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        // 사람수
        max_population: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
    },
    { timestamps: false } // true면 createdAt, updatedAt 컬럼이 자동으로 생김
);
// user_idx user_name user_id user_pw user_email user_phone user_area
await sequelize.sync();
export async function getAll() {
    return Place.findAll();
}
