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
		let remainingHealth = (this.health -= damage);
		if (remainingHealth > 0) {
			return `${this.name} has received ${damage} points of damage`;
		} else {
			return `${this.name} has died in act of combat`;
		}
	}
	battleCry() {
		return "Odin Owns You All!";
	}
}

// Saxon
class Saxon extends Soldier {
	receiveDamage(damage) {
		let remainingHealth = (this.health -= damage);
		if (remainingHealth > 0) {
			return `A Saxon has received ${damage} points of damage`;
		} else {
			return `A Saxon has died in combat`;
		}
	}
}

// War

class War {
	vikingArmy = [];
	saxonArmy = [];

	addViking(viking) {
		this.vikingArmy.push(viking);
	}
	addSaxon(saxon) {
		this.saxonArmy.push(saxon);
	}
	vikingAttack() {
		let randomNumberViking = Math.floor(Math.random() * this.vikingArmy.length);
		let randomNumberSaxon = Math.floor(Math.random() * this.saxonArmy.length);
		let randomViking = this.vikingArmy[randomNumberViking];
		let randomSaxon = this.saxonArmy[randomNumberSaxon];
		let isDead = randomSaxon.receiveDamage(randomViking.strength);

		this.saxonArmy.splice(randomNumberSaxon, 1);

		return isDead;
	}
	saxonAttack() {
		let randomNumberViking = Math.floor(Math.random() * this.vikingArmy.length);
		let randomNumberSaxon = Math.floor(Math.random() * this.saxonArmy.length);
		let randomViking = this.vikingArmy[randomNumberViking];
		let randomSaxon = this.saxonArmy[randomNumberSaxon];
		let isDead = randomViking.receiveDamage(randomSaxon.strength);

		if (isDead === `${randomViking.name} has died in act of combat`) {
			this.vikingArmy.splice(randomNumberViking, 1);
		}

		return isDead;
	}
	showStatus() {
		if (this.saxonArmy.length === 0) {
			return "Vikings have won the war of the century!";
		} else if (this.vikingArmy.length === 0) {
			return "Saxons have fought for their lives and survived another day...";
		} else {
			return "Vikings and Saxons are still in the thick of battle.";
		}
	}
}
