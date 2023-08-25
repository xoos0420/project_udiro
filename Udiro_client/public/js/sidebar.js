// 지도
const sidbar_map = document.querySelector('#side__bar__ul').children[1]
const sidbar_culture = document.querySelector('#side__bar__ul').children[8]
const sidbar_culture_festa = document.querySelector('#side__bar__ul').children[10]
const sidbar_culture_place = document.querySelector('#side__bar__ul').children[11]
const sidbar_mypage = document.querySelector('#side__bar__ul').children[14]
const sidbar_mypage2 = document.querySelector('#side__bar__ul').children[16]
const hr = document.querySelector('#side__bar__ul').children[13]
const hr2 = document.querySelector('#side__bar__ul').children[15]

const sidebar_map_select = document.querySelector('#side__bar__select')

sidebar_map_select.addEventListener('change', () => {
    console.log(sidebar_map_select.value)
    window.localStorage.setItem('map_value', sidebar_map_select.value)
    window.location.href = '/map'
})




// 토큰이 있다면 바꿔주기
const token3 = window.localStorage.getItem('token')
if (!token3) {
    sidbar_mypage.classList.add('noShow')
    sidbar_mypage2.classList.add('noShow')
    hr.classList.add('noShow')
    hr2.classList.add('noShow')
} else {
    null
}

// 사이드바 이동
sidbar_map.addEventListener('click', () => {
    window.location.href = '/map'
})

sidbar_culture.addEventListener('click', () => {
    window.location.href = '/culture/main'
})
sidbar_culture_festa.addEventListener('click', () => {
    window.location.href = '/culture/festa'
})
sidbar_culture_place.addEventListener('click', () => {
    window.location.href = '/culture/place'
})
sidbar_mypage.addEventListener('click', () => {
    window.location.href = '/mypage'
})
sidbar_mypage2.addEventListener('click', () => {
    window.location.href = '/mypage'
})

