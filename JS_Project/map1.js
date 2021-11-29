"use strict";
document.querySelector("#chap_A").addEventListener("click", ()=>{
    window.location.href="chap_A.html";
});
document.querySelector("#chap_B").addEventListener("click", ()=>{
    Swal.fire({
        icon: "error",
        width: 620,
        background: "#e1d8f6",
        title: "챕터 A를 먼저 클리어 해주세요.",
        confirmButtonColor: "#926fe2",
        confirmButtonText: "OK"            
    })
});
document.querySelector("#chap_C").addEventListener("click", ()=>{
    Swal.fire({
        icon: "error",
        width: 620,
        background: "#e1d8f6",
        title: "챕터 B를 먼저 클리어 해주세요.",
        confirmButtonColor: "#926fe2",
        confirmButtonText: "OK"
    })
});

let char1 = "여름", char2 = "겨울";
let name = [char2, char1, char2, char1];
let text = ["여보세요? "+char1+"아 지금 어디쯤이야?", "나는 당연히 집이지", "뭐? 지금 벌써 8시야!!!", "뭐라고???!"];
let index = 0;

function story(){
    if(index%2==0){
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
    }else{
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
    }
}
window.onload = function(){
    story(index);
}