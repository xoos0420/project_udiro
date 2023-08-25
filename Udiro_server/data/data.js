import SQ from 'sequelize';
import { sequelize } from '../db/database.js';
import { DOMParser } from 'xmldom';

const DataTypes = SQ.DataTypes;

// 데이터베이스 생성
export const Data = sequelize.define(
    'data',
    {
        idx: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        AREA_NM: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        AREA_PPLTN_MAX: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        weather_temp: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        ROAD_TRAFFIC_STTS: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        LIVE_PPLTN_STTS: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        MAX_TEMP: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        MIN_TEMP: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        HUMIDITY: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        PRECIPITATION: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        RAIN_CHANCE: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        PCP_MSG: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        AREA_CONGEST_LVL: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        AREA_CONGEST_MSG: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        ROAD_MSG: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        ROAD_TRAFFIC_SPD: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        NON_RESNT_PPLTN_RATE: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    {
        timestamps: true,
    }
);
// Data 모델과 연결된 데이터베이스 테이블이 존재하는지 확인하고 없다면 생성

Data.sync({ force: false })
    .then(() => {
        console.log('Data 모델과 연결된 데이터베이스 테이블이 성공적으로 생성되었습니다.');
    })
    .catch((error) => {
        console.error('Data 모델과 연결된 데이터베이스 테이블 생성 중 에러 발생: ', error);
    });


const place = ['남산공원', '강남 MICE 관광특구', '동대문 관광특구', '명동 관광특구', '이태원 관광특구', '잠실 관광특구', '종로·청계 관광특구', '홍대 관광특구', '경복궁·서촌마을', '광화문·덕수궁', '창덕궁·종묘', '가산디지털단지역', '강남역', '건대입구역', '고속터미널역', '교대역', '구로디지털단지역', '서울역', '선릉역', '신도림역', '신림역', '신촌·이대역', '역삼역', '연신내역', '용산역', '왕십리역', 'DMC(디지털미디어시티)', '창동 신경제 중심지', '노량진', '낙산공원·이화마을', '북촌한옥마을', '가로수길', '성수카페거리', '수유리 먹자골목', '쌍문동 맛집거리', '압구정로데오거리', '여의도', '영등포 타임스퀘어', '인사동·익선동', '국립중앙박물관·용산가족공원', '뚝섬한강공원', '망원한강공원', '반포한강공원', '북서울꿈의숲', '서울대공원', '서울숲공원', '월드컵공원', '이촌한강공원', '잠실종합운동장', '잠실한강공원']

export async function dataSave() {
    try {
        await Promise.all(place.map(async (e) => {
            const url = `http://openapi.seoul.go.kr:8088/4d66634f6a776c7436315456716566/xml/citydata/1/5/${e}`;

            const response = await fetch(url);

            if (response.status === 200) {
                const data = await response.text();
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(data, "text/xml");

                const items = xmlDoc.getElementsByTagName("CITYDATA");
                const people = items[0].getElementsByTagName("LIVE_PPLTN_STTS");

                const AREA_NM = items[0].getElementsByTagName("AREA_NM")[0].textContent;
                console.log(AREA_NM);
                const AREA_PPLTN_MAX = items[0].getElementsByTagName('AREA_PPLTN_MAX')[0].textContent;
                const AREA_CONGEST_LVL = people[0].getElementsByTagName("AREA_CONGEST_LVL")[0].textContent;

                const weather = items[0].getElementsByTagName("WEATHER_STTS");
                const road = items[0].getElementsByTagName("ROAD_TRAFFIC_STTS");

                const weather_temp = weather[0].getElementsByTagName('TEMP')[0].textContent

                const ROAD_TRAFFIC_STTS = road[0].getElementsByTagName('ROAD_TRAFFIC_IDX')[0].textContent
                const ROAD_MSG = road[0].getElementsByTagName('ROAD_MSG')[0].textContent
                const LIVE_PPLTN_STTS = people[0].getElementsByTagName('AREA_CONGEST_LVL')[0].textContent
                const MAX_TEMP = weather[0].getElementsByTagName('MAX_TEMP')[0].textContent
                const MIN_TEMP = weather[0].getElementsByTagName('MIN_TEMP')[0].textContent
                const HUMIDITY = weather[0].getElementsByTagName('HUMIDITY')[0].textContent
                const PRECIPITATION = weather[0].getElementsByTagName('PRECIPITATION')[0].textContent
                const RAIN_CHANCE = weather[0].getElementsByTagName('RAIN_CHANCE')[0].textContent
                const PCP_MSG = weather[0].getElementsByTagName('PCP_MSG')[0].textContent
                const ROAD_TRAFFIC_SPD = road[0].getElementsByTagName('ROAD_TRAFFIC_SPD')[0].textContent

                const AREA_CONGEST_MSG = people[0].getElementsByTagName('AREA_CONGEST_MSG')[0].textContent
                const NON_RESNT_PPLTN_RATE = people[0].getElementsByTagName('NON_RESNT_PPLTN_RATE')[0].textContent

                // Data 모델에 해당하는 데이터 생성하기 (sequelize의 create 메소드 사용)
                await Data.update({
                    AREA_NM: AREA_NM,
                    AREA_PPLTN_MAX: AREA_PPLTN_MAX,
                    weather_temp: weather_temp,
                    ROAD_TRAFFIC_STTS: ROAD_TRAFFIC_STTS,
                    LIVE_PPLTN_STTS: LIVE_PPLTN_STTS,
                    MAX_TEMP: MAX_TEMP,
                    MIN_TEMP: MIN_TEMP,
                    HUMIDITY: HUMIDITY,
                    PRECIPITATION: PRECIPITATION,
                    RAIN_CHANCE: RAIN_CHANCE,
                    PCP_MSG: PCP_MSG,
                    AREA_CONGEST_LVL: AREA_CONGEST_LVL,
                    AREA_CONGEST_MSG: AREA_CONGEST_MSG,
                    ROAD_MSG: ROAD_MSG,
                    ROAD_TRAFFIC_SPD: ROAD_TRAFFIC_SPD,
                    NON_RESNT_PPLTN_RATE: NON_RESNT_PPLTN_RATE
                },
                    { where: { AREA_NM: AREA_NM } }
                )
                    .then((result) => {
                        console.log('데이터 업데이트 성공:', result);
                    })
                    .catch((error) => {
                        console.error('데이터 업데이트 중 실패:', error);
                    });
            }

        }));
    } catch (error) {
        console.error('데이터를 가져오는 도중 오류가 발생했습니다.', error);
    }
}





// setInterval(async () => {
await dataSave();
    // console.log('data업데이트 완료')
// }, 600000);




