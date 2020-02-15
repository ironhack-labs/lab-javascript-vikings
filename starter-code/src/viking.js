// Soldier
class Soldier {
    // setting constructor
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }

    // attack method
    attack() {
        return this.strength
    }

    // damage method
    receiveDamage(theDamage) {
        this.health = this.health - theDamage
    }
}

// Viking should extend Soldier
class Viking extends Soldier {
    //setting constructor for Viking

    constructor(name, health, strength) {
        super(health,strength);
        this.name = name
    }

    // damage method for Viking
    receiveDamage(theDamage) {
        this.health = this.health - theDamage
        if (this.health > 0) {
            return `${this.name} has received ${theDamage} points of damage`
        }
        else {
            return `${this.name} has died in act of combat`
        }
    }

    // attack method for Viking
    attack() {
        return this.strength
    }

    // battle cry method for Viking
    battleCry() {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    // no constructor needed

    // attack method for Saxon
    attack() {
        return this.strength
    }
    
    // damage method for Saxon
    receiveDamage(theDamage) {
    this.health = this.health - theDamage
    if (this.health > 0) {
        return `A Saxon has received ${theDamage} points of damage`
    }
    else {
        return `A Saxon has died in combat`
    }
    }    
}

// War
class War {

    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    // add Viking method
    addViking(Viking) {
        // working on array, not variable
        this.vikingArmy.push(Viking)
    }

    // add Saxon method
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }

    // Viking attack method
    vikingAttack() {
        let indexRandomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        let indexRandomViking = Math.floor(Math.random() * this.vikingArmy.length)

        let indexOfPower = this.saxonArmy[indexRandomSaxon].receiveDamage(this.vikingArmy[indexRandomViking].attack()) 

        if (this.saxonArmy[indexRandomSaxon].health <= 0) {
            this.saxonArmy.splice(indexRandomSaxon,1)
        }

        return indexOfPower
    }

    // Saxon attack method
    saxonAttack() {
        this.genericAttack(this.saxonArmy, this.vikingArmy)

        // let indexRandomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        // let indexRandomViking = Math.floor(Math.random() * this.vikingArmy.length)

        // let indexOfPower = this.vikingArmy[indexRandomViking].receiveDamage(this.saxonArmy[indexRandomSaxon].attack()) 

        // if (this.vikingArmy[indexRandomViking].health <= 0) {
        //     this.vikingArmy.splice(indexRandomViking,1)
        // }

        // return indexOfPower
    }

    // general attack method
    genericAttack(attackingArmy, defendingArmy) {
       
        let indexRandomAttacker = Math.floor(Math.random() * attackingArmy.length)
        let indexRandomDefender = Math.floor(Math.random() * defendingArmy.length)

        let indexOfPower = defendingArmy[indexRandomDefender].receiveDamage(attackingArmy[indexRandomAttacker].attack()) 

        if (defendingArmy[indexRandomDefender].health <= 0) {
            defendingArmy.splice(indexRandomDefender,1)
        }    
        return indexOfPower    

    }

    // show status method
    showStatus() {

        if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
            return `Vikings and Saxons are still in the thick of battle.`
        }
        else if (this.saxonArmy.length <= 0) {
            return `Vikings have won the war of the century!`
        }
        else if (this.vikingArmy.length <= 0) {
            return `Saxons have fought for their lives and survived another day...`
        }
    }

}

