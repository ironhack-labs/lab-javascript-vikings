// Soldier
class Soldier {
	constructor(health, strength) {
		this.health = health;
		this.strength = strength;
	}

	//methods
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
			return `${this.name} has died in act of combat`;
		} else {
			return `${this.name} has received ${damage} points of damage`;
		}
	}

	battleCry() {
		let cry = 'Odin Owns You All!';
		return cry;
	}
}

// Saxon
class Saxon extends Soldier {
	receiveDamage(damage) {
		this.health -= damage;

		if (this.health <= 0) {
			return `A Saxon has died in combat`;
		} else {
			return `A Saxon has received ${damage} points of damage`;
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
		let randomSaxon = this.randomPick(this.saxonArmy);
		let randomViking = this.randomPick(this.vikingArmy);
		let saxonHit = randomSaxon.receiveDamage(randomViking.strength);

		if (randomSaxon.health <= 0) {
			this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1);
		}

		return saxonHit;
	}

	randomPick(arr) {
		return arr[Math.floor(Math.random() * arr.length)];
	}

	saxonAttack() {
		let randomSaxon = this.randomPick(this.saxonArmy);
		let randomViking = this.randomPick(this.vikingArmy);
		let vikingHit = randomViking.receiveDamage(randomSaxon.strength);

		if (randomViking.health <= 0) {
			this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1);
		}

		return vikingHit;
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
