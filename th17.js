var i=1;
for (var prop in window)
{
	if (i%2 != 0){
	document.write(prop + '<br>');
                }
    else
    {
    document.getElementById(prop + "<br><td color='blue'></td>>");
    }  
    i++;          
}