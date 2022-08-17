// Soldier
class Soldier {
	constructor(health, strength) {
		(this.health = health), (this.strength = strength);
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
		}
		return `${this.name} has received ${damage} points of damage`;
	}

	battleCry() {
		return 'Odin Owns You All!';
	}
}

// Saxon
class Saxon extends Soldier {
	receiveDamage(damage) {
		this.health -= damage;
		if (this.health <= 0) {
			return `A Saxon has died in combat`;
		} else {
            return `A Saxon has received ${damage} points of damage`;
        }
		
	}
}

// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }

	addViking(viking) {
        this.vikingArmy.push(viking)}

	addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }

	vikingAttack() {
        const randomSaxon = Math.floor(this.saxonArmy.length * Math.random())
        const randomViking = Math.floor(this.vikingArmy.length * Math.random())

        const saxon = this.saxonArmy[randomSaxon]
        const viking = this.vikingArmy[randomViking]

        if(saxon.health-viking.strength<=0){
            this.saxonArmy.splice(randomSaxon,1)
        }
        return saxon.receiveDamage(viking.strength)
        
    }

	saxonAttack() {
        const randomSaxon = Math.floor(this.saxonArmy.length * Math.random())
        const randomViking = Math.floor(this.vikingArmy.length * Math.random())

        const saxon = this.saxonArmy[randomSaxon]
        const viking = this.vikingArmy[randomViking]

        if (viking.health-saxon.strength<=0) {
            this.vikingArmy.splice(randomViking,1)
        }

        return viking.receiveDamage(saxon.strength)
    }

	showStatus() {
        const saxons = this.saxonArmy.length
        const vikings = this.vikingArmy.length

        if (saxons === 0) {
            return 'Vikings have won the war of the century!'
        } else if (vikings === 0){
            return 'Saxons have fought for their lives and survived another day...'
        } else {return 'Vikings and Saxons are still in the thick of battle.'}
    }

}
const firstWar = new War

function numberArmy() {
    return Math.floor(50 * Math.random())+1
}

const numberSaxons = numberArmy()
const numberVikings =numberArmy()


for (let i = 0; i < numberVikings; i++) {
    //(name, health, strength)
    const randomHealth = Math.floor(50 * Math.random())+ 50
    const randomStrength = Math.floor(20 * Math.random())+5
    const viking = new Viking(`viking${i}`,randomHealth,randomStrength)
    firstWar.addViking(viking)
}

for (let i = 0; i < numberSaxons; i++) {
    const randomHealth = Math.floor(50 * Math.random())+ 50
    const randomStrength = Math.floor(20 * Math.random())+5
    const saxon = new Saxon(randomHealth,randomStrength)
    firstWar.addSaxon(saxon)
}
console.log(firstWar);
let saxonAttacks = []
let vikingsAttacks =[]

/* for (let i = 0; i < 5; i++) {
    const randomAttacker = Math.floor(2 * Math.random())
    console.log(randomAttacker);
    if(randomAttacker){
        saxonAttacks.push(firstWar.saxonAttack()) 
    }else{
        vikingsAttacks.push(firstWar.vikingAttack())
    }
    
} */



while (firstWar.saxonArmy.length>0 && firstWar.vikingArmy.length>0) {
    const randomAttacker = Math.floor(2 * Math.random())
    if(randomAttacker){
        saxonAttacks.push(firstWar.saxonAttack()) 
    }else{
        vikingsAttacks.push(firstWar.vikingAttack())
    }
} 
console.log(saxonAttacks);
console.log(vikingsAttacks);
console.log(firstWar.showStatus());


console.log(firstWar);



