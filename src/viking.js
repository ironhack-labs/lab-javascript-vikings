// Soldier
class Soldier {
    constructor (health, strenght) {
        this.health = 300
        this.strength = 150
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage){
        this.health -= damage
    }
} 

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health, strength)
        this.name = name
    }
    receiveDamage(damage) {
        this.health -= damage 
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return "Odin Owns You All!"
    }
} 

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
        this.health = health
        this.strength = strength
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0 ) {
            return `A Saxon has received ${damage} points of damage`
        } else {
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
    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }
    vikingAttack() {
        const oneSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        const oneViking = Math.floor(Math.random() * this.vikingArmy.length)
        const damage = this.saxonArmy[oneSaxon].receiveDamage(
            this.vikingArmy[oneViking].strength)

            if (this.saxonArmy[oneSaxon].health <= 0) {
                this.saxonArmy.splice(oneSaxon, 1)
              }
        return damage
    }

    saxonAttack(){
        const oneSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        const oneViking = Math.floor(Math.random() * this.vikingArmy.length)
        const damage = this.vikingArmy[oneViking].receiveDamage(
            this.saxonArmy[oneSaxon].strength)

            if (this.vikingArmy[oneViking].health <= 0) {
                this.vikingArmy.splice(oneViking, 1)
              }
        return damage
    }

    showStatus(){
        if (this.saxonArmy.length === 0)
        return "Vikings have won the war of the century!"
         if (this.vikingArmy.length === 0)
        return "Saxons have fought for their lives and survived another day..."
         if  (this.vikingArmy.length > 1 && this.saxonArmy.length > 1)
        return "Vikings and Saxons are still in the thick of battle."
    } 
}


