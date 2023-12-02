// Soldier
class Soldier {
    constructor(health, strength){
        this.health=health;
        this.strength=strength;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health-= damage;
        console.log(this.health);
    }
}

// Viking
class Viking extends Soldier {
    constructor(name,health,strength){
        super(health,strength);
        this.name=name;
    }

    receiveDamage(damage){
        this.health-= damage;
        if (this.health > 0) {
            return this.name + " has received " + damage + " points of damage";
        }
        else {
            return this.name + " has died in act of combat";
        }
    }

    battleCry(){
        return "Odin Owns You All!"
    }
}



// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health,strength);
    }

    receiveDamage(damage){
        this.health-= damage;
        if (this.health > 0) {
            return "A Saxon has received " + damage + " points of damage";
        }
        else {
            return "A Saxon has died in combat";
        }
    }
}

// War
class War {
    constructor(){   
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking){
        this.vikingArmy.push(Viking)
    }

    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }
// checked in class
    vikingAttack(){
        const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
		const vikingAttacker = this.vikingArmy[vikingIndex]
		const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
		const saxonDefender = this.saxonArmy[saxonIndex]
		const result = saxonDefender.receiveDamage(vikingAttacker.attack())
		if (saxonDefender.health <= 0) {
			this.saxonArmy.splice(saxonIndex, 1)
		}
		return result
    }

    attack(attackArmy, defendingArmy){
        const attackerIndex = Math.floor(Math.random() * attackArmy.length)
		const randomAttacker = attackArmy[attackerIndex]
		const defenderIndex = Math.floor(Math.random() * defendingArmy.length)
		const randomDefender = defendingArmy[defenderIndex]
		const result = randomDefender.receiveDamage(randomAttacker.attack())
		if (randomDefender.health <= 0) {
			defendingArmy.splice(defenderIndex, 1)
        }

        return result
    }

    saxonAttack(){
        return this.attack(this.saxonArmy, this.vikingArmy)
    }

    showStatus() {
		if (this.saxonArmy.length === 0) {
			return 'Vikings have won the war of the century!'
		} else if (!this.vikingArmy.length) {
			return 'Saxons have fought for their lives and survived another day...'
		} else {
			return 'Vikings and Saxons are still in the thick of battle.'
		}
	}
}
