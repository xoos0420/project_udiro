

//  마이페이지에 db에서 정보 가져오기
const get2name = document.querySelector('#my__Acount__name__text').children[1]
const get2Id = document.querySelector('#my__Acount__id__text').children[1]
const get2Email = document.querySelector('#my__Acount__email__text').children[1]
const get2Phone = document.querySelector('#my__Acount__phone__text').children[1]
const get2Area = document.querySelector('#my__Acount__favorite__area__text').children[1]

const token = localStorage.getItem('token');
async function getAccount() {
    if (token === null) {
        alert('로그인 후 이용해주세요.')
        window.localStorage.clear('token')
        return window.location.href = '/'
    }
    try {
        const response = await fetch('https://port-0-udiroserver-7e6o2cli3ac97a.sel4.cloudtype.app/mypage/account', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            const data = await response.json();
            get2name.innerHTML = data.user_name
            get2Id.innerHTML = data.user_id;
            get2Phone.innerHTML = data.user_phone;
            get2Email.innerHTML = data.user_email;
            get2Area.innerHTML = data.user_area;


        } else {
            console.log(response)
            alert('잘못된 접근입니다.')
        }
    } catch (error) {
        console.error('Error updating user', error);
    }
};

getAccount()

