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
