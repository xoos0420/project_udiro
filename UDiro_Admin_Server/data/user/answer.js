import SQ from "sequelize";
import {sequelize} from "../../db/database.js";
import { Question } from "./question.js";
const DataTypes = SQ.DataTypes;

export const Answer = sequelize.define(
    "answer",
    {
        // 인덱스
        answer_idx:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        // 내용
        answer_content:{
            type:DataTypes.TEXT,
            allowNull:false
        }
    }
);

Answer.belongsTo(Question, {foreignKey:question_idx});