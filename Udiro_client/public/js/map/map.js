//새로고침버튼
const refreshButton = document.querySelector('#refresh-button');

refreshButton.addEventListener('click', () => {
    console.log('작동합니다')
    window.location.reload()
});



/* map 에서 search 버튼 */
const searchButton = document.querySelector('#search-button');
const searchBar1 = document.querySelector('#search-bar');

searchButton.addEventListener('click', () => {
    searchBar1.classList.toggle('active');
});


/* map 에서 see 버튼 */
// 체크박스를 생성하는 함수
const seeButton = document.querySelector('.see-button');
const seecheckbox = document.querySelectorAll('.seecheckbox');

seeButton.addEventListener('click', () => {
    seecheckbox.forEach(checkBox => {
        checkBox.classList.toggle('active');
    });
});

//인구혼잡도 파싱해서 서클색깔에 변화를 줄때 이 변수를 활용할거임
const GANGNAM_MICE = new kakao.maps.LatLng(37.501272, 127.038229);
const DONGDAEMUN = new kakao.maps.LatLng(37.566290, 127.007940);
const MYEONGDONG = new kakao.maps.LatLng(37.561845, 126.985783);
const ITAEWON = new kakao.maps.LatLng(37.534598, 126.994683);
const JAMSIL = new kakao.maps.LatLng(37.512509, 127.100705);
const JONGRO_CHEONGGYE = new kakao.maps.LatLng(37.572558, 126.983650);
const HONGDAE = new kakao.maps.LatLng(37.556878, 126.922978);
const GYEONGBOKGUNG_SEOCHON = new kakao.maps.LatLng(37.577934, 126.976871);
const GWANGHWAMUN_DEOKSU = new kakao.maps.LatLng(37.573039, 126.975924);
const CHANGDEOKGUNG_JONGMYO = new kakao.maps.LatLng(37.582604, 126.991806);
const GASAN_DIGITAL = new kakao.maps.LatLng(37.480970, 126.882860);
const GANGNAM = new kakao.maps.LatLng(37.498220, 127.028378);
const GEONDADAE = new kakao.maps.LatLng(37.540389, 127.069236);
const GANGNAM_TERMINAL = new kakao.maps.LatLng(37.504494, 127.004128);
const GORO_DIGITAL = new kakao.maps.LatLng(37.485219, 126.901467);
const SEOUL = new kakao.maps.LatLng(37.555617, 126.972490);
const SUNG_DONG = new kakao.maps.LatLng(37.504486, 127.049030);
const SIN_DORIM = new kakao.maps.LatLng(37.509655, 126.891949);
const SHINRIM = new kakao.maps.LatLng(37.484936, 126.929240);
const SINCHON_IDAE = new kakao.maps.LatLng(37.556383, 126.940272);
const YEOKSAM = new kakao.maps.LatLng(37.500629, 127.036531);
const YEONSINNAE = new kakao.maps.LatLng(37.619020, 126.921383);
const YONGSAN = new kakao.maps.LatLng(37.529834, 126.964607);
const WANGSHIBLI = new kakao.maps.LatLng(37.561280, 127.037063);
const DMC = new kakao.maps.LatLng(37.577435, 126.900445);
const CHANGDONG_ECONOMIC = new kakao.maps.LatLng(37.655899, 127.049637);
const NORYANGJIN = new kakao.maps.LatLng(37.513330, 126.940963);
const NAKSAN_EHWA = new kakao.maps.LatLng(37.584477, 126.953452);
const BUKCHON_HANOK = new kakao.maps.LatLng(37.582025, 126.982045);
const GAROSU_GIL = new kakao.maps.LatLng(37.520624, 127.022225);
const SEONGSU_CAFE = new kakao.maps.LatLng(37.545026, 127.051988);
const SUYU_EAT = new kakao.maps.LatLng(37.638457, 127.024857);
const SSANGMUN_EAT = new kakao.maps.LatLng(37.648252, 127.034647);
const APGUJUNG_RODEO = new kakao.maps.LatLng(37.527062, 127.027642);
const YEUIDO = new kakao.maps.LatLng(37.524210, 126.927980);
const YOUNGDUNGPO_TIMES = new kakao.maps.LatLng(37.517075, 126.907938);
const INSA_DONG = new kakao.maps.LatLng(37.573272, 126.983170);
const NATIONAL_MUSEUM = new kakao.maps.LatLng(37.524461, 126.980002);
const NAMSAN_PARK = new kakao.maps.LatLng(37.550140, 126.990377);
const TTUKSEOM_HANGANG = new kakao.maps.LatLng(37.530652, 127.066826);
const MANGWON_HANGANG = new kakao.maps.LatLng(37.555708, 126.893245);
const BANPO_HANGANG = new kakao.maps.LatLng(37.513226, 126.997595);
const BUKSEOUL_DREAM_FOREST = new kakao.maps.LatLng(37.614805, 126.927910);
const SEOUL_GRAND_PARK = new kakao.maps.LatLng(37.436094, 127.019428);
const SEOUL_FOREST = new kakao.maps.LatLng(37.543071, 127.041782);
const WOLRD_CUP_PARK = new kakao.maps.LatLng(37.571645, 126.897295);
const YICHON_HANGANG = new kakao.maps.LatLng(37.525988, 126.972378);
const JAMSIL_SPORTS = new kakao.maps.LatLng(37.511348, 127.073589);
const JAMSIL_HANGANG = new kakao.maps.LatLng(37.511405, 127.074522);

