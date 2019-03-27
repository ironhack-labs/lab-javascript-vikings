// Soldier
class Soldier {
	constructor(healthArg, strengthArg) {
		this.health = healthArg;
		this.strength = strengthArg;
	}
	attack() {
		return this.strength;
	}
	receiveDamage(damageArg) {
		this.health -= damageArg;
	}
}

// Viking
class Viking extends Soldier {
	constructor(name, health, strength) {
		super(health, strength);
		this.name = name;
	}
	attack() {
		return this.strength;
	}
	receiveDamage(damageArg) {
		this.health -= damageArg;
		if (this.health > 0) {
			return `${this.name} has received ${damageArg} points of damage`;
		} else {
			return `${this.name} has died in act of combat`;
		}
	}
	battleCry() {
		return `Odin Owns You All!`;
	}
}

// Saxon
class Saxon extends Soldier {
	constructor(health, strength) {
		super(health, strength);
	}
	attack() {
		return this.strength;
	}
	receiveDamage(damageArg) {
		this.health -= damageArg;
		if (this.health > 0) {
			return `A Saxon has received ${damageArg} points of damage`;
		} else {
			return `A Saxon has died in combat`;
		}
	}
}

// War
class War {
	constructor() {
		this.vikingArmy = [];
		this.saxonArmy = [];
	}

	addViking(viking) {
		this.vikingArmy.push(viking);
	}

	addSaxon(saxon) {
		this.saxonArmy.push(saxon);
	}

	vikingAttack() {
		var randSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
		var indexSaxon = this.saxonArmy.indexOf(randSaxon);
		console.log(randSaxon);

		var randViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
		console.log(randViking);

		let message = randSaxon.receiveDamage(randViking.strength);

		if (randSaxon.health < 1) {
			this.saxonArmy.splice(indexSaxon, 1);
		}
		return message;
	}

	saxonAttack() {
		var randViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
		var indexViking = this.vikingArmy.indexOf(randViking);
		console.log(randViking);

		var randSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

		console.log(randSaxon);

		let message = randViking.receiveDamage(randSaxon.strength);

		if (randViking.health < 1) {
			this.vikingArmy.splice(indexViking, 1);
		}
		return message;
	}

	showStatus() {
		if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
			return `Vikings and Saxons are still in the thick of battle.`;
		} else if (!this.saxonArmy.length) {
			return `Vikings have won the war of the century!`;
		} else {
			return `Saxons have fought for their lives and survive another day...`;
		}
	}
}