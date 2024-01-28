let 데이터 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (숫자 of 데이터) {
    for (숫자2 of 데이터) {
        console.log(`${숫자} x ${숫자2} = ${숫자 * 숫자2}`);
    }
}
let products = [
    {
        name1: "chair",
        price1: 7000,
    },
    {
        name2: "sofa",
        price: 5000,
    },
    {
        name1: "desk",
        price3: 9000,
    },
];
let newValue;
let newKey;

for (let item of products) {
    for (let key in item) {
        if (isNaN(parseInt(key.slice(-1))) == false) {
            newValue = item[key];
            newKey = key.slice(0, -1);
            item[newKey] = newValue;
            delete item[key];
        }
    }
}

console.log(products);
