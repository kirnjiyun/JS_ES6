let sonny = `손흥민
메가커피`;
// `` 사용의 장점: 엔터키 사용가능
console.log(sonny);
//`` 사용의 장점: 문자 중간에 변수를 집어넣을 때 편리
var hi = `안녕하세요 저는 ${sonny}입니당`;
console.log(hi);

var 템플릿 = `<div>${sonny}</div>`;
console.log(템플릿);
