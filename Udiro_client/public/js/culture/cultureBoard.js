var navi = $("#navi");
var sticky = $(navi).offset().top;

// navigation
$('.menu2depth a').click(function () {
    $('.menu2depth a.active').removeClass('active');
    $(this).addClass('active');
    var contents = $(this).attr('id');
    $('#contents > div').removeClass('active');
    console.log($('#' + contents));
    $('.' + contents).addClass('active');
    window.scrollTo(0, sticky - 80);
})

// adjust svg position for vertical
if (window.innerWidth > 767) {
    $('.menu2depth a > svg').map(function () { var temp = (60 - $(this).height()) / 2 + 'px'; $(this).css({ 'margin-top': temp, 'margin-bottom': temp }); })
} else {
    resizeMenu1();
}

$(document).ready(function () {
    var url = window.location.href;
    var urlAux = url.split('?');
    var page = urlAux[1];
    if (urlAux.length == 2) {
        $('.menu2depth > a.active').removeClass('active');
        $('#contents > div').removeClass('active');
        $('#' + page).addClass('active');
        $('.' + page).addClass('active');
    }
})

window.onscroll = function () { if ($(window).width() > 767) { fixed(); } }
function fixed() {
    if (window.pageYOffset >= sticky) {
        $(navi).addClass("fixed");
    } else {
        $(navi).removeClass("fixed");
    }
}

$(window).resize(function () {
    if ($(window).width() < 768) {
        resizeMenu1();
    } else {
        $('.menu2depth a > svg').map(function () { var temp = (60 - $(this).height()) / 2 + 'px'; $(this).css({ 'margin-top': temp, 'margin-bottom': temp }); })
    }
})

function resizeMenu1() {
    var menu1depth = [], getText = $('.menu1depth > a');
    getText.map(function (ele) {
        if (ele > 1) {
            $(this).text(($(this).text().substring(0, 6)));
        } else {
            $(this).text(($(this).text().substring(0, 8)));
        }
    })
}


var contents = [
    {
        "title": "업데이트 공지",
        "content": "앱의 이미지가 정상적으로 보이지 않던 버그가 해결 되었습니다",
        "date": "2018-10-26"
    },
    {
        "title": "TECHNICAL SUPPORT 페이지",
        "content": "TECHNICAL SUPPORT 페이지의 작업이 막바지에 이르렀습니다. <br>컨텐츠 및 내용들에 대한 문의 사항 접수 받습니다.",
        "date": "2018-10-25"
    },
    {
        "title": "TECHNICAL SUPPORT 페이지",
        "content": "TECHNICAL SUPPORT 페이지의 작업이 막바지에 이르렀습니다. 컨텐츠 및 내용들에 대한 문의 사항 접수 받습니다. 오늘의 메뉴는 닭볶음밥과 냉면입니다",
        "date": "2018-10-25"
    }
];

Vue.component('notice-board', {
    data() {
        return {
            collapsed: ''
        }
    },
    template: `<article ref="collapsible" v-bind:class="{'is-collapsed' : collapsed }">
<div class="titleSection">
<div class="title" v-on:click="collapsed = !collapsed"><h3>{{ content.title }}</h3></div>
<div class="date">{{ content.date }}</div></div><div class="content"><div class="text"><span class="close" @click="collapsed = !collapsed">&times;</span><p v-html="content.content"></p></div></div></article>`,
    props: {
        content: Object,
        collapsed: Boolean
    },
    methods: {
        close: function () {
            collapsed = false;
        }
    }
})

var contents = new Vue({
    el: 'app',
    data: {
        contents
    }
})