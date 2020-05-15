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
        this.health = (this.health - damage)
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health, strength);
        this.name = name
    }
    receiveDamage(damage) {
        this.health = (this.health - damage)
        if (this.health > 0) return (`${this.name} has received ${damage} points of damage`)
        else return (`${this.name} has died in act of combat`)
    }
    battleCry() {
        return ('Odin Owns You All!')
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage) {
        this.health = (this.health - damage)
        if (this.health > 0) return (`A Saxon has received ${damage} points of damage`)
        else return (`A Saxon has died in combat`)
    }
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];
    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }
    vikingAttack(){
        
        const saxonRandom = Math.floor(Math.random() * this.saxonArmy.length)
        const vikingRandom = Math.floor(Math.random() * this.vikingArmy.length)
        
        const resultCombat = this.saxonArmy[saxonRandom].receiveDamage(this.vikingArmy[vikingRandom].strength)
        this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0)
        return resultCombat        
    }
    saxonAttack(){
        const saxonRandom = Math.floor(Math.random() * this.saxonArmy.length)
        const vikingRandom = Math.floor(Math.random() * this.vikingArmy.length)
        
        const resultCombat = this.vikingArmy[vikingRandom].receiveDamage(this.saxonArmy[saxonRandom].strength)
        this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0)
        return resultCombat  

    }
    //Status
showStatus() {
    if (this.saxonArmy.length === 0) return ('Vikings have won the war of the century!')
    if (this.vikingArmy.length === 0) return ('Saxons have fought for their lives and survived another day...')
    if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) return ('Vikings and Saxons are still in the thick of battle.')
    
    }
}


