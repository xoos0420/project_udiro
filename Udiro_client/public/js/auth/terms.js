//  모두 선택 checkAll
const checkAll = document.getElementById('checkAll');


//  이용약관동의 fterms1
const fterms1 = document.querySelector('#fterms1')


//  개인정보 수집 및 이용 fterms2
const fterms2 = document.querySelector('#fterms2')


//  위치기반 fterms3
const fterms3 = document.querySelector('#fterms3')


//  프로모션 정보 수신 동의 fterms
const fterms4 = document.querySelector('#fterms4')


//  리스트에 담아서 forEach 문 돌리기
const checkList = [fterms1, fterms2, fterms3, fterms4]



// 모두선택
// 체크할때 이벤트 발생시켜서
checkAll.addEventListener('change', (e) => {
    // isChecked에는 true, false값으로 나오는데 이걸 대입을 시켜줌
    const isChecked = e.target.checked;
    checkList.forEach(obj => {
        // 그래서 항상 클릭할때마다 같이 체크, 해제 됨
        obj.checked = isChecked;
    });
});


//  밑의 하나를 체크해제할때 모두선택부분 해제시키기
//  list안의 체크박스들에 이벤트 발생시켜서 
checkList.forEach(obj => {
    obj.addEventListener('change', () => {
        // 리스트안의 체크박스가 해제되면 모두선택도 해제
        if (!obj.checked) {
            checkAll.checked = false;
        } else {
            // 선택된거라면 체크 되지 않은 갯수를 더해서 저장해주고
            const hasUnchecked = checkList.some(item => !item.checked);
            //  그 갯수가 0개라면 false니까 모두 선택되었다는 뜻이어서
            if (!hasUnchecked) {
                //  모두선택을 true로 바꿔준다
                checkAll.checked = true;
            }
        }
    });
});



// 체크박스 확인후 모달창 부분

const terms_modal = document.querySelector('.terms_modal')
const terms_modal_close = document.querySelector('#terms_modal_close')

const signUp = document.querySelector('#signUp')

signUp.addEventListener('click', () => {
    const hasUnchecked = checkList.some(item => !item.checked);
    if (!hasUnchecked) {
        // 체크박스 모두 체크한 경우 회원가입 페이지로 이동
        window.location.href = '/auth/signUp';
    } else {
        // 체크박스 중 하나 이상이 체크되어 있지 않은 경우 모달창 띄움
        terms_modal.classList.add('show');
    }
});

terms_modal_close.addEventListener('click', () => {
    terms_modal.classList.remove('show');
});

