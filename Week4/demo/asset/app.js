for (var i = 0; i < 5; i++) {

	for (var j = 0; j < i; j++) {
		document.write('*');
	}
	document.write('<br>');
}

input = '';
sum = 0;
while (input != 'x') {
	input = prompt('Please enter a number to add to me. (x to exit)\nNow the sum is ' + sum);
	inputNumber = parseInt(input);
	if(input !='x') if(!isNaN(inputNumber)) sum += inputNumber;
}