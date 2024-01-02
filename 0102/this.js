function name(params) {
    console.log(this);
}
name();

let obj = {
    data: "kimjiyun",
    함수: function () {
        console.log("하이용");
        console.log(this);
    },
};
obj.함수();
//이 메소드가 동작하고있는 (나를 포함한) obj를 뜻한다.
let 오브젝트 = {
    data: {
        함수: () => {
            console.log(this);
        },
    },
};
오브젝트.data.함수();
// 함수: function(){} 랑 함수:() =>{}랑 다르다

// let 오브젝트 = {
//     data: {
//         함수() => {
//             console.log(this);
//         },
//     },
// };
// 오브젝트.data.함수()
function 간지나는함수() {
    console.log(this);
}
// this는 오브젝트 내의 메소드(함수)에서 사용했을 때 메소드의 주인님 오브젝트를 출력해준다~
