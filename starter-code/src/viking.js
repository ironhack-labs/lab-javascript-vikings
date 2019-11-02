// Soldier
class Soldier {
	constructor(health, strength){
		this.health = health
		this.strength = strength
	}

	attack() {
		return this.strength
	}

	receiveDamage(damage) {
		this.health -= damage
	}
}

// Viking
class Viking extends Soldier{
	constructor(name, health, strength){
		super(health, strength)
		this.name = name
	}

	receiveDamage(damage) {
		super.receiveDamage(damage)
		if(this.health > 0)
			return this.name + " has received "+damage+" points of damage"
		return this.name + " has died in act of combat"
	}

	battleCry(){
		return "Odin Owns You All!"
	}
}

// Saxon
class Saxon extends Soldier{
	receiveDamage(damage) {
		super.receiveDamage(damage)
		if(this.health > 0)
			return 'A Saxon has received '+damage+' points of damage'
		return "A Saxon has died in combat"
	}
}

// War
class War {
	constructor(){
		this.vikingArmy = []
		this.saxonArmy = []
	}

	addViking(viking){
		this.vikingArmy.push(viking)
	}

	addSaxon(saxon){
		this.saxonArmy.push(saxon)
	}

	vikingAttack(){
		let random1 = aleatorio(this.saxonArmy.length)
		let random2 = aleatorio(this.vikingArmy.length)
		
		let result = this.saxonArmy[random1].receiveDamage(this.vikingArmy[random2].strength)
		if(result == "A Saxon has died in combat")
			this.saxonArmy.splice(random1, 1)
		return result
	}

	saxonAttack() {
		let random1 = aleatorio(this.saxonArmy.length)
		let random2 = aleatorio(this.vikingArmy.length)
		
		let result = this.vikingArmy[random2].receiveDamage(this.saxonArmy[random1].strength)
		if(result == this.vikingArmy[random2].name + " has died in act of combat")
			this.vikingArmy.splice(random1, 1)
		return result
	}

	showStatus() {
		if(this.saxonArmy.length == 0)
			return "Vikings have won the war of the century!"
		if(this.vikingArmy.length == 0)
			return "Saxons have fought for their lives and survived another day..."
		if(this.vikingArmy.length != 0 && this.saxonArmy.length != 0)
			return "Vikings and Saxons are still in the thick of battle."
	}
}


function aleatorio(num) {
	return Math.floor(Math.random() * num)
}