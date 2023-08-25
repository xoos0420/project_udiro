// 수정할 곳들의 내용을 객체에 담아서 한번에 보내주기
const user_id = document.querySelector('#user_id').innerHTML
const user_email = document.querySelector('#my__Acount__email__text').children[1].textContent.trim(' ')
const user_phone = document.querySelector('#my__Acount__phone__text').children[1].textContent.trim(' ')
const user_area = document.querySelector('#my__Acount__favorite__area__text').children[1].textContent.trim(' ')


function editemail() {
    var emailText = document.getElementById("email");
    var currentemail = emailText.innerText.trim();
    var emailInput = document.createElement("input");


    // 수정할 곳들의 내용을 객체에 담아서 한번에 보내주기
    const user_id = document.querySelector('#user_id').innerHTML
    const user_phone = document.querySelector('#my__Acount__phone__text').children[1].textContent.trim(' ')
    const user_area = document.querySelector('#my__Acount__favorite__area__text').children[1].textContent.trim(' ')


    emailInput.type = "text";
    emailInput.value = currentemail;

    emailText.innerText = "";
    emailText.appendChild(emailInput);

    var emailBtn = document.getElementById("email__update__btn");
    emailBtn.innerText = "저장";

    emailBtn.onclick = async function () {
        const newemail = emailInput.value;
        emailText.innerText = newemail;
        emailBtn.innerText = "편집";
        emailBtn.onclick = editemail;
        confirm('수정하시겠습니까?')

        // 서버 통신부분
        try {
            const response = await fetch('https://port-0-udiroserver-7e6o2cli3ac97a.sel4.cloudtype.app/mypage/update', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: user_id,
                    user_phone: user_phone,
                    user_email: newemail,
                    user_area: user_area
                }) // 업데이트할 사용자 정보
            });

            if (response.ok) {
                alert('수정되었습니다.');
            } else {
                alert('중복된 이메일 입니다.')
            }
        } catch (error) {
            console.error('Error updating user email', error);
        }
    };
}

function editphonenumber() {
    // 수정할 곳들의 내용을 객체에 담아서 한번에 보내주기
    const user_id = document.querySelector('#user_id').innerHTML
    const user_email = document.querySelector('#my__Acount__email__text').children[1].textContent.trim(' ')
    const user_area = document.querySelector('#my__Acount__favorite__area__text').children[1].textContent.trim(' ')

    var phonenumberText = document.getElementById("phonenumber");
    var currentphonenumber = phonenumberText.innerText.trim();
    var phonenumberInput = document.createElement("input");
    phonenumberInput.type = "text";
    phonenumberInput.value = currentphonenumber;

    phonenumberText.innerText = "";
    phonenumberText.appendChild(phonenumberInput);

    var phonenumberBtn = document.getElementById("email__phone__btn");
    phonenumberBtn.innerText = "저장";


    // 서버 통신 부분
    phonenumberBtn.onclick = async function () {
        var newphonenumber = phonenumberInput.value;
        phonenumberText.innerText = newphonenumber;
        phonenumberBtn.innerText = "편집";
        phonenumberBtn.onclick = editphonenumber;
        confirm('수정하시겠습니까?')

        try {
            const response = await fetch('https://port-0-udiroserver-7e6o2cli3ac97a.sel4.cloudtype.app/mypage/update', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: user_id,
                    user_phone: newphonenumber,
                    user_email: user_email,
                    user_area: user_area
                }) // 업데이트할 사용자 정보
            });

            if (response.ok) {
                alert('phone번호 수정완료');
            } else {
                alert('오류가 발생하였습니다.')
            }
        } catch (error) {
            console.error('Error updating user', error);
        }
    };



}

function editusuallylocal() {
    // 수정할 곳들의 내용을 객체에 담아서 한번에 보내주기
    const user_id = document.querySelector('#user_id').innerHTML
    const user_email = document.querySelector('#my__Acount__email__text').children[1].textContent.trim(' ')
    const user_phone = document.querySelector('#my__Acount__phone__text').children[1].textContent.trim(' ')

    var usuallylocalText = document.getElementById("usuallylocal");
    var currentusuallylocal = usuallylocalText.innerText.trim();
    var usuallylocalInput = document.createElement("input");
    usuallylocalInput.type = "text";
    usuallylocalInput.value = currentusuallylocal;

    usuallylocalText.innerText = "";
    usuallylocalText.appendChild(usuallylocalInput);

    var usuallylocalBtn = document.getElementById("favorite__area__btn");
    usuallylocalBtn.innerText = "저장";

    usuallylocalBtn.onclick = async function () {
        var newusuallylocal = usuallylocalInput.value;
        usuallylocalText.innerText = newusuallylocal;
        usuallylocalBtn.innerText = "편집";
        usuallylocalBtn.onclick = editusuallylocal;
        confirm('수정하시겠습니까?')

        try {
            const response = await fetch('https://port-0-udiroserver-7e6o2cli3ac97a.sel4.cloudtype.app/mypage/update', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: user_id,
                    user_phone: user_phone,
                    user_email: user_email,
                    user_area: newusuallylocal
                }) // 업데이트할 사용자 정보
            });

            if (response.ok) {
                alert('메모 수정완료');
            } else {

                alert('오류가 발생되었습니다.')
            }
        } catch (error) {
            console.error('Error updating user', error);
        }
    };
}


function showConfirmation() {
    const confirmation = confirm('정말로 탈퇴하시겠습니까?');

    if (confirmation) {
        const deleteUser = prompt('정말로 탈퇴하시길 원하면 "탈퇴" 를 입력해주세요.')
        if (deleteUser == "탈퇴") {
            deleteData();
        }
    }
}
async function deleteData() {
    // 수정할 곳들의 내용을 객체에 담아서 한번에 보내주기
    const user_id = document.querySelector('#user_id').innerHTML
    const user_email = document.querySelector('#my__Acount__email__text').children[1].textContent.trim(' ')
    const user_phone = document.querySelector('#my__Acount__phone__text').children[1].textContent.trim(' ')
    const user_area = document.querySelector('#my__Acount__favorite__area__text').children[1].textContent.trim(' ')
    try {
        const response = await fetch('https://port-0-udiroserver-7e6o2cli3ac97a.sel4.cloudtype.app/mypage/delete', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: user_id,
                user_phone: user_phone,
                user_email: user_email,
                user_area: user_area
            }) // 업데이트할 사용자 정보
        });

        if (response.ok) {
            alert('탈퇴가 완료 되었습니다.');
            localStorage.clear('token');
            window.location.href = '/'
        } else {
            localStorage.clear('token');
            alert('존재하지 않는 사용자입니다.')
            window.location.href = '/'
        }
    } catch (error) {
        alert('오류가 발생하였습니다.');
    }
};