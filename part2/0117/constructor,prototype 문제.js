function Student(이름, 나이) {
    this.name = 이름;
    this.age = 나이;
    this.sayHi = function () {
        console.log(`안녕 나는 ${this.name}이고 ${this.age}살이야`);
    };
}

var 학생1 = new Student("Kim", 20);
var 학생2 = new Student("Park", 21);
var 학생3 = new Student("Lee", 22);
console.log(학생3.sayHi());

function Parent() {
    this.name = "Kim";
}
var a = new Parent();

a.__proto__.name = "Park";
console.log(a.name);
//Kim' 입니다.
// 첫 4줄에 의해서 a = { name : 'Kim' } 이 되고
// a.__proto__.name = 'Park'; 이건 부모 prototype에 { name : 'Park' } 이걸 추가하라는 뜻입니다.그럼 이제 a.name 이라고 사용했을 때 내가 직접 가지고 있는 { name : 'Kim' } 이걸 우선 출력해줍니다.
Array.prototype.remove3 = function () {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === 3) {
            this.splice(i, 1);
        }
    }
};

var arr = [1, 2, 3, 4];
arr.remove3();

console.log(arr); //[1,2,4]
