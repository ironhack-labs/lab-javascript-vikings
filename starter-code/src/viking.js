// Soldier -------------------------------
class Soldier {
    constructor (health, strength) {
        this.health = health
        this.strength = strength
    }

    attack() {
        return this.strength
    }
    receiveDamage(theDamage) {
        this.health -=  theDamage
    }
}


// Viking ---------------------------------
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }

    attack() {
        return this.strength
    }
    receiveDamage(theDamage){
        this.health -= theDamage
        if(this.health <= 0) {
            return (`${this.name} has died in act of combat`)
        } else {
            return (`${this.name} has received ${theDamage} points of damage`)
        }
    }
    battleCry() {
        return (`Odin Owns You All!`)
    }
}

viking = new Viking("Harald", 300, 150)


// Saxon -------------------------------------
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }

    attack() {
        return this.strength
    }
    receiveDamage(theDamage) {
        this.health -= theDamage
        if(this.health > 0) {
            return (`A Saxon has received ${theDamage} points of damage`)
        } else {
            return (`A Saxon has died in combat`)
        }
    }
}

saxon = new Saxon(60, 25)


// War -----------------------------------
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(Viking) {
        this.vikingArmy = [Viking]
    } 
    addSaxon(Saxon) {
        this.saxonArmy = [Saxon]
    }
    vikingAttack() {

        let randomViking = 0;
        let randomSaxon = 0;

        if(this.vikingArmy.length !== 1) {
            randomViking = Math.floor((Math.random()*this.vikingArmy.length)+1);
        }
        if(this.saxonArmy.length !== 1) {
            randomSaxon = Math.floor((Math.random()*this.saxonArmy.length)+1);
        }

        let attackResult = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength)
        if(this.saxonArmy[randomSaxon].health <= 0) {
            this.saxonArmy.splice(this.saxonArmy[randomSaxon],1)
        }
        return attackResult
    }
    saxonAttack() {

        let randomViking = 0;
        let randomSaxon = 0;

        if(this.vikingArmy.length !== 1) {
            randomViking = Math.floor((Math.random()*this.vikingArmy.length)+1);
        }
        if(this.saxonArmy.length !== 1) {
            randomSaxon = Math.floor((Math.random()*this.saxonArmy.length)+1);
        }

        let call = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength)
        if(this.vikingArmy[randomViking].health <= 0) {
            this.vikingArmy.splice(this.vikingArmy[randomViking],1)
        }
        return call
    }
    showStatus() {
        if(this.saxonArmy.length === 0) {
            return (`Vikings have won the war of the century!`)
        } else if (this.vikingArmy.length === 0) {
            return (`Saxons have fought for their lives and survive another day...`)
        } else {
            return (`Vikings and Saxons are still in the thick of battle.`)
        }
    }
}