const tourList = [
    { name: "강남 MICE 관광특구", coordinates: [GANGNAM_MICE] },
    { name: "동대문 관광특구", coordinates: [DONGDAEMUN] },
    { name: "명동 관광특구", coordinates: [MYEONGDONG] },
    { name: "이태원 관광특구", coordinates: [ITAEWON] },
    { name: "잠실 관광특구", coordinates: [JAMSIL] },
    { name: "종로·청계 관광특구", coordinates: [JONGRO_CHEONGGYE] },
    { name: "홍대 관광특구", coordinates: [HONGDAE] },
    { name: "경복궁·서촌마을", coordinates: [GYEONGBOKGUNG_SEOCHON] },
    { name: "광화문·덕수궁", coordinates: [GWANGHWAMUN_DEOKSU] },
    { name: "창덕궁·종묘", coordinates: [CHANGDEOKGUNG_JONGMYO] },
    { name: "가산디지털단지역", coordinates: [GASAN_DIGITAL] },
    { name: "강남역", coordinates: [GANGNAM] },
    { name: "건대입구역", coordinates: [GEONDADAE] },
    { name: "고속터미널역", coordinates: [GANGNAM_TERMINAL] },
    { name: "교대역", coordinates: [GORO_DIGITAL] },
    { name: "구로디지털단지역", coordinates: [SEOUL] },
    { name: "서울역", coordinates: [SUNG_DONG] },
    { name: "선릉역", coordinates: [SIN_DORIM] },
    { name: "신도림역", coordinates: [SHINRIM] },
    { name: "신림역", coordinates: [SINCHON_IDAE] },
    { name: "신촌·이대역", coordinates: [YEOKSAM] },
    { name: "역삼역", coordinates: [YEONSINNAE] },
    { name: "연신내역", coordinates: [YONGSAN] },
    { name: "용산역", coordinates: [WANGSHIBLI] },
    { name: "왕십리역", coordinates: [DMC] },
    { name: "DMC(디지털미디어시티)", coordinates: [CHANGDONG_ECONOMIC] },
    { name: "창동 신경제 중심지", coordinates: [NORYANGJIN] },
    { name: "노량진", coordinates: [NAKSAN_EHWA] },
    { name: "낙산공원·이화마을", coordinates: [BUKCHON_HANOK] },
    { name: "북촌한옥마을", coordinates: [GAROSU_GIL] },
    { name: "가로수길", coordinates: [SEONGSU_CAFE] },
    { name: "성수카페거리", coordinates: [SUYU_EAT] },
    { name: "수유리 먹자골목", coordinates: [SSANGMUN_EAT] },
    { name: "쌍문동 맛집거리", coordinates: [APGUJUNG_RODEO] },
    { name: "압구정로데오거리", coordinates: [YEUIDO] },
    { name: "여의도", coordinates: [YOUNGDUNGPO_TIMES] },
    { name: "영등포 타임스퀘어", coordinates: [INSA_DONG] },
    { name: "인사동·익선동", coordinates: [NATIONAL_MUSEUM] },
    { name: "국립중앙박물관·용산가족공원", coordinates: [NAMSAN_PARK] },
    { name: "남산공원", coordinates: [TTUKSEOM_HANGANG] },
    { name: "뚝섬한강공원", coordinates: [MANGWON_HANGANG] },
    { name: "망원한강공원", coordinates: [BANPO_HANGANG] },
    { name: "반포한강공원", coordinates: [BUKSEOUL_DREAM_FOREST] },
    { name: "북서울꿈의숲", coordinates: [SEOUL_GRAND_PARK] },
    { name: "서울숲공원", coordinates: [SEOUL_FOREST] },
    { name: "월드컵공원", coordinates: [WOLRD_CUP_PARK] },
    { name: "이촌한강공원", coordinates: [YICHON_HANGANG] },
    { name: "잠실종합운동장", coordinates: [JAMSIL_SPORTS] },
    { name: "잠실한강공원", coordinates: [JAMSIL_HANGANG] },
];

