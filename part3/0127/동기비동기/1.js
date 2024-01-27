//동기
console.log(1);
console.log(2);
console.log(3);
//비동기
console.log("first");
setTimeout(() => {
    console.log("second");
}, 1000);
Element.addEventListener("click", function () {});
//비동기식처리 도와주는 함수 = 오래걸리는 작업이 있으면 제껴두고 다른거부터 처리하는 방식
// 실행이 오래걸리는 그런 코드들은 잠깐 대기실에 제쳐두고,실행이 바로바로 가능한 코드들부터 처리하는 방식을 뜻합니다. 이건 자바스크립트 언어 자체의 기능이 아니라 자바스크립트 실행을 도와주는 웹브라우저 덕분에 해낼 수 있는 것입니다.
console.log("third");
addEventListener("click", function () {});
