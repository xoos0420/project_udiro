const logoContainer = document.querySelector('#logoContainer');
const findId = document.querySelector('#findId');
const signUp = document.querySelector('#signUp');
const findPwRe = document.querySelector('#findPwRe');






// 로고 클릭 메인
logoContainer.addEventListener('click', () => {
    window.location.href = '/';
})

// 아이디 찾기
findId.addEventListener('click', () => {
    window.location.href = '/auth/findId';
})

// 회원가입
signUp.addEventListener('click', () => {
    window.location.href = '/auth/terms';
})
findPwRe.addEventListener('click', () => {
    window.location.href = '/auth/newPW';
})

