// Soldier
class Soldier {
	constructor(health, strength) {
		this.health = health;
		this.strength = strength;
	}
	attack() {
		return this.strength;
	}

	receiveDamage(damage) {
		this.health -= damage;
	}
}

const gerald = new Soldier(75, 15);
console.log(gerald);

// Viking
class Viking extends Soldier {
	constructor(name, health, strength) {
		super(health, strength);
		this.name = name;
	}

	receiveDamage(damage) {
		this.health -= damage;
		if (this.health <= 0) {
			return `${this.name} has died in act of combat`;
		} else if (this.health > 0) {
			return `${this.name} has received ${damage} points of damage`;
		}
	}

	battleCry() {
		return 'Odin Owns You All!';
	}
}

const bjorn = new Viking('Bjorn', 150, 25);
console.log(bjorn);
const skadi = new Viking('Skadi', 130, 35);
console.log(bjorn);
const brumhilda = new Viking('Brumhilda', 110, 20);
console.log(bjorn);

// Saxon
class Saxon extends Soldier {
	constructor(health, strength) {
		super(health, strength);
		this.name = 'Saxon';
	}
	receiveDamage(damage) {
		this.health -= damage;
		if (this.health <= 0) {
			console.log(`A ${this.name} has died in combat`);
			return `A ${this.name} has died in combat`;
		} else if (this.health > 0) {
			console.log(`A ${this.name} has received ${damage} points of damage`);
			return `A ${this.name} has received ${damage} points of damage`;
		}
	}
}

const henry = new Saxon(100, 20);
const edward = new Saxon(100, 20);
const horace = new Saxon(100, 20);
console.log(henry);

// War
class War {
	constructor() {
		this.vikingArmy = [];
		this.saxonArmy = [];
	}
	addViking(Viking) {
		this.vikingArmy.push(Viking);
	}
	addSaxon(Saxon) {
		this.saxonArmy.push(Saxon);
	}

	vikingAttack() {
		let randomViking =
			this.vikingArmy[Math.ceil(Math.random() * this.vikingArmy.length)];
		let randomSaxon =
			this.saxonArmy[Math.ceil(Math.random() * this.saxonArmy.length)];
		randomSaxon.receiveDamage(randomViking.strength);
		if (randomSaxon.health <= 0) {
			this.saxonArmy.splice(0, 1);
		}
	}
	saxonAttack() {
		let randomViking =
			this.vikingArmy[Math.ceil(Math.random() * this.vikingArmy.length)];
		let randomSaxon =
			this.saxonArmy[Math.ceil(Math.random() * this.saxonArmy.length)];
		randomViking.receiveDamage(randomSaxon.strength);
		if (randomViking.health <= 0) {
			this.vikingArmy.splice(0, 1);
		}
	}

	armiesAttack(typeOfAttack) {
		if (typeOfAttack === 'Viking') {
			randomSaxon.receiveDamage(randomViking.strength);
			if (randomSaxon.health <= 0) {
				this.saxonArmy.splice(0, 1);
			}
		} else if (typeOfAttack === 'Saxon') {
			randomViking.receiveDamage(randomSaxon.strength);
			if (randomViking.health <= 0) {
				this.vikingArmy.splice(0, 1);
			}
		}
	}

	showStatus() {}
}

const war = new War();

war.addSaxon(henry);
war.addSaxon(edward);
war.addSaxon(horace);

war.addViking(bjorn);
war.addViking(skadi);
war.addViking(brumhilda);

console.log(war.saxonArmy, war.vikingArmy);
