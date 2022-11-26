// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(name, health, strength)
        this.name = name;
        this.health = health;
        this.strength = strength
    }
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0) return `${this.name} has received ${damage} points of damage`
        else return `${this.name} has died in act of combat`
    }
    battleCry(){
        return `Odin Owns You All!`

    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0) return `A Saxon has received ${damage} points of damage`
        else return `A Saxon has died in combat`
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(vikingObject){
        this.vikingArmy.push(vikingObject)
    }
    addSaxon(saxonObject){
        this.saxonArmy.push(saxonObject)
    }
    vikingAttack(){
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        const saxonDamage = randomSaxon.receiveDamage(randomViking.strength)
        if (randomSaxon.health <= 0) this.saxonArmy.splice(randomSaxon,1)
        return saxonDamage

    }
    saxonAttack(){
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        const vikingDamage = randomViking.receiveDamage(randomSaxon.strength)
        if (randomViking.health <= 0) this.vikingArmy.splice(randomViking, 1)
        return vikingDamage
    }
    showStatus(){
        if (!this.saxonArmy.length) return `Vikings have won the war of the century!`
        else if (!this.vikingArmy.length) return `Saxons have fought for their lives and survived another day...`
        else if (this.vikingArmy.length && this.saxonArmy.length) return `Vikings and Saxons are still in the thick of battle.`

    }

}
