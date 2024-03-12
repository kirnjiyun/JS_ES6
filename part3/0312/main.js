var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//주인공 좌표, 사이즈정보
var img2 = new Image();
img2.src = "dinosaur.png";
var dino = {
    x: 10,
    y: 200,
    width: 80, // 변경된 너비
    height: 80, // 변경된 높이
    draw() {
        // ctx.fillStyle = "green";
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(img2, this.x, this.y, this.width, this.height); // 변경된 너비와 높이를 사용하여 그리기
    },
    jump() {
        this.y -= 1;
    },
    fall() {
        if (this.y < 200) {
            this.y += 1;
        }
    },
};

var img1 = new Image();
img1.src = "cactus.png";

class Cactus {
    constructor() {
        this.x = 600;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw() {
        // ctx.fillStyle = "red";
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(img1, this.x, this.y);
    }
}

var timer = 0;
cactus여러개 = [];
var animate;
var 점프timer = 0;

function 시간의흐름() {
    animate = requestAnimationFrame(시간의흐름);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (timer % 180 == 0) {
        // console.log(timer)
        var cactus = new Cactus();
        cactus여러개.push(cactus);
    }
    timer++;

    cactus여러개.forEach((a, i, object) => {
        if (a.x < 0) {
            object.splice(i, 1);
        }
    });

    cactus여러개.forEach((a) => {
        a.x -= 2;
        a.draw();
        충돌하냐(dino, a);
    });

    if (점프중 == true) {
        dino.jump();
        점프timer++;
    } else if (점프중 == false) {
        점프timer = 0;
        dino.fall();
    }

    if (점프timer > 100) {
        점프중 = false;
    }

    dino.draw();
}

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var cactus = new Cactus();

시간의흐름();

function 충돌하냐(dino, cactus) {
    var x축차이 = cactus.x - (dino.x + dino.width);
    var y축차이 = cactus.y - (dino.y + dino.height);

    if (x축차이 < 0 && y축차이 < 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cancelAnimationFrame(animate);
    }
}

var 점프중 = false;

document.addEventListener("keydown", function (e) {
    if (e.code === "Space") {
        점프중 = true;
    }
});
