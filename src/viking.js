// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

  attack() {
      return this.strength
  }

  receiveDamage(damage) {
      this.health -= damage
  }
}
// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
    super(health,strength)
    this.name = name; 
}
    receiveDamage(damage) {
        this.health -= damage
            if (this.health > 0) {
                return `${this.name} has received ${damage} points of damage`
            }
            else {
                return `${this.name} has died in act of combat`
            }
    }
    
    battleCry(){
            return "Odin Owns You All!"

        }

}


// Saxon
class Saxon extends Soldier{
    receiveDamage(damage) {
        this.health -= damage
            if (this.health > 0) {
                return `A Saxon has received ${damage} points of damage`
            }
            else {
                return "A Saxon has died in combat"
            }
    }  
}

let viking1 = new Viking
let viking2 = new Viking
let viking3 = new Viking
let viking4 = new Viking
let viking5 = new Viking
let viking6 = new Viking

let saxon1 = new Saxon

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }

    vikingAttack() {
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        let saxonSoldier = this.saxonArmy[randomSaxon]
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length)
        let vikingSoldier = this.vikingArmy[randomViking]


        console.log(randomViking)
        console.log(randomSaxon)
        let infligeDamage = saxonSoldier.receiveDamage(vikingSoldier.attack())
        if (saxonSoldier.health <= 0) {
            this.saxonArmy.splice(saxonSoldier,1)
        }
        return infligeDamage

    }
    saxonAttack() {
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        let saxonSoldier = this.saxonArmy[randomSaxon]
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length)
        let vikingSoldier = this.vikingArmy[randomViking]

        let infligeDamage = vikingSoldier.receiveDamage(saxonSoldier.attack())
        if (vikingSoldier.health <= 0) {
            this.vikingArmy.splice(vikingSoldier,1)
        }
        return infligeDamage
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        }
        else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        }
        else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}

let war1 = new War

war1.addViking(viking1)
war1.addViking(viking2)
war1.addViking(viking3)
war1.addSaxon(saxon)
console.log(war1.vikingArmy)