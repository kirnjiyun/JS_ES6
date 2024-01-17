var 사람 = {
    name: "손흥민",
    sayHi: function () {
        console.log("안녕 나는 " + this.name);
    },
};

사람.sayHi();

var 자료 = {
    data: [1, 2, 3, 4, 5],
};

자료.전부더하기 = function () {
    let sum = 0;
    this.data.forEach((a) => {
        sum += a;
    });
    console.log(sum);
};
