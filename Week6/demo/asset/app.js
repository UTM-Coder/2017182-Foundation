// Object
var car = new Object;
car.color = 'red';
car.model = 'Toyota';
console.log(car);

var car = {};
car.color = 'red';
car.model = 'Toyota';
console.log(car);

var car = {
	color: 'red',
	model: 'Toyota'
}
console.log(car);

// Closure Function
var count = (function() {
	let x = 1;
	return function() {
		return x++;
	}
})();

var CarA = function(color, model) {
	this.color = color;
	this.model = model;
};

var H378 = new CarA('red', 'Toyota');
console.log(H378);

// ES6 Class
class Car {
	constructor (color, model, country) {
    this.color = color;
    this.model = model;
    this.country = country;
  }
}

var J130 = new Car('red', 'Toyota', 'Japan');
console.log(J130);

class Toyota extends Car {
	constructor (color) {
		super(color, 'Toyota', 'Japan');
	}
}

var K193 = new Toyota('blue');
console.log(K193);