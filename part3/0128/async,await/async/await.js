//프로미스 : 순차적 실행을 위해 콜백함수 대신 쓸 수 있는 코딩 패턴 (성공, 실패)
async function 더하기() {
    return 1 + 1;
}
더하기().then(function (결과) {
    console.log(결과);
});
//함수 앞에 async 붙이면 .then 쓸 수 있다
//단점: 성공만 판정 가능

//async function 안에서 쓰는 await
async function 빼기() {
    let promise = new Promise(function (성공, 실패) {
        let 힘든연산 = 100 - 1;
        성공();
    });
    // promise.then(function(){console.log("성공해써요")})
    let result = await promise;
}
console.log(result);

async function 곱하기() {
    let promise = new Promise((성공, 실패) => {
        let 힘든연산 = 1 + 1;
        실패(100);
    });
}
try {
    let 결과 = await promise;
    console.log(결과);
} catch {
    console.log("promise 망해따");
}
