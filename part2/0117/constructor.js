//예시 학생부를 만들어보자
//비슷한 학생 오브젝트를 여러개 만드려면?
//constructor 라는 object 생성 기계를 만드세요
let stu1 = {
    name: "jiyunee",
    age: 15,
    subject: "physics",
    sayHi: function () {
        console.log(`안녕하세요 저는 ${this.name}입니다`);
    },
};

function Student(이름) {
    this.name = 이름;
    this.age = 16;
    this.subject = "math";
    this.sayHi = function () {
        console.log(`안녕하세요 저는 ${this.name}입니다`);
    };
}
//constructor 안의 this 는 새로 생성되는 object를 뜻한다

{
    let stu2 = new Student("이름");
    stu1.sayHi();
    stu2.sayHi();
}
