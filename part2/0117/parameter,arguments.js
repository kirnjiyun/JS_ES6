//default parameter
function 더하기(a, b = 10) {
    console.log(a + b);
}
더하기(1, 2);

더하기(10);
//b 없으면 10 넣어주세요
function 임시함수() {
    return 10;
}

function 더하기(a, b = 임시함수()) {
    console.log(a + b);
}

더하기(3);

//함수의 arguments
// 함수의 모든 파라미터들을 전부 한꺼번에 싸잡아서 다루고 싶은 경우가 있습니다.

// 그럴 땐 arguments라는 키워드를 활용하시면 됩니다.

// 함수 안에서 쓸 수 있는 미리 정의된 키워드 혹은 변수인데

// 한번 써보도록 합시다

function 함수(a, b, c) {
    console.log(arguments);
}

함수(2, 3, 4);

function 함수2(a, b, c) {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

함수2(2, 3, 4);
