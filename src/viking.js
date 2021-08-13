// Soldier
class Soldier {
	//cosntructor
	constructor(health, strength) {
		this.health = health;
		this.strength = strength;
	}

	//metodos
	attack() {
		return this.strength;
	}

	receiveDamage(damage) {
		this.damage = damage;
		this.health -= this.damage;

		return;
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

	battleCry() {
		return `Odin Owns You All!`;
	}

	receiveDamage(damage) {
		this.health -= damage;

		// serviria aquí != 0, no trataría negativos?
		return this.health <= 0
			? `${this.name} has died in act of combat`
			: `${this.name} has received ${damage} points of damage`;
	}
}

// Saxon
class Saxon extends Soldier {
	attack() {
		return this.strength;
	}

	receiveDamage(damage) {
		this.health -= damage;

		// serviria aquí != 0, no trataría negativos?
		return this.health <= 0 ? 'A Saxon has died in combat' : `A Saxon has received ${damage} points of damage`;
	}
}

// War
class War {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
	module.exports = { Soldier, Viking, Saxon, War };
}
