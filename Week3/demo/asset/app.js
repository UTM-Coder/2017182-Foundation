var input, output;

text_display = 
'Please enter a number' + '\n' +
'I can determine if it is a odd number' + '\n' +
'or a even number' + '\n';
input = prompt(text_display);

if (input % 2) {
	output = 'odd';
} else {
	output = 'even';
}

output_display =
'Your number' + input + '\n' +
'is a ' + output + ' number' + '\n';
alert(output_display);