let 공유 = {
    name: "공지철",
    job: "actor",
    age: 100,
    nextAge() {
        return this.age + 1;
    },
    setAge(age) {
        this.age = parseInt(age);
    },
};
// 공유.job;
// 자료를 꺼내는 법을 만들어서 꺼낸다.
공유.nextAge();
console.log(공유.nextAge());
//공유.age(20)
공유.setAge("20");
console.log(공유.age);

// 굳이 왜 이렇게 하냐면

// - object 안의 데이터가 복잡할 수록 함수 만들어놓는게 데이터 꺼내기 쉽습니다.

// - 내부에 있는 name, age 변수를 건드리지 않아서 실수를 방지할 수 있어서 안전합니다.

//set 추가한거를 setter라고 부른다.
// 데이터를 set 하는 (수정하는) 함수라는 뜻
var 사람 = {
    name: "Kim",
    age: 30,
    set setAge(나이) {
        this.age = parseInt(나이);
    },
    get nextAge() {
        return this.age + 1;
    },
};

사람.setAge = 40;
console.log(사람.nextAge);

//set 함수는 데이터를 입력해서 수정해주는 함수니까 파라미터가 한개 꼭 존재해야하고, get 함수는 파라미터가 있으면 안되고 함수 내에 return을 가져야한다.
{
    class 사람 {
        constructor() {
            this.name = "Park";
            this.age = 20;
        }
        get nextAge() {
            return this.age + 1;
        }
        set setAge(나이) {
            this.age = 나이;
        }
    }

    var 사람1 = new 사람();

    사람1.setAge = 50;
    사람1.nextAge;
    console.log(사람1);
}
