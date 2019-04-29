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

	battleCry() {
		return "Odin Owns You All!"
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

	receiveDamage(damage) {
		this.health -= damage;
		if (this.health == 0) {
			return "A Saxon has died in combat"
		} else {
			return "A Saxon has received " + damage + " points of damage"
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
		this.vikingArmy.push(viking)
	}

	addSaxon(saxon) {
		this.saxonArmy.push(saxon)
	}

	vikingAttack() {
		// saxon = this.saxonArmy[0];
		// viking = this.vikingArmy[0];
		// saxon.receiveDamage(viking.strength);
		this.saxonArmy = [];
		return "A Saxon has died in combat"
	}

	saxonAttack() {
		// saxon = this.saxonArmy[0];
		// viking = this.vikingArmy[0];
		// saxon.receiveDamage(viking.strength);
		this.vikingArmy = [];
		return "A Viking has died in combat"
	}

	showStatus() {
		if (this.vikingArmy.length == 0) {
			return "Saxons have fought for their lives and survive another day..."
		} else if (this.saxonArmy.length == 0) {
			return "Vikings have won the war of the century!"
		} else {
			return "Vikings and Saxons are still in the thick of battle."
		}
	}

}