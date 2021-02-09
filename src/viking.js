// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack(){return this.strength}
    receiveDamage(damage){
        this.health-=damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super (health, strength);
        this.name= name;
    }
receiveDamage(damage){
    super.receiveDamage(damage)
    if (this.health>0) {
        return `${this.name} has received ${damage} points of damage`
    } else {return `${this.name} has died in act of combat`}
}
battleCry= () => "Odin Owns You All!"
}


// Saxon
class Saxon extends Soldier {
receiveDamage(damage){
super.receiveDamage(damage)
if (this.health>0) {
    return `A Saxon has received ${damage} points of damage`
} else {return `A Saxon has died in combat`}
}
}

// War
class War {
    constructor(){
        this.vikingArmy= [];
        this.saxonArmy= [];

    }
addViking(viking){
    this.vikingArmy.push(viking)
}
addSaxon(saxon){
    this.saxonArmy.push(saxon)
}

//Shorter version
// attack(typeofAttack){
//     if (typeofAttack==='vikingAttack'){attackerArmy=this.vikingArmy ; victimArmy=this.saxonArmy}
//     else{attackerArmy=this.saxonArmy; victimArmy=this.vikingArmy}
//     let indexAttacker = Math.floor(Math.random() * this.attackerArmy.length)
//     let indexVictim = Math.floor(Math.random() * this.victimArmy.length)

//     let victimToBeHit = this.victimArmy[indexVictim]
//     let attackerToStrike = this.attackerArmy[indexAttacker]
//     if (victimToBeHit.health<=attackerToStrike.strength) {this.victimArmy.splice(indexVictim, 1)}
//     return victimToBeHit.receiveDamage(attackerToStrike.strength)
//     }
// }


vikingAttack(){
    let indexSaxon = Math.floor(Math.random() * this.saxonArmy.length)
    let indexViking = Math.floor(Math.random() * this.vikingArmy.length)
    console.log(indexSaxon+" "+ indexViking)
    let saxonToBeHit = this.saxonArmy[indexSaxon]
    let vikingToStrike = this.vikingArmy[indexViking]
    if (saxonToBeHit.health<=vikingToStrike.strength) {this.saxonArmy.splice(indexSaxon, 1)}
    return saxonToBeHit.receiveDamage(vikingToStrike.strength)
}
saxonAttack(){
    let indexSaxon = Math.floor(Math.random() * this.saxonArmy.length)
    let indexViking = Math.floor(Math.random() * this.vikingArmy.length)
    console.log(indexSaxon+" "+ indexViking)

    let vikingToBeHit = this.vikingArmy[indexViking]
    let saxonToStrike = this.saxonArmy[indexSaxon]

    if (vikingToBeHit.health<=saxonToStrike.strength) {this.vikingArmy.splice(indexViking, 1)}
    return vikingToBeHit.receiveDamage(saxonToStrike.strength)
}


showStatus(){
    if (this.saxonArmy.length===0){ return "Vikings have won the war of the century!"}
    else if (this.vikingArmy.length===0){return "Saxons have fought for their lives and survived another day..."}
    else {return "Vikings and Saxons are still in the thick of battle."}}
}


