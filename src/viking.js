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
		this.health -= damage;
		if (this.health <= 0) {
			return `${this.name} has died in act of combat`;
		} else if (this.health > 0) {
			return `${this.name} has received ${damage} points of damage`;
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
		this.name = 'Saxon';
	}
	receiveDamage(damage) {
		this.health -= damage;
		if (this.health <= 0) {
			return `A ${this.name} has died in combat`;
		} else if (this.health > 0) {
			return `A ${this.name} has received ${damage} points of damage`;
		}
	}
}

// War
class War {}
