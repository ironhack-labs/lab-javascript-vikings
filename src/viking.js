// Soldier

class Soldier {

	constructor(health, strength) {
		this.health = health;
		this.strength = strength;
	}

	attack(){
		return this.strength;
	}

	receiveDamage(damage){
		//Shoudn´t return anything (test)
		this.health -= damage
	}

}

// Viking

class Viking extends Soldier {

	constructor(name, health, strength) {

		super()
		this.name = name;
		this.health = health;
		this.strength = strength;
	}

	receiveDamage(damage){

		this.health -= damage
		if (this.health > 0) {
			return `${this.name} has received ${damage} points of damage`
		} else if (this.health <= 0){
			return `${this.name} has died in act of combat`
		}
	}

	battleCry(){

		return "Odin Owns You All!"
	}

}

// Saxon

class Saxon extends Soldier {

	// constructor(health, strength) {

	// 	super()
	// 	this.health = health;
	// 	this.strength = strength;
	// }

	receiveDamage(damage){
		this.health -= damage
		if (this.health > 0) {
			return `A Saxon has received ${damage} points of damage`
		} else if (this.health <= 0){
			return `A Saxon has died in combat`
		}

	}
}

// War
class War {

	constructor(){

		this.vikingArmy = []

		this.saxonArmy = []
	}

	addViking(Viking){

		this.vikingArmy.push(Viking)
	}

	addSaxon(Saxon){

		this.saxonArmy.push(Saxon)
	}

	vikingAttack(){

		let sadSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]

		let furiousViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]

		let battle = sadSaxon.receiveDamage(furiousViking.strength)

		this.saxonArmy = this.saxonArmy.filter(function(saxon){

			return saxon.health > 0 
		})

		return battle

      
	}

	saxonAttack(){

		let sadViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]

		let furiousSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]

		let battle = sadViking.receiveDamage(furiousSaxon.strength)

		this.vikingArmy = this.vikingArmy.filter(function(viking){

			return viking.health > 0 
		})

		return battle


	}

	showStatus(){

		if (this.vikingArmy.length === 0){

			return ("Saxons have fought for their lives and survived another day...")

		} else if (this.saxonArmy.length === 0){

			return ("Vikings have won the war of the century!")

		} else {

			return ("Vikings and Saxons are still in the thick of battle.")

		}


	}


}
