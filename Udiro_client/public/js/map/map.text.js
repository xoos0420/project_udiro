async function MK() {
    await fetch('http://openAPI.seoul.go.kr:8088/4550596c7365687731323346776b5a6f/xml/SearchPublicToiletPOIService/1/200/')
        .then(response => response.text())
        .then(data => {
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(data, 'text/xml');
            var rows = xmlDoc.getElementsByTagName('row');
            var restrooms = [];
            for (var i = 0; i < rows.length; i++) {
                var restroom = {
                    name: rows[i].getElementsByTagName('FNAME')[0].textContent,
                    lat: parseFloat(rows[i].getElementsByTagName('Y_WGS84')[0].textContent),
                    lng: parseFloat(rows[i].getElementsByTagName('X_WGS84')[0].textContent)
                };
                restrooms.push(restroom);
            }
            restrooms.forEach(function (restroom) {
                var imageSrc = 'https://cdn4.iconfinder.com/data/icons/restaurant-glyph-3/64/restroom-furniture_and_household-sanitary-hygiene-toilet-bathroom-buildings-512.png',
                    imageSize = new kakao.maps.Size(32, 32);

                var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

                var marker = new kakao.maps.Marker({
                    position: new kakao.maps.LatLng(restroom.lat, restroom.lng),
                    map: map,
                    title: restroom.name,
                    type: 'restroom',
                    visible: false,
                    image: markerImage //이미지
                });

                // 인포윈도우 내용과 위치 설정
                var iwContent = '<div style="padding:15px; height:90px; font-size:14px;">' +
                    restroom.name + '<br><a href="https://map.kakao.com/link/map/' + restroom.name + ',' + restroom.lat + ',' + restroom.lng + '" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/' + restroom.name + ',' + restroom.lat + ',' + restroom.lng + '" style="color:blue" target="_blank">길찾기</a></div>';
                var iwPosition = new kakao.maps.LatLng(restroom.lat, restroom.lng);

                // 마커 클릭 이벤트 처리
                kakao.maps.event.addListener(marker, 'click', function () {
                    // 인포윈도우가 열려있을 경우 닫기
                    if (infowindow.getMap()) {
                        infowindow.close();
                    } else {
                        // 인포윈도우 열기
                        infowindow.setContent(iwContent);
                        infowindow.open(map, marker);
                    }
                });
                markers.push(marker);
            });
        })
        .catch(error => {
            console.error('API 데이터를 가져오는 중 오류 발생:', error);
        });

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow();
}