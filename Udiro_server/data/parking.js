import SQ from 'sequelize';
import { sequelize } from '../db/database.js';
import { DOMParser } from 'xmldom';
import fetch from 'node-fetch';

const DataTypes = SQ.DataTypes;

export const ParkingLots = sequelize.define(
    'ParkingLots',
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

ParkingLots.sync({ force: false })
    .then(() => {
        console.log('parking 모델과 연결된 데이터베이스 테이블이 성공적으로 생성되었습니다.');
        parkingSave();
    })
    .catch((error) => {
        console.error('parking 모델과 연결된 데이터베이스 테이블 생성 중 에러 발생: ', error);
    });

export async function parkingSave() {
    try {
        const parkingLotsCount = await ParkingLots.count();
        if (parkingLotsCount > 0) {
            console.log("이미 데이터베이스에 주차장 정보가 저장되어 있습니다.");
            return;
        }

        const response = await fetch('http://openapi.seoul.go.kr:8088/4550596c7365687731323346776b5a6f/xml/GetParkInfo/1/100');
        const data = await response.text();
        // console.log(data); // XML 데이터 확인용 로그 출력
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(data, 'text/xml');
        var rows = xmlDoc.getElementsByTagName('row');
        var parkingLots = [];

        for (var i = 0; i < rows.length; i++) {
            var parkingLot = {
                name: rows[i].getElementsByTagName('PARKING_NAME')[0].textContent,
                lat: parseFloat(rows[i].getElementsByTagName('LAT')[0].textContent),
                lng: parseFloat(rows[i].getElementsByTagName('LNG')[0].textContent),
            };
            parkingLots.push(parkingLot);
        }

        await ParkingLots.bulkCreate(parkingLots);
        console.log('데이터 저장 완료');
    } catch (error) {
        console.error('데이터 저장 중 오류 발생:', error);
    }
}