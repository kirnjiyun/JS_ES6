function 첫째함수(둘째함수) {
    console.log(1);
    둘째함수();
}
function 둘째함수() {
    console.log(2);
}
첫째함수(function () {
    둘째함수(function () {
        셋째함수(function () {
            // 어쩌구..
        });
    });
});
//첫째함수를 실행하고 둘째함수를 실행하고싶다
첫째함수()
    .then(function () {
        console.log(" 그 담에 실행할거");
    })
    .then(function () {
        console.log(" 그 담에 실행할거");
    });