document.addEventListener("DOMContentLoaded", initializeCircles);

async function initializeCircles() {
    const densities = await fetchAllPopulationDensities(tourList);
    createAllCircles(tourList, densities);
}

async function fetchAllPopulationDensities(tourList) {
    const promises = tourList.map(spot => fetchPopulationDensity(spot.name));
    const densities = await Promise.all(promises);
    return densities;
}


// 최대 인원수
async function fetchPopulationDensity(place) {
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


            //  이렇게 데이터 가져오면 됨
            const LIVE_PPLTN_STTS = filteredData.AREA_CONGEST_LVL

            return LIVE_PPLTN_STTS
        } else {
            console.log(response);
            alert('잘못된 접근입니다.');
        }
    } catch (error) {
        console.error('Error updating user', error);
    }
}

function createAllCircles(tourList, densities) {
    for (let i = 0; i < tourList.length; i++) {
        const position = tourList[i].coordinates[0];
        const density = densities[i];
        createAnimatedCircle(position, density);
    }
}



function createAnimatedCircle(position, density) {
    let strokeColor, fillColor;

    switch (density) {
        case "붐빔":
            strokeColor = "#FF0000"; // Red
            fillColor = "#FFCACA"; // Light red
            break;
        case "약간 붐빔":
            strokeColor = "#FFFF00"; // Orange
            fillColor = "#FFFACD"; // Light orange
            break;
        case "보통":
            strokeColor = "#75B8FA"; // Yellow
            fillColor = "#CFE7FF"; // Light yellow
            break;
        case "여유":
            strokeColor = "#008000"; // Green
            fillColor = "#B0E0B0"; // Light green
            break;
        default:
            strokeColor = "#75B8FA"; // Blue FFFF00
            fillColor = "#CFE7FF"; // Light blue FFFACD
            break;
    }

    var circle = new kakao.maps.Circle({
        center: position,
        radius: 0,
        strokeWeight: 1.1,
        strokeColor: strokeColor,
        strokeOpacity: 1,
        fillColor: fillColor,
        fillOpacity: 0.4
    });

    circle.setMap(map);
    animateCircle(circle, 250, 270, 1000);
}
function animateCircle(circle, startRadius, endRadius, duration) {
    var startTime = null;
    var currentRadius = startRadius;

    function updateCircle(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = timestamp - startTime;

        if (progress < duration) {
            var easing = progress / duration;
            currentRadius = startRadius + (endRadius - startRadius) * easing;
            circle.setRadius(currentRadius);
            requestAnimationFrame(updateCircle);
        } else {
            animateCircle(circle, endRadius, startRadius, duration);
        }
    }

    requestAnimationFrame(updateCircle);
}







// HTML 코드에서 select 요소를 선택합니다. 화면이동 부분
var selectElement = document.getElementById('search-bar');

