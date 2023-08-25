// 이부분으로 사용
const search_bar = document.querySelector('#search-bar')


search_bar.addEventListener('change', (e) => {
    const place = e.target.value;
    console.log(place)

    async function getData() {
        try {
            const response = await fetch('https://port-0-udiroserver-7e6o2cli3ac97a.sel4.cloudtype.app/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const data = await response.json();
                let filteredData = data.filter(item => item.AREA_NM === place);
                filteredData = filteredData[0]


                const weather_desc = document.querySelector('#weather_desc')
                const road_desc = document.querySelector('#road_desc')
                const people_desc = document.querySelector('#people_desc')

                //  이렇게 데이터 가져오면 됨
                const weather_temp = filteredData.weather_temp;
                const ROAD_TRAFFIC_STTS = filteredData.ROAD_TRAFFIC_STTS
                const LIVE_PPLTN_STTS = filteredData.AREA_CONGEST_LVL

                // 간단히 보기에 넣음
                weather_desc.innerHTML = weather_temp
                road_desc.innerHTML = ROAD_TRAFFIC_STTS
                people_desc.innerHTML = LIVE_PPLTN_STTS


                const wt_des = document.querySelector('#wt_des')
                const wt_rain = document.querySelector('#wt_rain')
                const wt_rain_des = document.querySelector('#wt_rain_des')
                const weather_img = document.querySelector('#weather_now')
                const weather_img2 = document.querySelector('#weather_big')


                const MAX_TEMP = filteredData.MAX_TEMP;
                const MIN_TEMP = filteredData.MIN_TEMP;



                const HUMIDITY = filteredData.HUMIDITY;
                const PRECIPITATION = filteredData.PRECIPITATION;
                const RAIN_CHANCE = filteredData.RAIN_CHANCE;


                const PCP_MSG = filteredData.PCP_MSG;

                // 날씨에 넣기
                // 1번
                wt_des.innerHTML = `${MIN_TEMP}º/${MAX_TEMP}º`
                // 2번
                wt_rain.innerHTML = `${HUMIDITY}%, ${PRECIPITATION}, ${RAIN_CHANCE}%`
                // 3번
                wt_rain_des.innerHTML = PCP_MSG
                if (RAIN_CHANCE > '50') {
                    weather_img.setAttribute('src', 'https://cdn0.iconfinder.com/data/icons/weather-888/32/weather_rain_rainny_drop_cloud-64.png')
                    weather_img2.setAttribute('src', 'https://cdn0.iconfinder.com/data/icons/weather-888/32/weather_rain_rainny_drop_cloud-64.png')

                } else if (PCP_MSG == '비 또는 눈 소식이 없어요.') {
                    weather_img.setAttribute('src', 'https://cdn2.iconfinder.com/data/icons/summer-flat-11/272/summer-vacation-sun-sunlight-summer-heat-hot-64.png')
                    weather_img2.setAttribute('src', 'https://cdn2.iconfinder.com/data/icons/summer-flat-11/272/summer-vacation-sun-sunlight-summer-heat-hot-64.png')

                }

                // 날씨 끝


                // 인구혼잡도 시작
                const live_people = document.querySelector('#live_people')
                const live_msg = document.querySelector('#live_msg')
                const live_tb = document.querySelector('#live_tb')

                //                 // 파싱

                const AREA_CONGEST_LVL = filteredData.AREA_CONGEST_LVL;
                const AREA_CONGEST_MSG = filteredData.AREA_CONGEST_MSG;
                const AREA_PPLTN_MAX = filteredData.AREA_PPLTN_MAX;

                //                 //  값 대입하기
                live_people.innerHTML = AREA_CONGEST_LVL
                live_msg.innerHTML = AREA_CONGEST_MSG
                live_tb.innerHTML = `${AREA_PPLTN_MAX}명`


                // 도로상황 시작
                const road_Traffic = document.querySelector('#road_Traffic')
                const road_msg = document.querySelector('#road_msg')
                const road_spd = document.querySelector('#road_spd')


                const ROAD_MSG = filteredData.ROAD_MSG;
                const ROAD_TRAFFIC_SPD = filteredData.ROAD_TRAFFIC_SPD;

                road_Traffic.innerHTML = ROAD_TRAFFIC_STTS
                road_msg.innerHTML = ROAD_MSG
                road_spd.innerHTML = ROAD_TRAFFIC_SPD + 'K/m'

            } else {
                console.log(response);
                alert('잘못된 접근입니다.');
            }
        } catch (error) {
            console.error('Error updating user', error);
        }
    }

    getData();
});




