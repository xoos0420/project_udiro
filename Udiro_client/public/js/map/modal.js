const modal_big = document.querySelectorAll('.modal_big');
const modal_small = document.querySelectorAll('.modal_small');
// 각각 클래스 이름으로 태그 다큐먼트로 가져오기
const modals = document.querySelectorAll('.modal');
const btnOpenPopup = document.querySelector('.btn-open-popup');
const onClose = document.querySelectorAll('#map');
const seeMore = document.querySelectorAll('.see__more');
// 클릭했을때 반응하기 위해서 변수 선언해두기
const weather_click = document.getElementById('weather_click')
const road_click = document.getElementById('road_click')
const person_click = document.getElementById('person_click')
const checkbox = document.getElementsByClassName('seecheckbox-container')
// 보여줄부분(display=block으로 바꿀부분) 간단한정보 작은 모달창 3개
const weather_More = document.querySelector('.modal2');
const road_More = document.querySelector('.modal4');
const person_More = document.querySelector('.modal3');
// 닫기
onClose.forEach(closeButton => {
    closeButton.addEventListener('click', () => {
        weather_More.classList.remove('show');
        road_More.classList.remove('show');
        person_More.classList.remove('show');
    });
});
// 토글로 모달창 html 클래스에 show css 클래스 를 추가하여  display block으로 만들어주기
function showModal(modal) {
    modal.classList.toggle('show');
}
// show 빼주기
function hideModal(modal) {
    modal.classList.toggle('show');
}
// 클릭했을때 modals에 저장되어있는 모든것들에 show 클래스 추가해주기
btnOpenPopup.addEventListener('click', () => {
    modals.forEach(modal => showModal(modal));
    modal_small.forEach(modal => {
        if (modal.classList.contains('show')) {
            modal.classList.remove('show')
            console.log(modal)
        } else {
            modal.classList.add('show')
        }
    });
});
// 날씨 모달창에 쇼 추가
weather_click.addEventListener('click', () => {
    showModal(weather_More)
});
// 도로 모달창에 쇼 추가
road_click.addEventListener('click', () => {
    showModal(road_More)
});
// 인구혼잡 모달창에 쇼 추가
person_click.addEventListener('click', () => {
    showModal(person_More)
});




var markers2 = []; // markers 배열을 MK2 함수 내에서 정의
async function MK() {
    try {
        const response = await fetch('https://port-0-udiroserver-7e6o2cli3ac97a.sel4.cloudtype.app/map/restroom', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch data from the database.');
        }
        const data = await response.json();
        data.forEach(function (parkingLot) {
            var imageSrc = 'https://thumb.ac-illust.com/5e/5e769aa4d8d59d2c09454ffed4bf8e82_t.jpeg';
            var imageSize = new kakao.maps.Size(32, 32);
            var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
            var marker = new kakao.maps.Marker({
                position: new kakao.maps.LatLng(parkingLot.lat, parkingLot.lng),
                map: map,
                title: parkingLot.name,
                type: 'parking',
                image: markerImage,
                visible: false
            });
            var iwContent = '<div style="padding:15px; height:90px; font-size:14px;">' +
                parkingLot.name + '<br><a href="https://map.kakao.com/link/map/' + parkingLot.name + ',' + parkingLot.lat + ',' + parkingLot.lng + '" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/' + parkingLot.name + ',' + parkingLot.lat + ',' + parkingLot.lng + '" style="color:blue" target="_blank">길찾기</a></div>';
            var iwPosition = new kakao.maps.LatLng(parkingLot.lat, parkingLot.lng);
            kakao.maps.event.addListener(marker, 'click', function () {
                if (infowindow.getMap()) {
                    infowindow.close();
                } else {
                    infowindow.setContent(iwContent);
                    infowindow.open(map, marker);
                }
            });
            marker.setMap(map); // 마커를 지도에 추가
            markers2.push(marker);
        });
    } catch (error) {
        console.error('Failed to fetch parking lot data from the database:', error);
    }
    var infowindow = new kakao.maps.InfoWindow();
}
async function toggleMarkerVisibilityByType(type) {
    var checkbox = document.getElementById(type + 'Checkbox');
    var isVisible = checkbox.checked;
    markers.forEach(function (marker) {
        if (marker.type === type) {
            marker.setVisible(isVisible);
        }
    });
}
var markers = []; // markers 배열을 MK2 함수 내에서 정의
async function MK2() {
    try {
        const response = await fetch('https://port-0-udiroserver-7e6o2cli3ac97a.sel4.cloudtype.app/map/parking', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch data from the database.');
        }
        const data = await response.json();
        data.forEach(function (parkingLot) {
            var imageSrc = 'https://img.icons8.com/?size=1x&id=MTocf1dYdflx&format=png';
            var imageSize = new kakao.maps.Size(32, 32);
            var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
            var marker = new kakao.maps.Marker({
                position: new kakao.maps.LatLng(parkingLot.lat, parkingLot.lng),
                map: map,
                title: parkingLot.name,
                type: 'parking',
                image: markerImage,
                visible: false
            });
            var iwContent = '<div style="padding:15px; height:90px; font-size:14px;">' +
                parkingLot.name + '<br><a href="https://map.kakao.com/link/map/' + parkingLot.name + ',' + parkingLot.lat + ',' + parkingLot.lng + '" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/' + parkingLot.name + ',' + parkingLot.lat + ',' + parkingLot.lng + '" style="color:blue" target="_blank">길찾기</a></div>';
            var iwPosition = new kakao.maps.LatLng(parkingLot.lat, parkingLot.lng);
            kakao.maps.event.addListener(marker, 'click', function () {
                if (infowindow.getMap()) {
                    infowindow.close();
                } else {
                    infowindow.setContent(iwContent);
                    infowindow.open(map, marker);
                }
            });
            marker.setMap(map); // 마커를 지도에 추가
            markers.push(marker);
        });
    } catch (error) {
        console.error('Failed to fetch parking lot data from the database:', error);
    }
    var infowindow = new kakao.maps.InfoWindow();
}

var parkingCheckbox = document.getElementById('parkingCheckbox');
parkingCheckbox.addEventListener('change', function () {
    if (parkingCheckbox.checked) {
        MK2()
    } else {
        clearMarkers()
    }
});
var restroomCheckbox = document.getElementById('restroomCheckbox');
restroomCheckbox.addEventListener('change', function () {
    if (restroomCheckbox.checked) {
        MK().then(function () {
            toggleMarkerVisibilityByType('restroom');
        });
    } else {
        clearMarkers2()
    }
});

function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
}

function clearMarkers2() {
    for (var i = 0; i < markers2.length; i++) {
        markers2[i].setMap(null);
    }
    markers2 = [];
}