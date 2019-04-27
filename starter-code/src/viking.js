class Soldier {
	constructor(health, strength) {
		this.health = health;
		this.strength = strength;
		console.log('=======Constructor =======');
		console.log(this.health, this.strength);
	}
	attack() {
		console.log('=======Attack =======');
		console.log(this.strength);
		return this.strength;
	}

	receiveDamage(damage) {
		this.health = this.health - damage;
		console.log('=======receiveDamage =======');
		console.log(this.health);
	}
}
// Viking
class Viking extends Soldier {
	constructor(name, health, strength) {
		super(health, strength);
		this.name = name;
		console.log('=======Viking created =======');
		console.log(this.health, this.strength, this.name);
	}

	receiveDamage(damage) {
		this.health = this.health - damage;
		if (this.health > 0) {
			console.log('=======Viking receiveDamage =======');
			console.log(`${this.name} has received ${damage} points of damage`);
			return `${this.name} has received ${damage} points of damage`;
		} else {
			console.log('=======Viking receiveDamage and died=======');
			console.log(`${this.name} has died in act of combat`);
			return `${this.name} has died in act of combat`;
		}
	}

	battleCry() {
		console.log(`Odin Owns You All!`);
		return `Odin Owns You All!`;
	}
}

// Saxon
class Saxon extends Soldier {
	constructor(health, strength) {
		super(health, strength);
		console.log('=======Saxon created =======');
		console.log(this.health, this.strength);
	}
	receiveDamage(damage) {
		this.health = this.health - damage;
		if (this.health > 0) {
			console.log('=======Saxon receiveDamage =======');
			console.log(`A Saxon has received ${damage} points of damage`);
			return `A Saxon has received ${damage} points of damage`;
		} else {
			console.log('=======Saxon receiveDamage and died=======');
			console.log(`A Saxon has died in act of combat`);
			return `A Saxon has died in combat`;
		}
	}
}

function randomSelector(array) {
	let randomNumber = Math.random();
	randomNumber = randomNumber * array.length;
	randomNumber = Math.floor(randomNumber);
	return array[randomNumber];
}
// War
class War {
	constructor() {
		this.vikingArmy = [];
		this.saxonArmy = [];
	}
	addViking(viking) {
		this.vikingArmy.push(viking);
		/*  console.log(`======Viking added======`)
    console.log(this.vikingArmy) */
	}
	addSaxon(saxon) {
		this.saxonArmy.push(saxon);
		/*  console.log(`======Saxon Army======`)
    console.log(this.saxonArmy) */
	}

	vikingAttack() {
		console.log(this.saxonArmy);
		console.log(this.vikingArmy);
		const chosenViking = randomSelector(this.vikingArmy);
		const chosenSaxon = randomSelector(this.saxonArmy);

		const battle = chosenSaxon.receiveDamage(chosenViking.strength);

		if (chosenSaxon.health <= 0) {
			const index = this.saxonArmy.indexOf(chosenSaxon);
			this.saxonArmy.splice(index, 1);
		}
		console.log(this.saxonArmy);
		//should return result of calling receiveDamage() of a Saxon with the strength of a Viking
		return battle;
	}

	saxonAttack() {
		console.log(this.saxonArmy);
		console.log(this.vikingArmy);
		const chosenViking = randomSelector(this.vikingArmy);
		const chosenSaxon = randomSelector(this.saxonArmy);

		const battle = chosenViking.receiveDamage(chosenSaxon.strength);

		if (chosenViking.health <= 0) {
			const index = this.vikingArmy.indexOf(chosenViking);
			this.vikingArmy.splice(index, 1);
		}
		console.log(this.vikingArmy);
		//should return result of calling receiveDamage() of a Saxon with the strength of a Viking
		return battle;
	}

	showStatus() {
		if (this.saxonArmy.length === 0) {
			return `Vikings have won the war of the century!`;
		} else if (this.vikingArmy.length === 0) {
			return `Saxons have fought for their lives and survive another day...`;
		} else {
			return `Vikings and Saxons are still in the thick of battle.`;
		}
	}
}
