// 전역변수:모든 곳에서 쓸 수 있는 변수
// 바깥에서 만든 변수는 안에서 쓸 수 있다.

var 나이 = 20;
window.나라 = "한국"; //전역변수 만드는 두번째 방법
function 함수() {
    console.log(나이);
    var 이름 = "지윤"; //지역변수
}
함수();
console.log(window.나라);
