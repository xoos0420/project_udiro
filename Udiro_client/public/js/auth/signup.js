function sendit() {
    // 정규 표현식
    const expIdText = /^[A-Za-z0-9]{4,20}$/;

    const user_id = document.getElementById('userid').value;
    const user_pw = document.getElementById('userpw').value;
    const userpw_re = document.getElementById("userpw_re").value;
    const user_name = document.getElementById('username').value;
    const user_phone = document.getElementById('hp').value;
    const user_email = document.getElementById('email').value;

    // 비밀번호 정규 표현식 과제
    // 영문 숫자 특수기호 조합 8자리 이상
    const expPw = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;

    // 이름 정규 표현식 과제
    // 2~5 글자 사이의 한글이름
    const expname = /^[가-힣]{2,5}/;

    // 휴대폰번호 정규 표현식 과제
    // 010, 011, 016, 017, 018, 019 로 시작하고 -을 포함하고 숫자의 갯수가 3-4, 4-4여야됨
    const expHp = /^01[0|1|6|7|8|9]-\d{3,4}-\d{4}$/;

    // 이메일 정규 표현식 과제
    const expEmail = /^[A-Za-z0-9\-_\.]+@[A-Za-z0-9\-\.]+\.[A-Za-z0-9\-\.]+$/;

    if (!expIdText.test(user_id)) {
        alert("아이디는 4자 이상 20자 이하의 영문자, 숫자로 입력하세요");
        document.getElementById('userid').focus();
        return false;
    }
    if (user_pw !== userpw_re) {
        alert("비밀번호와 비밀번호 확인의 값이 다릅니다.");
        document.getElementById('userpw').focus();
        return false;
    }
    if (!expPw.test(user_pw)) {
        alert("비밀번호는 영문 숫자 특수기호 조합 8~20자리 이내로 입력해주세요");
        document.getElementById('userpw').focus();
        return false;
    }
    if (!expname.test(user_name)) {
        alert("이름은 2~5글자 한글로 입력하세요");
        document.getElementById('username').focus();
        return false;
    }
    if (!expHp.test(user_phone)) {
        alert("핸드폰 번호를 잘못 입력하셨습니다.");
        document.getElementById('hp').focus();
        return false;
    }
    if (!expEmail.test(user_email)) {
        alert("이메일을 잘못 입력하셨습니다.");
        document.getElementById('email').focus();
        return false;
    }

    const data = {
        user_id,
        user_pw,
        user_name,
        user_phone,
        user_email
    };

    fetch('https://port-0-udiroserver-7e6o2cli3ac97a.sel4.cloudtype.app/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    const token = data.token;
                    localStorage.setItem("token", token);
                    window.location.href = '/';
                });
            } else {
                response.json().then(function (data) {
                    alert('회원가입 실패 ' + data.message); // 로그인 실패 시 알림 표시
                });
            }
        })
        .catch(function (error) {
            console.error(error);
            alert('회원가입 요청에 실패했습니다.'); // 로그인 요청 실패 시 알림 표시
            console.log(data)
        });
}