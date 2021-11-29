"use strict";

let chap_A = 1, chap_B = 1, chap_C = 1;
document.querySelector("#chap_A").addEventListener("click", ()=>{
    window.location.href="chap_A.html";
});
document.querySelector("#chap_B").addEventListener("click", ()=>{
    if(chap_A){
        window.location.href="chap_B.html";
    }else{
        alert("챕터 A를 먼저 클리어 해주세요.");
    }
});
document.querySelector("#chap_C").addEventListener("click", ()=>{
    if(chap_B){
        window.location.href="chap_C.html";
    }else{
        alert("챕터 B를 먼저 클리어 해주세요.");
    }
});