alert("до");
try
{
	promt("Введите число");
}
catch(e)
{
	alert("обратнботка ошибки:"+e.message);
}
finally
{
	alert("завершающее деёствие")
}
alert("после");