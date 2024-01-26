{
    // let { address: a, number = 20 } = { address, number };
    // let [number, address] = [30, "seoul"];
    // console.log(a);
    // console.log(number);
    // { address: a, number = 20 } = { address: "seoul", number: 30 };
}
{
    let 신체정보 = {
        body: {
            height: 190,
            weight: 70,
        },
        size: ["상의 Large", "바지 30인치"],
    };
    let {
        body: { height, weight },
        size: [상의, 하의],
    } = 신체정보;

    console.log(height);
    console.log(상의);
    console.log(신체정보.body.weight);
}
