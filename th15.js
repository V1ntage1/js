var counter = prompt("Введите число");
var factorial = 1;
var k = 2;
document.write("Факториал числа:" + counter + "! = ");
do
{
if (counter == 1){
console.log(factorial);
break;
}
else{
factorial=factorial*k;
console.log(factorial);
}
k++;// 2+ означает бесконечное дейтсвие
counter--;
}while(counter > 1);
document.write(factorial);