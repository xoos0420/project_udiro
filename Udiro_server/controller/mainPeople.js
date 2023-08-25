import mysql from 'mysql2';
import express from 'express';
const app = express();
import { getPeopleNum } from './main';



const connection = mysql.createConnection({
    host: 'svc.sel4.cloudtype.app',
    user: 'root',
    password: 'Js421wltjd@!',
    database: 'udiro'
});


// 3초에 한번씩 데이터 뽑아오기
function delay(ms) {
    return new Promise(res => setTimeout(res, ms));
}

async function queryLoop() {
    for (let i = 1; i <= 50; i++) {
        // await delay(3000); // 3초 대기

        connection.query(`SELECT name, congest_level, max_population FROM places where id = ${i}`, (error, results, fields) => {
            if (error) {
                console.error('Error while performing query', error);
                return;
            }

            console.log(results);
        });
    }
}

// queryLoop() 함수 실행
queryLoop();

app.listen(8080);

// setInterval(() => {
//     for (let i = 1; i < 51; i++) {
//         connection.query(`SELECT name, congest_level, max_population FROM places where id = ${i}`, (error, results, fields) => {
//             if (error) {
//                 console.error('Error while performing query', error);
//                 return;
//             }
//             const data = results
//             // 결과 출력
//             console.log(data);
//         })
//     }
// }, 3000); // 3초에 한 번씩 실행

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '1234',
//     database: 'udiro_main'
// });

// app.get('/api/places', (req, res) => {
//     const SELECT_QUERY = 'SELECT name, congest_level, max_population FROM places';
//     connection.query(SELECT_QUERY, (error, results, fields) => {
//         if (error) {
//             throw error;
//         }
//         res.send(results);
//     });
// });

// app.listen(3000, () => {
//     console.log('App listening on port 3000!');
// });


// async function fetchPlaces() {
//     const response = await fetch('http://openapi.seoul.go.kr:8088/4d66634f6a776c7436315456716566/xml/citydata/1/5/광화문·덕수궁'); // API URI를 입력해주세요.
//     const data = await response.json();
//     return data;
// }

// async function showData() {
//     // const places = await fetchPlaces();
//     // const div = document.querySelector('#peopleNum');

//     let index = 0;
//     setInterval(() => {
//         const SELECT_QUERY = 'SELECT name, congest_level, max_population FROM places';
//         const { name, congest_level, max_population } = SELECT_QUERY[index];
//         console.log(`${name} / ${congest_level} / ${max_population}`);
//         // div.innerHTML = `${name} / ${congest_level} / ${max_population}`;
//         index = (index + 1) % places.length;
//     }, 3000);
// }

// // 페이지 로딩 시 데이터를 가져옵니다.
// showData();