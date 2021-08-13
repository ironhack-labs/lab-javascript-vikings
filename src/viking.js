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
		//Create random troops
		let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
		let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

		//Viking attacking saxon
		let vikingAttack = randomSaxon.receiveDamage(randomViking.attack()); // A Saxon has died in combat

		//console.log(vikingAttack);

		if (randomSaxon.health <= 0) {
			this.saxonArmy.splice(randomSaxon, 1);
		}

		return vikingAttack;

		//No habría manera de haer lo de arriba con un IF ternario? - Devolveria falso o valor incorrecto...
		// en teoria
		// Esto da bien si no muriesen siempre los sajones? (otra raza con -50 de daño)
		// O no porqué siempre se tendrían que dar las dos condiciones, es decir que muera y salga el mensaje y lo eliminemos
		/*
		return randomSaxon.health <= 0 ? this.saxonArmy.splice(randomSaxon, 1) : vikingAttack;
		//return vikingAttack;
    */
	}

	saxonAttack() {
		let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
		let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

		let saxonAttack = randomViking.receiveDamage(randomSaxon.attack());

		if (randomViking.health <= 0) {
			this.vikingArmy.splice(randomViking, 1);
		}

		return saxonAttack;
	}

	showStatus() {
		//mirando ternarios antes ví que podías hacer esto, en conditional chains
		//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
		return this.saxonArmy.length === 0
			? 'Vikings have won the war of the century!'
			: this.vikingArmy.length === 0
				? 'Saxons have fought for their lives and survived another day...'
				: 'Vikings and Saxons are still in the thick of battle.';
	}
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
	module.exports = { Soldier, Viking, Saxon, War };
}