selectElement.addEventListener('change', function () {
    var selectedValue = selectElement.value;
    var coordinates;
    var zoomLevel = 3;

    if (selectedValue === '강남 MICE 관광특구') {
        coordinates = new kakao.maps.LatLng(37.501272, 127.038229); // 강남 MICE 관광특구 좌표
    } else if (selectedValue === '동대문 관광특구') {
        coordinates = new kakao.maps.LatLng(37.566290, 127.007940); // 동대문 관광특구 좌표
    } else if (selectedValue === '명동 관광특구') {
        coordinates = new kakao.maps.LatLng(37.561845, 126.985783); // 명동 관광특구 좌표
    } else if (selectedValue === '이태원 관광특구') {
        coordinates = new kakao.maps.LatLng(37.534598, 126.994683); // 이태원 관광특구 좌표
    } else if (selectedValue === '잠실 관광특구') {
        coordinates = new kakao.maps.LatLng(37.512509, 127.100705); // 잠실 관광특구 좌표
    } else if (selectedValue === '종로·청계 관광특구') {
        coordinates = new kakao.maps.LatLng(37.572558, 126.983650); // 종로·청계 관광특구 좌표
    } else if (selectedValue === '홍대 관광특구') {
        coordinates = new kakao.maps.LatLng(37.556878, 126.922978); // 홍대 관광특구 좌표
    } else if (selectedValue === '경복궁·서촌마을') {
        coordinates = new kakao.maps.LatLng(37.577934, 126.976871); // 경복궁·서촌마을 좌표
    } else if (selectedValue === '광화문·덕수궁') {
        coordinates = new kakao.maps.LatLng(37.573039, 126.975924); // 광화문·덕수궁 좌표
    } else if (selectedValue === '창덕궁·종묘') {
        coordinates = new kakao.maps.LatLng(37.582604, 126.991806); // 창덕궁·종묘 좌표
    } else if (selectedValue === '가산디지털단지역') {
        coordinates = new kakao.maps.LatLng(37.480970, 126.882860); // 가산디지털단지역 좌표
    } else if (selectedValue === '강남역') {
        coordinates = new kakao.maps.LatLng(37.498220, 127.028378); // 강남역 좌표
    } else if (selectedValue === '건대입구역') {
        coordinates = new kakao.maps.LatLng(37.540389, 127.069236); // 건대입구역 좌표
    } else if (selectedValue === '고속터미널역') {
        coordinates = new kakao.maps.LatLng(37.504494, 127.004128); // 고속터미널역 좌표
    } else if (selectedValue === '교대역') {
        coordinates = new kakao.maps.LatLng(37.493382, 127.014131); // 교대역 좌표
    } else if (selectedValue === '구로디지털단지역') {
        coordinates = new kakao.maps.LatLng(37.485219, 126.901467); // 구로디지털단지역 좌표
    } else if (selectedValue === '서울역') {
        coordinates = new kakao.maps.LatLng(37.555617, 126.972490); // 서울역 좌표
    } else if (selectedValue === '선릉역') {
        coordinates = new kakao.maps.LatLng(37.504486, 127.049030); // 선릉역 좌표
    } else if (selectedValue === '신도림역') {
        coordinates = new kakao.maps.LatLng(37.509655, 126.891949); // 신도림역 좌표
    } else if (selectedValue === '신림역') {
        coordinates = new kakao.maps.LatLng(37.484936, 126.929240); // 신림역 좌표
    } else if (selectedValue === '신촌·이대역') {
        coordinates = new kakao.maps.LatLng(37.556383, 126.940272); // 신촌·이대역 좌표
    } else if (selectedValue === '역삼역') {
        coordinates = new kakao.maps.LatLng(37.500629, 127.036531); // 역삼역 좌표
    } else if (selectedValue === '연신내역') {
        coordinates = new kakao.maps.LatLng(37.619020, 126.921383); // 연신내역 좌표
    } else if (selectedValue === '용산역') {
        coordinates = new kakao.maps.LatLng(37.529834, 126.964607); // 용산역 좌표
    } else if (selectedValue === '왕십리역') {
        coordinates = new kakao.maps.LatLng(37.561280, 127.037063); // 왕십리역 좌표
    } else if (selectedValue === 'DMC(디지털미디어시티)') {
        coordinates = new kakao.maps.LatLng(37.577435, 126.900445); // DMC(디지털미디어시티) 좌표
    } else if (selectedValue === '창동 신경제 중심지') {
        coordinates = new kakao.maps.LatLng(37.655899, 127.049637); // 창동 신경제 중심지 좌표
    } else if (selectedValue === '노량진') {
        coordinates = new kakao.maps.LatLng(37.513330, 126.940963); // 노량진 좌표
    } else if (selectedValue === '낙산공원·이화마을') {
        coordinates = new kakao.maps.LatLng(37.584477, 126.953452); // 낙산공원·이화마을 좌표
    } else if (selectedValue === '북촌한옥마을') {
        coordinates = new kakao.maps.LatLng(37.582025, 126.982045); // 북촌한옥마을 좌표
    } else if (selectedValue === '가로수길') {
        coordinates = new kakao.maps.LatLng(37.520624, 127.022225); // 가로수길 좌표
    } else if (selectedValue === '성수카페거리') {
        coordinates = new kakao.maps.LatLng(37.545026, 127.051988); // 성수카페거리 좌표
    } else if (selectedValue === '수유리 먹자골목') {
        coordinates = new kakao.maps.LatLng(37.638457, 127.024857); // 수유리 먹자골목 좌표
    } else if (selectedValue === '쌍문동 맛집거리') {
        coordinates = new kakao.maps.LatLng(37.648252, 127.034647); // 쌍문동 맛집거리 좌표
    } else if (selectedValue === '압구정로데오거리') {
        coordinates = new kakao.maps.LatLng(37.527062, 127.027642); // 압구정로데오거리 좌표
    } else if (selectedValue === '여의도') {
        coordinates = new kakao.maps.LatLng(37.524210, 126.927980); // 여의도 좌표
    } else if (selectedValue === '영등포 타임스퀘어') {
        coordinates = new kakao.maps.LatLng(37.517075, 126.907938); // 영등포 타임스퀘어 좌표
    } else if (selectedValue === '인사동·익선동') {
        coordinates = new kakao.maps.LatLng(37.573272, 126.983170); // 인사동·익선동 좌표
    } else if (selectedValue === '국립중앙박물관·용산가족공원') {
        coordinates = new kakao.maps.LatLng(37.524461, 126.980002); // 국립중앙박물관·용산가족공원 좌표
    } else if (selectedValue === '남산공원') {
        coordinates = new kakao.maps.LatLng(37.550140, 126.990377); // 남산공원 좌표
    } else if (selectedValue === '뚝섬한강공원') {
        coordinates = new kakao.maps.LatLng(37.530652, 127.066826); // 뚝섬한강공원 좌표
    } else if (selectedValue === '망원한강공원') {
        coordinates = new kakao.maps.LatLng(37.555708, 126.893245); // 망원한강공원 좌표
    } else if (selectedValue === '반포한강공원') {
        coordinates = new kakao.maps.LatLng(37.513226, 126.997595); // 반포한강공원 좌표
    } else if (selectedValue === '북서울꿈의숲') {
        coordinates = new kakao.maps.LatLng(37.614805, 126.927910); // 북서울꿈의숲 좌표
    } else if (selectedValue === '서울대공원') {
        coordinates = new kakao.maps.LatLng(37.436094, 127.019428); // 서울대공원 좌표
    } else if (selectedValue === '서울숲공원') {
        coordinates = new kakao.maps.LatLng(37.543071, 127.041782); // 서울숲공원 좌표
    } else if (selectedValue === '월드컵공원') {
        coordinates = new kakao.maps.LatLng(37.571645, 126.897295); // 월드컵공원 좌표
    } else if (selectedValue === '이촌한강공원') {
        coordinates = new kakao.maps.LatLng(37.525988, 126.972378); // 이촌한강공원 좌표
    } else if (selectedValue === '잠실종합운동장') {
        coordinates = new kakao.maps.LatLng(37.511348, 127.073589); // 잠실종합운동장 좌표
    } else if (selectedValue === '잠실한강공원') {
        coordinates = new kakao.maps.LatLng(37.511405, 127.074522); // 잠실한강공원 좌표
    } else {
        coordinates = null; // 선택한 장소의 좌표가 없을 경우 null로 설정
    }


    // 선택한 좌표로 지도 중심 이동
    if (coordinates) {
        map.setCenter(coordinates);
        map.setLevel(zoomLevel);
    }
});

