// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }

    attack() {
        return this.strength
    }
    receiveDamage(theDamage) {
        this.health -= theDamage
    }
}

// Viking

class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }

    receiveDamage(theDamage) {
        this.health -= theDamage
        if (this.health > 0) {
            return (`${this.name} has received ${theDamage} points of damage`)
        } else {
            return (`${this.name} has died in act of combat`)
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }

}

// Saxon
class Saxon extends Soldier {

    receiveDamage(theDamage) {
        this.health -= theDamage
        if (this.health > 0) {
            return (`A Saxon has received ${theDamage} points of damage`)
        } else {
            return (`A Saxon has died in combat`)
        }
    }
}

// War
class War {

    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }

    vikingAttack() {
        let vikingRandom = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let saxonRandom = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

        let lifeResult = saxonRandom.receiveDamage(vikingRandom.strength)
        if (saxonRandom.health <= 0) {
            this.saxonArmy.splice(saxonRandom, 1)
        }
        return lifeResult
    }


    saxonAttack() {
        let vikingRandom = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let saxonRandom = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

        let lifeResult = vikingRandom.receiveDamage(saxonRandom.strength)
        if (vikingRandom.health <= 0) {
            this.vikingArmy.splice(vikingRandom, 1)
        }
        return lifeResult
    }

    //  Saxon receiveDamage() equal to the strength of a Viking












    /* 
    
    addSaxon()
     vikingAttack()
     saxonAttack()
     showStatus()*/


}



