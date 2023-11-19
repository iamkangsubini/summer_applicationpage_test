const application_btn = document.querySelector('#application_btn')
console.log(application_btn);
//어학연수 신청하기 눌렀을 때, '이벤트 신청기간이 종료되었습니다. 감사합니다.' 팝업창 뜨기
application_btn.addEventListener('click',function(){
    window.alert('이벤트 신청기간이 종료되었습니다. 감사합니다.')
});