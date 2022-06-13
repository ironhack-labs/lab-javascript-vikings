class Movil {
	constructor(name, velocity) {
		this.velocity = velocity;
		this.name = name;
		this.positionX = 0;
	}

	forward() {
		this.positionX += this.velocity;
	}

	back() {
		this.positionX -= this.velocity;
	}
}

class Moto extends Movil {
	constructor(name, velocity) {
		super(name, velocity);

		this.name = name;
		this.velocity = velocity;
	}
}

function sayMyName(name) {
	return `hola, soy ${name}`;
}

class Car extends Movil {
	constructor(name, velocity) {
		super(name, velocity);

		this.name = name;
	}


	speak(name) {
		return 'hola, soy ' + this.name + ' ' + name	
	}
}

// carro(hablar){
// this.hablar=hablar;
// }

// const m = new Moto('ducatti', 10);
const c = new Car('vochito', 5);
// const s = new speak 
// console.log(m);
console.log(c);

// m.forward();
console.log(c.speak('horacio'));
// s.forward();

// console.log(m.name, m.positionX);
// console.log(c.name, c.positionX);



