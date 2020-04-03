// Soldier
class Soldier {
	constructor(health, strength) {
		this.health = health;
		this.strength = strength;
	}

	attack() {
		return this.strength;
	}

	receiveDamage(theDamage) {
		this.health = this.health - theDamage;
	}
}

// Viking
class Viking extends Soldier {
	constructor(name, health, strength) {
		super(health, strength);
		this.name = name;
	}

	receiveDamage(theDamage) {
		super.receiveDamage(theDamage);
		if (this.health > 0) {
			return `${this.name} has received ${theDamage} points of damage`;
		} else {
			return `${this.name} has died in act of combat`;
		}
	}

	battleCry() {
		return 'Odin Owns You All!';
	}
}

// Saxon
class Saxon extends Soldier {
	constructor(health, strength) {
		super(health, strength);
	}

	receiveDamage(theDamage) {
		super.receiveDamage(theDamage);
		if (this.health > 0) {
			return `A Saxon has received ${theDamage} points of damage`;
		} else {
			return `A Saxon has died in combat`;
		}
	}
}

// War;
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
		let vikingIndex = getRandomInt(this.vikingArmy);

		let saxonIndex = getRandomInt(this.saxonArmy);

		let randomViking = this.vikingArmy[vikingIndex];

		let randomSaxon = this.saxonArmy[saxonIndex];

		let damage = randomViking.attack();

		let message = randomSaxon.receiveDamage(damage);

		if (randomSaxon.health <= 0) {
			this.saxonArmy.splice(saxonIndex, 1);
		}
		return message;
	}

	saxonAttack() {
		let vikingIndex = getRandomInt(this.vikingArmy);

		let saxonIndex = getRandomInt(this.saxonArmy);

		let randomViking = this.vikingArmy[vikingIndex];

		let randomSaxon = this.saxonArmy[saxonIndex];

		let damage = randomSaxon.attack();

		let message = randomViking.receiveDamage(damage);

		if (randomViking.health <= 0) {
			this.vikingArmy.splice(vikingIndex, 1);
		}

		return message;
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

function getRandomInt(arr) {
	return Math.floor(Math.random() * arr.length);
}
