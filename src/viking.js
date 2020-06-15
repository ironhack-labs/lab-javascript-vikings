// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor (name, health, strength) {
        super(health, strength)
        this.name = name;
    }
    
    receiveDamage(damage){
        this.health -= damage;
        return this.health > 0? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`
    }

    battleCry(){
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier{
    
    // not necessaary to include constructor method since this class will inherit perfectly from the parents class, both, the health and the strength

    receiveDamage(damage) {
        this.health -= damage; 
        return this.health > 0? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(viking){
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }

    vikingAttack(){
        let randomIndexSaxon = Math.floor(Math.random()*this.saxonArmy.length) 
        let randomIndexViking = Math.floor(Math.random()*this.vikingArmy.length)
        let saxonDamage = this.saxonArmy[randomIndexSaxon].receiveDamage(this.vikingArmy[randomIndexViking].strength)
        if (this.saxonArmy[randomIndexSaxon].health <= 0) this.saxonArmy.splice(randomIndexSaxon,1)
        return saxonDamage
    }

    saxonAttack(){
        let randomIndexSaxon = Math.floor(Math.random()*this.saxonArmy.length) 
        let randomIndexViking = Math.floor(Math.random()*this.vikingArmy.length)
        let vikingDamage = this.vikingArmy[randomIndexViking].receiveDamage(this.saxonArmy[randomIndexSaxon].strength)
        if (this.vikingArmy[randomIndexViking].health <= 0) this.vikingArmy.splice(randomIndexViking,1)
        return vikingDamage
    }

    showStatus(){
        if (this.saxonArmy.length === 0) return `Vikings have won the war of the century!`
        if (this.vikingArmy.length === 0) return `Saxons have fought for their lives and survived another day...`
        if (this.vikingArmy.length > 0  && this.saxonArmy.length > 0) return `Vikings and Saxons are still in the thick of battle.`
    }
}
