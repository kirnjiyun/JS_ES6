{
    class 부모 {
        constructor() {
            this.name = "Kim";
            this.sayHi = function () {
                console.log("hello");
            };
        }
    }

    var 자식 = new 부모();
}
{
    class 부모 {
        constructor(이름, 나이) {
            this.name = 이름;
            this.age = 나이;
        }
    }

    var 자식 = new 부모("Park", 30);
}
{
    class 부모 {
        constructor(이름, 나이) {
            this.name = 이름;
            this.age = 나이;
        }
        sayHi() {
            console.log("안녕");
        }
        sayHello() {
            console.log("안녕하세요");
        }
    }

    var 자식 = new 부모("Park");
}
