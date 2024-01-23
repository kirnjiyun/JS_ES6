//Object.create(프로토타입오브젝트);)

let 부모 = { name: "lee", age: 80 };

//부모의 name,age를 물려받은 자식 object를 만들고싶으면 constructor 함수를 만들거나, Object.create()를 이용한다.

let 자식 = Object.create(부모);
console.log(자식.name);
//prototype을 부모로 해주세요
// 자식 age는 80 아니자나 바꾸고싶어
자식.age = 20;
console.log(자식.age);
let 손자 = Object.create(자식);
손자.age = 1;
손자.name = "김베이비";
console.log(손자);
