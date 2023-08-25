const user_tbody = document.getElementById('user_tbody');

fetch('https://port-0-udiro-admin-server-7xwyjq992llikwjj6o.sel4.cloudtype.app/auth/', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
})
    .then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                for (const user of data) {
                    user_tbody.innerHTML += `<tr>
                    <td class="table-plus">
                        <div class="name-avatar d-flex align-items-center">
                            <div class="txt">
                                <div class="weight-600">${user.user_idx}</div>
                            </div>
                        </div>
                    </td>
                    <td>${user.user_name}</td>
                    <td>${user.user_id}</td>
                    <td>********</td>
                    <td>
                        <span
                            class="badge badge-pill"
                            data-bgcolor="#e7ebf5"
                            data-color="#265ed7"
                            >${user.user_email}</span
                        >
                    </td>
                    <td>
                        <span>${user.user_phone}</span>
                    </td>
                    <td>
                        <div class="table-actions">
                            <a
                        href="#"
                        class="btn-block"
                        data-toggle="modal"
                        data-target="#${user.user_id}"
                        type="button"
                    >
                                <i class="icon-copy dw dw-edit2"></i>
                            </a>
                            <div
                        class="modal fade bs-example-modal-lg"
                        id="${user.user_id}"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="myLargeModalLabel"
                        aria-hidden="true"
                        onclick="test(${user.user_id})"
                    >
                        <div class="modal-dialog modal-lg modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title" id="myLargeModalLabel">
                                        ${user.user_name}님의 정보
                                    </h4>
                                    <button
                                        type="button"
                                        class="close"
                                        data-dismiss="modal"
                                        aria-hidden="true"
                                        onclick='refresh()'
                                    >
                                        ×
                                    </button>
                                </div>	
                                <div class="modal-body">
                                    <table class="data-table table nowrap reverseTable">
                                        <tbody>
                                            <tr>
                                                <td>번호</td>
                                                <td class="user_idx">${user.user_idx}</td>
                                            </tr>
                                            <tr>
                                                <td>이름</td>
                                                <td class="user_name">${user.user_name}</td>
                                                <td><button onclick="editField('user_name')">수정</button></td>
                                            </tr>
                                            <tr>
                                                <td>아이디</td>
                                                <td class="user_id">${user.user_id}</td>
                                                <td><button onclick="editField('user_id')">수정</button></td>
                                            </tr>
                                            <tr>
                                                <td>비밀번호</td>
                                                <td class="user_pw">********</td>
                                                <td><button onclick="editField('user_pw')">수정</button></td>
                                            </tr>
                                            <tr>
                                                <td>이메일</td>
                                                <td class="user_email">${user.user_email}</td>
                                                <td><button onclick="editField('user_email')">수정</button></td>
                                            </tr>
                                            <tr>
                                                <td>휴대폰번호</td>
                                                <td class="user_phone">${user.user_phone}</td>
                                                <td><button onclick="editField('user_phone')">수정</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="modal-footer">
                                    <button
                                    type="button"
                                    class="btn btn-secondary"
                                    style="background-color: red; position:relative; right:500px;"
                                    data-dismiss="modal"
                                    onclick="showConfirmation(${user.user_idx})"
                                >삭제
                                </button>


                                    <button
                                        type="button"
                                        class="btn btn-secondary"
                                        data-dismiss="modal"
                                        onclick='refresh()'
                                    >
                                        Close
                                    </button>
                                    <button type="button" class="btn btn-primary" onclick='updateUser(${user.user_id})'>
                                        Save changes
                                    </button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </td>
                </tr>`
                }
            });
        } else {
            response.json().then(function (data) {
                alert('회원정보 불러오기 실패'); // 로그인 실패 시 알림 표시
            });
        }
    })
    .catch(function (error) {
        console.error(error);
        alert('회원정보를 불러오는 도중에 오류가 발생하였습니다');
});

async function deleteData(user_idx) {
    await fetch(`https://port-0-udiro-admin-server-7xwyjq992llikwjj6o.sel4.cloudtype.app/auth/${user_idx}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                alert(data);
                window.location.reload();
            })
        }
        else {
            alert("회원 삭제 실패!"); // 로그인 실패 시 알림 표시
        }
    })
    .catch(function (error) {
        console.error(error);
        alert('회원 삭제 실패!'); // 로그인 요청 실패 시 알림 표시
    });
}

async function updateUser(id){
    const user_idx = id.querySelector('.user_idx').innerText;

    const user_name = id.querySelector('.user_name').innerText;

    const user_id = id.querySelector('.user_id').innerText;

    const user_pw = id.querySelector('.user_pw').innerText;

    const user_email = id.querySelector('.user_email').innerText;
    
    const user_phone = id.querySelector('.user_phone').innerText;

    console.log(user_idx, user_name, user_id, user_pw, user_email, user_phone);

    await fetch(`https://port-0-udiro-admin-server-7xwyjq992llikwjj6o.sel4.cloudtype.app/auth/${user_idx}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_name,
            user_id,
            user_pw,
            user_email,
            user_phone
        })
    })
    .then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                alert(data);
                window.location.reload();
            })
        }
        else {
            alert("회원 수정 실패!"); // 로그인 실패 시 알림 표시
        }
    })
    .catch(function (error) {
        console.error(error);
        alert('회원 수정 실패!'); // 로그인 요청 실패 시 알림 표시
    });
}

function test(id) {
    const user_name = id.querySelector('.user_name');
    user_name.id = 'user_name';

    const user_id = id.querySelector('.user_id');
    user_id.id = 'user_id';

    const user_pw = id.querySelector('.user_pw');
    user_pw.id = 'user_pw';

    const user_email = id.querySelector('.user_email');
    user_email.id = 'user_email';
    
    const user_phone = id.querySelector('.user_phone');
    user_phone.id = 'user_phone';
}

function refresh() {
    window.location.reload();
}

async function addUser() {
    const user_name = document.getElementById('add_name').value;
    const user_id = document.getElementById('add_id').value;
    const user_pw = document.getElementById('add_pw').value;
    const user_email = document.getElementById('add_email').value;
    const user_phone = document.getElementById('add_phone').value;

    await fetch(`https://port-0-udiro-admin-server-7xwyjq992llikwjj6o.sel4.cloudtype.app/auth/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_name,
            user_id,
            user_pw,
            user_email,
            user_phone
        })
    })
    .then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                alert(data);
                window.location.reload();
            })
        }
        else {
            alert("회원 추가 실패!"); // 로그인 실패 시 알림 표시
        }
    })
    .catch(function (error) {
        console.error(error);
        alert('회원 추가 실패!'); // 로그인 요청 실패 시 알림 표시
    });
}