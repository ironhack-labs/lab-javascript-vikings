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
        super.receiveDamage(theDamage) 
        if (this.health <= 0) {
            return `${this.name} has died in act of combat`
        } else {
            return `${this.name} has received ${theDamage} points of damage`
        }
    }    
    battleCry() {
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {
    attack() {
        super.attack()
        return this.strength
    }
    receiveDamage(theDamage) {
        this.health -= theDamage
        if (this.health <= 0) {
            return 'A Saxon has died in combat'
        } else {
            return `A Saxon has received ${theDamage} points of damage`
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

    }

    addSaxon(saxon) {

        this.saxonArmy.push(saxon)
    }

    vikingAttack() {

        // 

        // let randomIndex = Math.floor((Math.random() * this.saxonArmy.length)
        // let randomSaxon = this.saxonArmy[randomIndex]

        // let vikingDamage = this.vikingArmy[0].strength
        
        // randomSaxon.receiveDamage(vikingDamage)

        // if (randomSaxon.health <= 0) {

        //  this.saxonArmy.splice(randomIndex, 1)

        //  return 'A Saxon has died in combat'
        
    }

    saxonAttack() {
        
   // let randomNumber = parseInt(Math.random() * 10)
    }


    showStatus() {

    }
}


