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
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health,strength) 
        this.name = name
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        //this.health -= damage
        const newHealth = this.health - damage 
        this.health = newHealth
        if (newHealth > 0) {
          return `${this.name} has received ${damage} points of damage`
        } else {
          return `${this.name} has died in act of combat`
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
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        const newHealth = this.health - damage
        this.health = newHealth
        if (newHealth > 0) {
            return `A Saxon has received ${damage} points of damage`
        }  else {
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
    addViking(viking) {
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    vikingAttack(){
      let randomSaxon = Math.floor(Math.random()* this.vikingArmy.length)
      let randomViking = Math.floor(Math.random()* this.saxonArmy.length)
      let currSaxon = this.saxonArmy[randomSaxon]
      let currViking = this.vikingArmy[randomViking]
      let hitDamage = currSaxon.receiveDamage(currViking.strength)
      if (currSaxon.health <= 0) {
          this.saxonArmy.splice(randomSaxon, 1)
      } 
      return hitDamage
    }
    saxonAttack() {
        let randomSaxon = Math.floor(Math.random()* this.vikingArmy.length)
        let randomViking = Math.floor(Math.random()* this.saxonArmy.length)
        let currSaxon = this.saxonArmy[randomSaxon]
        let currViking = this.vikingArmy[randomViking]
        let hitDamage = currViking.receiveDamage(currSaxon.strength)
        if (currViking.health <= 0) {
            this.vikingArmy.splice(randomViking, 1)
        }  
        return hitDamage
    }
}
