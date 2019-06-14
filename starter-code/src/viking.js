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
		super.receiveDamage(damage);
		if (this.health <= 0) {
			return `${this.name} has died in act of combat`;
		}
		return `${this.name} has received ${damage} points of damage`;
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
	receiveDamage(damage) {
		super.receiveDamage(damage);
		if (this.health <= 0) {
			return `A Saxon has died in combat`;
		}
		return `A Saxon has received ${damage} points of damage`;
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
	removeDeadVikings() {
		let startingVikings = this.vikingArmy.length;
		this.vikingArmy = this.vikingArmy.filter((viking) => {
			return viking.health > 0;
		});
		if (startingVikings > this.vikingArmy.length) {
			return true;
		}
		return false;
	}
	removeDeadSaxon() {
		let startingSaxons = this.saxonArmy.length;
		this.saxonArmy = this.saxonArmy.filter((saxon) => {
			return saxon.health > 0;
		});
		if (startingSaxons > this.saxonArmy.length) {
			return true;
		}
		return false;
	}
	vikingAttack() {
		let randomViking = this.vikingArmy[
			Math.floor(Math.random() * this.vikingArmy.length)
		];
		let randomSaxon = this.saxonArmy[
			Math.floor(Math.random() * this.saxonArmy.length)
		];
		randomSaxon.receiveDamage(randomViking.attack());
		if (this.removeDeadSaxon()) {
			return `A Saxon has died in combat`;
		}
		return `${
			randomSaxon.name
		} has received ${randomViking.attack()} points of damage`;
	}
	saxonAttack() {
		let randomViking = this.vikingArmy[
			Math.floor(Math.random() * this.vikingArmy.length)
		];
		let randomSaxon = this.saxonArmy[
			Math.floor(Math.random() * this.saxonArmy.length)
		];
		randomViking.receiveDamage(randomSaxon.attack());
		if (this.removeDeadVikings()) {
			return `A Viking has died in combat`;
		}
		return `${
			randomViking.name
		} has received ${randomSaxon.attack()} points of damage`;
	}
	showStatus() {
		if (this.saxonArmy.length === 0) {
			return `Vikings have won the war of the century!`;
		} else if (this.vikingArmy.length === 0) {
			return `Saxons have fought for their lives and survive another day...`;
		} else {
			return `Vikings and Saxons are still in the thick of battle.`;
		}
	}
}
