let token = window.localStorage.getItem('token')
function updatePW() {
    const user_id = document.querySelector('#idinput').value;
    const user_pw = document.querySelector("#pwinput").value;

    const data = {
        user_id,
        user_pw
    };

    fetch('https://port-0-udiroserver-7e6o2cli3ac97a.sel4.cloudtype.app/auth/newPW', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(data)
    })
        .then(function (response) {
            if (response.ok) {
                if (document.getElementById("authentication")) {
                    document.getElementById("authentication").readOnly = false;
                }
                window.localStorage.clear('token')
                alert('비밀번호변경이 완료되었습니다.')
                window.location.href = '/auth/login'
            }
            else {
                response.json().then(function (data) {
                    alert("오류!"); // 로그인 실패 시 알림 표시
                });
            }
        })
        .catch(function (error) {
            console.error(error);
        });
}

