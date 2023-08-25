// 헤더메뉴 바꿔주기
const login2 = document.querySelector('#login')
const mypage2 = document.querySelector('#mypage')
const signUp2 = document.querySelector('#signUp')
const logout2 = document.querySelector('#logout')

const header__logo__img = document.querySelector('#header__logo__img')
const header__menu__map = document.querySelector('#header__menu__map')
const header__menu__culture = document.querySelector('#header__menu__culture')



const token2 = window.localStorage.getItem('token');
// 토큰이 있다면 바꿔주기
if (token2) {
    login2.classList.add('noshow')
    signUp2.classList.add('noshow')
    mypage2.classList.remove('noshow')
    logout2.classList.remove('noshow')
} else {
    window.localStorage.removeItem('token')
}

// 로그아웃
logout2.addEventListener('click', () => {
    localStorage.removeItem('token');
    window.location.href = '/'
})

// 헤더 메뉴 페이징처리
login2.addEventListener('click', () => {
    window.location.href = '/auth/login'
})

signUp2.addEventListener('click', () => {
    window.location.href = '/auth/terms'
})

mypage2.addEventListener('click', () => {
    window.location.href = '/mypage'
})

// 로고버튼 메인페이지
header__logo__img.addEventListener('click', () => {
    window.location.href = '/'
})

// 지도
header__menu__map.addEventListener('click', () => {
    window.location.href = '/map'
})

// 문화
header__menu__culture.addEventListener('click', () => {
    window.location.href = '/culture/main'
})