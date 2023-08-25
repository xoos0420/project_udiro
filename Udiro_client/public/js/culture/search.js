function searchBnt() {
    // 선택한 지역 값 가져오기
    const selectedRegion = document.getElementById('local').value;

    // 입력한 값 가져오기
    const inputText = document.querySelector('.regionsearch').value;

    // API 요청을 보낼 URL 생성
    const apiUrl = 'https://api.example.com/data?region=' + selectedRegion + '&input=' + inputText;

    // AJAX 또는 fetch를 사용하여 API 호출
    fetch(apiUrl)
        .then(function (response) {
            // 응답을 JSON 형식으로 파싱
            return response.json();
        })
        .then(function (data) {
            // API 응답 데이터를 처리
            console.log(data); // 처리된 데이터 출력 또는 다른 작업 수행
        })
        .catch(function (error) {
            // 에러 처리
            console.error('Error:', error);
        });
}
// 위의 코드에서 apiUrl 변수에는 호출할 API의 URL이 포함됩니다. URL에는 선택한 지역 값과 입력한 값이 쿼리 파라미터로 포함되어 있어야 합니다. 이후 fetch 함수를 사용하여 API에 요청을 보내고, 응답을 JSON 형식으로 파싱하여 처리할 수 있습니다.

// 실제로는 위의 코드에서 apiUrl을 공공데이터 API의 실제 URL로 변경해야 합니다. 또한



