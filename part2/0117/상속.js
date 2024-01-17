//prototype : 유전자
function 기계(이름, 나이) {
    this.name = 이름;
    this.age = 나이;
    this.sayHi = function () {
        console.log(`HI my name is ${name}, i am ${age} years old`);
    };
}
기계.prototype.genter = "남";
let 학생1 = new 기계("chris", 15);
console.log(학생1);
//prototype은 함수에만 생성된다. 몰래!

var 부모 = { name: "Kim" };
var 자식 = {};
자식.__proto__ = 부모;
자식.name;
console.log(자식.name);
