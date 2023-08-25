async function login() {
    const admin_id = document.getElementById('admin_id').value;
    const admin_pw = document.getElementById('admin_pw').value;

    await fetch('https://port-0-udiro-admin-server-7xwyjq992llikwjj6o.sel4.cloudtype.app/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            admin_id,
            admin_pw
        })
    })
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    window.location.href = './index.html'; // 로그인 성공 시 index.html로 리디렉션
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
