// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health = this.health - damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage){
       this.health = this.health - damage;
        if(this.health > 0){return `${this.name} has received ${damage} points of damage`} else {return `${this.name} has died in act of combat`}
    }
    battleCry(){
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health = this.health - damage;
        if(this.health > 0){return `A Saxon has received ${damage} points of damage`} else {return `A Saxon has died in combat`}
    }
}
// let pepe = new Saxon(100, 200, 100)

// console.log(pepe)

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
    let saxonIndex = Math.floor(Math.random() * (this.saxonArmy.length))
    let vikingIndex = Math.floor(Math.random() * (this.vikingArmy.length))
    let saxon = this.saxonArmy[saxonIndex]
    let viking = this.vikingArmy[vikingIndex]
    // console.log(saxonIndex)
    // console.log(vikingIndex)
    // console.log(saxon)
    // console.log(viking)
    let attack = saxon.receiveDamage(viking.strength);
    if(saxon.health<=0) {this.saxonArmy.splice(saxon)}
    return attack
}
saxonAttack(){
    let saxonIndex = Math.floor(Math.random() * (this.saxonArmy.length))
    let vikingIndex = Math.floor(Math.random() * (this.vikingArmy.length))
    let saxon = this.saxonArmy[saxonIndex]
    let viking = this.vikingArmy[vikingIndex]
    let attack = viking.receiveDamage(saxon.strength);
    if(viking.health<=0) {this.vikingArmy.splice(viking)}
    return attack
}
showStatus(){
    if (this.saxonArmy.length === 0) {
        return `Vikings have won the war of the century!`
    } else if (this.vikingArmy.length === 0) {
        return `Saxons have fought for their lives and survived another day...`
    } else {
        return `Vikings and Saxons are still in the thick of battle.`
    }
}
}
