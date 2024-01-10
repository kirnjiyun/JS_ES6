
//선언 할당 범위
//선언
var 이름;
let 나이;
const 성별;
let 나이;
let 나이; //에러

const 성별 = '여자';
const 성별 = '남자'; //에러
//할당
var 이름;
이름 = 'Kim';
var 이름 = 'Kim'; //이건 선언, 할당 동시에 한 거다근데 변수를 var, let으로 만들면 재할당이 가능하고 const로 만들면 값 재할당이 불가능합니다. 바뀌면 안되는 값 저장하고 싶을 때 사용

const 오브젝트 = { 이름 : 'Kim' }
오브젝트.이름 = 'Park'; //가능 

//범위
// 변수를 만들면 존재범위가 있습니다. 
// var 변수는 존재범위가 function입니다. 
// let, const 변수는 존재범위가 거의 모든 {중괄호} 입니다. (for, if, function 등)
function 함수(){
    var 이름 = 'Kim';
    console.log(이름); //가능
  }
  
  console.log(이름); //에러

  if ( 1 == 1 ){
    let 이름 = 'Kim';
    console.log(이름); //가능
  }
  
  console.log(이름); //에러