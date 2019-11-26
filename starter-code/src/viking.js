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

		if (this.health > 0) {
			return `${this.name} has received ${damage} points of damage`;
		} else {
			return `${this.name} has died in act of combat`;
		}
	}

	battleCry() {
		return 'Odin Owns You All!';
	}
}

// // Saxon
class Saxon extends Soldier {
	receiveDamage(damage) {
		super.receiveDamage(damage);

		if (this.health > 0) {
			return `A Saxon has received ${damage} points of damage`;
		} else {
			return `A Saxon has died in combat`;
		}
	}
}

// // War
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

	makeAttack(attacker) {
		let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
		let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

		if (attacker === 'viking') {
			this.saxonArmy = this.saxonArmy.filter(saxon => {
				return saxon.health - randomViking.strength > 0;
			});
			return randomSaxon.receiveDamage(randomViking.strength);
		} else {
			this.vikingArmy = this.vikingArmy.filter(viking => {
				return viking.health - randomSaxon.strength > 0;
			});
			return randomViking.receiveDamage(randomSaxon.strength);
		}
	}

	vikingAttack() {
		return this.makeAttack('viking');
	}

	saxonAttack() {
		return this.makeAttack('saxon');
	}

	showStatus() {
		return this.saxonArmy.length === 0
			? 'Vikings have won the war of the century!'
			: this.vikingArmy.length === 0
				? 'Saxons have fought for their lives and survived another day...'
				: 'Vikings and Saxons are still in the thick of battle.';
	}
}
