for (var sum = 0, i = 1; i < 16; i++)// for (let i = 0; затем i выводит последовательность чисел
{
    if ( i == 5) continue;
    if (i == 7) continue;
    sum = sum + i;
    
}
document.write(sum);// выводит на саму страницу сайта