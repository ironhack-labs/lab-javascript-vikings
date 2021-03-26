// Soldier
class Soldier {
	constructor(health, strength) {
		this.health = health;
		this.strength = strength;
	}
	attack = () => this.strength;
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
		return this.health > 0
			? `${this.name} has received ${damage} points of damage`
			: `${this.name} has died in act of combat`;
	}
	battleCry = () => `Odin Owns You All!`;
}

// Saxon
class Saxon extends Soldier {
	receiveDamage(damage) {
		this.health -= damage;
		return this.health > 0
			? `A Saxon has received ${damage} points of damage`
			: `A Saxon has died in combat`;
	}
}

// War
class War {
	constructor(){
		this.vikingArmy = [];
		this.saxonArmy = [];
	}

	addViking(viking){
		this.vikingArmy.push(viking);
	}
	addSaxon(saxon){
		this.saxonArmy.push(saxon);
	}
	vikingAttack(){
		let indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
		let randomSaxon = this.saxonArmy[indexSaxon];
		let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
		let output = randomSaxon.receiveDamage(randomViking.strength);
		if(randomSaxon.health <= 0){
			this.saxonArmy.splice(indexSaxon, 1);
		} 
		return output;
	}
	saxonAttack(){

	}
	showStatus(){

	}
}
