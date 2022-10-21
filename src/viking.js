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
		if (remainingHealth !== 0) {
			// ¿?
			return `${this.name} has received ${damage} points of damage`;
		} else {
			return `${this.name} has died in act of combat`;
		}
	}
	battleCry() {
		return "Odin Owns You All!";
	}
}

/* let viking1 = new Viking("Juan", 100, 50);
console.log(viking1.receiveDamage(50)); */

// Saxon
class Saxon extends Soldier {
	receiveDamage(damage) {
		let remainingHealth = (this.health -= damage);
		if (remainingHealth !== 0) {
			return `A Saxon has received ${damage} points of damage`;
		} else {
			return `A Saxon has died in combat`;
		}
	}
}

// War

class War {
	/* constructor(vikingArmy, saxonArmy) {
		this.vikingArmy = vikingArmy;
		this.saxonArmy = saxonArmy;
	} */
	vikingArmy = []; //¿?
	saxonArmy = []; //¿?

	addViking(viking) {
		this.vikingArmy.push(viking);
	}
	addSaxon(saxon) {
		this.saxonArmy.push(saxon);
	}
	vikingAttack() {
		this.saxonArmy[0].health -= this.vikingArmy[0].strength;
		/* this.saxonArmy[Math.floor(Math.random) * this.saxonArmy.length].health -=
			this.vikingArmy[Math.floor(Math.random) * this.vikingArmy.length].strength; */
		if ((this.saxonArmy.length = 0)) {
			// ¿?
			this.saxonArmy.shift();
		}
		return `A Saxon has died in combat`;
		/* return this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength) */
		/* return receiveDamage(); */
		/* return Saxon.receiveDamage(Viking.strength); */
	}
	saxonAttack() {
		/* let remainingHealth = this.saxonArmy[0].health - this.vikingArmy[0].strength; */
		/* this.vikingArmy[0].health -= this.saxonArmy[0].strength; */
		/* for (let i = 0; i < this.vikingArmy.length; i++) {
			this.vikingArmy[i];
		} */
		let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
		let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

		if ((this.vikingArmy.length = 0)) {
			this.vikingArmy.splice(randomViking, 1);
		}

		return randomViking.receiveDamage(randomSaxon.strength);

		/* return this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength) */
		/* return this.saxonArmy[0].receiveDamage(this.vikingArmy[0]); */
		/* return receiveDamage(); */
		/* return `${this.vikingArmy[0].name} has received ${this.saxonArmy[0].strength} points of damage`; */
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
