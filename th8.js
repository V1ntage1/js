var a = prompt("Введите число");
switch (a){// Оператор switch отвечает за выполнение всех последовательных кейсов
	case"1"://открывается case 
	document.write("На ветке сидит 1 ворона");
	break;// заканчивает цикл
	case"2":
	case"3":
	case"4":
	document.write("На ветке сидит"," ", a," ", "вороны");
	break;// заканчивает цикл
	case"5":
	case"6":
	case"7":
	case"8":
	case"9":
	case"10":
	document.write("На ветке сидит"," ", a," ", "ворон");
	break;// заканчивает цикл
	default:
	document.write("error");// если введеться > 11, то выведеться ошибка 
}	
