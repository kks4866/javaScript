var count = 0;
for(var i=1; i<=100; i++){
if(i%4 === 0){
    document.write(i +', '); //3
    count += 1 ; //1,
}
}
document.write("<br>")
document.write("<p>3의 배수의 개수"+count+"</p>");