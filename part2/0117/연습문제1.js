// 예상: "김밥", 1, 2, 3;
// 실제 답: "김","밥",1,2,3
var a = [1, 2, 3];
var b = "김밥";
var c = [...b, ...a];
console.log(c);

var a = [1, 2, 3];
var b = ["you", "are"];
var c = function (a, b) {
    console.log([[...a], ...[...b]][1]);
};
c(a, b);
console.log([[...a]]);
console.log([...[...b]]);
console.log([[...a], ...[...b]][1]);
//you

function 함수(a = 5, b = a * 2) {
    console.log(a + b);
    return 10;
}
함수(3);
//9
function 함수(a = 5, b = a * 2) {
    console.log(a + b);
}
함수(undefined, undefined);
//15

function 어레이(...rest) {
    for (let i = 0; i < rest.length; i++) {
        console.log(rest[i]);
    }
}

var newArray = 어레이(1, 2, 3, 4, 5);
console.log(newArray);
{
    var numbers = [2, 3, 4, 5, 6, 1, 3, 2, 5, 5, 4, 6, 7];
    let answer = Math.max(...numbers);
    console.log(answer);
}
{
    function 정렬(글자) {
        console.log([...글자].sort());
    }

    정렬("bear");
    //대괄호 벗기고싶으면 function 정렬(글자){
    //   console.log( ...[...글자].sort() )
    // }

    // 정렬('bear');
}
{
    function 글자세기(글) {
        var 결과 = {};
        [...글].forEach(function (a) {
            if (결과[a] > 0) {
                결과[a]++;
            } else {
                결과[a] = 1;
            }
        });
        console.log(결과);
    }
}
