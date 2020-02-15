// Soldier
class Soldier {

    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }

    attack() {
        return (this.strength);
    }

    receiveDamage(theDamage) {
        this.health -= theDamage;
        return
    }
}

// Viking
class Viking extends Soldier {

    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }

    receiveDamage(theDamage) {
        this.health -= theDamage;

        if (this.health <= 0) {
            return (`${this.name} has died in act of combat`)
        } else {
            return (`${this.name} has received ${theDamage} points of damage`)
        }
    }

    attack() {
        return (this.strength);
    }

    battleCry() {
        return "Odin Owns You All!";
    }

}

// let viking1 = new Viking("Harold", 200, 65 , "Sword" )
// let viking2 = new Viking("Ragnar", 400, 65 , "Knife" )

// Saxon
class Saxon extends Soldier {

    constructor(health, strength) {
        super(health, strength)
    }
    attack() {
        return (this.strength);
    }

    receiveDamage(theDamage) {
        this.health -= theDamage;

        if (this.health <= 0) {
            return "A Saxon has died in combat"
        } else {
            return (`A Saxon has received ${theDamage} points of damage`)
        }

    }


}

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(viking) {
        this.vikingArmy.push(viking)
        return
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
        return
    }

    vikingAttack() {
        let randomVikingPos = Math.floor(Math.random() * this.vikingArmy.length)
        let randomViking = this.vikingArmy[randomVikingPos]
        let randomSaxonPos = Math.floor(Math.random() * this.saxonArmy.length)
        let randomSaxon = this.saxonArmy[randomSaxonPos]
        let result = randomSaxon.receiveDamage(randomViking.strength)
        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxonPos, 1)
        }
        return result
    }

    saxonAttack() {
        let randomSaxonPos = Math.floor(Math.random() * this.saxonArmy.length)
        let randomSaxon = this.saxonArmy[randomSaxonPos]
        let randomVikingPos = Math.floor(Math.random() * this.vikingArmy.length)
        let randomViking = this.vikingArmy[randomVikingPos]
        let result = randomViking.receiveDamage(randomSaxon.strength)
        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomVikingPos, 1)
        }
        return result
    }

    showStatus() {
        if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) {
            return "Vikings and Saxons are still in the thick of battle."
        } else if (this.saxonArmy.length <= 0) {
            return "Vikings have won the war of the century!"
        } else (this.vikingArmy.length <= 0)
            return "Saxons have fought for their lives and survived another day..."
        
    }

}
