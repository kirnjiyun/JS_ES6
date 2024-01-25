class Dog {
    constructor(type, color) {
        this.type = `${type}`;
        this.color = `${color}`;
    }
    한살먹기() {
        if (this instanceof Cat) {
            this.age++;
        }
    }
}
// let 강아지1 = new Dog("비숑", "white");
// let 강아지2 = new Dog("허스키", "black");
// console.log(강아지1);
// console.log(강아지2);

class Cat extends Dog {
    constructor(type, color, age) {
        super(type, color);
        this.age = `${age}`;
    }
}
let 고양이 = new Cat("러시안블루", "gray", 2);
console.log(고양이);
{
    class Unit {
        constructor() {
            this.체력 = 100;
            this.공격력 = 5;
        }
        get battlePoint() {
            return this.체력 + this.공격력;
        }
        set heal(a) {
            this.체력 = this.체력 + a;
        }
    }

    var 싸우자 = new Unit();

    console.log(싸우자.battlePoint);
    싸우자.heal = 50;
}
{
    let data = {
        odd: [],
        even: [],
        get getter함수() {
            return [...this.odd, ...this.even].sort((a, b) => a - b);
        },
        setter함수: function (...num) {
            num.forEach((n) => {
                n % 2 == 1 ? this.odd.push(n) : this.even.push(n);
            });
        },
    };
    data.setter함수(1, 2, 3, 3456, 7, 123);
    console.log(data);
    console.log(data.getter함수);
}
