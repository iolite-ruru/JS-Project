"use strict";
document.querySelector("#chap_A").addEventListener("click", ()=>{
    Swal.fire({
        icon: "success",
        width: 620,
        background: "#e1d8f6",
        title: "이미 클리어 했습니다!",
        confirmButtonColor: "#926fe2",
        confirmButtonText: "OK"            
    })
});
document.querySelector("#chap_B").addEventListener("click", ()=>{
    Swal.fire({
        icon: "success",
        width: 620,
        background: "#e1d8f6",
        title: "이미 클리어 했습니다!",
        confirmButtonColor: "#926fe2",
        confirmButtonText: "OK"            
    })
});
document.querySelector("#chap_C").addEventListener("click", ()=>{
    window.location.href="chap_C.html";
});

let char1 = "여름", char2 = "겨울";
let name = [char1, char2, char1, char2, ];
let text = ["겨울아!", "여름아!!", "제출 마감까지 5분도 안 남았어!", "빨리 교무실로 가보자!"];
let index = 0;

function story(){
    if(index%2==0){
        Swal.fire({
            width: 1000,
            padding: "50dp",
            position: "bottom",
            backdrop: 
                `rgba(159,148,260,0.5)
                 url("img/char1_0.png")
                 850px
                 no-repeat`,
            confirmButtonColor: "#926fe2",
            confirmButtonText: "Next >>",
            html:
                "<h1>"+ name[index] +"</h1>"
                + "<h3>"+text[index]+"</h3>"
          }).then(()=>{
            if(index == 3) return 0;
            index++;
            story();
        })
    }else{
        Swal.fire({
            width: 1000,
            padding: "50dp",
            position: "bottom",
            backdrop: 
                `rgba(159,148,260,0.5)
                 url("img/char2_0.png")
                 600px
                 no-repeat`,
            confirmButtonColor: "#926fe2",
            confirmButtonText: "Next >>",
            html:
                "<h1>"+ name[index] +"</h1>"
                + "<h3>"+text[index]+"</h3>"
          }).then(()=>{
            if(index == 3) return 0;
            index++;
            story();
        })
    }
}
window.onload = function(){
    story(index);
}