// const TokenStorage = require('../token/token.js');
// const tokenStorage = new TokenStorage();


async function login() {
    const user_id = document.getElementById('idinput').value;
    const user_pw = document.getElementById('pwinput').value;
    const data = {
        user_id,
        user_pw
    };

    await fetch('https://port-0-udiroserver-7e6o2cli3ac97a.sel4.cloudtype.app/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id: user_id,
            user_pw: user_pw
        })
    })
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    const token = data.token;
                    const id = data.user_id
                    localStorage.setItem("token", token);
                    localStorage.setItem("id", id);
                    window.location.href = '/'
                });
            } else {
                response.json().then(function (data) {
                    alert('로그인 실패: ' + data.message); // 로그인 실패 시 알림 표시
                });
            }
        })
        .catch(function (error) {
            console.error(error);
            alert('로그인 요청에 실패했습니다.'); // 로그인 요청 실패 시 알림 표시
        });
}
