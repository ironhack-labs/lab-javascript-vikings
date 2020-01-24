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
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        }
        else {
            return `${this.name} has died in act of combat`
        }       
    }
    battleCry(){
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage) {
        this.health = this.health - damage
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        }
        else {
            return 'A Saxon has died in combat'
        }       
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(Viking){
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }
    vikingAttack(){
        const saxonSoldierSelector = Math.floor(Math.random()*this.saxonArmy.length)
        const saxonSoldier = this.saxonArmy[saxonSoldierSelector]
        const vikingSoldierSelector = Math.floor(Math.random()*this.vikingArmy.length)
        const vikingSoldier = this.vikingArmy[vikingSoldierSelector]
        const result = saxonSoldier.receiveDamage(vikingSoldier.strength)
        if (saxonSoldier.health < 1) {
            this.saxonArmy.splice(saxonSoldierSelector, 1)
        }
        return result
    }

    saxonAttack(){
        const saxonSoldierSelector = Math.floor(Math.random()*this.saxonArmy.length)
        const saxonSoldier = this.saxonArmy[saxonSoldierSelector]
        const vikingSoldierSelector = Math.floor(Math.random()*this.vikingArmy.length)
        const vikingSoldier = this.vikingArmy[vikingSoldierSelector]
        const result = vikingSoldier.receiveDamage(saxonSoldier.strength)
        if (vikingSoldier.health < 1) {
            this.vikingArmy.splice(vikingSoldierSelector, 1)
        }
        return result
    }
    showStatus(){

    }
}
