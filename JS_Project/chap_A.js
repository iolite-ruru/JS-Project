"use strict";

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d"); //실질적으로 사용되는 도구인 '2d 렌더링 컨텍스트'
canvas.width = window.innerWidth - 300;
canvas.height = window.innerHeight - 200;

let char_now;
let char_0 = "img/char1_0.png";
let char_right = ["img/char1_1.png", "img/char1_2.png", "img/char1_1.png", "img/char1_3.png"];
let char_left = ["img/char1_4.png", "img/char1_5.png", "img/char1_4.png", "img/char1_6.png"];

let playTime = 30000; //플레이 타임: 30초

let game = true;
let walkTimer = 0;
let walkIdx = 0;
let rainTimer = 0; //비 생성 타이머
let rains = [];

class Player{
    constructor(){
        this.x = 650;
        this.y = 500;
        this.width = 250;
        this.height = 250;
        this.right = false;
        this.left = false;
        // this.coreX = this.x+125; //70
        // this.coreY = this.y+20;
        this.life = 3; /******************************/
        this.draw();
    }
    draw(){
        let img = new Image();
        if(Array.isArray(char_now))
            img.src = char_now[walkIdx];
        else
            img.src = char_0;
        ctx.drawImage(img, this.x, this.y);
    }
};
let player = new Player();
class Rain{
    constructor(){
        this.x = Math.floor(Math.random() * 1350);
        this.y = 10;
        this.width = 100;
        this.height = 100;
        // this.coreX = this.x+50; //34
        // this.coreY = this.y+70;
    }
    draw(){
        let img= new Image();
        img.src = "img/rain.png";
        ctx.drawImage(img, this.x, this.y);
    }
}
function frame(){
    if(player.life == 0){
        cancelAnimationFrame(frame);
        fail();
    }
    else if(game == false){
        cancelAnimationFrame(frame);
        success();
    }
    else
        requestAnimationFrame(frame);
    rainTimer++;
    walkTimer++;
    ctx.clearRect(player.x-5, player.y, player.width+10, player.height); //플레이어 크기만큼만 지움
    if(rainTimer % 10 == 0){ //비 생성 주기
        let rain = new Rain();
        rains.push(rain);
    }
    //빗방울에 대한 처리들
    rains.forEach((rain, index, arr)=>{
        ctx.clearRect(rain.x, rain.y, rain.width, rain.height); //현재 아이템을 크기만큼만 지움
        if(rain.y > 630){ //끝까지 도달했는지?
            arr.splice(index, 1); //Oo => 배열에서 없앰
        }else{ //Xx => 비 하강
            rain.y += 7;
            rain.draw();
        }
        if(((player.y+20)-(rain.y+50) <= 0)&& Math.abs((player.x+120) - (rain.x+50)) <= 60){ //충돌 체크
            player.life--;
            ctx.clearRect(rain.x, rain.y, rain.width, rain.height);
            arr.splice(index, 1); //충돌Oo => 배열에서 없앰
        }
    })
    if(player.right && player.x < 1350){
        player.x+=7;
    }else if(player.left && player.x > 10){
        player.x-=7;
    }
    if(Array.isArray(char_now) && walkTimer % 7 ==0){
        if(walkIdx == 3) walkIdx = 0;
        else walkIdx++;
    }
    player.draw(); //플레이어 그림
}

function start(){
    char_now = char_0;
    frame();
    setTimeout(()=>{
        game = false;
    }, playTime);
}
function fail(){
    Swal.fire({
        icon: "error",
        width: 620,
        background: '#e1d8f6',
        title: "Game Over",
        text: "게임 클리어에 실패하였습니다.",
        footer: "OK 버튼을 누르면 게임 시작 화면으로 돌아갑니다"
    }).then(()=>{
        window.location.href="main.html";
    })
}
function success(){
    Swal.fire({
        title: "Game Clear!",
        html:
          '<h2>내 프로그램의 주제는?</h2>'
          +'<input type="radio" id="game" name="theme" 게임" checked>게임</input><br>'
          +'<input type="radio" id="web" name="theme">웹사이트</input><br>'
          +'<input type="radio" id="app" name="theme">어플리케이션</input>',
      confirmButtonColor: '#926fe2',
        confirmButtonText: "선택하기"
    }).then((result)=>{
        window.location.href="map.html";
    })
}
document.addEventListener("keydown", function(event) {
    if(event.keyCode == 39){
        char_now = char_right;
        player.left = false;
        player.right = true;
    }else if(event.keyCode == 37){
        char_now = char_left;
        player.right = false;
        player.left = true;
    }
})
document.addEventListener("keyup", function(event) {
    if(event.keyCode == 39){
        player.right = false;
        char_now = char_0;
    }else if(event.keyCode == 37){
        player.left = false;
        char_now = char_0;
    }
})
window.onload = function(){
    Swal.fire({
            imageUrl: "img/time.png",
            imageWidth: 400,
            imageHeight: 200,
            width: 620,
            background: '#e1d8f6',
            title: '"기획서가 젖지 않도록 조심하자!"',
            html:
                '<h2>게임방법</h2>'
                +'🗸키보드의 <b>방향키</b>를 누르면 캐릭터가 <b>이동</b>합니다.'
                +'<br>🗸내리는 <b>비</b>💧를 피해서 무사히 학교까지 도착하세요.'
                +'<br>🗸오른쪽 상단에 있는 <b>하트</b>🧡가 모두 사라지면 게임 클리어에 실패하게 됩니다.',
            confirmButtonColor: '#926fe2',
            confirmButtonText: "게임시작"
    }).then(()=>{
        start(); //게임 실행
    })
}