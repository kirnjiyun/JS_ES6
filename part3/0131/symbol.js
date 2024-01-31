var 심볼 = Symbol("설명아무거나적기");
// Symbol은 Object자료형에 비밀스런 key값을 부여하고싶을 때 씁니다.
let person = { name: "jiyun" };
person.weight = 100;

let weight = Symbol("내 진짜 몸무게");
person[weight] = 200;

console.log(person);
console.log(person.weight);
let height = Symbol("이상형 키임");
let husband = { name: "Kim", [height]: 188 };
console.log(husband);
{
    var a = Symbol("설명1");
    var b = Symbol("설명1");
    console.log(a === b);
    //false
}
{
    // 변수처럼 뭔가 같은값을 가지면 같은 변수로 취급해주는 전역 심볼을 만들어쓸 수 있습니다.
    var a = Symbol.for("설명1");
    var b = Symbol.for("설명1");
    console.log(a === b);
    //true
}

var array = [2, 3, 4];
console.log(array[Symbol.iterator]);
// 모든 array 자료형은 [Symbol.iterator]라는 이름을 가진 심볼이 안에 있습니다.
// 궁금하면 아무 array나 만들고 한번 저걸 출력해보십시오.
// (Symbol을 출력하고 싶으면 오브젝트[심볼명] 이렇게 하시면 됩니다)
