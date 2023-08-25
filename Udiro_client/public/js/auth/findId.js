function validation() {
    const user_name = document.getElementById("idinput").value;
    const user_email = document.getElementById("emailinput").value;
    console.log(user_name)

    const data = {
        user_name,
        user_email
    };

    fetch('https://port-0-udiroserver-7e6o2cli3ac97a.sel4.cloudtype.app/auth/findId', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    if (document.getElementById("authentication")) {
                        document.getElementById("authentication").readOnly = false;
                    }
                    alert('메일로 아이디가 전송되었습니다.')
                    window.location.href = '/auth/login'
                });
            }
            else {
                response.json().then(function (data) {
                    alert("이름 또는 휴대폰 번호를 확인해주세요"); // 로그인 실패 시 알림 표시
                });
            }
        })
        .catch(function (error) {
            console.error(error);
            alert('이름 또는 휴대폰 번호를 확인해주세요'); // 로그인 요청 실패 시 알림 표시
        });
}

