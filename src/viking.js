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

// Viking
class Viking extends Soldier {
	constructor(name, health, strength) {
		super(health, strength);
		this.name = name;
	}

	receiveDamage(damage) {
		this.health -= damage;
		if (this.health <= 0) {
			console.log(`${this.name} has died in act of combat`);
			return `${this.name} has died in act of combat`;
		} else if (this.health > 0) {
			console.log(`${this.name} has received ${damage} points of damage`);
			return `${this.name} has received ${damage} points of damage`;
		}
	}

	battleCry() {
		console.log('TO VALHALLA!');
		return 'Odin Owns You All!';
	}
}

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

	randomViking() {
		return this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
	}
	randomSaxon() {
		return this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
	}

	vikingAttack() {
		let randomSaxon = this.randomSaxon();
		let randomViking = this.randomViking();

		let attack = randomSaxon.receiveDamage(randomViking.strength);

		if (randomSaxon.health <= 0) {
			this.saxonArmy.splice(randomSaxon, 1);
		} else console.log(`Remaining Health: ${randomSaxon.health}`);

		return attack;
	}
	saxonAttack() {
		let randomSaxon = this.randomSaxon();
		let randomViking = this.randomViking();

		let attack = randomViking.receiveDamage(randomSaxon.strength);

		if (randomViking.health <= 0) {
			this.vikingArmy.splice(randomViking, 1);
		} else if (randomViking.health <= 20) {
			randomViking.battleCry();
			console.log(`Remaining Health: ${randomViking.health}`);
		} else console.log(`Remaining Health: ${randomViking.health}`);

		return attack;
	}

	armiesAttack(typeOfAttack) {
		let randomSaxon = this.randomSaxon();
		let randomViking = this.randomViking();

		if (typeOfAttack === 'Viking') {
			randomSaxon.receiveDamage(randomViking.strength);
			if (randomSaxon.health <= 0) {
				this.saxonArmy.splice(randomSaxon, 1);
			}
		} else if (typeOfAttack === 'Saxon') {
			randomViking.receiveDamage(randomSaxon.strength);
			if (randomViking.health <= 0) {
				this.vikingArmy.splice(randomViking, 1);
			}
		}
	}

	showStatus() {
		if (this.saxonArmy.length === 0) {
			return 'Vikings have won the war of the century!';
		} else if (this.vikingArmy.length === 0) {
			return 'Saxons have fought for their lives and survived another day...';
		} else {
			return 'Vikings and Saxons are still in the thick of battle.';
		}
	}
}

const bjorn = new Viking('Bjorn', 100, 25);
const skadi = new Viking('Skadi', 100, 35);
const brumhilda = new Viking('Brumhilda', 100, 20);

const henry = new Saxon(100, 15);
const edward = new Saxon(100, 35);
const horace = new Saxon(100, 20);

const bloodyWar = new War();

bloodyWar.addSaxon(henry);
bloodyWar.addSaxon(edward);
bloodyWar.addSaxon(horace);

bloodyWar.addViking(bjorn);
bloodyWar.addViking(skadi);
bloodyWar.addViking(brumhilda);
