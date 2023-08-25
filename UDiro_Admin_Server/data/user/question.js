import SQ from "sequelize";
import {sequelize} from "../../db/database.js";
import {User} from "./user.js";
const DataTypes = SQ.DataTypes;

export const Question = sequelize.define(
    "question",
    {
        // 인덱스
        question_idx:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        // 제목
        question_title:{
            type:DataTypes.STRING(128),
            allowNull:false
        },
        // 내용
        question_content:{
            type:DataTypes.TEXT,
            allowNull:false
        }
    }
);
Question.belongsTo(User, {foreignKey:user_idx});

// 모든 질문 사항 불러오기
export async function getAll() {
    return Question.findAll();
}

