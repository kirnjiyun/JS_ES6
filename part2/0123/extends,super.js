//부모 클래스가 하나 있는데 이거랑 유사한 클래스를 하나 더 만들고싶으면?!?!? 하드코딩말구
class 할아버지 {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    sayHi() {
        console.log("안녕 나는 할아버지");
    }
}
let grandpapa = new 할아버지("후", "추");
console.log(grandpapa);
class 아버지 extends 할아버지 {
    constructor(firstname, lastname) {
        super(firstname, lastname);
        this.나이 = 50;
    }
    sayHi2() {
        console.log("안녕 나는 아버지");
        super.sayHi();
    }
}

let papa = new 아버지("포", "케");
console.log(papa);

// super는 뜻이 두개입니다.

// 1. constructor 안에서 쓰면 부모 class의 constructor

// 2. prototype 함수 안에서 쓰면 부모 class의 prototype
