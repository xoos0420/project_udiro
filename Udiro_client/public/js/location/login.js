const logoContainer = document.querySelector('#logoContainer');
const findId = document.querySelector('#findId');
const findPw = document.querySelector('#findPw');
const signUp = document.querySelector('#signUp');






// 로고 클릭 메인
logoContainer.addEventListener('click', () => {
    window.location.href = '/';
})

// 아이디찾기
findId.addEventListener('click', () => {
    window.location.href = '/auth/findId';
})

// 비번찾기
findPw.addEventListener('click', () => {
    window.location.href = '/auth/findPw';
})

// 회원가입
signUp.addEventListener('click', () => {
    window.location.href = '/auth/terms';
})

