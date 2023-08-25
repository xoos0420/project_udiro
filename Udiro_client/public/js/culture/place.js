const pathArray = window.location.pathname.split('/');
const placenum = pathArray[pathArray.length - 1];

function fetchDataPlace(placenum) {
    fetch(`https://port-0-udiroserver-7e6o2cli3ac97a.sel4.cloudtype.app/culture/place/${placenum}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            processDataPlace(data);
            processDataMap(data);
        })
        .catch((error) => {
            console.error('에러 발생', error);
        });
}

function processDataPlace(data) {
    // 데이터 처리
    const placesContainer = document.querySelector('.txt-box');
    const imgContainer = document.querySelector('.img-box');
    const textContainer = document.querySelector('.moreview');

    const text = `${data.FAC_DESC}`;
    const img = `<img src="${data.MAIN_IMG}" style="background-size: cover;">`;
    const html = `
    <div class="event-title2">
        <h2>${data.FAC_NAME}</h2>
    </div>
    <div class="type-box2">
        <ul>
            <li>
                <div class="type-th">
                    <span>주소</span>
                </div>
                <div class="type-td">
                    <span>${data.ADDR}</span>
                </div>
            </li>
            <li>
                <div class="type-th">
                    <span>휴관일</span>
                </div>
                <div class="type-td">
                    <span>${data.CLOSEDAY}</span>
                </div>
            </li>
            <li>
                <div class="type-th">
                    <span>요금</span>
                </div>
                <div class="type-td">
                    <span>${data.ENTRFREE}</span>
                </div>
            </li>
            <li>
                <div class="type-th">
                    <span>문의</span>
                </div>
                <div class="type-td">
                    <span>${data.PHNE}</span>
                </div>
            </li>
            <li>
                <div class="type-th">
                    <span>종류</span>
                </div>
                <div class="type-td">
                    <span>${data.SUBJCODE}</span>
                </div>
            </li>
            <li>
                <div class="type-th">
                    <span>홈페이지</span>
                </div>
                <div class="type-td">
                    <div class="detail-btn">
                        <span><a href="${data.HOMEPAGE}" target="_blank">홈페이지
                                바로가기</a></span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
`;

    placesContainer.innerHTML = html;
    imgContainer.innerHTML = img;
    textContainer.innerHTML = text;
}

function processDataMap(data) {
    const mapContainer = document.querySelector('#loca-section'); // 클래스로 선택하도록 수정

    const mapHTML = `<h2>위치안내</h2>
                     <div id="map" style="width:100%; height:600px; margin-bottom: 60px;"></div>`;
    mapContainer.innerHTML = mapHTML;

    const scriptTag = document.createElement('script');
    scriptTag.src =
        '//dapi.kakao.com/v2/maps/sdk.js?appkey=440d4850306225a19c1ade5724a9c73d&libraries=services';

    const mapScript = document.createElement('script');
    mapScript.innerHTML = `
      var container = document.getElementById('map');
      var options = {
          center: new kakao.maps.LatLng(${data.X_COORD}, ${data.Y_COORD}),
          level: 3
      };
  
      var map = new kakao.maps.Map(container, options);
    `;

    mapContainer.appendChild(scriptTag);
    mapContainer.appendChild(mapScript);
}

fetchDataPlace(placenum);
