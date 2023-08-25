import SQ from 'sequelize';
import { sequelize } from '../db/database.js';
import { DOMParser } from 'xmldom';
import fetch from 'node-fetch';

const DataTypes = SQ.DataTypes;

export const Restroom = sequelize.define(
    'Restroom',
    {
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        lat: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        lng: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
    },
    {
        timestamps: false,
    }
);

Restroom.sync({ force: false })
    .then(() => {
        console.log('restroom 모델과 연결된 데이터베이스 테이블이 성공적으로 생성되었습니다.');
        restroomdataSave();
    })
    .catch((error) => {
        console.error('restroom 모델과 연결된 데이터베이스 테이블 생성 중 에러 발생: ', error);
    });

export async function restroomdataSave() {
    try {
        const restroomCount = await Restroom.count();
        if (restroomCount > 0) {
            console.log("이미 데이터베이스에 화장실 정보가 저장되어 있습니다.");
            return;
        }

        const response = await fetch('http://openAPI.seoul.go.kr:8088/4550596c7365687731323346776b5a6f/xml/SearchPublicToiletPOIService/1/200/');
        const data = await response.text();
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(data, 'text/xml');
        var rows = xmlDoc.getElementsByTagName('row');
        var restrooms = [];

        for (var i = 0; i < rows.length; i++) {
            var restroom = {
                name: rows[i].getElementsByTagName('FNAME')[0].textContent,
                lat: parseFloat(rows[i].getElementsByTagName('Y_WGS84')[0].textContent),
                lng: parseFloat(rows[i].getElementsByTagName('X_WGS84')[0].textContent),
            };
            restrooms.push(restroom);
        }

        await Restroom.bulkCreate(restrooms);
        console.log('데이터 저장 완료');
    } catch (error) {
        console.error('데이터 저장 중 오류 발생:', error);
    }
}

