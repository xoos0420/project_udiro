const header_map = document.querySelector('#header__menu__map');
const header_culture = document.querySelector('#header__menu__culture');
const login = document.querySelector('#login');
const signUp = document.querySelector('#signUp');


// 헤더 메뉴 이동
header_map.addEventListener('click', () => {
    window.location.href = '../map/map.html';
})

header_culture.addEventListener('click', () => {
    window.location.href = '../culture/culture_main.html';
})

//로그인
login.addEventListener('click', () => {
    window.location.href = '../login/login.html';
})
signUp.addEventListener('click', () => {
    window.location.href = '../login/terms.html';
})



// 로고 클릭 리로드
const header__logo = document.querySelector('#header__logo');
header__logo.addEventListener('click', () => {
    window.location.reload()
})
const main__logo = document.querySelector('#main__logo');
main__logo.addEventListener('click', () => {
    window.location.reload()
})

const search__bar = document.getElementById('search__bar')
console.log(search__bar)
