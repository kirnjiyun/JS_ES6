{
    let 약속 = new Promise(function (성공, 실패) {
        let 어려운연산 = 1 + 1;
        성공(어려운연산);
    });
    약속.then(function (결과) {
        console.log(결과);
    }).then(function () {
        console.log("실패했다");
    });
    //then 대신 catch 쓰기 가능
    // 일반콜백함수: 1번 실행후, 2번 실행해주세요
    // promise로 만든거 : 1번 실행후, 성공시 2번,실패시 3번 실행해주세요
}
{
    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, 5000);
    });

    promise
        .then(() => {
            console.log("성공했어용");
        })
        .catch(() => {
            console.log("ㅠㅠ실패");
        });
}
