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
    window.location.href="chap_B.html";
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

let text = ["...", "...", "그럼 나는 여름이가 올 때까지 코드 마무리 해둬야겠다!"];
let index = 0;

function story(){
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
            "<h1>"+ "겨울" +"</h1>"
            + "<h3>"+text[index]+"</h3>"
      }).then(()=>{
        if(index == 2) return 0;
        index++;
        story();
    })
}
window.onload = function(){
    story(index);
}