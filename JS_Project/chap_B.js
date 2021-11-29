"use strict";

success();
function success(){
    Swal.fire({
        title: "Game Clear!",
        width: 620,
        background: "#e1d8f6",
        html:
          '<h2>당신이 지킨 기획서의<br>주제는 무엇인가요?</h2>'
          +'<input type="radio" id="game" name="theme" 게임" checked>게임</input><br>'
          +'<input type="radio" id="web" name="theme">웹사이트</input><br>'
          +'<input type="radio" id="app" name="theme">어플리케이션</input>',
        confirmButtonColor: "#926fe2",
        confirmButtonText: "선택하기"
    }).then(()=>{
        let language = document.querySelector("input[name='theme']:checked").id;
        localStorage.setItem("language", language);
        localStorage.setItem("clear_B", true);
        window.location.href="map3.html";
    })
}