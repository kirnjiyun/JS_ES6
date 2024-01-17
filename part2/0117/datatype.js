var name = "john";
var age = 20;

//primitive data type

var 사람 = { name: "Kim" };
//reference data type
//하지만 변수에 저장된건 { name : 'Kim' } 이게 아닙니다. "{ name : 'Kim' }이 저기 저장되어있습니다"라는 { name : 'Kim' } 값을 가리키는 화살표가 저장이 되어있을 뿐입니다. 알겠죠? Kim이라는 데이터가 변수에 저장된게 아닙니다. Kim이라는게 저기 있습니다~ 라는 정보만 저장할 뿐입니다.
// 그래서 이런 reference만 저장되는 array, object 자료형을 reference data type이라고 합니다.

//결론은 object, array 자료형은 등호로 복사하시면 화살표 값을 공유해버리기 때문에 문제가 일어날 수 있습니다.
// 그래서 다음시간에 배울 constructor 문법을 쓰셔서 object를 복사하든가 하시면 안전합니다.
