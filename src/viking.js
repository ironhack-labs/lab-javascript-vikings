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
		this.health = this.health - theDamage;

		if (this.health > 0)
			return `${this.name} has received ${theDamage} points of damage`;
		else return `${this.name} has died in act of combat`;
	}

	battleCry() {
		return "Odin Owns You All!";
	}
}

// Saxon
class Saxon extends Soldier {
	receiveDamage(theDamage) {
		this.health = this.health - theDamage;

		if (this.health > 0)
			return `A Saxon has received ${theDamage} points of damage`;
		else return `A Saxon has died in combat`;
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
		const indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
		const indexViking = Math.floor(Math.random() * this.vikingArmy.length);

		const vikingStrength = this.vikingArmy[indexViking].strength;

		const resultDamage =
			this.saxonArmy[indexSaxon].receiveDamage(vikingStrength);

		if (this.saxonArmy[indexSaxon].health <= 0)
			this.saxonArmy.splice(indexSaxon, 1);

		return resultDamage;
	}

	saxonAttack() {
		const indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
		const indexViking = Math.floor(Math.random() * this.vikingArmy.length);

		const saxonStrength = this.saxonArmy[indexSaxon].strength;

		const resultDamage =
			this.vikingArmy[indexViking].receiveDamage(saxonStrength);

		if (this.vikingArmy[indexViking].health <= 0)
			this.vikingArmy.splice(indexViking, 1);

		return resultDamage;
	}

	showStatus() {
		if (this.saxonArmy.length === 0)
			return "Vikings have won the war of the century!";
		else if (this.vikingArmy.length === 0)
			return "Saxons have fought for their lives and survived another day...";
		else return "Vikings and Saxons are still in the thick of battle.";
	}
}
