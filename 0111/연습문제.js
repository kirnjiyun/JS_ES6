{
    함수();
    function 함수() {
        console.log(안녕);
        let 안녕 = "Hello!";
    }
    //Uncaught ReferenceError: Cannot access '안녕' before initialization
}
{
    함수();
    var 함수 = function () {
        console.log(안녕);
        var 안녕 = "Hello!";
    }; //Uncaught ReferenceError: Cannot access '안녕' before initialization
}
{
    let a = 1;
    var 함수 = function () {
        a = 2;
    };
    console.log(a);
    //1
}
{
    let a = 1;
    var b = 2;
    window.a = 3;
    window.b = 4;

    console.log(a + b);
    //5
}
