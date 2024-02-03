// Soldier
class Soldier {
    constructor(health, strength) {
this.health = health
this.strength = strength
}
attack() {
return this.strength
}
receiveDamage(theDamage) {
this.health -= theDamage
}
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength)
        this.name = name;
    }
attack() {
    return this.strength
}
receiveDamage(theDamage) {
    this.health -= theDamage
    if (this.health > 0){
        return `${this.name} has received ${theDamage} points of damage`}
        else {
            return `${this.name} has died in act of combat`
        } 
        

        }
battleCry() {
    return "Odin Owns You All!"
}
    }




// Saxon
class Saxon extends Soldier {
receiveDamage(theDamage){
this.health -= theDamage
if (this.health > 0){
return `A Saxon has received ${theDamage} points of damage`
} else {
    return "A Saxon has died in combat"
}
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
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

        
        const result = randomSaxon.receiveDamage(randomViking.strength);

    
        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1);
        }

    }
    saxonAttack(){}
    showStatus(){}
}
