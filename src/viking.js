// Soldier
class Soldier {
    constructor(health, strength) {
        this.health= health;
        this.strength =strength;
    }
    attack() {
    return  this.strength;
    }
    receiveDamage(theDamage){
        this.health -= theDamage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }
    attack() {
    return  this.strength;
    }
    receiveDamage(theDamage){
        this.health -= theDamage;
        if (this.health> 0) return `${this.name} has received ${theDamage} points of damage`
        
        else return `${this.name} has died in act of combat`
        
    } battleCry(){
        return "Odin Owns You All!"
    }
}



// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }
    receiveDamage(theDamage){
        this.health -= theDamage;
        if (this.health> 0) return `A Saxon has received ${theDamage} points of damage`
        
        else return `A Saxon has died in combat`
        
} }

class War {
    vikingArmy = []
    saxonArmy = []

    addViking(viking){
    this.vikingArmy.push(viking)
    }
    addSaxon(saxon){
    this.saxonArmy.push(saxon)
    }
    vikingAttack(){
        let viking = Math.floor(Math.random()* this.vikingArmy.length)
        let saxon = Math.floor(Math.random()* this.saxonArmy.length)

        let valor = this.saxonArmy[saxon].receiveDamage(this.vikingArmy[viking].strength)
        
        if (!(this.saxonArmy[saxon].health>0)){
            return this.saxonArmy.splice(saxon,1)
        } else return valor
    }
    saxonAttack(){}
    showStatus(){}
}


/* 
 *vikA Saxon (chosen at random) has their receiveDamage() method called with the damage equal to the strength of a Viking (also chosen at random).
// This should only perform a single attack and the Saxon doesn't get to attack back.

should be a function
should receive 0 arguments
should make a Saxon receiveDamage() equal to the strength of a Viking
should remove dead Saxons from the army
should return result of calling receiveDamage() of a Saxon with the strength of a Viking */