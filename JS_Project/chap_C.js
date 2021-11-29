let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

let dino = {
    x : 300,
    y : 578,
    width : 50,
    height : 50,
    draw() {
        let img = new Image();
        img.src = char_2;
        if(timer % 200)
            img.src = char_right;
        else
            img.src = char_left;
        ctx.drawImage(img, this.x, this.y);
    }
}
dino.draw();

class Cactus {
    constructor(){
        this.x=1400;
        this.y=578;
        this.width=50;
        this.height=50;
    }
    draw(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
let cactus = new Cactus();
cactus.draw();
let game = true;
let char_2 = "img/char2_1.png";
let char_right = "img/char2_2.png";
let char_left = "img/char2_3.png";
let timer = 0;
let cactusan = [];
let jt = 0;
let animation;
let j = false;

function frammove(){
    animation = requestAnimationFrame(frammove);
    timer++;

    ctx.clearRect(0,0, canvas.width, canvas.height);
    
    if(timer % 200 === 0){
        let cactus = new Cactus();
        cactusan.push(cactus);
    }
    cactusan.forEach((a, i, o)=>{
        if(a.x<250){
            o.splice(i,1);
        }
        a.x-=2;

        c(dino, a);

        a.draw();
    })
    if(j==true){
        dino.y-=2.5;
        jt++;
    }
    if(j==false){
        if(dino.y<578){
            dino.y+=2.5;
        }
    }
    if(jt > 60){
        j = false;
        jt=0;
    }
    dino.draw();
}

frammove();

// 충돌

function c(dino, cactus){
    let xc = cactus.x - (dino.x + dino.width);
    let yc = cactus.y - (dino.y + dino.height);
    if(xc < 0 && yc < 0){
        ctx.clearRect(0,0,canvas.width, canvas.height);
        cancelAnimationFrame(animation)
    }

}

document.addEventListener('keydown', function(e){
    if(e.code==='Space'){
        j=true
    }
})

function start(){
    char_now = char_0;
    frame();
    setTimeout(()=>{
        game = false;
    }, 3000);
}
window.onload = function(){
    Swal.fire({
        imageUrl: "img/time.png",
        imageWidth: 400,
        imageHeight: 200,
        title: '"작품을 제출하러 가자!"',
        width: 620,
        background: '#e1d8f6',
        html:
            '<h2>게임방법</h2>'
            +'🗸키보드의 <b>스페이스 바</b>를 누르면 캐릭터가 <b>점프</b>합니다.'
            +'<br>🗸<b>장애물</b>을 피해서 무사히 교무실에 도착하세요.'
            +'<br>🗸오른쪽 상단에 있는 <b>하트</b>🧡가 모두 사라지면 게임 클리어에 실패하게 됩니다.'
    }).then(()=>{
        //게임 실행 함수
        start();
    })
}