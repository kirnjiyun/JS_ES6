function shop(name, price, color) {
    (this.name = name),
        (this.price = price),
        (this.color = color),
        (this.introduce = () => {
            console.log(
                `안녕하세요 이 제품은 ${name}이고 가격은 ${price}입니다. 색상은 ${color}입니다.`
            );
        });
    this.부가세 = function () {
        console.log(`${price * 0.1}`);
    };
}

let firstOne = new shop("셔츠", 410000, "검은색");
let secondOne = new shop("바지", 780000, "청색");
console.log(firstOne);
firstOne.부가세();
