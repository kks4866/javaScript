var n = 2
var value = prompt("숫자를 입력하세요", "1");
if(value !== null){
    while(true){
        document.write(n + "<br>");
        n += 1;
        if( n > value ){ //반복 조건문
            break;
        }
    }
  }
else{
document.write("입력시 취소되었습니다")
}