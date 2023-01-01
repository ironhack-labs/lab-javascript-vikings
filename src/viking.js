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
		this.health = this.health - damage;
	}
}

// Viking
class Viking extends Soldier {
	constructor(name, health, strength) {
		super(health, strength);

		this.name = name;
		this.health = health;
		this.strength = strength;
	}
	receiveDamage(damage) {
		this.health = this.health - damage;

		if (this.health > 0) return `${this.name} has received ${damage} points of damage`;
		else if (this.health < 1) return `${this.name} has died in act of combat`;
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
	receiveDamage(damage) {
		this.health = this.health - damage;

		if (this.health > 0) return `A Saxon has received ${damage} points of damage`;
		else if (this.health < 1) return `A Saxon has died in combat`;
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
	vikingAttack() {
		let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
		let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
		let afterTheAttack = randomSaxon.receiveDamage(randomViking.strength);
		if (randomSaxon.health <= 0) this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1);
		return afterTheAttack;
	}
	saxonAttack() {
		let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
		let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
		let afterTheAttack = randomViking.receiveDamage(randomSaxon.strength);
		if (randomViking.health <= 0) this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1);
		return afterTheAttack;
	}
	/*  Bonus code for generic attack function
	letsAttack(defender) {
		if (typeof defender != 'string') return null;
		let afterTheAttack;

		let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
		let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

		if (defender.toLowerCase() === 'viking') {
			afterTheAttack = randomViking.receiveDamage(randomSaxon.strength);
			if (randomViking.health < 1) this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1);
		} else if (defender.toLowerCase() === 'saxon') {
			afterTheAttack = randomSaxon.receiveDamage(randomViking.strength);
			if (randomSaxon.health < 1) this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1);
		}
		return afterTheAttack;
	}
	*/

	showStatus() {
		if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1)
			return `Vikings and Saxons are still in the thick of battle.`;
		else if (!this.saxonArmy.length) return `Vikings have won the war of the century!`;
		else if (!this.vikingArmy.length) return `Saxons have fought for their lives and survived another day...`;
	}
}
