/** @format */

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
		if (this.health > 0)
			return `${this.name} has received ${damage} points of damage`;
		else return `${this.name} has died in act of combat`;
	}
	battleCry() {
		return `Odin Owns You All!`;
	}
}

// Saxon
class Saxon extends Soldier {
	attack() {
		return this.strength;
	}
	receiveDamage(damage) {
		this.health -= damage;
		if (this.health > 0)
			return `A Saxon has received ${damage} points of damage`;
		else return `A Saxon has died in combat`;
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

	// randomIndex {
	// 	array[Math.floor(Math.random() * array.length)];
	// }
	// this didnt go as expected but i would like to ask wky

	vikingAttack() {
		/*
      Viking = {
        name: Greg,
        health: 3,
        strength: 4 }  
      */
		// battle

		let result = this.saxonArmy[
			Math.floor(Math.random() * this.saxonArmy.length)
		].receiveDamage(
			this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
				.strength
		);

		/*   saxonArmy = [
      {health : 3
        strength :4
       }
       */

		this.saxonArmy = this.saxonArmy.filter((saxon) => saxon.health > 0);

		return result;
	}
	saxonAttack() {
		let result = this.vikingArmy[
			Math.floor(Math.random() * this.vikingArmy.length)
		].receiveDamage(
			this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].strength
		);

		this.vikingArmy = this.vikingArmy.filter((viking) => viking.health > 0);
		// console.log(this.vikingArmy);

		return result;
	}
	showStatus() {
		if (this.saxonArmy.length === 0) {
			return `Vikings have won the war of the century!`;
		} else if (this.vikingArmy.length === 0) {
			return `Saxons have fought for their lives and survived another day...`;
		} else {
			return `Vikings and Saxons are still in the thick of battle.`;
		}
	}
}
