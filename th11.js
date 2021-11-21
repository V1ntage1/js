var listType=prompt("Введите '1' -текстовое поле, '2'-кнопка ,'3'-радио");
var a=prompt("Введите количество тегов");/*
var выводить окошко для того чтобы вводить числа
*/
for(var i=0;i<a;i++)
if(listType=='1')
document.write('<input type="text">');
else for(var i=0;i<a;i++)
if(listType=='2')
document.write('<input type="button">');
else for(var i=0;i<a;i++)
if (listType=='3')
document.write('<input type="radio">');// выводит на саму страницу сайта