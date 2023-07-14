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
	}
	attack() {
		super.attack();
		return this.strength; // Revisar, consultar
	}
	receiveDamage(damage) {
		this.health = this.health - damage;
		if (this.health > 0) {
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
	attack() {
		return this.strength;
	}
	receiveDamage(damage) {
		this.health = this.health - damage;
		if (this.health > 0) {
			return `A Saxon has received ${damage} points of damage`;
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
		let saxonDefender =
			this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
		let result = saxonDefender.receiveDamage(
			this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
				.strength
		);
		if (saxonDefender.health <= 0) {
			this.saxonArmy.splice(this.saxonArmy.indexOf(saxonDefender), 1);
		}
		return result;
	}

	saxonAttack() {
		let vikingDefender =
			this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
		let result = vikingDefender.receiveDamage(
			this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
				.strength
		);
		if (vikingDefender.health <= 0) {
			this.vikingArmy.splice(this.vikingArmy.indexOf(vikingDefender), 1);
		}
		return result;
	}

	genericAttack(attacker, defender) {
		let result = defender.receiveDamage(attacker.strength);
		if (defender.health <= 0) {
			if (this.vikingArmy.includes(defender)) {
				this.vikingArmy.splice(this.vikingArmy.indexOf(defender), 1);
			} else {
				this.saxonArmy.splice(this.saxonArmy.indexOf(defender), 1);
			}
		}
		return result;
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
