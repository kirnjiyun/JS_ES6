//변수를 만들면 호이스팅이라는 현상이 일어난다.
// 변수의 선언을 변수 범위 맨 위로 끌고오는 현상 = 자바스크립트의 특징

console.log(나이);
var 나이 = 30;
console.log(나이);
//첫번째 콘솔로그에서 에러가 뜨지 않는다. 원래 없는거 콘솔찍으면 에러가 떠야함 근데 언디파인드가 나옴
//참고로 호이스팅은 함수에서도 나타난다.
