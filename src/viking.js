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
        this.damage = damage
        this.health -= this.damage
    } 
}

// Viking
class Viking extends Soldier {
    constructor(name,health,strength) {
        super(health,strength)
        this.name = name
    }
    receiveDamage(damage) {
        this.damage = damage
        this.health -= this.damage
        if(this.health > 0) {
            return `${this.name} has received ${this.damage} points of damage`
        } else if (this.health <= 0) {
            return `${this.name} has died in act of combat`
        }
        
    }
    battleCry() {
        return `Odin Owns You All!`
    }
    attack() {
        return this.strength
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health,strength) {
        super(health,strength)
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.damage = damage
        this.health -= this.damage
        if(this.health > 0) {
            return `A Saxon has received ${this.damage} points of damage`
        } else if (this.health <= 0) {
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

    addViking(newViking) {
        (this.vikingArmy).push(newViking)
    }

    addSaxon(newSaxon) {
        (this.saxonArmy).push(newSaxon)
    }

    
    vikingAttack() {
      
    }

    saxonAttack() {

    }

    showStatus() {

    }
}
