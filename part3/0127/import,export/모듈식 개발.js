// let a = 10;
// export default a;
var a = 10;
var b = 20;
var c = 30;
export { a, b };
export default c;

// - export default는 한번만 쓸 수 있고 import시엔 변수명을 새롭게 작명가능하다
// - export는 {변수명1, 변수명2 ...} 이렇게 담아야하고 import 할 때도 정확히 변수명을 써줘야한다
