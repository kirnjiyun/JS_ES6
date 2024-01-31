/*
Map 자료형은 자료간의 연관성을 표현하기 위해 씁니다
그냥 key, value형식으로 저장하려면 Object 쓰시면 되고,
name이 marimo와 연관되어있다~ 라고 저장하고 싶으면 Map을 쓰시면 됩니다.
*/

let person = new Map();
person.set("name", "marimo");
person.set("age", 0.1);
person.set([1, 2, 3], "Kim");
console.log(person.get("age"));
person.get("age"); //자료 꺼내는 법
person.delete("age"); //자료 삭제하는 법
person.size; //자료 몇갠지 알려줌
console.log(person.size);

for (var key of person.keys()) {
    console.log(key);
}
