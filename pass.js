// Made By YellowGreg
var generator = require('generate-password');
var passwords = generator.generateMultiple(4, { // how many password you want to generate
	
	length: 8, // How Long You want your password to be
	uppercase: true, // if false no uppercase letters
	numbers: true, // if false no numbers
	symbols: true, // if false then no symbols
});
console.log(passwords);
