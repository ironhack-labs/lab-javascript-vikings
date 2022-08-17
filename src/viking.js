// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health = this.health - damage
    }

}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
    super(health, strength)
    this.name = name
}


    receiveDamage(damage) {
        this.health = this.health - damage
        if (this.health <= 0) {
            return this.name + ' has died in act of combat'
        }
        else {
            return this.name + ' has received ' + damage + ' points of damage'
        }
    }

    battleCry() {
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
    super(health, strength) 
}
    receiveDamage(damage) {
        this.health = this.health - damage
        if (this.health <= 0) {
            return 'A Saxon has died in combat'
        }
        else {
            return 'A Saxon has received ' + damage + ' points of damage'
        }
    
    
}
}

// War
class War {
    vikingArmy = []
    saxonArmy = []

    addViking(viking) {
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }

    vikingAttack() {
        let sizeOfSaxonArmy = this.saxonArmy.length
        let sizeOfVikingArmy = this.vikingArmy.length

        let chosenSaxon = Math.floor(Math.random() * sizeOfSaxonArmy)
        console.log(chosenSaxon)
        let chosenViking = Math.floor(Math.random() * sizeOfVikingArmy)
        console.log(chosenViking)

        let chosenVikingStrength = this.vikingArmy[chosenViking].strength
        console.log(chosenVikingStrength)
        this.saxonArmy[chosenSaxon].receiveDamage(chosenVikingStrength)
        console.log(this.saxonArmy[chosenSaxon])
           
        if (this.saxonArmy[chosenSaxon].health <= 0) {
            this.saxonArmy.splice(chosenSaxon,1)
        }
       
    }

    saxonAttack() {
        let sizeOfSaxonArmy = this.saxonArmy.length
        let sizeOfVikingArmy = this.vikingArmy.length

        let chosenSaxon = Math.floor(Math.random() * sizeOfSaxonArmy)
        console.log(chosenSaxon)
        let chosenViking = Math.floor(Math.random() * sizeOfVikingArmy)
        console.log(chosenViking)

        let chosenSaxonStrength = this.saxonArmy[chosenSaxon].strength
        console.log(chosenSaxonStrength)
        this.vikingArmy[chosenViking].receiveDamage(chosenSaxonStrength)
        console.log(this.vikingArmy[chosenViking])

        if (this.vikingArmy[chosenViking].health <= 0) {
            this.vikingArmy.splice(chosenViking,1)
        }

    }

    showStatus() {

        if (this.vikingArmy.length === 0){
            return 'Saxons have fought for their lives and survived another day...'
        }

        else if (this.saxonArmy.length === 0){
             return 'Vikings have won the war of the century!'
        }

        else {
            return 'Vikings and Saxons are still in the thick of battle.'
       }
      
    }


}

const soldier = new Soldier(100, 50)
const viking1 = new Viking('bob', 100, 50)
const viking2 = new Viking('Sharon', 100, 60)
const saxon1 = new Saxon(100, 70)
const saxon2 = new Saxon(80, 50)


//console.log(soldier)
//console.log(viking1)
//console.log(viking2)
//console.log(saxon1)
//console.log(saxon2)




const newWar = new War()
//console.log(newWar)
newWar.addViking(viking1)
newWar.addViking(viking2)
newWar.addSaxon(saxon1)
newWar.addSaxon(saxon2)

newWar.vikingAttack()

console.log(newWar.vikingArmy)
console.log(newWar.saxonArmy)

showStatus()