const map_value = window.localStorage.getItem('map_value')
console.log(map_value)
if (map_value) {
    selectElement.value = map_value
    var selectedValue = selectElement.value;
    var coordinates;
    var zoomLevel = 3;

    if (selectedValue === '강남 MICE 관광특구') {
        coordinates = new kakao.maps.LatLng(37.501272, 127.038229); // 강남 MICE 관광특구 좌표
    } else if (selectedValue === '동대문 관광특구') {
        coordinates = new kakao.maps.LatLng(37.566290, 127.007940); // 동대문 관광특구 좌표
    } else if (selectedValue === '명동 관광특구') {
        coordinates = new kakao.maps.LatLng(37.561845, 126.985783); // 명동 관광특구 좌표
    } else if (selectedValue === '이태원 관광특구') {
        coordinates = new kakao.maps.LatLng(37.534598, 126.994683); // 이태원 관광특구 좌표
    } else if (selectedValue === '잠실 관광특구') {
        coordinates = new kakao.maps.LatLng(37.512509, 127.100705); // 잠실 관광특구 좌표
    } else if (selectedValue === '종로·청계 관광특구') {
        coordinates = new kakao.maps.LatLng(37.572558, 126.983650); // 종로·청계 관광특구 좌표
    } else if (selectedValue === '홍대 관광특구') {
        coordinates = new kakao.maps.LatLng(37.556878, 126.922978); // 홍대 관광특구 좌표
    } else if (selectedValue === '경복궁·서촌마을') {
        coordinates = new kakao.maps.LatLng(37.577934, 126.976871); // 경복궁·서촌마을 좌표
    } else if (selectedValue === '광화문·덕수궁') {
        coordinates = new kakao.maps.LatLng(37.573039, 126.975924); // 광화문·덕수궁 좌표
    } else if (selectedValue === '창덕궁·종묘') {
        coordinates = new kakao.maps.LatLng(37.582604, 126.991806); // 창덕궁·종묘 좌표
    } else if (selectedValue === '가산디지털단지역') {
        coordinates = new kakao.maps.LatLng(37.480970, 126.882860); // 가산디지털단지역 좌표
    } else if (selectedValue === '강남역') {
        coordinates = new kakao.maps.LatLng(37.498220, 127.028378); // 강남역 좌표
    } else if (selectedValue === '건대입구역') {
        coordinates = new kakao.maps.LatLng(37.540389, 127.069236); // 건대입구역 좌표
    } else if (selectedValue === '고속터미널역') {
        coordinates = new kakao.maps.LatLng(37.504494, 127.004128); // 고속터미널역 좌표
    } else if (selectedValue === '교대역') {
        coordinates = new kakao.maps.LatLng(37.493382, 127.014131); // 교대역 좌표
    } else if (selectedValue === '구로디지털단지역') {
        coordinates = new kakao.maps.LatLng(37.485219, 126.901467); // 구로디지털단지역 좌표
    } else if (selectedValue === '서울역') {
        coordinates = new kakao.maps.LatLng(37.555617, 126.972490); // 서울역 좌표
    } else if (selectedValue === '선릉역') {
        coordinates = new kakao.maps.LatLng(37.504486, 127.049030); // 선릉역 좌표
    } else if (selectedValue === '신도림역') {
        coordinates = new kakao.maps.LatLng(37.509655, 126.891949); // 신도림역 좌표
    } else if (selectedValue === '신림역') {
        coordinates = new kakao.maps.LatLng(37.484936, 126.929240); // 신림역 좌표
    } else if (selectedValue === '신촌·이대역') {
        coordinates = new kakao.maps.LatLng(37.556383, 126.940272); // 신촌·이대역 좌표
    } else if (selectedValue === '역삼역') {
        coordinates = new kakao.maps.LatLng(37.500629, 127.036531); // 역삼역 좌표
    } else if (selectedValue === '연신내역') {
        coordinates = new kakao.maps.LatLng(37.619020, 126.921383); // 연신내역 좌표
    } else if (selectedValue === '용산역') {
        coordinates = new kakao.maps.LatLng(37.529834, 126.964607); // 용산역 좌표
    } else if (selectedValue === '왕십리역') {
        coordinates = new kakao.maps.LatLng(37.561280, 127.037063); // 왕십리역 좌표
    } else if (selectedValue === 'DMC(디지털미디어시티)') {
        coordinates = new kakao.maps.LatLng(37.577435, 126.900445); // DMC(디지털미디어시티) 좌표
    } else if (selectedValue === '창동 신경제 중심지') {
        coordinates = new kakao.maps.LatLng(37.655899, 127.049637); // 창동 신경제 중심지 좌표
    } else if (selectedValue === '노량진') {
        coordinates = new kakao.maps.LatLng(37.513330, 126.940963); // 노량진 좌표
    } else if (selectedValue === '낙산공원·이화마을') {
        coordinates = new kakao.maps.LatLng(37.584477, 126.953452); // 낙산공원·이화마을 좌표
    } else if (selectedValue === '북촌한옥마을') {
        coordinates = new kakao.maps.LatLng(37.582025, 126.982045); // 북촌한옥마을 좌표
    } else if (selectedValue === '가로수길') {
        coordinates = new kakao.maps.LatLng(37.520624, 127.022225); // 가로수길 좌표
    } else if (selectedValue === '성수카페거리') {
        coordinates = new kakao.maps.LatLng(37.545026, 127.051988); // 성수카페거리 좌표
    } else if (selectedValue === '수유리 먹자골목') {
        coordinates = new kakao.maps.LatLng(37.638457, 127.024857); // 수유리 먹자골목 좌표
    } else if (selectedValue === '쌍문동 맛집거리') {
        coordinates = new kakao.maps.LatLng(37.648252, 127.034647); // 쌍문동 맛집거리 좌표
    } else if (selectedValue === '압구정로데오거리') {
        coordinates = new kakao.maps.LatLng(37.527062, 127.027642); // 압구정로데오거리 좌표
    } else if (selectedValue === '여의도') {
        coordinates = new kakao.maps.LatLng(37.524210, 126.927980); // 여의도 좌표
    } else if (selectedValue === '영등포 타임스퀘어') {
        coordinates = new kakao.maps.LatLng(37.517075, 126.907938); // 영등포 타임스퀘어 좌표
    } else if (selectedValue === '인사동·익선동') {
        coordinates = new kakao.maps.LatLng(37.573272, 126.983170); // 인사동·익선동 좌표
    } else if (selectedValue === '국립중앙박물관·용산가족공원') {
        coordinates = new kakao.maps.LatLng(37.524461, 126.980002); // 국립중앙박물관·용산가족공원 좌표
    } else if (selectedValue === '남산공원') {
        coordinates = new kakao.maps.LatLng(37.550140, 126.990377); // 남산공원 좌표
    } else if (selectedValue === '뚝섬한강공원') {
        coordinates = new kakao.maps.LatLng(37.530652, 127.066826); // 뚝섬한강공원 좌표
    } else if (selectedValue === '망원한강공원') {
        coordinates = new kakao.maps.LatLng(37.555708, 126.893245); // 망원한강공원 좌표
    } else if (selectedValue === '반포한강공원') {
        coordinates = new kakao.maps.LatLng(37.513226, 126.997595); // 반포한강공원 좌표
    } else if (selectedValue === '북서울꿈의숲') {
        coordinates = new kakao.maps.LatLng(37.614805, 126.927910); // 북서울꿈의숲 좌표
    } else if (selectedValue === '서울대공원') {
        coordinates = new kakao.maps.LatLng(37.436094, 127.019428); // 서울대공원 좌표
    } else if (selectedValue === '서울숲공원') {
        coordinates = new kakao.maps.LatLng(37.543071, 127.041782); // 서울숲공원 좌표
    } else if (selectedValue === '월드컵공원') {
        coordinates = new kakao.maps.LatLng(37.571645, 126.897295); // 월드컵공원 좌표
    } else if (selectedValue === '이촌한강공원') {
        coordinates = new kakao.maps.LatLng(37.525988, 126.972378); // 이촌한강공원 좌표
    } else if (selectedValue === '잠실종합운동장') {
        coordinates = new kakao.maps.LatLng(37.511348, 127.073589); // 잠실종합운동장 좌표
    } else if (selectedValue === '잠실한강공원') {
        coordinates = new kakao.maps.LatLng(37.511405, 127.074522); // 잠실한강공원 좌표
    } else {
        coordinates = null; // 선택한 장소의 좌표가 없을 경우 null로 설정
    }


    // 선택한 좌표로 지도 중심 이동
    if (coordinates) {
        map.setCenter(coordinates);
        map.setLevel(zoomLevel);
    }
}