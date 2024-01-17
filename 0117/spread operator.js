let 어레이 = ["안뇽", "세상아"];
//...spread operator 뭔가 내용물을 빼고싶을때 쓰자
// 1.array 에 붙이면 대괄호 없애준다
console.log(어레이);
console.log(...어레이);

let 문자 = "이건텍스트야";
console.log(문자);
console.log(...문자);
// 2.문자에 붙이면 하나하나 펼쳐준다
console.log(문자[3]);
let a = [1, 2, 3, 4];
let b = [10, 22, 44];
let d = [...a, ...b];
console.log(d);
// 쓸곳 어레이 합치기 딥 카피
// a에 있는 값을 b에 복사하고 싶어서 a를 할당함
{
    let a = [1, 5, 7];
    let b = a;
    a[3] = 4;
    console.log(a);
    console.log(b);
    //b 건든 적 없는데 추가됨
    // 그냥 등호로 복사하면 똑같이 값을 공유한다
}

{
    let a = [1, 5, 7];
    let b = [...a];
    a[3] = 4;
    console.log(a);
    console.log(b);
}
{
    let o1 = { a: 1, b: 2 };
    let o2 = { ...o1, c: 3, d: 4 };
    console.log(o2);
    //중괄호도 벗겨준다
    // 딥 카피 하고싶으면
    let o3 = { ...o1 };
    //혹시 값 중복이 일어나면 그냥 뒤에 온 애로 덮어준다
}
{
    더하기 = (a, b, c) => {
        console.log(a + b + c);
    };
    더하기(10, 2, 4);
    let array = [10, 20, 30];
    더하기(...array);
}
{
    var person = {
        인사: function () {
            console.log(this.name + "안녕");
        },
    };

    var person2 = {
        name: "손흥민",
    };

    person.인사.apply(person2, [1, 2, 3]);
    person.인사.call(person2, 1, 2, 3);
    // 이 때 apply는 파라미터를 [array]로 한꺼번에 집어넣을 수 있고 call은 그냥 1,2,3 이렇게 일반 함수처럼 만 집어넣을 수 있습니다.
}
{
    function 더하기(a, b, c) {
        console.log(a + b + c);
    }

    let 어레이 = [10, 20, 30];
    더하기(...어레이); //요즘방식 넣기
    더하기.apply(undefined, 어레이); //옛날방식 넣기
    // 더하기() 함수를 실행하는데 undefined에 적용해서 실행해주시고요 파라미터로 어레이를 집어넣어주세요~ 라는 뜻입니다.
}
