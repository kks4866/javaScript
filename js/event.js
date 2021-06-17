//상세 설명 보기 클릭 -텍스트 보이기
function showText(){
   // var text = document.getElementById("desc");
   // text.style.display = "block"; //수직으로 보이기
   document.getElementById("desc").style.display = "block"

   // var button = document.getElementById("btn");
   // button.style.display = "none";
   document.getElementById("btn").style.display = "none"
}

function hideText(){
    var text = document.getElementById("desc");
   text.style.display = "none";

   var button = document.getElementById("btn");
   button.style.display = "block";
}

