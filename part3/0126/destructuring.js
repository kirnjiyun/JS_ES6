{
    let arr = [1, 2, 5];
    //arr안의 자료가 너무 중요해서 하나씩 꺼내서 변수에 담고싶다~
    let a = arr[0];
    let b = arr[1];
    console.log(a);
    //이런거 너무 복잡해~~~

    // 쉽게하자
    let [ㄱ, ㄴ, ㄷ] = [1, 2, 5];
    console.log(ㄷ);
    //모양만 맞추면 된다 우하하
    let [apple, banana, pear = 94] = [10, 3];
    console.log(apple);
    console.log(pear); //몇개 빼먹는다면 등호로 기본값 지정 가능하다

    let obj = { name: "삼김", price: 400 };
    // let name = obj.name;
    // let age = obj.age;
    let { name, price } = { name: "삼김", price: 400 };
    console.log(name);
    //변수 만들때 obj key값이랑 이름을 동일하게 맞춰줘야한다
    //변수 만들때 이름 바꿀 수 있다. name 이라는 변수 명이 맘에 안들어서 author하고싶어~
    let { name: author, age } = { name: "삼김", age: 1 };
    console.log(author);
    let { address: 주소 = "기본주소" } = {};
    console.log(주소);

    //변수를 obj에 집어넣고 싶은 경우
    //함수 파라미터 만들때도 응용 가능하다
    let nickname = "코코";
    let money = 0;

    let obj2 = { nickname: nickname, money: money };
    console.log(obj2);

    let obj3 = { nickname, money };
    console.log(obj3);
}

{
    function 함수({ name, age }) {
        console.log(name);
        console.log(age);
    }

    let obj = { name: "Kim", age: 20 };
    함수(obj);
}
{
    function 함수([name, age]) {
        console.log(name);
        console.log(age);
    }

    let array = ["Kim", 30];
    함수(["Kim", 30]);
    console.log(array);
}
