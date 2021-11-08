var chislo = prompt("Введите число 1го игрока");
var a=1;k=1;
while(a<1000){
var chislo2 = prompt("Введите правильное число");
      if (chislo == chislo2){
      	alert("Вы угадали!");
      	break;
      }
      if (chislo>chislo2){
      	alert("мало");
      	continue;
      }
      if (chislo2>chislo){
      	alert("много");
      	continue;
      }
      k++;
}	
document.write("Количество попыток="," ",k);