// //  로컬스토리지에 맵 밸류가 있을 경우
if (map_value) {
    async function getData() {
        try {
            const response = await fetch('https://port-0-udiroserver-7e6o2cli3ac97a.sel4.cloudtype.app/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const data = await response.json();
                let filteredData = data.filter(item => item.AREA_NM === map_value);
                filteredData = filteredData[0]


                const weather_desc = document.querySelector('#weather_desc')
                const road_desc = document.querySelector('#road_desc')
                const people_desc = document.querySelector('#people_desc')

                //  이렇게 데이터 가져오면 됨
                const weather_temp = filteredData.weather_temp;
                const ROAD_TRAFFIC_STTS = filteredData.ROAD_TRAFFIC_STTS
                const LIVE_PPLTN_STTS = filteredData.AREA_CONGEST_LVL

                // 간단히 보기에 넣음
                weather_desc.innerHTML = weather_temp
                road_desc.innerHTML = ROAD_TRAFFIC_STTS
                people_desc.innerHTML = LIVE_PPLTN_STTS


                const wt_des = document.querySelector('#wt_des')
                const wt_rain = document.querySelector('#wt_rain')
                const wt_rain_des = document.querySelector('#wt_rain_des')

                const MAX_TEMP = filteredData.MAX_TEMP;
                const MIN_TEMP = filteredData.MIN_TEMP;


                const weather_img = document.querySelector('#weather_now')
                const weather_img2 = document.querySelector('#weather_big')

                const HUMIDITY = filteredData.HUMIDITY;
                const PRECIPITATION = filteredData.PRECIPITATION;
                const RAIN_CHANCE = filteredData.RAIN_CHANCE;


                const PCP_MSG = filteredData.PCP_MSG;

                // 날씨에 넣기

                if (RAIN_CHANCE > '50') {
                    weather_img.setAttribute('src', 'https://cdn0.iconfinder.com/data/icons/weather-888/32/weather_rain_rainny_drop_cloud-64.png')
                    weather_img2.setAttribute('src', 'https://cdn0.iconfinder.com/data/icons/weather-888/32/weather_rain_rainny_drop_cloud-64.png')

                } else if (PCP_MSG == '비 또는 눈 소식이 없어요.') {
                    weather_img.setAttribute('src', 'https://cdn2.iconfinder.com/data/icons/summer-flat-11/272/summer-vacation-sun-sunlight-summer-heat-hot-64.png')
                    weather_img2.setAttribute('src', 'https://cdn2.iconfinder.com/data/icons/summer-flat-11/272/summer-vacation-sun-sunlight-summer-heat-hot-64.png')

                }
                // 1번
                wt_des.innerHTML = `${MIN_TEMP}º/${MAX_TEMP}º`
                // 2번
                wt_rain.innerHTML = `${HUMIDITY}%, ${PRECIPITATION}, ${RAIN_CHANCE}%`
                // 3번
                wt_rain_des.innerHTML = PCP_MSG

                // 날씨 끝


                // 인구혼잡도 시작
                const live_people = document.querySelector('#live_people')
                const live_msg = document.querySelector('#live_msg')
                const live_tb = document.querySelector('#live_tb')

                //                 // 파싱

                const AREA_CONGEST_LVL = filteredData.AREA_CONGEST_LVL;
                const AREA_CONGEST_MSG = filteredData.AREA_CONGEST_MSG;
                const AREA_PPLTN_MAX = filteredData.AREA_PPLTN_MAX;

                //                 //  값 대입하기
                live_people.innerHTML = AREA_CONGEST_LVL
                live_msg.innerHTML = AREA_CONGEST_MSG
                live_tb.innerHTML = `${AREA_PPLTN_MAX}명`


                // 도로상황 시작
                const road_Traffic = document.querySelector('#road_Traffic')
                const road_msg = document.querySelector('#road_msg')
                const road_spd = document.querySelector('#road_spd')


                const ROAD_MSG = filteredData.ROAD_MSG;
                const ROAD_TRAFFIC_SPD = filteredData.ROAD_TRAFFIC_SPD;

                road_Traffic.innerHTML = ROAD_TRAFFIC_STTS
                road_msg.innerHTML = ROAD_MSG
                road_spd.innerHTML = ROAD_TRAFFIC_SPD + 'K/m'

            } else {
                console.log(response);
                alert('잘못된 접근입니다.');
            }
        } catch (error) {
            console.error('Error updating user', error);
        }
    }

    getData();
    window.localStorage.removeItem('map_value')
}